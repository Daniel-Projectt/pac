/* ================================================================ the Exam 50
   Her exam study guide, question for question: every item comes from a line the
   guide names (chapters 1–4), plus chapter 5 terms and a few chapter 6 ideas.
   Her rule: no court cases from chapters 5 and 6. (The two chapter 3 cases are
   named in the guide itself, so they stay.) Fixed order, guide order; the three
   "know them" lists are asked as name-them questions.                           */
var EXAM50_LISTS = {c1a:"five-views", c1b:"four-types", c4a:"five-elements"};
var EXAM50 = [
 /* ---- chapter 1 (9 + two lists) ---- */
 {tp:"c1",t:"mc",q:"A conflict, real or apparent, between the interests, ideas, or beliefs of different citizens is called:",a:"an issue",w:["politics","power","legitimacy"],e:"An issue — politics is the activity by which an issue is agitated or settled."},
 {tp:"c1",t:"mc",q:"“The activity — negotiation, argument, discussion, application of force, persuasion, etc. — by which an issue is agitated or settled” defines:",a:"politics",w:["an issue","authority","democracy"],e:"Politics."},
 {tp:"c1",t:"mc",q:"The ability of one person to get another person to act in accordance with the first person’s intentions is:",a:"power",w:["authority","legitimacy","a benefit"],e:"Power. Authority is the right to use power."},
 {tp:"c1",t:"mc",q:"Authority means:",a:"the right to use power",w:["the ability to make others act","political authority conferred by a constitution","rule by the many"],e:"Authority is the right to use power; legitimacy is authority conferred by law or a constitution."},
 {tp:"c1",t:"mc",q:"Political authority conferred by law or by a state or national constitution is:",a:"legitimacy",w:["power","an issue","a republic"],e:"Legitimacy."},
 {tp:"c1",t:"mc",q:"Aristotle’s definition of democracy is:",a:"the “rule of the many”",w:["the “rule of the few”","the “rule of the best”","the “rule of law”"],e:"Democracy describes regimes that come as close as possible to the rule of the many."},
 {tp:"c1",t:"mc",q:"A government in which leaders make decisions by winning a competitive struggle for the popular vote is:",a:"representative democracy",w:["direct or participatory democracy","a confederation","a unitary system"],e:"Direct democracy is where all or most citizens participate directly."},
 {tp:"c1",t:"mc",q:"Why did many of the Framers distrust direct democracy?",a:"People often decide large issues on the basis of fleeting passions",w:["Too few citizens could vote","The states would lose all their power","It would require a king"],e:"They believed it would lead to bad decisions."},
 {tp:"c1",t:"tf",q:"The Constitution uses the word “democracy”; it calls the government a democracy directly.",a:false,e:"False — it speaks of a “republican form of government,” meaning what we call representative democracy."},
 {tp:"c1",t:"list",list:"c1a"},
 {tp:"c1",t:"mc",q:"According to Wilson, who are the preferred vehicles for the advocates of unpopular causes?",a:"The courts",w:["The political parties","Congress","State governors"],e:"The courts."},
 {tp:"c1",t:"list",list:"c1b"},
 /* ---- chapter 2 (12) ---- */
 {tp:"c2",t:"mc",q:"Where and when was the Constitutional Convention held?",a:"Philadelphia, 1787",w:["Boston, 1776","New York, 1789","Philadelphia, 1776"],e:"Philadelphia, 1787."},
 {tp:"c2",t:"mc",q:"Unalienable rights are based on:",a:"nature and Providence, not the whims or preferences of people",w:["the laws passed by Congress","the will of the majority","the king’s grant"],e:"Unalienable rights — from nature and Providence."},
 {tp:"c2",t:"mc",q:"The Articles of Confederation were:",a:"a weak constitution that governed America during the Revolutionary War",w:["the plan for a strong national government","the first ten amendments","the Massachusetts constitution of 1780"],e:"A weak constitution."},
 {tp:"c2",t:"mc",q:"Which state constitution was the most radically democratic, giving all power to a one-house (unicameral) legislature?",a:"Pennsylvania, 1776",w:["Massachusetts, 1780","Virginia, 1776","New Jersey, 1787"],e:"Pennsylvania’s constitution of 1776."},
 {tp:"c2",t:"mc",q:"The Massachusetts constitution of 1780 was less democratic. Which feature did it have?",a:"A governor who could veto the legislature, and judges who served for life",w:["All power in a one-house legislature","No governor at all","Judges elected every year"],e:"A clear separation of powers among the branches."},
 {tp:"c2",t:"mc",q:"Shays’s Rebellion (1787) was an attempt by ex-Revolutionary War soldiers to:",a:"prevent foreclosures of farms caused by high interest rates and taxes",w:["overthrow the Continental Congress","free enslaved people in Virginia","stop the Constitutional Convention"],e:"It occurred in Massachusetts."},
 {tp:"c2",t:"mc",q:"The Framers’ defense of liberty as a natural right came from the writings of:",a:"John Locke",w:["Thomas Hobbes","Alexis de Tocqueville","Aristotle"],e:"The 17th-century English philosopher John Locke."},
 {tp:"c2",t:"mc",q:"The proposal to create a strong national government was the:",a:"Virginia Plan",w:["New Jersey Plan","Great Compromise","Articles of Confederation"],e:"The New Jersey Plan proposed a weak national government."},
 {tp:"c2",t:"mc",q:"The Great Compromise created:",a:"a House based on state population and a Senate with two members for each state",w:["one house with equal votes for every state","a Senate elected by population","a single executive council"],e:"A popularly elected House and a state-selected Senate."},
 {tp:"c2",t:"mc",q:"Government authority shared by national and state governments is:",a:"federalism",w:["separation of powers","enumerated powers","a unitary system"],e:"Federalism."},
 {tp:"c2",t:"mc",q:"Powers given to the national government alone are:",a:"enumerated powers",w:["reserved powers","conditions of aid","separation of powers"],e:"Enumerated powers."},
 {tp:"c2",t:"mc",q:"Those who favored a weaker national government were the:",a:"Antifederalists",w:["Federalists","Framers","Loyalists"],e:"The Antifederalists."},
 /* ---- chapter 3 (7) ---- */
 {tp:"c3",t:"mc",q:"The fight over the 2010 federal health reform law (Obamacare) was in large part a battle over:",a:"how the federal government should relate to the states",w:["the separation of church and state","the president’s war powers","the right to a jury trial"],e:"A federalism fight."},
 {tp:"c3",t:"mc",q:"Gibbons v. Ogden (1824) held that the commerce clause gives the national government exclusive power to regulate:",a:"interstate commerce",w:["immigration","elections","state taxes"],e:"Interstate commerce."},
 {tp:"c3",t:"tf",q:"Arizona v. United States (2012) held that only the federal government may regulate immigration laws and enforcement.",a:true,e:"True — only the federal government regulates immigration."},
 {tp:"c3",t:"mc",q:"A system where state governments are sovereign and the national government can do only what the states permit is:",a:"a confederation (confederal system)",w:["a unitary system","a federal system","a republic"],e:"Unitary: all sovereignty national. Federal: shared."},
 {tp:"c3",t:"mc",q:"The Tenth Amendment is best known as the amendment for:",a:"states’ rights",w:["freedom of speech","the right to bear arms","due process"],e:"States’ rights."},
 {tp:"c3",t:"mc",q:"Which clause has let Congress exercise powers not specifically enumerated in the Constitution?",a:"The “necessary and proper” clause",w:["The commerce clause","The supremacy clause","The establishment clause"],e:"Congress may pass all laws necessary and proper to its duties."},
 {tp:"c3",t:"mc",q:"Terms set by the national government that states must meet to receive certain federal funds are:",a:"conditions of aid",w:["grants-in-aid","devolution","enumerated powers"],e:"Grants-in-aid are the money; conditions of aid are the strings."},
 /* ---- chapter 4 (8 + one list) ---- */
 {tp:"c4",t:"mc",q:"A patterned and sustained way of thinking about how political and economic life ought to be carried out is:",a:"political culture",w:["civic duty","civil society","the culture war"],e:"Political culture."},
 {tp:"c4",t:"mc",q:"Who wrote Democracy in America, in two volumes, examining our government, lifestyle and people?",a:"Alexis de Tocqueville",w:["John Locke","James Madison","Max Weber"],e:"Tocqueville."},
 {tp:"c4",t:"list",list:"c4a"},
 {tp:"c4",t:"mc",q:"A majority of people in Germany, Italy and Poland think success in life is determined by:",a:"forces outside an individual’s control",w:["hard work alone","education alone","religious faith"],e:"Americans disagree."},
 {tp:"c4",t:"mc",q:"A belief that one has an obligation to participate in civic and political affairs is:",a:"civic duty",w:["civic competence","political culture","orthodoxy"],e:"Civic duty."},
 {tp:"c4",t:"mc",q:"Religious people donate about how much more money to charity than secular people?",a:"More than three times as much",w:["About the same","Twice as much","Half as much"],e:"More than three times as much."},
 {tp:"c4",t:"mc",q:"Why was religious diversity inevitable in America?",a:"There was no established or official religion for the nation",w:["The Constitution required several churches","Congress funded every denomination","Most colonists were Catholic"],e:"No established church — and early friction between Puritans and Catholics."},
 {tp:"c4",t:"mc",q:"The belief that morality and religion ought to be of decisive importance is:",a:"orthodox",w:["progressive","libertarian","secular"],e:"Progressive: personal freedom and solving social problems matter more than religion."},
 {tp:"c4",t:"mc",q:"Which two events are considered huge contributors to Americans’ distrust of government?",a:"The Vietnam War and the Watergate scandal",w:["World War II and the Great Depression","The Civil War and Reconstruction","The Cold War and the moon landing"],e:"Trust has declined more or less steadily since the late 1950s."},
 /* ---- chapter 5: terms and definitions, no court cases (7) ---- */
 {tp:"c5",t:"mc",q:"Protections from government — what government may not do to you, such as limit speech or religion — are:",a:"civil liberties",w:["civil rights","enumerated powers","conditions of aid"],e:"Civil rights are about equal treatment."},
 {tp:"c5",t:"mc",q:"“No state shall deprive any person of life, liberty, or property without due process of law” is the:",a:"due process clause",w:["equal protection clause","establishment clause","necessary and proper clause"],e:"From the Fourteenth Amendment."},
 {tp:"c5",t:"mc",q:"Censorship before publication, which freedom of the press forbids, is called:",a:"prior restraint",w:["libel","sedition","symbolic speech"],e:"Prior restraint."},
 {tp:"c5",t:"mc",q:"A written statement that defames the character of another person is:",a:"libel",w:["slander","obscenity","sedition"],e:"Libel is written; slander is spoken."},
 {tp:"c5",t:"mc",q:"The First Amendment’s ban on laws “respecting an establishment of religion” is the:",a:"establishment clause",w:["free exercise clause","supremacy clause","due process clause"],e:"Its partner is the free exercise clause."},
 {tp:"c5",t:"mc",q:"The rule that evidence gathered in violation of the Constitution cannot be used at trial is the:",a:"exclusionary rule",w:["probable cause rule","good-faith rule","prior restraint"],e:"The exclusionary rule."},
 {tp:"c5",t:"mc",q:"Reasonable cause for issuing a search warrant or making an arrest — more than mere suspicion — is:",a:"probable cause",w:["due process","reasonable doubt","civil forfeiture"],e:"Probable cause."},
 /* ---- chapter 6: a few ideas, no court cases (3) ---- */
 {tp:"c6",t:"mc",q:"Civil rights refer to cases in which some group is:",a:"denied access to facilities, opportunities, or services available to other groups",w:["protected from government limits on speech","given more power than the states","tried without due process"],e:"The real question is whether a difference in treatment is reasonable."},
 {tp:"c6",t:"mc",q:"Which test do courts apply to laws that draw distinctions by race?",a:"Strict scrutiny",w:["Rational basis","Intermediate scrutiny","Clear and present danger"],e:"Rational basis for most laws, intermediate scrutiny for sex, strict scrutiny for race."},
 {tp:"c6",t:"mc",q:"Segregation by law is called de jure segregation. Segregation that results from where people live is called:",a:"de facto segregation",w:["desegregation","affirmative action","integration"],e:"De jure = by law; de facto = in fact."}
];
function examFiftyQuestions(keys){
  var out = [];
  EXAM50.forEach(function(b, i){
    var key = "x:"+i;
    if(keys && keys.indexOf(key) < 0) return;
    var q;
    if(b.t === "list"){
      var li = -1; LISTS.forEach(function(l, k){ if(l.id === EXAM50_LISTS[b.list]) li = k; });
      q = fromList(li);
    } else q = fromBank(b, 0);
    q.key = key;
    out.push(q);
  });
  return out;
}
