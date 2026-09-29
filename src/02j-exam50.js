/* ================================================================ the Exam 50
   Her exam study guide as 50 topics (chapters 1–4 line by line, chapter 5 terms,
   a few chapter 6 ideas; no chapter 5 or 6 court cases — her rule; the two
   chapter 3 cases are named in the guide itself, so they stay).
   Every topic is asked at ten levels, so there are ten different exams, each
   harder than the last:
     1 the definition → the term          6 a scenario where the near-miss is tempting
     2 the term → the definition           7 a specific detail from the guide
     3 true or false                       8 which statement is NOT true
     4 tell it apart from its neighbor     9 why — causes and reasons
     5 a plain scenario                   10 judge, compare, predict — critical thought
   Exam N asks every topic at level N. "Mixed" draws a random level per topic.
   The topics themselves live in 02j1–02j6, one file per chapter.              */
var EXAM50 = [];
function EX(tp, topic, levels){ EXAM50.push({tp:tp, topic:topic, v:levels}); }
function XM(q, a, w, e){ return {t:"mc", q:q, a:a, w:w, e:e}; }      /* multiple choice */
function XT(q, a, e){ return {t:"tf", q:q, a:a, e:e}; }             /* true / false    */
function XL(id){ return {t:"list", list:id}; }                       /* name them       */
var EXAM_LEVELS = [
 {n:1,  name:"Definitions",        d:"The guide’s definition, name the term."},
 {n:2,  name:"Meanings",           d:"The term, pick what it means."},
 {n:3,  name:"True or false",      d:"Is the statement right as written?"},
 {n:4,  name:"Close neighbors",    d:"Tell each idea apart from the one most like it."},
 {n:5,  name:"Scenarios",          d:"A plain real-life case: which idea is it?"},
 {n:6,  name:"Tricky scenarios",   d:"Cases where the near-miss answer is tempting."},
 {n:7,  name:"Specifics",          d:"The dates, names, numbers and exact wording."},
 {n:8,  name:"Exceptions",         d:"Which statement is NOT true?"},
 {n:9,  name:"Why",                d:"Causes and reasons behind each idea."},
 {n:10, name:"Critical thinking",  d:"Judge, compare and predict."}];
/* level: 1–10 for a graded exam, 0 (or none) for a mixed draw.
   keys: "x:<topic>" (practice the misses) or "x:<topic>:<level>".            */
function examFiftyQuestions(keys, level){
  var out = [];
  EXAM50.forEach(function(slot, s){
    var li;
    if(keys){
      var hit = null;
      keys.forEach(function(k){ var m = /^x:(\d+)(?::(\d+))?$/.exec(k); if(m && parseInt(m[1],10) === s) hit = m; });
      if(!hit) return;
      li = hit[2] ? parseInt(hit[2],10) - 1 : Math.floor(Math.random() * slot.v.length);
    } else li = level ? level - 1 : Math.floor(Math.random() * slot.v.length);
    var v = slot.v[li], q;
    if(v.t === "list"){
      var ix = -1; LISTS.forEach(function(l, k){ if(l.id === v.list) ix = k; });
      q = fromList(ix);
    } else q = fromBank({tp:slot.tp, t:v.t, q:v.q, a:v.a, w:v.w, e:v.e, ap:li >= 4}, 0);
    q.key = "x:"+s+":"+(li+1); q.level = li+1; q.topicName = slot.topic;
    q.miss = '<b>'+slot.topic+'</b> · level '+(li+1)+' — ' + q.miss;
    out.push(q);
  });
  return shuffle(out);
}
