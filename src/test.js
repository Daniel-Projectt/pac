const fs = require('fs');
const vm = require('vm');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

let fails = 0, checks = 0;
function ok(cond, label, detail) { checks++; if (!cond) { fails++; console.log('  FAIL  ' + label + (detail !== undefined ? '  -> ' + detail : '')); } }
function head(t) { console.log('\n== ' + t + ' =='); }

// ---------- load ----------
const m = html.match(/<script>([\s\S]*?)<\/script>/);
if (!m) { console.log('NO SCRIPT'); process.exit(1); }
const src = m[1];
try { new vm.Script(src); } catch (e) { console.log('JS PARSE ERROR: ' + e.message); process.exit(1); }
const sandbox = { module: { exports: {} }, console };
vm.createContext(sandbox);
vm.runInContext(src, sandbox);
const A = sandbox.module.exports;
console.log('script parsed and loaded, exports: ' + Object.keys(A).length);
const tps = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6'];

// ---------- 1. the course, the record, the log ----------
head('course, quiz record, class log');
ok(/Who governs/.test(A.COURSE.about) && A.COURSE.books.length === 3, 'course description and books');
ok(A.COURSE.grading.some(g => /November 19/.test(g)) && A.COURSE.grading.some(g => /three/.test(g)), 'paper date and PAC events in the grading rules');
ok(A.COURSE.ai.some(a => /Undisclosed/.test(a)) && A.COURSE.ai.some(a => /Quizzes and discussion posts: no/.test(a)), 'AI policy carried over');
ok(A.COURSE.sources.some(s => /Reuters/.test(s)) && A.COURSE.sources.some(s => /aggregators/.test(s)), 'what counts as a source');
const quizTps = tps.filter(tp => tp !== 'c6');   // chapter 6 has no Canvas quiz yet
ok(JSON.stringify(A.QUIZ_RECORD.map(r => r.tp)) === JSON.stringify(quizTps), 'one record per chapter with a Canvas quiz');
ok(JSON.stringify(A.QUIZ_RECORD[1].missed) === '[6,9,10]' && JSON.stringify(A.QUIZ_RECORD[2].missed) === '[1,7]', 'the missed questions from Canvas (ch. 2: 6, 9, 10; ch. 3: 1, 7)');
ok(A.QUIZ_RECORD[0].missed.length === 0 && A.QUIZ_RECORD[3].missed.length === 0 && A.QUIZ_RECORD[4].missed.length === 0, 'chapters 1, 4 and 5 had no misses');
A.QUIZ_RECORD.forEach(r => r.missed.forEach(n => ok(A.QB.some(q => q.tp === r.tp && q.real === n), 'missed question exists in the bank: ' + r.tp + ' Q' + n)));
ok(A.CLASS_LOG.length === 10 && A.CLASS_LOG.every(e => e.d && e.h && e.pts.length >= 2), 'ten class dates, each with points');
ok(A.CLASS_LOG[0].d === 'Thu, Aug 20' && A.CLASS_LOG[A.CLASS_LOG.length - 1].d === 'Tue, Sep 15' === false && A.CLASS_LOG[A.CLASS_LOG.length - 1].d === 'Thu, Sep 24', 'log runs Aug 20 to Sep 24');
ok(/chapter 7/.test(A.COURSE.next) && /October 1/.test(A.COURSE.next), 'coming up: the chapter 7 quiz');
ok(/Liberty, Equality, Democracy, Civic Duty, Individual Responsibility/.test(A.COURSE.examStyle), 'the exam style note quotes the five');
ok(A.PAPER.checks.length === 9 && A.PAPER.docs.length >= 6 && A.PAPER.asked.length >= 3, 'paper checklist, documents and questions');
ok(!/best year yet|love you more than ever|taught me a lot/i.test(html), 'the personal note from the Sep 3 page stays out of the site');

// ---------- 2. the review list ----------
head('the review list');
ok(A.GUIDE.sections.length === 6 && A.GUIDE.sections.every((s, i) => s.tp === tps[i]), 'six sections, one per chapter');
const items = A.GUIDE.sections.flatMap(s => s.items.map(i => Object.assign({ tp: s.tp }, i)));
ok(new Set(items.map(i => i.id)).size === items.length, 'review item ids unique');
ok(items.filter(i => i.know).length >= 4, 'the "know them" items are marked', items.filter(i => i.know).length);
items.forEach(i => {
  ok(i.short && i.short.length > 40, 'review item has a short answer: ' + i.t);
  ok(A.CH[i.tp].notes.some(n => n.id === i.a), 'review item points at a real note section: ' + i.t, i.a);
});
['The five views of who governs', 'The four types of politics', 'The five elements of the American political system'].forEach(t =>
  ok(items.some(i => i.t === t && i.know), 'know-them item: ' + t));

// ---------- 3. chapters ----------
head('chapters');
const noteIds = [];
tps.forEach((tp, k) => {
  const c = A.CH[tp];
  ok(c.n === k + 1 && c.title && c.short, 'chapter header: ' + tp);
  ok(c.notes.length >= 5 && c.notes.every(n => n.id && n.h && n.body && n.body.length > 200), 'notes complete: ' + tp, c.notes.length);
  c.notes.forEach(n => { ok(n.id.indexOf(tp + '-') === 0, 'note id prefixed: ' + n.id); noteIds.push(n.id); });
  ok(c.decks.length >= 2 && c.decks.every(d => d.id && d.label && d.cards.length >= 5), 'at least two decks: ' + tp);
  ok(new Set(c.decks.map(d => d.id)).size === c.decks.length, 'deck ids unique: ' + tp);
  c.decks.forEach(d => {
    ok(d.cards.every(x => x.length >= 2 && x[0] && x[1]), 'cards have front and back: ' + tp + '/' + d.id);
    ok(new Set(d.cards.map(x => x[0])).size === d.cards.length, 'card fronts unique: ' + tp + '/' + d.id);
  });
  ok(A.PAIRSETS[tp].pairs.length >= 15, 'enough pairs to match: ' + tp, A.PAIRSETS[tp].pairs.length);
  ok(new Set(A.PAIRSETS[tp].pairs.map(p => p[1])).size === A.PAIRSETS[tp].pairs.length, 'pair meanings unique: ' + tp);
});
ok(new Set(noteIds).size === noteIds.length, 'note ids unique across chapters');
const body = tp => A.CH[tp].notes.map(n => n.body).join(' ');
['Class (Marxist)', 'Power elite', 'Bureaucratic', 'Pluralist', 'Creedal passion'].forEach(v => ok(body('c1').includes(v), 'ch. 1 names the view: ' + v));
['Majoritarian', 'Entrepreneurial', 'Client', 'Interest group'].forEach(v => ok(body('c1').includes('<h4>' + v + '</h4>'), 'ch. 1 has the type: ' + v));
['Rhode Island', 'Article V', 'Three-Fifths', 'Daniel Shays', '1781', 'Ambition must be made to counteract ambition', 'unequal distribution of property', 'Line-item veto'].forEach(v => ok(body('c2').includes(v), 'ch. 2 covers: ' + v));
ok(A.CH.c2.timeline && A.CH.c2.timeline.filter(e => e.big).length >= 5, 'ch. 2 timeline with the big moments');
const years = A.CH.c2.timeline.filter(e => e.y).map(e => parseInt(e.y.match(/\d{4}/)[0], 10));
ok(years.every((y, i) => i === 0 || y >= years[i - 1]), 'timeline in order', years.join(','));
['Gibbons v. Ogden', 'Wabash', 'Arizona v. United States', '2010', '5 to 4', 'Article I, Section 8, Clause 18', 'Devolution', 'Medicaid'].forEach(v => ok(body('c3').includes(v), 'ch. 3 covers: ' + v));
['Tocqueville', '1831', '1835', 'Puritans and Catholics', 'three times', 'Vietnam', 'Watergate', 'Orthodox', 'Progressive', 'Civil society', 'preoccupied with their rights', 'accountable to the people', 'community affairs seriously', 'responsible for their own actions'].forEach(v => ok(body('c4').includes(v), 'ch. 4 covers: ' + v));
['Gitlow', 'Palko', 'McDonald', 'Blackstone', 'clear-and-present-danger', 'Libel', 'Obscenity', 'Symbolic speech', 'establishment clause', 'free exercise clause', 'Exclusionary rule', 'Civil forfeiture', 'October 2001',
 'competing rights and duties', 'some minority', 'force or violence', 'Due process clause', 'Equal protection clause', 'p. 100', 'The question in every case', 'Probable cause', 'more than mere suspicion'].forEach(v => ok(body('c5').includes(v), 'ch. 5 covers: ' + v));
ok(A.CH.c5.decks[0].cards.some(c => c[0] === 'Probable cause') && A.CH.c4.decks[0].cards.some(c => /^Democracy/.test(c[0])), 'new cards: probable cause, democracy as an element');
ok(/Madison wrote 1–51/.test(body('c2')), 'the Federalist authorship note is flagged, not silently corrected');
ok(/228 million/.test(body('c4')) && /340 million/.test(body('c4')), 'the population figure is flagged');

// ---------- 4. faith ----------
head('faith & Thomas');
ok(A.FAITH.verses.length >= 10 && A.FAITH.verses.every(v => v.ref && v.text && v.why), 'verses complete');
['2 Samuel 7:28', 'Psalm 19:9', 'Psalm 119:160', 'Romans 12:2', 'John 15:19', 'Revelation 7:9–10', 'Romans 1:16', 'Colossians 2:8'].forEach(r => ok(A.FAITH.verses.some(v => v.ref === r), 'verse from class: ' + r));
ok(A.FAITH.thomas.length === 4 && A.FAITH.thomas.every(t => /Confirm/.test(t.d)), 'four Thomas themes, each flagged to confirm');
ok(/Who is Jesus/.test(A.FAITH.question.body) && /Romans 14/.test(A.FAITH.question.body), 'the Sep 1 heresy questions');
ok(/check which book/.test(A.FAITH.believing.src), 'the p. 15 quote attribution is flagged');

// ---------- 5. question bank ----------
head('question bank');
tps.forEach(tp => {
  const mine = A.QB.filter(q => q.tp === tp);
  ok(mine.length >= 30, 'at least 30 questions on ' + tp, mine.length);
  ok(mine.filter(q => q.t === 'tf').length >= 6, 'true/false on ' + tp);
  ok(mine.filter(q => q.ap).length >= 3, 'application questions on ' + tp);
  const real = mine.filter(q => q.real).map(q => q.real).sort((a, b) => a - b);
  if (tp !== 'c6') ok(JSON.stringify(real) === JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 'the ten Canvas questions for ' + tp, real.join(','));
  else ok(real.length === 0, 'chapter 6 has no Canvas questions yet');
});
A.QB.forEach((q, i) => {
  ok(tps.includes(q.tp), 'known chapter #' + i);
  ok(q.q && q.e, 'question and explanation #' + i);
  if (q.t === 'mc') {
    ok(q.w.length === 3, 'three wrong answers #' + i, q.q);
    ok(!q.w.includes(q.a), 'right answer not among the wrong #' + i, q.q);
    ok(new Set([q.a].concat(q.w)).size === 4, 'four distinct options #' + i, q.q);
  } else ok(q.t === 'tf' && typeof q.a === 'boolean', 'true/false has a boolean answer #' + i);
});
ok(new Set(A.QB.map(q => q.q)).size === A.QB.length, 'no duplicate questions');
// the answers that had to be worked out for the questions Daniel missed
const realQ = (tp, n) => A.QB.find(q => q.tp === tp && q.real === n);
ok(realQ('c2', 6).a === 'Separation of Powers and Federalism', 'ch. 2 Q6 answer');
ok(realQ('c2', 9).a === true && realQ('c2', 10).a === false, 'ch. 2 Q9 true, Q10 false');
ok(realQ('c3', 1).a === '27' && realQ('c3', 7).a === 'John Adams', 'ch. 3 Q1 and Q7 answers');
ok(realQ('c4', 9).a === 'rapidly declined' && realQ('c4', 10).a === 'Japan', 'ch. 4 Q9 and Q10 answers');
ok(realQ('c5', 10).a === false, 'ch. 5 Q10 false');
// chapter 6, from the textbook (Wilson pp. 122-152)
const c6 = body('c6');
['denied access to facilities, opportunities, or services', 'Rational basis', 'Intermediate scrutiny', 'Strict scrutiny', 'least restrictive means', 'suspect',
 'Plessy v. Ferguson (1896)', 'inherently unequal', 'Earl Warren', 'all deliberate speed', 'De jure', 'De facto', 'Swann', 'Montgomery bus boycott', 'Rosa Parks',
 'Civil disobedience', 'cloture', '71–29', 'Voting Rights Act', 'Shelby County', 'Seneca Falls', 'Nineteenth Amendment', 'Title IX', 'Equal Rights Amendment', '38',
 'Griswold', 'penumbras', 'Roe v. Wade', 'Casey', 'undue burden', 'Hyde Amendment', 'Equality of results', 'Equality of opportunity', 'Bakke', 'plus factor',
 'compensatory action', 'preferential treatment', 'Bowers v. Hardwick', 'Lawrence v. Texas', 'Obergefell'].forEach(v => ok(c6.includes(v), 'ch. 6 covers: ' + v));
const marks = (c6.match(/<mark class="key">/g) || []).length;
ok(marks >= 30 && marks <= 90, 'ch. 6 highlights the most testable lines, not everything', marks);
ok(A.CH.c6.notes[0].id === 'c6-top' && /Most likely/.test(A.CH.c6.notes[0].h), 'ch. 6 opens with the most-likely-asked list');
ok(A.GUIDE.sections[5].items.filter(i => /★/.test(i.t)).length >= 4, 'the review list stars the key chapter 6 items');
ok(/mark\.key\{/.test(html), 'the highlight style exists');
// the Sep 24 exam notes, in the professor's phrasing
['Probable cause', 'Due process clause', 'Equal protection clause', 'some minority', 'The clear-and-present-danger test', 'governed', 'states’ rights', 'Democracy', 'Individual responsibility', 'patterned and sustained', 'competing rights and duties']
  .forEach(a => ok(A.QB.some(q => q.a === a), 'exam-notes question with the answer: ' + a));
ok(A.QB.some(q => q.t === 'tf' && /advocate the overthrow/.test(q.q) && q.a === true), 'laws against advocating overthrow: true');
ok(A.QB.some(q => q.t === 'tf' && /consent of the governed/.test(q.q) && q.a === true), 'legitimacy requires the consent of the governed: true');
ok(A.QB.some(q => q.t === 'tf' && /regulate immigration/.test(q.q) && q.a === true), 'only the federal government regulates immigration: true');
ok(A.QB.some(q => q.t === 'tf' && /suspicion/.test(q.q) && q.a === false), 'probable cause is more than suspicion: false');

head('the lists — "what are the five"');
ok(A.LISTS.length >= 18, 'at least eighteen lists', A.LISTS.length);
tps.forEach(tp => ok(A.listsFor(tp).length >= 2, 'at least two lists for ' + tp, A.listsFor(tp).length));
ok(new Set(A.LISTS.map(l => l.id)).size === A.LISTS.length, 'list ids unique');
A.LISTS.forEach(l => {
  ok(tps.includes(l.tp) && l.q && l.e, 'list complete: ' + l.id);
  ok(l.items.length === l.n && l.n >= 2 && l.n <= 7, 'n matches the items: ' + l.id, l.items.length + ' vs ' + l.n);
  ok(new Set(l.items).size === l.items.length, 'items unique: ' + l.id);
  ok(l.extra.length >= 3 && l.extra.every(x => !l.items.includes(x)), 'wrong choices are enough and never a right one: ' + l.id);
  ok(l.extra.length >= Math.min(9, Math.max(6, l.n + 3)) - l.n, 'enough wrong choices to fill the spread: ' + l.id);
});
const five = A.LISTS.find(l => l.id === 'five-elements');
ok(!!five && JSON.stringify(five.items) === JSON.stringify(['Liberty', 'Equality', 'Democracy', 'Civic duty', 'Individual responsibility']), 'the five elements, in order');
ok(five && five.tp === 'c4' && five.n === 5, 'the five are a chapter 4 list of five');
for (let run = 0; run < 100; run++) {
  A.LISTS.forEach((l, i) => {
    const q = A.fromList(i);
    ok(q.key === 'L:' + i && q.kind === 'list' && q.tp === l.tp && q.n === l.n && q.explain && q.miss, 'list question well formed: ' + l.id);
    ok(q.opts.filter(o => o.ok).length === l.n && new Set(q.opts.map(o => o.html)).size === q.opts.length, 'list question has its n right answers, no repeats: ' + l.id);
    ok(q.opts.length === Math.min(9, Math.max(6, l.n + 3)), 'list question spread: ' + l.id, q.opts.length);
    ok(/Pick all (two|three|four|five|six|seven)\./.test(q.text), 'list question says how many to pick: ' + l.id, q.text);
  });
}
ok(A.questionsByKeys(['L:0', 'L:999']).length === 1 && A.questionsByKeys(['L:0'])[0].key === 'L:0', 'list keys rebuild, bad ones drop');

head('question generators (100 runs)');
for (let run = 0; run < 100; run++) {
  tps.forEach(tp => {
    const qs = A.topicQuestions(tp, null, 10);
    ok(qs.length === 10, tp + ': ten questions', qs.length);
    ok(new Set(qs.map(q => q.key.replace(/r$/, ''))).size === qs.length, tp + ': no repeated question', qs.map(q => q.key).join(','));
    qs.forEach(q => {
      const right = q.opts.filter(o => o.ok).length;
      if (q.kind === 'list') {
        ok(right === q.n && q.n >= 2, tp + ': a name-them question has exactly its n right answers', q.text + ' ' + right + '/' + q.n);
        ok(q.opts.length === Math.min(9, Math.max(6, q.n + 3)), tp + ': name-them option spread', q.n + ' -> ' + q.opts.length);
      } else {
        ok(right === 1, tp + ': exactly one right answer', q.text);
        ok(q.opts.length === (q.kind === 'tf' ? 2 : 4), tp + ': option count', q.kind + ' ' + q.opts.length);
      }
      ok(new Set(qs.map(x => x.key)).size === qs.length && new Set(q.opts.map(o => o.html)).size === q.opts.length, tp + ': options distinct', q.opts.map(o => o.html).join(' | '));
      ok(q.tp === tp && q.explain && q.miss, tp + ': question complete');
    });
    ok(qs.filter(q => q.kind === 'id').length <= 3, tp + ': identification at most a third');
    const nl = qs.filter(q => q.kind === 'list').length;
    ok(nl >= 1 && nl <= 2, tp + ': one or two name-them questions per quiz', nl);
  });
  const lx = A.mockQuestions({ n: 25, types: 'lists', topics: [] });
  ok(lx.length === A.LISTS.length && lx.every(q => q.kind === 'list'), 'name-them exam has every list once', lx.length);
  ok(A.mockQuestions({ n: 15, types: 'lists', topics: ['c5'] }).every(q => q.tp === 'c5' && q.kind === 'list'), 'name-them exam can be one chapter');
  ok(A.mockQuestions({ n: 25, types: 'all', topics: [] }).filter(q => q.kind === 'list').length >= 5, 'a 25-question exam asks at least five name-them questions, one per chapter');
  ok(A.mockQuestions({ n: 15, types: 'all', topics: [] }).filter(q => q.kind === 'list').length >= 3, 'a 15-question exam asks at least three');
  ok(A.mockQuestions({ n: 15, types: 'all', topics: [] }).filter(q => q.kind === 'list').length <= 7, 'but name-them never crowds a 15-question exam');
  ok(A.mockQuestions({ n: 50, types: 'all', topics: [] }).filter(q => q.kind === 'list').length >= 5, 'a 50-question exam asks at least five');
  ok(A.mockQuestions({ n: 25, types: 'all', topics: ['c2'] }).filter(q => q.kind === 'list').length <= 2, 'a one-chapter exam has at most its two lists');
  ok(A.mockQuestions({ n: 25, types: 'mc', topics: [] }).every(q => q.kind !== 'list' && q.kind !== 'tf'), 'multiple-choice-only exam has no lists');
  [15, 25, 40, 50].forEach(n => {
    const mx = A.mockQuestions({ n, types: 'all', topics: [] });
    ok(mx.length === n, 'practice exam fills to ' + n, mx.length);
    tps.forEach(tp => ok(mx.some(q => q.tp === tp), 'practice exam of ' + n + ' covers ' + tp));
    ok(new Set(mx.map(q => q.key)).size === mx.length, 'practice exam has no repeats');
  });
  ok(A.mockQuestions({ n: 25, types: 'tf', topics: [] }).every(q => q.kind === 'tf'), 'true/false-only exam');
  ok(A.mockQuestions({ n: 25, types: 'ap', topics: [] }).every(q => q.ap), 'application-only exam');
  const real = A.mockQuestions({ n: 50, types: 'real', topics: [] });
  ok(real.length === 50 && real.every(q => q.real), 'Canvas-only exam has all fifty real questions', real.length);
  ok(A.mockQuestions({ n: 15, types: 'all', topics: ['c3'] }).every(q => q.tp === 'c3'), 'single-chapter exam');
}
quizTps.forEach(tp => ok(A.realKeys(tp, false).length === 10, 'replay keys for ' + tp));
const c2miss = A.questionsByKeys(A.realKeys('c2', true));
ok(c2miss.map(q => q.real).join(',') === '6,9,10', 'ch. 2 "only the misses" replays Q6, Q9, Q10 in order', c2miss.map(q => q.real).join(','));
ok(A.questionsByKeys(A.realKeys('c3', true)).map(q => q.real).join(',') === '1,7', 'ch. 3 "only the misses" replays Q1, Q7');
ok(A.questionsByKeys(A.realKeys('c1', false)).map(q => q.real).join(',') === '1,2,3,4,5,6,7,8,9,10', 'full replay keeps quiz order');
const sampleKeys = A.topicQuestions('c2', null, 10).map(q => q.key);
const back = A.questionsByKeys(sampleKeys);
ok(back.length === sampleKeys.length && back.every((q, i) => q.key === sampleKeys[i]), 'practice-the-misses rebuilds the same questions');
ok(A.questionsByKeys(['nonsense:99', 'c1:999999', 'c9:1']).length === 0, 'bad keys are ignored');

// ---------- 6. decks, match, verdicts ----------
head('decks, match and verdicts');
tps.forEach(tp => {
  A.CH[tp].decks.forEach(d => ok(A.deckFor(tp, d.id).length === d.cards.length, 'deck loads: ' + tp + '/' + d.id));
  for (let run = 0; run < 30; run++) {
    const r = A.matchRound(tp, 6);
    ok(r.items.length === 6 && new Set(r.items.map(x => x.right)).size === 6 && new Set(r.items.map(x => x.left)).size === 6, tp + ' match round: six unique pairs');
  }
});
const lines = A.VERDICTS.flatMap(v => v.t.concat([v.a])).join(' | ');
ok(!/cheeks|goat|bruh|cooked|twin|\bbro\b|\bchat\b|aura|npc|crack a|\bnah\b|ain.t|dawg|\bW\b|no cap|lock in|\bhim\b|\bL\b|mid\.|headlock|trenches/i.test(lines), 'no slang anywhere in the verdicts', lines);
ok(A.VERDICTS.length === 5 && A.VERDICTS.every(v => v.t.length >= 3 && v.a.length > 20), 'five tiers, each with several gracious lines and advice');
ok(!/function reaction\(/.test(src) && !/\bREACT\b/.test(src), 'per-answer quips are gone');
ok(/<b>Correct\.<\/b>/.test(src) && /<b>Not this one\.<\/b>/.test(src) && /<b>Not quite\.<\/b>/.test(src), 'answer feedback is plain');
[100, 90, 75, 55, 10].forEach(p => ok(!!A.verdictFor(p).t, 'verdict for ' + p));

// ---------- 7. markup ----------
head('markup');
const ids = [...new Set((src.match(/\$\("#([A-Za-z0-9_-]+)"/g) || []).map(s => s.slice(4, -1)))];
const dynamic = ['gCount', 'gBar', 'gPrint', 'gLists', 'paperChecks', 'mxN', 'mxT', 'mxP', 'mxStart'];
ok(/\["lists","Name them"\]/.test(src) && /id="nameThem"/.test(src) && /class="namelist"/.test(src), 'name-them drill on the Guide and in the practice exam');
ok(/kind === "list"/.test(src) && /function checkList/.test(src) && /missedone/.test(src) && /\[1-9\]/.test(src), 'quiz engine handles name-them questions and keys 1–9');
const missing = ids.filter(id => !html.includes('id="' + id + '"') && !dynamic.includes(id));
ok(missing.length === 0, 'every element referenced by id exists', missing.join(', '));
tps.forEach(tp => ['Notes', 'Cards', 'Match', 'Quiz'].forEach(s => ok(html.includes('id="' + tp + s + '"'), 'chapter root exists: ' + tp + s)));
const panels = [...new Set((html.match(/data-panel="([^"]+)"/g) || []).map(s => s.slice(12, -1)))];
console.log('  panels: ' + panels.join(', '));
panels.forEach(pn => {
  const [t, mo] = pn.split('/');
  ok(html.includes('data-modes="' + t + '"'), 'panel ' + pn + ' has a mode switch');
  ok(new RegExp('data-modes="' + t + '"[\\s\\S]*?data-mode="' + mo + '"').test(html), 'panel ' + pn + ' has its mode button');
});
['guide', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'faith', 'exam'].forEach(t => {
  ok(html.includes('data-topic="' + t + '"') && html.includes('id="topic-' + t + '"'), 'topic ' + t + ' has a tab and a section');
});
ok(/data-topic="guide"\s+aria-selected="true"/.test(html), 'Guide is the first, default tab');
ok((html.match(/<script>/g) || []).length === 1, 'a single script block');
['div', 'section', 'button', 'nav', 'main', 'header', 'footer', 'svg', 'symbol', 'table', 'g'].forEach(t => {
  const open = (html.match(new RegExp('<' + t + '[\\s>]', 'g')) || []).length;
  const close = (html.match(new RegExp('</' + t + '>', 'g')) || []).length;
  ok(open === close, t + ' tags balanced', open + ' vs ' + close);
});
ok(html.includes('id="flourish"') && html.includes('id="emblem"') && html.includes('class="rail left"') && html.includes('class="emblem"'), 'ornaments, emblem and side rails present');
ok(html.includes('rel="manifest"') && html.includes('sw.js') && fs.existsSync(path.join(ROOT, 'sw.js')) && fs.existsSync(path.join(ROOT, 'manifest.webmanifest')), 'PWA pieces: manifest and service worker');
ok(html.includes('og:image') && html.includes('/pac/preview.png'), 'link preview metadata');
ok(!/�/.test(html), 'no broken characters');
console.log('  file size: ' + (fs.statSync(path.join(ROOT, 'index.html')).size / 1024).toFixed(1) + ' KB');

console.log('\n' + (fails === 0 ? 'ALL ' + checks + ' CHECKS PASSED' : fails + ' FAILURES out of ' + checks + ' checks'));
process.exit(fails ? 1 : 0);
