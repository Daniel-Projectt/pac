/* Clicks through the real page in a simulated browser (jsdom).
   Usage: node test-dom.js <path-to-node_modules-containing-jsdom>             */
const path = require('path');
const fs = require('fs');
const NM = process.argv[2];
const { JSDOM, VirtualConsole } = require(path.join(NM, 'jsdom'));
const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

let fails = 0, checks = 0; const errors = [];
function ok(c, label, d) { checks++; if (!c) { fails++; console.log('  FAIL  ' + label + (d !== undefined ? '  -> ' + d : '')); } }
function head(t) { console.log('\n== ' + t + ' =='); }

const vc = new VirtualConsole();
vc.on('jsdomError', e => errors.push(e.message + (e.detail ? ' | ' + e.detail : '')));
vc.on('error', e => errors.push(String(e)));
const dom = new JSDOM(html, { runScripts: 'dangerously', pretendToBeVisual: true, url: 'https://example.test/', virtualConsole: vc,
  beforeParse(w) {
    w.scrollTo = () => {}; w.print = () => { w.__printed = (w.__printed || 0) + 1; };
    w.Element.prototype.scrollIntoView = function () { w.__scrolledTo = this.id; };
    w.addEventListener('error', e => errors.push('window.onerror: ' + e.message));
  } });
const w = dom.window, d = w.document;
const $ = s => d.querySelector(s), $$ = s => Array.from(d.querySelectorAll(s));
const visible = el => { for (let n = el; n && n !== d; n = n.parentNode) if (n.hidden) return false; return true; };
const click = el => el.dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
const key = k => d.dispatchEvent(new w.KeyboardEvent('keydown', { key: k, bubbles: true }));
const topic = t => click($('.topic-btn[data-topic="' + t + '"]'));
const mode = (t, m) => click($('.seg[data-modes="' + t + '"] button[data-mode="' + m + '"]'));
const panel = p => $('[data-panel="' + p + '"]');
const tps = ['c1', 'c2', 'c3', 'c4', 'c5'];

function answerQuiz(root, label) {
  let guard = 0;
  while (guard++ < 80) {
    const opts = Array.from(root.querySelectorAll('.qbody .opt'));
    if (!opts.length) break;
    click(opts[Math.floor(Math.random() * opts.length)]);
    ok(root.querySelectorAll('.qbody .opt.correct').length === 1, label + ': the right answer is revealed');
    ok(root.querySelector('.qbody .feedback').textContent.length > 10, label + ': feedback explains');
    const nb = root.querySelector('.qbody .next'); ok(nb && !nb.hidden, label + ': next appears');
    click(nb);
  }
  return root.querySelector('.qbody .result');
}

head('landing');
ok(errors.length === 0, 'no errors while loading', errors.join(' || '));
ok(visible($('#topic-guide')) && !visible($('#topic-c1')), 'opens on the Guide');
const items = $$('#guideRoot .gitem');
ok(items.length === 34, 'guide shows all 34 review items', items.length);
ok(/0 of 34/.test($('#gCount').textContent), 'progress starts at 0 of 34', $('#gCount').textContent);
ok($$('#guideRoot .record tbody tr').length === 5, 'quiz record has five rows');
ok($$('#guideRoot [data-missed]').length === 2, 'two quizzes offer "only the misses"');

head('guide checkboxes and jumps');
const cb = $('#guideRoot input[data-g="g1-views"]'); cb.checked = true; cb.dispatchEvent(new w.Event('change', { bubbles: true }));
ok(/1 of 34/.test($('#gCount').textContent), 'checking an item moves the progress', $('#gCount').textContent);
ok(/g1-views":true/.test(w.localStorage.getItem('pac.guide') || ''), 'the check is saved on the device');
click($('#gPrint')); ok(w.__printed === 1, 'print button prints');
click($('#guideRoot .gitem[data-gi="g3-cases"] button[data-go]'));
ok(visible($('#topic-c3')) && visible(panel('c3/notes')) && !!d.getElementById('c3-cases'), 'landmark cases: jumps to the chapter 3 notes');
topic('guide');
click($('#guideRoot .gitem[data-gi="g5-speech"] button[data-go]'));
ok(visible(panel('c5/notes')) && !!d.getElementById('c5-speech'), 'speech: jumps to the chapter 5 notes');
topic('guide');
click($('#guideRoot [data-go="faith/paper"]'));
ok(visible(panel('faith/paper')) && $$('#paperChecks label').length === 9, 'the paper button opens the checklist');

head('every tab and mode');
const modes = {};
$$('.seg[data-modes]').forEach(s => { modes[s.getAttribute('data-modes')] = Array.from(s.querySelectorAll('button[data-mode]')).map(b => b.getAttribute('data-mode')); });
Object.keys(modes).forEach(t => {
  topic(t);
  ok(visible($('#topic-' + t)), 'tab opens: ' + t);
  ok($$('.topic').filter(visible).length === 1, 'only one section visible: ' + t);
  modes[t].forEach(m => {
    mode(t, m);
    ok(visible(panel(t + '/' + m)), 'mode opens: ' + t + '/' + m);
    ok($$('#topic-' + t + ' .panel').filter(visible).length === 1, 'one panel at a time: ' + t + '/' + m);
    ok(panel(t + '/' + m).textContent.trim().length > 20, 'panel has content: ' + t + '/' + m);
  });
});
ok(errors.length === 0, 'no errors after visiting every mode', errors.join(' || '));

head('notes');
tps.forEach(t => { topic(t); mode(t, 'notes'); ok($$('#' + t + 'Notes .note-sec').length >= 5, t + ': note sections rendered'); });
ok($$('#c2Timeline .ev').length >= 12, 'chapter 2 timeline rendered');

head('flashcards');
tps.forEach(t => {
  topic(t); mode(t, 'cards');
  const p = panel(t + '/cards'), c = p.querySelector('.counter');
  ok(/^1 of \d+$/.test(c.textContent), t + ': counter starts at 1', c.textContent);
  click(p.querySelector('.flip')); ok(p.querySelector('.flash').classList.contains('flipped'), t + ': flips');
  click(p.querySelector('.next')); ok(/^2 of /.test(c.textContent) && !p.querySelector('.flash').classList.contains('flipped'), t + ': next card, unflipped');
  key('ArrowLeft'); ok(/^1 of /.test(c.textContent), t + ': arrow key goes back');
  const decks = Array.from(p.querySelectorAll('[data-deck]'));
  ok(decks.length >= 2, t + ': deck switch has at least two decks');
  click(decks[1]); ok(/^1 of \d+$/.test(c.textContent) && decks[1].getAttribute('aria-pressed') === 'true', t + ': second deck loads');
});
topic('c4'); mode('c4', 'cards'); click($('[data-deck="verses"]'));
ok(/of 5$/.test(panel('c4/cards').querySelector('.counter').textContent), 'chapter 4 Scripture deck has five cards', panel('c4/cards').querySelector('.counter').textContent);

head('match');
tps.forEach(t => {
  topic(t); mode(t, 'match');
  const p = panel(t + '/match');
  const L = Array.from(p.querySelectorAll('.L .tile')), R = Array.from(p.querySelectorAll('.R .tile'));
  ok(L.length === 6 && R.length === 6, t + ': six pairs', L.length + '/' + R.length);
  click(L[0]); click(R[R.length - 1]);
  L.forEach(l => { for (const r of R) { if (r.classList.contains('done')) continue; click(l); click(r); if (l.classList.contains('done')) break; } });
  ok(p.querySelectorAll('.tile.done').length === 12, t + ': every pair can be matched', p.querySelectorAll('.tile.done').length);
  ok(p.querySelector('.banner') && p.querySelector('.banner').textContent.length > 10, t + ': round-complete banner with a verdict');
  click(p.querySelector('.toolbar .btn')); ok(p.querySelectorAll('.tile.done').length === 0, t + ': new round resets');
});

head('chapter quizzes');
tps.forEach(t => {
  topic(t); mode(t, 'quiz');
  const root = $('#' + t + 'Quiz');
  ok(root.querySelectorAll('.dots i').length === 10, t + ': ten dots');
  const res = answerQuiz(root, t);
  ok(!!res, t + ': results screen');
  ok(res && res.querySelector('h3') && res.querySelector('h3').textContent.length > 3, t + ': verdict line shown');
  ok(res && /\d+\/10/.test(res.querySelector('.big').textContent), t + ': score shown', res && res.querySelector('.big').textContent);
  const missed = res.querySelector('.missed');
  if (missed) {
    const n = res.querySelectorAll('.misslist > div').length;
    click(missed);
    ok(root.querySelectorAll('.dots i').length === n, t + ': practice the misses asks exactly the missed ones', root.querySelectorAll('.dots i').length + ' vs ' + n);
    answerQuiz(root, t + ' (misses)');
  }
  click(root.querySelector('.again')); ok(root.querySelectorAll('.dots i').length === 10, t + ': new quiz has ten');
});
topic('c1'); mode('c1', 'quiz');
key('1'); ok($$('#c1Quiz .qbody .opt:disabled').length > 0, 'key 1 answers');
key('Enter'); ok(/Question 2/.test($('#c1Quiz .qnum').textContent), 'Enter moves on', $('#c1Quiz .qnum').textContent);

head('practice exam');
topic('exam'); mode('exam', 'mock');
ok(!!$('#mxStart'), 'setup screen shows');
click($('#mxN button[data-n="15"]')); click($('#mxT button[data-t="all"]')); click($('#mxP button[data-p="all"]'));
click($('#mxStart'));
ok($$('#mockExam .dots i').length === 15, 'fifteen-question exam', $$('#mockExam .dots i').length);
const mres = answerQuiz($('#mockExam'), 'exam');
ok(mres && mres.querySelectorAll('.tbl tr').length >= 4, 'results break down by chapter');
click(mres.querySelector('.setupbtn')); ok(!!$('#mxStart'), 'change settings returns to setup');
click($('#mxT button[data-t="real"]')); click($('#mxN button[data-n="50"]')); click($('#mxStart'));
ok($$('#mockExam .dots i').length === 50, 'Canvas-only exam has fifty questions', $$('#mockExam .dots i').length);
ok($$('#mockExam .qtag.real').length === 1, 'real questions carry the Canvas tag');
ok(/"types":"real"/.test(w.localStorage.getItem('pac.mockcfg') || ''), 'exam settings remembered');

head('replaying a Canvas quiz from the Guide');
topic('guide');
click($('#guideRoot [data-real="c2"][data-missed]'));
ok(visible(panel('exam/mock')), 'opens the practice exam');
ok($$('#mockExam .dots i').length === 3, 'only the three missed chapter 2 questions', $$('#mockExam .dots i').length);
ok(/Q6/.test($('#mockExam .qtag.real').textContent), 'starts with Q6', $('#mockExam .qtag.real').textContent);
answerQuiz($('#mockExam'), 'replay');
topic('guide');
click($('#guideRoot [data-real="c5"]:not([data-missed])'));
ok($$('#mockExam .dots i').length === 10 && /Q1$/.test($('#mockExam .qtag.real').textContent.trim()), 'full chapter 5 replay: ten questions, starting at Q1', $('#mockExam .qtag.real').textContent);

head('paper checklist');
topic('faith'); mode('faith', 'paper');
const c0 = $('#paperChecks input'); c0.checked = true; c0.dispatchEvent(new w.Event('change', { bubbles: true }));
ok(c0.parentNode.classList.contains('done') && /"0":true/.test(w.localStorage.getItem('pac.paper') || ''), 'paper check saved');
mode('faith', 'log'); ok($$('#logRoot .logday').length === 9, 'nine class days in the log');
mode('faith', 'faith'); ok($$('#faithRoot .verse').length >= 10 && $$('#faithRoot .rule').length === 4, 'verses and Thomas themes rendered');

head('remembers where you were');
ok(w.localStorage.getItem('pac.topic') === 'faith' && w.localStorage.getItem('pac.mode.faith') === 'faith', 'topic and mode saved');

head('errors');
ok(errors.length === 0, 'no runtime errors anywhere', errors.join(' || '));
console.log('\n' + (fails === 0 ? 'ALL ' + checks + ' DOM CHECKS PASSED' : fails + ' FAILURES out of ' + checks + ' DOM checks'));
w.close();
process.exit(fails ? 1 : 0);
