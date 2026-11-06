/* ================================================================ Exam 2 tab (chapters 7–12, from his study guide)
   Three modes: Start here (the pairs to keep apart and the worked examples), The study guide
   (one chapter at a time, in the guide's own order), Practice (a quiz she sets up).          */
E2.chapters.forEach(function(c){ TOPIC_NAMES["e"+c.n] = "Ch. "+c.n+" · "+c.title; });

function renderE2Start(){
  $("#e2Start").innerHTML =
    '<div class="note-sec"><h2>Start here</h2>'+divider()+
      '<p class="lead-in">Chapters 7&ndash;12, straight from his Exam 2 study guide. These two tables are the short version; the full guide is in the next tab.</p>'+
      '<h3>The pairs to keep apart</h3>'+
      '<div class="tblwrap"><table class="tbl n0"><tbody>'+E2.start.pairs.map(function(p){ return '<tr><td class="head">'+p[0]+'</td><td class="sm">'+p[1]+'</td></tr>'; }).join("")+'</tbody></table></div>'+
      '<h3>The worked examples from his answer key</h3>'+
      '<div class="tblwrap"><table class="tbl n0"><tbody>'+E2.start.numbers.map(function(p){ return '<tr><td class="head">'+p[0]+'</td><td class="sm">'+p[1]+'</td></tr>'; }).join("")+'</tbody></table></div>'+
      '<div class="toolbar">'+
        '<button class="btn primary" type="button" data-e2go="all/15/all">Quick 15 &middot; all chapters</button>'+
        '<button class="btn" type="button" data-e2go="all/0/pc">His 18 practice-check questions</button>'+
        '<button class="btn" type="button" id="e2OpenGuide">Open the study guide</button>'+
      '</div></div>';
  $$("#e2Start [data-e2go]").forEach(function(b){
    b.addEventListener("click", function(){ var p = b.getAttribute("data-e2go").split("/"); startE2Quiz({ch:p[0], n:parseInt(p[1], 10), kind:p[2]}); });
  });
  $("#e2OpenGuide").addEventListener("click", function(){ showMode("e2", "guide"); });
}

var e2Ch = store.get("e2.ch") || "7";
function e2Chapter(n){ return E2.chapters.filter(function(c){ return String(c.n) === String(n); })[0]; }
function renderE2Guide(){
  var stops = E2.chapters.map(function(c){ return String(c.n); }).concat(["x"]);
  if(stops.indexOf(e2Ch) < 0) e2Ch = "7";
  var pickHtml = '<div class="seg" id="e2Ch">'+E2.chapters.map(function(c){ return '<button type="button" data-ch="'+c.n+'" aria-pressed="'+(String(c.n) === e2Ch)+'">Ch. '+c.n+'</button>'; }).join("")+
    '<button type="button" data-ch="x" aria-pressed="'+(e2Ch === "x")+'">Across chapters</button></div>';
  var body;
  if(e2Ch === "x"){
    body = '<div class="note-sec"><h2>Cross-chapter review</h2>'+divider()+
      '<p class="ask" style="margin-top:0">'+E2.cross.theme+'</p>'+
      E2.cross.items.map(function(r){ return '<details class="namelist e2r"><summary>'+r[0]+'</summary><div class="e2a">'+r[1]+'</div></details>'; }).join("")+
      '<h3>The 45-question assessment</h3><p>The guide prints an answer key for a 45-question assessment, but not the questions themselves. Here it is for when you have them:</p>'+
      '<details class="namelist e2r"><summary>Show the answer key</summary><div class="e2a">'+E2.key45+'</div></details></div>';
  } else {
    var c = e2Chapter(e2Ch);
    body = '<div class="note-sec" id="e2c'+c.n+'"><h2>Chapter '+c.n+' &middot; '+c.title+'</h2>'+divider()+
      '<div class="box"><h4>Assigned highlights: '+c.pages+'</h4><p><b>Central question:</b> '+c.question+'</p><p><b>Learning goals:</b> '+c.goals+'</p></div>'+
      '<h3>Key terms</h3><div class="tblwrap"><table class="tbl n0"><tbody>'+c.terms.map(function(t){ return '<tr><td class="head">'+t[0]+'</td><td class="sm">'+t[1]+'</td></tr>'; }).join("")+'</tbody></table></div>'+
      '<h3>Core concepts</h3>'+c.concepts.map(function(k, i){
        return '<div class="box e2c"><h4>'+(i+1)+'. '+k.h+' <span>('+k.p+')</span></h4><p>'+k.a+'</p><p class="ex"><b>Example.</b> '+k.ex+'</p></div>';
      }).join("")+
      '<h3>Review and application</h3><p class="lead-in">Say your answer first, then open it.</p>'+
      c.review.map(function(r){ return '<details class="namelist e2r"><summary>'+r[0]+'</summary><div class="e2a">'+r[1]+'</div></details>'; }).join("")+
      '<h3>Practice check</h3>'+
      c.checks.map(function(i){ var p = E2.checks[i];
        return '<details class="namelist e2r"><summary><b>'+p.n+'</b>&nbsp;'+p.q+'</summary><div class="e2a"><ol type="A">'+p.o.map(function(o, j){ return '<li'+(j === p.a ? ' class="e2ok"' : '')+'>'+o+'</li>'; }).join("")+'</ol><p><b>Answer: '+"ABCD"[p.a]+'.</b> '+p.e+'</p></div></details>';
      }).join("")+
      '<div class="toolbar"><button class="btn primary" type="button" data-e2go="'+c.n+'/0/all">Practice chapter '+c.n+'</button></div></div>';
  }
  var at = stops.indexOf(e2Ch), prev = stops[at-1], next = stops[at+1];
  var label = function(s){ return s === "x" ? "Across chapters" : "Chapter "+s; };
  var nav = '<div class="toolbar e2nav">'+(prev ? '<button class="btn" type="button" data-e2ch="'+prev+'">&lsaquo; '+label(prev)+'</button>' : '')+
    (next ? '<button class="btn" type="button" data-e2ch="'+next+'">'+label(next)+' &rsaquo;</button>' : '')+'</div>';
  $("#e2Guide").innerHTML = pickHtml + body + nav;
  var go = function(v){ e2Ch = v; store.set("e2.ch", v); renderE2Guide(); var t = $("#topic-e2"); if(t && t.scrollIntoView) t.scrollIntoView({block:"start"}); };
  segWire("#e2Ch", "data-ch", go);
  $$("#e2Guide [data-e2ch]").forEach(function(b){ b.addEventListener("click", function(){ go(b.getAttribute("data-e2ch")); }); });
  $$("#e2Guide [data-e2go]").forEach(function(b){
    b.addEventListener("click", function(){ var p = b.getAttribute("data-e2go").split("/"); startE2Quiz({ch:p[0], n:parseInt(p[1], 10), kind:p[2]}); });
  });
}

var e2Cfg = {ch:"all", n:15, kind:"all"};
try{ var e2sv = JSON.parse(store.get("e2.quiz") || "null"); if(e2sv) e2Cfg = e2sv; }catch(e){}
var e2Engine = null;
function renderE2QuizSetup(){
  var root = $("#e2Quiz");
  function seg(attr, val, list){
    return '<div class="seg" data-e2="'+attr+'">'+list.map(function(o){ return '<button type="button" data-v="'+o[0]+'" aria-pressed="'+(String(o[0]) === String(val))+'">'+o[1]+'</button>'; }).join("")+'</div>';
  }
  var set = $(".qset[data-qset=\"e2\"]");
  if(!set){ root.insertAdjacentHTML("beforebegin", '<div class="qset" data-qset="e2"></div>'); set = $(".qset[data-qset=\"e2\"]"); }
  set.innerHTML =
    '<div class="row"><span class="label">Chapter</span>'+seg("ch", e2Cfg.ch, [["all","All"]].concat(E2.chapters.map(function(c){ return [String(c.n), String(c.n)]; })))+'</div>'+
    '<div class="row"><span class="label">Length</span>'+seg("n", e2Cfg.n, [[10,"10"],[15,"15"],[25,"25"],[0,"All"]])+'</div>'+
    '<div class="row"><span class="label">Kind</span>'+seg("kind", e2Cfg.kind, [["all","Mixed"],["mc","Multiple choice"],["tf","True / false"],["ap","Apply it"],["pc","His practice check"]])+'</div>';
  ["ch","n","kind"].forEach(function(k){
    segWire('.seg[data-e2="'+k+'"]', "data-v", function(v){ e2Cfg[k] = k === "n" ? parseInt(v, 10) : v; startE2Quiz(e2Cfg); });
  });
}
function startE2Quiz(cfg){
  if(cfg) e2Cfg = {ch:String(cfg.ch), n:cfg.n, kind:cfg.kind};
  store.set("e2.quiz", JSON.stringify(e2Cfg));
  renderE2QuizSetup();
  e2Engine = makeQuiz($("#e2Quiz"), function(){ return e2Questions(e2Cfg); }, {showTopic:true});
  e2Engine.start(null);
  if(currentTopic !== "e2" || currentMode.e2 !== "quiz"){ currentMode.e2 = "quiz"; showTopic("e2"); }
}
