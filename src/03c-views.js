/* ================================================================ small helpers */
function segWire(sel, attr, fn){
  var seg = $(sel); if(!seg) return;
  seg.addEventListener("click", function(e){
    var b = e.target.closest ? e.target.closest("button["+attr+"]") : null;
    if(!b) return;
    $$("button", seg).forEach(function(x){ x.setAttribute("aria-pressed", String(x === b)); });
    fn(b.getAttribute(attr));
  });
}
function divider(){ return '<div class="divider"><span>&#9670;</span></div>'; }
function getJSON(k, dflt){ try{ var v = store.get(k); return v ? JSON.parse(v) : dflt; }catch(e){ return dflt; } }
function li(x){ return "<li>"+x+"</li>"; }

/* ================================================================ guide */
function renderGuide(){
  var done = getJSON("guide", {}), total = 0;
  GUIDE.sections.forEach(function(s){ total += s.items.length; });
  var html =
    '<div class="gtop">'+
      '<div class="box"><h4>The course</h4><p>'+COURSE.about+'</p><ul>'+COURSE.books.map(li).join("")+'</ul><p class="virt">'+COURSE.virtues+'</p></div>'+
      '<div class="box"><h4>How grades work</h4><ul>'+COURSE.grading.map(li).join("")+'</ul></div>'+
      '<div class="box"><h4>Discussion posts and sources</h4><ul>'+COURSE.discussion.concat(COURSE.sources).map(li).join("")+'</ul></div>'+
      '<div class="box"><h4>AI policy</h4><ul>'+COURSE.ai.map(li).join("")+'</ul></div>'+
      '<div class="box next"><h4>Coming up</h4><p>'+COURSE.next+'</p></div>'+
      '<div class="box"><h4>How the exam asks</h4><p>'+COURSE.examStyle+'</p></div>'+
    '</div>'+
    '<div class="gsec"><h2>Your Canvas quizzes</h2>'+divider()+
      '<div class="tblwrap"><table class="tbl n0 record"><thead><tr><th>Quiz</th><th>Score</th><th>Missed</th><th></th></tr></thead><tbody>'+
      QUIZ_RECORD.map(function(r){
        return '<tr><td class="head">'+TOPIC_NAMES[r.tp]+'</td><td class="sm">'+r.score+'</td><td class="sm">'+(r.missed.length ? "Q"+r.missed.join(", Q") : "—")+'</td>'+
          '<td class="sm"><div class="rec-btns"><button class="btn" type="button" data-real="'+r.tp+'">Replay</button>'+
          (r.missed.length ? '<button class="btn primary" type="button" data-real="'+r.tp+'" data-missed="1">Only the misses</button>' : '')+'</div></td></tr>';
      }).join("")+
      '</tbody></table></div>'+
      '<p class="note">The exact questions you took, with the reason behind each answer. The chapter 4 result showed every question marked correct.</p></div>'+
    '<div class="gprog"><span class="count" id="gCount"></span><div class="bar"><i id="gBar" style="width:0"></i></div></div>';
  GUIDE.sections.forEach(function(s){
    html += '<div class="gsec"><h2>'+s.h+'</h2>'+divider();
    s.items.forEach(function(it){
      html += '<div class="gitem'+(done[it.id] ? " ok" : "")+'" data-gi="'+it.id+'">'+
        '<input type="checkbox" aria-label="I can explain '+strip(it.t)+'" data-g="'+it.id+'"'+(done[it.id] ? " checked" : "")+'>'+
        '<div><div class="gt">'+it.t+(it.know ? '<span class="nb">Know them</span>' : '')+'</div>'+
          '<div class="gs">'+it.short+'</div></div>'+
        '<button class="btn" type="button" data-go="'+s.tp+'/notes" data-a="'+it.a+'">Study it</button></div>';
    });
    html += '</div>';
  });
  html += '<div class="gsec" id="nameThem"><h2>Name them</h2>'+divider()+
    '<p class="ask" style="margin:0 0 12px">The exam asks “what are the five?” Say the list out loud, then open it to check. <b>Drill the lists</b> turns all of them into questions.</p>'+
    LISTS.map(function(l, i){
      return '<details class="namelist" data-l="'+i+'"><summary>What are '+l.q+'? <span class="nb">'+TOPIC_NAMES[l.tp]+' &middot; '+l.n+'</span></summary><ol>'+l.items.map(li).join("")+'</ol></details>';
    }).join("")+
    '<div class="toolbar"><button class="btn primary" type="button" id="gLists">Drill the lists</button><button class="btn primary" type="button" id="gExam50">Take the Exam 50</button></div></div>';
  html += '<div class="gsec"><div class="toolbar">'+
      '<button class="btn primary" type="button" data-go="exam/mock">Practice exam</button>'+
      '<button class="btn" type="button" data-go="faith/paper">The paper</button>'+
      '<button class="btn" type="button" id="gPrint">Print this list</button>'+
    '</div></div>';
  $("#guideRoot").innerHTML = html;
  function progress(){
    var d = getJSON("guide", {}), n = Object.keys(d).filter(function(k){ return d[k]; }).length;
    $("#gCount").innerHTML = "Ready on <b>"+n+" of "+total+"</b>";
    $("#gBar").style.width = (n/total*100) + "%";
  }
  $$("#guideRoot input[data-g]").forEach(function(cb){
    cb.addEventListener("change", function(){
      var d = getJSON("guide", {}); d[cb.getAttribute("data-g")] = cb.checked; store.set("guide", JSON.stringify(d));
      cb.closest(".gitem").classList.toggle("ok", cb.checked); progress();
    });
  });
  $$("#guideRoot [data-go]").forEach(function(b){
    b.addEventListener("click", function(){ goTo(b.getAttribute("data-go"), b.getAttribute("data-a")); });
  });
  $$("#guideRoot [data-real]").forEach(function(b){
    b.addEventListener("click", function(){ replayReal(b.getAttribute("data-real"), !!b.getAttribute("data-missed")); });
  });
  $("#gPrint").addEventListener("click", function(){ window.print(); });
  $("#gExam50").addEventListener("click", function(){ goTo("exam/mock"); if(engines.mock) renderMockSetup(); var f = $("#mockExam .fifty"); if(f && f.scrollIntoView) f.scrollIntoView({block:"start"}); });
  $("#gLists").addEventListener("click", function(){
    mockCfg.types = "lists"; mockCfg.topic = "all"; mockCfg.n = 25; store.set("mockcfg", JSON.stringify(mockCfg));
    goTo("exam/mock"); startMock(null);
  });
  progress();
}
function goTo(path, anchor){
  var parts = path.split("/"), t = parts[0], m = parts[1];
  currentMode[t] = m;
  showTopic(t);
  if(!anchor){ window.scrollTo({top:$(".topics").offsetTop - 8, behavior:"smooth"}); return; }
  setTimeout(function(){
    var el = document.getElementById(anchor);
    if(!el) return;
    el.scrollIntoView({behavior:"smooth", block:"start"});
    el.classList.add("flashhit"); setTimeout(function(){ el.classList.remove("flashhit"); }, 1800);
  }, 60);
}

/* ================================================================ chapter notes */
function renderNotes(tp){
  var c = CH[tp];
  $("#"+tp+"Notes").innerHTML = '<div class="secnav">'+c.notes.map(function(s){ return '<a href="#'+s.id+'" data-a="'+s.id+'">'+strip(s.h).replace(/“|”/g,"")+'</a>'; }).join("")+'</div>'+
    c.notes.map(function(s){ return '<div class="note-sec" id="'+s.id+'"><h2>'+s.h+'</h2>'+divider()+s.body+'</div>'; }).join("");
  $$("#"+tp+"Notes .secnav a").forEach(function(a){
    a.addEventListener("click", function(e){ e.preventDefault(); var el = document.getElementById(a.getAttribute("data-a")); if(el) el.scrollIntoView({behavior:"smooth", block:"start"}); });
  });
}
function renderTimeline(){
  $("#c2Timeline").innerHTML = '<div class="tl">'+CH.c2.timeline.map(function(e){
    if(e.era) return '<div class="era">'+e.era+'</div>';
    return '<div class="ev'+(e.big ? " big" : "")+'"><div class="y">'+e.y+'</div><div class="t">'+e.t+'<span>'+e.s+'</span></div></div>';
  }).join("")+'</div>';
}

/* ================================================================ faith & paper */
function renderPaper(){
  var pc = getJSON("paper", {});
  $("#paperRoot").innerHTML = '<div class="practice">'+
    '<div class="box"><h4>Due Thursday, November 19 &middot; 1,200 words</h4><p>Take a position on one question of Christian citizenship and defend it. The prompt was posted the first week — not in November.</p></div>'+
    '<h3 class="h2" style="font-size:20px">The checklist</h3><div class="checks" id="paperChecks">'+
      PAPER.checks.map(function(c, i){ return '<label'+(pc[i] ? ' class="done"' : '')+'><input type="checkbox" data-c="'+i+'"'+(pc[i] ? " checked" : "")+'> <span>'+c+'</span></label>'; }).join("")+'</div>'+
    '<h3 class="h2" style="font-size:20px">Primary documents you could use</h3>'+
    '<div class="tblwrap"><table class="tbl n0"><tbody>'+PAPER.docs.map(function(d){ return '<tr><td class="head">'+d[0]+'</td><td class="sm">'+d[1]+'</td></tr>'; }).join("")+'</tbody></table></div>'+
    '<h3 class="h2" style="font-size:20px">Class discussions you could cite, by date</h3>'+
    '<ul class="asklist">'+PAPER.asked.map(function(a){ return '<li><b>'+a[0]+'</b>'+a[1]+'</li>'; }).join("")+'</ul>'+
    '<p class="note">The full class-by-date log is in the next tab.</p>'+
    '<div class="box" style="margin-top:22px"><h4>If you use AI</h4><ul>'+COURSE.ai.slice(0,2).map(li).join("")+'</ul></div>'+
  '</div>';
  $$("#paperChecks input").forEach(function(cb){
    cb.addEventListener("change", function(){
      var d = getJSON("paper", {}); d[cb.getAttribute("data-c")] = cb.checked; store.set("paper", JSON.stringify(d));
      cb.parentNode.classList.toggle("done", cb.checked);
    });
  });
}
function renderLog(){
  $("#logRoot").innerHTML = '<div class="log">'+CLASS_LOG.map(function(e){
    return '<div class="logday"><div class="d">'+e.d+(e.note ? '<span>your notes</span>' : '')+'</div><div><h3>'+e.h+'</h3><ul>'+e.pts.map(li).join("")+'</ul></div></div>';
  }).join("")+'</div>';
}
function renderFaith(){
  var f = FAITH;
  $("#faithRoot").innerHTML =
    '<div class="note-sec"><div class="quote">'+f.believing.quote+'<small>'+f.believing.src+'</small></div>'+
      '<h2>'+f.question.h+'</h2>'+divider()+'<p class="ask" style="margin-top:0">'+f.question.d+'</p>'+f.question.body+'</div>'+
    '<div class="note-sec"><h2>Scripture from class</h2>'+divider()+'<div class="verses">'+
      f.verses.map(function(v){ return '<div class="verse"><div class="ref">'+v.ref+'</div><p>'+v.text+'</p><small>'+v.why+'</small></div>'; }).join("")+'</div></div>'+
    '<div class="note-sec"><h2>The Thomas themes</h2>'+divider()+'<p class="lead">'+f.thomasNote+'</p><div class="rules">'+
      f.thomas.map(function(t){ return '<div class="rule"><h4>'+t.when+'</h4><p><b>'+t.t+'</b></p><p class="ex">'+t.d+'</p></div>'; }).join("")+'</div></div>';
}

/* ================================================================ practice exam */
var mockCfg = getJSON("mockcfg", {n:25, types:"all", topic:"all"});
function mockGen(){ return mockQuestions({n:mockCfg.n, types:mockCfg.types, topics:mockCfg.topic === "all" ? [] : [mockCfg.topic]}); }
function startMock(keys){
  engines.mock = makeQuiz($("#mockExam"), mockGen, {showTopic:true, againLabel:"New practice exam", onSetup:renderMockSetup});
  engines.mock.start(keys || null);
}
/* The Exam 50: her study guide, fixed, in guide order */
var exam50Level = parseInt(store.get("exam50.level") || "1", 10) || 0;   /* 0 = mixed, 1–10 = graded */
function startExam50(keys){
  var lv = exam50Level;
  engines.mock = makeQuiz($("#mockExam"), function(k){ return examFiftyQuestions(k, lv); },
    {showTopic:true, againLabel:lv ? "Exam "+lv+" again" : "Another mixed fifty", onSetup:renderMockSetup});
  engines.mock.start(keys || null);
}
function replayReal(tp, onlyMissed){
  var keys = realKeys(tp, onlyMissed); if(!keys.length) return;
  goTo("exam/mock"); startMock(keys);
}
function renderMockSetup(){
  var root = $("#mockExam");
  function seg(id, attr, val, list){
    return '<div class="seg" id="'+id+'">'+list.map(function(o){ return '<button type="button" '+attr+'="'+o[0]+'" aria-pressed="'+(String(o[0]) === String(val))+'">'+o[1]+'</button>'; }).join("")+'</div>';
  }
  root.innerHTML = '<div class="quizWrap"><div class="qcard card-corners">'+CORNERS+
    '<div class="qnum">Practice exam</div><p class="qtext">Set it up, then answer across the chapters. Each run is drawn fresh.</p>'+
    '<div class="fifty"><h3 class="x50h">The Exam 50 &mdash; from your study guide</h3>'+
      '<p>Fifty topics from the exam study guide (chapters 1&ndash;4, chapter 5 terms, a few chapter 6 ideas; no chapter 5 or 6 court cases), in ten exams that get harder: Exam 1 asks for definitions, Exam 10 asks you to judge, compare and predict. <b>Mixed</b> draws a random level for every topic.</p>'+
      seg("x50L","data-lv",exam50Level,[[0,"Mixed"]].concat(EXAM_LEVELS.map(function(l){ return [l.n, String(l.n)]; })))+
      '<p class="x50d" id="x50d"></p>'+
      '<button class="btn primary" type="button" id="mxExam50">Start the Exam 50</button></div>'+
    '<p class="orline">or set one up yourself</p>'+
    '<div class="setup">'+
      '<div class="row"><span class="label">Length</span><br>'+seg("mxN","data-n",mockCfg.n,[[15,"15"],[25,"25"],[40,"40"],[50,"50"]])+'</div>'+
      '<div class="row"><span class="label">Question types</span><br>'+seg("mxT","data-t",mockCfg.types,[["all","Everything"],["mc","Multiple choice"],["tf","True / false"],["lists","Name them"],["ap","Application"],["real","Canvas quizzes only"]])+'</div>'+
      '<div class="row"><span class="label">Chapters</span><br>'+seg("mxP","data-p",mockCfg.topic,[["all","All six"]].concat(CHAPTERS.map(function(tp){ return [tp, "Ch. "+CH[tp].n]; })))+'</div>'+
      '<div class="row" style="margin-top:22px"><button class="btn primary" type="button" id="mxStart">Start</button></div>'+
      '<p class="hint" style="margin-top:12px">“Name them” questions: pick every item that belongs, then press Check — keys <kbd>1</kbd>–<kbd>9</kbd> toggle, <kbd>Enter</kbd> checks. To replay a real Canvas quiz in its own order, use the buttons on the Guide tab.</p>'+
    '</div></div></div>';
  segWire("#mxN","data-n",function(v){ mockCfg.n = parseInt(v,10); store.set("mockcfg", JSON.stringify(mockCfg)); });
  segWire("#mxT","data-t",function(v){ mockCfg.types = v; store.set("mockcfg", JSON.stringify(mockCfg)); });
  segWire("#mxP","data-p",function(v){ mockCfg.topic = v; store.set("mockcfg", JSON.stringify(mockCfg)); });
  $("#mxStart").addEventListener("click", function(){ startMock(null); });
  function showLevel(){
    var l = EXAM_LEVELS[exam50Level-1];
    $("#x50d").innerHTML = l ? '<b>Exam '+l.n+' · '+l.name+'</b> — '+l.d : '<b>Mixed</b> — every topic at a random level, different each time.';
    $("#mxExam50").textContent = l ? "Start Exam "+l.n : "Start a mixed fifty";
  }
  segWire("#x50L","data-lv",function(v){ exam50Level = parseInt(v,10); store.set("exam50.level", String(exam50Level)); showLevel(); });
  showLevel();
  $("#mxExam50").addEventListener("click", function(){ startExam50(null); });
  engines.mock = null;
}

/* ================================================================ wiring */
var engines = {};
CHAPTERS.forEach(function(tp){
  var seg = $('.seg[data-decks="'+tp+'"]'), cur = CH[tp].decks[0].id;
  seg.innerHTML = CH[tp].decks.map(function(d, i){ return '<button type="button" data-deck="'+d.id+'" aria-pressed="'+(i === 0)+'">'+d.label+'</button>'; }).join("");
  engines[tp+"Cards"] = makeCards($("#"+tp+"Cards")); engines[tp+"Cards"].load(deckFor(tp, cur));
  segWire('.seg[data-decks="'+tp+'"]', "data-deck", function(v){ cur = v; engines[tp+"Cards"].load(deckFor(tp, v)); });
  $('[data-shuffle="'+tp+'"]').addEventListener("click", function(){ engines[tp+"Cards"].load(deckFor(tp, cur)); });
  engines[tp+"Match"] = makeMatch($("#"+tp+"Match"), function(){ return matchRound(tp, 6); });
  var qcfg = {n:10, type:"all"};
  try{ var sv = JSON.parse(store.get("quiz."+tp) || "null"); if(sv){ qcfg.n = sv.n; qcfg.type = sv.type; } }catch(e){}
  var kinds = quizTypesFor(tp); if(!kinds.some(function(k){ return k[0] === qcfg.type; })) qcfg.type = "all";
  var qroot = $("#"+tp+"Quiz");
  qroot.insertAdjacentHTML("beforebegin",
    '<div class="qset" data-qset="'+tp+'">'+
      '<div class="row"><span class="label">Length</span><div class="seg" data-qn="'+tp+'">'+[[10,"10"],[20,"20"],[0,"All"]].map(function(o){ return '<button type="button" data-n="'+o[0]+'" aria-pressed="'+(o[0] === qcfg.n)+'">'+o[1]+'</button>'; }).join("")+'</div></div>'+
      '<div class="row"><span class="label">Kind</span><div class="seg" data-qt="'+tp+'">'+kinds.map(function(o){ return '<button type="button" data-t="'+o[0]+'" aria-pressed="'+(o[0] === qcfg.type)+'">'+o[1]+'</button>'; }).join("")+'</div></div>'+
    '</div>');
  engines[tp+"Quiz"]  = makeQuiz(qroot, function(){ return chapterQuestions(tp, qcfg); });
  var restart = function(){ store.set("quiz."+tp, JSON.stringify(qcfg)); engines[tp+"Quiz"].start(null); };
  segWire('.seg[data-qn="'+tp+'"]', "data-n", function(v){ qcfg.n = parseInt(v, 10); restart(); });
  segWire('.seg[data-qt="'+tp+'"]', "data-t", function(v){ qcfg.type = v; restart(); });
  renderNotes(tp);
});
renderGuide(); renderTimeline(); renderPaper(); renderLog(); renderFaith();

var ON_SHOW = {"exam/mock":function(){ if(!engines.mock) renderMockSetup(); }};
var KEYS = {"exam/mock":function(e){ return engines.mock ? engines.mock.keys(e) : false; }};
CHAPTERS.forEach(function(tp){
  ON_SHOW[tp+"/match"] = function(){ engines[tp+"Match"].ensure(); };
  ON_SHOW[tp+"/quiz"]  = function(){ engines[tp+"Quiz"].ensure(); };
  KEYS[tp+"/cards"] = function(e){ return engines[tp+"Cards"].keys(e); };
  KEYS[tp+"/quiz"]  = function(e){ return engines[tp+"Quiz"].keys(e); };
});
var TOPICS = ["guide","c1","c2","c3","c4","c5","c6","faith","exam"];
var currentTopic = "guide", currentMode = {guide:"overview", c1:"notes", c2:"notes", c3:"notes", c4:"notes", c5:"notes", c6:"notes", faith:"paper", exam:"mock"};
function showMode(topic, mode){
  currentMode[topic] = mode;
  $$('.seg[data-modes="'+topic+'"] button').forEach(function(b){ b.setAttribute("aria-pressed", String(b.getAttribute("data-mode") === mode)); });
  $$('#topic-'+topic+' .panel').forEach(function(p){ p.hidden = (p.getAttribute("data-panel") !== topic+"/"+mode); });
  var id = topic+"/"+mode;
  if(ON_SHOW[id]) ON_SHOW[id]();
  store.set("mode."+topic, mode);
}
function showTopic(id){
  currentTopic = id;
  $$(".topic-btn").forEach(function(b){ b.setAttribute("aria-selected", String(b.getAttribute("data-topic") === id)); });
  $$(".topic").forEach(function(s){ s.hidden = (s.id !== "topic-"+id); });
  showMode(id, currentMode[id]);
  store.set("topic", id);
}
$$(".topic-btn").forEach(function(b){
  b.addEventListener("click", function(){ showTopic(b.getAttribute("data-topic")); window.scrollTo({top:$(".topics").offsetTop - 8, behavior:"smooth"}); });
});
$$(".seg[data-modes]").forEach(function(seg){
  seg.addEventListener("click", function(e){
    var b = e.target.closest ? e.target.closest("button[data-mode]") : null;
    if(b) showMode(seg.getAttribute("data-modes"), b.getAttribute("data-mode"));
  });
});
document.addEventListener("keydown", function(e){
  var t = e.target, tag = (t && t.tagName) || "";
  if(/INPUT|TEXTAREA|SELECT/.test(tag)) return;
  if(tag === "BUTTON" && (e.key === " " || e.key === "Enter")) return;
  var h = KEYS[currentTopic+"/"+currentMode[currentTopic]];
  if(h && h(e)) e.preventDefault();
});

/* ---- come back to where you were ---- */
(function(){
  var t = store.get("topic");
  TOPICS.forEach(function(k){ var m = store.get("mode."+k); if(m && $('.seg[data-modes="'+k+'"] button[data-mode="'+m+'"]')) currentMode[k] = m; });
  showTopic(t && TOPICS.indexOf(t) >= 0 ? t : "guide");
})();

/* ---- offline copy: the service worker keeps the page on the phone ---- */
if("serviceWorker" in navigator && /^https?:/.test(location.protocol)){
  navigator.serviceWorker.register("sw.js").catch(function(){});
}
