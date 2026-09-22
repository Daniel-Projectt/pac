/* ================================================================ the course
   From the first-day notes (Aug 20), the housekeeping lines in the Sep 1 / Sep 3 /
   Sep 15 notes, and the syllabus slides (sources, the paper, AI).               */
var COURSE = {
 about:"An introductory study of America’s Constitution and political institutions. Two questions run through the whole course: <b>Who governs?</b> and <b>To what ends?</b>",
 books:[
  "Wilson, <i>American Government: Institutions and Policies</i>",
  "Thomas, <i>Politics and Culture: A Christian Perspective</i>",
  "Both on the Cedarville University bookshelf (VitalSource)."],
 grading:[
  "Quizzes are on <b>terms and topics</b> and are taken before class.",
  "Quizzes and discussions are never accepted late; two of each are dropped.",
  "Exams are in class — “terms and topic heavy” (Sep 1).",
  "The paper: 1,200 words, due Thursday, November 19. Late: −10% within 24 hours; not accepted after 48.",
  "Attendance: three absences (first-day notes).",
  "PAC events: go to three; they are worth 3% of the grade (Sep 3). On Sep 1 they were described as optional extra credit — the Sep 3 note is the later word."],
 discussion:[
  "Link a news story and name the outlet — about 150 words.",
  "Reply to one classmate by Tuesday.",
  "First-day note: “4 different outlets, 3 posts disagree with.”",
  "Any citation style is fine, as long as it’s consistent: who, when, title, website."],
 sources:[
  "<b>Counts:</b> reporting — AP, Reuters, the <i>Journal</i>, the <i>Times</i>, the <i>Post</i>, Politico, <i>National Review</i>, The Dispatch, <i>The Atlantic</i>, <i>Christianity Today</i>, and Ohio outlets.",
  "<b>Doesn’t count:</b> aggregators, a screenshot, a YouTube commentary, a chatbot summary of an article you did not open.",
  "Read whatever you like — cite the reporting underneath it."],
 ai:[
  "<b>Paper:</b> you may use it to brainstorm, outline or check grammar. Disclose it in two sentences at the end; disclosed use is not penalized.",
  "Undisclosed use is an academic integrity violation — “not a warning, a report.”",
  "<b>Quizzes and discussion posts: no.</b> This page is for studying beforehand, not for use during a quiz.",
  "The paper cites a class discussion by date: “Something that was not in this room cannot write it.”"],
 virtues:"Humility · curiosity · respect · open-heartedness · confidence"
};

/* Scores copied from the Canvas quiz results */
var QUIZ_RECORD = [
 {tp:"c1", score:"10 / 10", missed:[]},
 {tp:"c2", score:"7 / 10",  missed:[6,9,10]},
 {tp:"c3", score:"8 / 10",  missed:[1,7]},
 {tp:"c4", score:"all correct", missed:[], note:"every question shown was marked correct"},
 {tp:"c5", score:"10 / 10", missed:[]}
];

/* What happened in class, by date — the paper has to cite a discussion by date */
var CLASS_LOG = [
 {d:"Thu, Aug 20", h:"First day",
  pts:["The course: America’s Constitution and political institutions — who governs, to what ends, and why we are doing this.",
       "Quizzes on terms and topics; discussion posts (news story + outlet, ~150 words, reply by Tuesday); sources and citing.",
       "The paper (1,200 words, Nov 19) and the AI policy.",
       "The posture for the class: humility, curiosity, respect, open-heartedness, confidence.",
       "Assigned: read Wilson chapter 1; quiz Friday; discussion Aug 30, follow-up by Tuesday."]},
 {d:"Mon, Aug 24", h:"Your reading notes — Wilson ch. 1", note:true,
  pts:["Reading questions: How do politics drive democracy? What are the five views of how power is distributed? Why are “who governs” and “to what ends” the fundamental questions? What concepts classify the politics of different policy issues?",
       "Definitions of politics, power, authority, formal authority, legitimacy, democracy, direct and representative democracy.",
       "At the Convention, Hamilton thought the plan too democratic; George Mason, not democratic enough."]},
 {d:"Tue, Aug 25", h:"Wilson ch. 1 — Politics and democracy",
  pts:["Objectives: define politics, authority, legitimacy; relate democracy and government; identify competing theories of power; analyze who governs and to what ends; distinguish types of policy-making politics; evaluate today’s challenges to democratic governance.",
       "The haircut example: when do you say yes or no?",
       "Government in daily life — taxation, education, public safety, health care, transportation, national defense. How are decisions made, and who benefits?",
       "Who really governs America? The five views; four sources of influence; four types of politics.",
       "Scripture as the ultimate authority: 2 Samuel 7:28, Psalm 19:9, Psalm 119:160 — “Do you believe God’s word?” (p. 15)."]},
 {d:"Thu, Aug 27", h:"Wilson ch. 2 — The problem of liberty",
  pts:["“How can a government be powerful enough to govern effectively without becoming powerful enough to threaten liberty?”",
       "What the colonists believed; John Locke — life, liberty, property; unalienable rights.",
       "The Articles of Confederation (adopted 1781) — built to prevent centralized tyranny — and why they failed.",
       "The initial absence of explicit individual rights; enumerated, reserved and concurrent powers; the supremacy clause; the need for a stronger central government; separation of church and state."]},
 {d:"Tue, Sep 1", h:"Philadelphia, 1787 — plans, compromise, separation of powers",
  pts:["“Why might people who had just fought a revolution be suspicious of strong government?”",
       "Pennsylvania (1776) vs. Massachusetts (1780) constitutions; the colonies by region.",
       "The Convention; the Virginia and New Jersey Plans; the Great and Three-Fifths Compromises; Articles I–VII; the six principles; federal vs. state powers.",
       "Faith: “How do we agree or disagree without compromising our faith?” — the four heresy questions; Romans 14, “the disputable chapter.”",
       "Housekeeping: the exam is terms-and-topic heavy; discussion posts due Saturday."]},
 {d:"Thu, Sep 3", h:"Federalist No. 10 and No. 51",
  pts:["Objectives: explain the central concerns of No. 10 and No. 51; identify faction and checks and balances; apply them to modern examples.",
       "No. 10: faction, “the unequal distribution of property,” large vs. small republics.",
       "No. 51: separation of powers, “ambition must be made to counteract ambition.”",
       "Modern application: polarization (faction) and partisanship (checks and balances).",
       "Exam question: why does Federalist No. 10 matter today? Why does No. 51?",
       "PAC events: three required, 3% of the grade."]},
 {d:"Tue, Sep 8", h:"Wilson ch. 3 — Why federalism matters",
  pts:["What were the Antifederalists right about? Social welfare, health care, the minimum wage, a large standing army, powerful federal courts.",
       "State and local spending is increasing — Ohio’s budget (Medicaid first, K–12 second).",
       "Obamacare as the test of federalism: the individual mandate and the Medicaid expansion; the 2012 ruling; King v. Burwell (2015); the $0 penalty.",
       "Tenth Amendment; supremacy clause; unitary, confederal, federal; Gibbons v. Ogden, Wabash, Arizona v. United States; the elastic clause.",
       "Also began chapter 4 (constitutional, demographic and cultural differences; Tocqueville; the culture war, p. 89).",
       "Thomas pp. 20–27: autoimmunity, psychosis."]},
 {d:"Thu, Sep 10", h:"Federal money, state programs",
  pts:["Grants-in-aid; Medicaid as the largest grant; the rise in health spending since 1960.",
       "Conditions of aid; mandates (civil rights, environmental protection).",
       "Devolution — a Republican-led effort in the 1980s; did it work? Not really, though it sent welfare to the states.",
       "Politics and culture (Thomas): autoimmunity, verificationism, double-mindedness."]},
 {d:"Tue, Sep 15", h:"Wilson ch. 4 — American political culture",
  pts:["Political culture; demographic differences; the melting pot; Tocqueville — who he was, what he did, why he still matters.",
       "The five elements: liberty, equality, democracy, civic duty, individual responsibility.",
       "Vietnam, Watergate and the decline of trust; orthodox vs. progressive; the economic system.",
       "Civic role of religion — Romans 12:2, John 15:19, Revelation 7:9–10, Romans 1:16, Colossians 2:8.",
       "Is there a culture war, or is it made up? Civil society.",
       "Housekeeping: the next quiz is on chapter 5."]}
];

/* The paper, from the syllabus slide */
var PAPER = {
 checks:[
  "Take a position on <b>one question of Christian citizenship</b> — and defend it.",
  "Use <b>one Thomas theme</b>.",
  "Use <b>one or two Wilson chapters</b>.",
  "Use <b>one primary document</b>.",
  "Cite <b>one class discussion, by date</b>.",
  "Raise <b>one honest objection</b> to your own argument — and answer it.",
  "Length: <b>1,200 words</b>.",
  "If you used AI to brainstorm, outline or check grammar: two sentences disclosing it at the end.",
  "Turned in by <b>Thursday, November 19</b>."],
 docs:[
  ["Declaration of Independence (1776)","Unalienable rights; consent of the governed."],
  ["Articles of Confederation (1781)","America’s first national government — and why it failed."],
  ["The Constitution (1787)","Articles I–VII; separation of powers; federalism; the supremacy and necessary-and-proper clauses."],
  ["Federalist No. 10 (Madison)","Faction, and why a large republic controls it."],
  ["Federalist No. 51 (Madison)","“Ambition must be made to counteract ambition.”"],
  ["The Bill of Rights (1791)","The first ten amendments; the First Amendment’s religion clauses."],
  ["The Tenth Amendment","Powers not delegated are reserved to the states or the people."],
  ["The Fourteenth Amendment (1868)","Due process and equal protection — the road to applying the Bill of Rights to the states."]],
 asked:[
  ["Sep 1","How do we agree or disagree without compromising our faith?"],
  ["Aug 25","Do you believe God’s word? — Scripture as the ultimate authority."],
  ["Aug 27","How can a government be powerful enough to govern effectively without becoming powerful enough to threaten liberty?"],
  ["Sep 15","Is there a culture war, or is it made up?"]]
};

/* ================================================================ the review list
   Every "know them" item and objective from the notes, by chapter. "go" is the
   chapter notes; "a" is the section to scroll to.                               */
var GUIDE = {sections:[
 {h:"Chapter 1 · The Study of American Government", tp:"c1", items:[
  {id:"g1-defs", t:"Politics, power, authority, legitimacy", a:"c1-defs",
   short:"Politics settles issues; power gets others to act as you intend; authority is the <i>right</i> to use power; legitimacy is authority conferred by law or a constitution — publicly accepted."},
  {id:"g1-demo", t:"Direct vs. representative democracy", a:"c1-demo",
   short:"Direct: all or most citizens decide. Representative: leaders win a competitive struggle for the popular vote. The Framers feared direct democracy’s “fleeting passions” and wrote “republican form of government.”"},
  {id:"g1-views", t:"The five views of who governs", know:true, a:"c1-views",
   short:"Class (Marxist), power elite, bureaucratic, pluralist, creedal passion."},
  {id:"g1-q", t:"Who governs? To what ends?", a:"c1-q",
   short:"Wilson’s two organizing questions: who holds power and how it is distributed; and what difference that makes to the policies we live under."},
  {id:"g1-types", t:"The four types of politics", know:true, a:"c1-types",
   short:"Majoritarian (spread benefits, spread costs), interest group (concentrated both), client (concentrated benefits, spread costs), entrepreneurial (spread benefits, concentrated costs)."},
  {id:"g1-terms", t:"Key Terms Review slide", a:"c1-terms",
   short:"Politics, government, democracy, power, authority, legitimacy, public policy, interest groups, political culture, elite theory, pluralism."}]},
 {h:"Chapter 2 · The Constitution", tp:"c2", items:[
  {id:"g2-liberty", t:"The problem of liberty", a:"c2-liberty",
   short:"Colonists believed power corrupts and rights are natural and unalienable (Locke). How do you make government strong enough to govern but not strong enough to threaten liberty?"},
  {id:"g2-aoc", t:"The Articles of Confederation and their weaknesses", a:"c2-aoc",
   short:"1781. Weak national government, one-house Congress, no president, no national courts. Congress couldn’t tax citizens directly, regulate interstate commerce, enforce laws or raise an army."},
  {id:"g2-states", t:"Pennsylvania vs. Massachusetts constitutions", a:"c2-states",
   short:"Pennsylvania (1776): most democratic — all power in a one-house legislature. Massachusetts (1780): separation of powers, governor’s veto, judges for life."},
  {id:"g2-shays", t:"Shays’s Rebellion", a:"c2-shays",
   short:"1786–87, Massachusetts: ex-soldier farmers under Daniel Shays fought foreclosures, debt and taxes — and convinced leaders a stronger national government was needed."},
  {id:"g2-plans", t:"Virginia Plan, New Jersey Plan, the compromises", a:"c2-plans",
   short:"Virginia: strong national government, representation by population. New Jersey: weak, equal votes per state. Great Compromise: House by population, Senate two per state. Three-fifths for representation and taxes."},
  {id:"g2-structure", t:"Articles I–VII", a:"c2-structure",
   short:"I legislative · II executive · III judicial · IV relations among states · V amending · VI national supremacy · VII ratification."},
  {id:"g2-principles", t:"The six principles; federal vs. state powers", a:"c2-principles",
   short:"Popular sovereignty, limited government, separation of powers, checks and balances, federalism, judicial review. Enumerated, reserved (10th), concurrent; the supremacy clause."},
  {id:"g2-checks", t:"Checks and balances", a:"c2-checks",
   short:"Veto and override; confirmation of appointments; treaties; impeachment; judicial review of acts of Congress and of the president."},
  {id:"g2-fed", t:"Federalist No. 10 and No. 51 — why each matters today", know:true, a:"c2-fed",
   short:"No. 10: faction is inevitable, so control its effects with a large republic and representation. No. 51: separate powers and let ambition check ambition. Exam question: why does each matter today?"},
  {id:"g2-rights", t:"Antifederalists and the Bill of Rights", a:"c2-ratify",
   short:"Antifederalists wanted a weaker national government and a bill of rights; ratification required the promise of the first ten amendments (1791)."}]},
 {h:"Chapter 3 · Federalism", tp:"c3", items:[
  {id:"g3-sys", t:"Unitary, confederal, federal", a:"c3-systems",
   short:"Unitary: the national government is sovereign (France). Confederal: the states are, and the center does only what they allow (the Articles). Federal: sovereignty shared (the U.S.)."},
  {id:"g3-const", t:"Tenth Amendment, supremacy clause, necessary and proper", a:"c3-const",
   short:"States keep what isn’t delegated; national law wins a conflict; Congress may pass all laws “necessary and proper” to its powers — the elastic clause."},
  {id:"g3-cases", t:"The three landmark cases", a:"c3-cases",
   short:"Gibbons v. Ogden (1824): Congress regulates interstate commerce. Wabash (1886): states may not. Arizona v. United States (2012): only the federal government regulates immigration."},
  {id:"g3-aca", t:"Obamacare as a test of federalism", a:"c3-aca",
   short:"2010 law. 2012, 5–4: the individual mandate upheld as a tax; forcing the Medicaid expansion struck down — states decide. The penalty went to $0 in 2019."},
  {id:"g3-money", t:"Grants-in-aid, conditions of aid, mandates", a:"c3-money",
   short:"Land grants, categorical grants (specific purposes), block grants (broad purposes). Conditions attach to the money; mandates apply regardless."},
  {id:"g3-dev", t:"Devolution", a:"c3-dev",
   short:"Moving power from the national government to state and local governments — pushed by Republicans from the 1980s; the big result was welfare going to the states."}]},
 {h:"Chapter 4 · American Political Culture", tp:"c4", items:[
  {id:"g4-def", t:"Political culture — and the three differences between countries", a:"c4-what",
   short:"A patterned and sustained way of thinking about how political and economic life ought to be carried out. Countries differ constitutionally, demographically and culturally."},
  {id:"g4-toc", t:"Alexis de Tocqueville", a:"c4-toc",
   short:"French observer sent in 1831 to study American prisons; wrote <i>Democracy in America</i> (two volumes) on our government, way of life and people."},
  {id:"g4-five", t:"The five elements of the American political system", know:true, a:"c4-five",
   short:"Liberty, equality, democracy, civic duty, individual responsibility."},
  {id:"g4-rel", t:"The civic role of religion", a:"c4-religion",
   short:"No established church, so diversity was inevitable (Puritans vs. Catholics). Churches trained people in civic skills. Americans pray and give more than Europeans."},
  {id:"g4-war", t:"The culture war: orthodox vs. progressive", a:"c4-war",
   short:"Orthodox: morality and religion decisive. Progressive: personal freedom and solving social problems come first. Rival view: the culture war is a myth (p. 89)."},
  {id:"g4-trust", t:"The decline of trust", a:"c4-trust",
   short:"Steady decline since the late 1950s; Vietnam and Watergate are the big contributors."}]},
 {h:"Chapter 5 · Civil Liberties", tp:"c5", items:[
  {id:"g5-basics", t:"Civil liberties vs. civil rights", a:"c5-basics",
   short:"Liberties protect you <i>from</i> government; rights are about equal treatment by government and others. Clashes over liberties usually end up in the courts."},
  {id:"g5-crisis", t:"Crises that narrowed liberty", a:"c5-culture",
   short:"Sedition Act of 1798 (Jefferson pardoned those convicted), Civil War, World War I, World War II, and the Patriot Act (October 2001)."},
  {id:"g5-states", t:"The Bill of Rights and the states", a:"c5-states",
   short:"The 14th Amendment’s due process clause: Gitlow (1925) begins incorporation; Palko (1937) makes it selective; McDonald v. Chicago (2010) adds the Second Amendment."},
  {id:"g5-speech", t:"Speech: prior restraint, tests, the four unprotected kinds", a:"c5-speech",
   short:"No prior restraint (Blackstone); clear and present danger. Not automatically protected: libel, obscenity, symbolic speech, commercial and youthful speech."},
  {id:"g5-rel", t:"The religion clauses and the wall of separation", a:"c5-religion",
   short:"Establishment clause (no official religion) and free exercise clause. Jefferson’s “wall of separation” — whether the First Amendment really requires it is debated."},
  {id:"g5-crime", t:"Exclusionary rule and searches", a:"c5-crime",
   short:"Evidence gathered unconstitutionally can’t be used at trial. A search is reasonable with a warrant or as part of a lawful arrest."}]}
]};
