/* ================================================================ chapter 3
   Sources: the Sep 8 and Sep 10 class notes, the typed chapter 3 notes, and the
   chapter 3 quiz.                                                              */
CH.c3 = {n:3, title:"Federalism", short:"Federalism",
 notes:[
  {id:"c3-why", h:"Why federalism matters", body:
   '<p><b>Federalism</b> is government authority shared by national and state governments. Why it matters (Sep 8): it <b>balances power</b>, it <b>protects our freedom</b>, it <b>better manages diversity</b>, and it <b>improves responsiveness</b>.</p>'+
   '<h3>What were the Antifederalists right about?</h3><p>The federal government has taken on responsibilities that traditionally fell to the states:</p>'+
   '<div class="chips"><span class="chip">Social welfare</span><span class="chip">Health care</span><span class="chip">Minimum wage</span><span class="chip">A large standing army</span><span class="chip">Powerful federal courts</span></div>'+
   '<p>The Antifederalists were especially afraid of a large standing army marching into a state.</p>'+
   '<h3>Who spends the money</h3><p>State and local government spending has been <b>increasing</b>. Ohio’s taxes go to Medicaid (the largest single program), K–12 education (the second largest), higher education, general government, corrections, and other health and human services. Wilson’s point: the main challenge states face as they take on more programs is <b>funding</b>.</p>'+
   '<div class="exam-tip"><b>Obamacare in one line</b>The 2010 federal health reform law, and the legal challenges to it, are in large part battles over how the federal government should relate to the states.</div>'},
  {id:"c3-systems", h:"Unitary, confederal, federal", body:
   '<p><b>Sovereignty</b> — supreme or ultimate political authority. The three systems differ in where it sits.</p>'+
   '<div class="tblwrap"><table class="tbl"><thead><tr><th>System</th><th>Where sovereignty sits</th><th>Example</th></tr></thead><tbody>'+
   '<tr><td class="head">Unitary</td><td class="sm">Fully vested in the national government, not the states.</td><td class="sm">France — a unitary democracy.</td></tr>'+
   '<tr><td class="head">Confederal</td><td class="sm">The state governments are sovereign; the national government can do only what the states permit. The center is way too weak.</td><td class="sm">The Articles of Confederation.</td></tr>'+
   '<tr><td class="head">Federal</td><td class="sm">The national and state governments share sovereignty.</td><td class="sm">The United States; also Canada and Australia.</td></tr>'+
   '</tbody></table></div>'},
  {id:"c3-const", h:"Tenth Amendment, supremacy, necessary and proper", body:
   '<ul><li><b>Tenth Amendment</b> — the states’ rights amendment. State governments are constitutionally protected and have final authority in many government activities: a “specially protected existence.”</li>'+
   '<li><b>Supremacy clause</b> — policy passed in Washington must be implemented in states and cities across the entire country.</li>'+
   '<li><b>Necessary and proper clause</b> — Article I, Section 8, Clause 18. It has permitted Congress to exercise powers not specifically given to it (enumerated) by the Constitution.</li></ul>'+
   '<div class="quote">Congress shall have the power to make all laws which shall be necessary and proper for carrying into Execution the foregoing Powers, and all other Powers vested by this Constitution in the Government of the United States, or in any Department or Officer thereof.<small>Article I, Section 8, Clause 18 — “elastic language,” because it stretches over a large range</small></div>'+
   '<p>Wilson also covers <i>McCulloch v. Maryland</i> (1819), where the Court read the clause to give Congress implied powers — the same elastic idea.</p>'},
  {id:"c3-cases", h:"Three landmark cases", body:
   '<div class="rules">'+
   '<div class="rule"><h4>1824 · Commerce clause</h4><p><b>Gibbons v. Ogden</b></p><p class="ex">The Constitution’s commerce clause gives the national government exclusive power to regulate interstate commerce, including navigation. A test of federalism; it helped prevent price gouging by state-granted monopolies.</p></div>'+
   '<div class="rule"><h4>1886 · States may not</h4><p><b>Wabash, St. Louis &amp; Pacific Railroad v. Illinois</b></p><p class="ex">States may not regulate interstate commerce.</p></div>'+
   '<div class="rule"><h4>2012 · Immigration</h4><p><b>Arizona v. United States</b></p><p class="ex">Only the federal government may regulate immigration laws and enforcement. Reinforced federal preemption in immigration law, but left room for cooperative enforcement — state officers may communicate with federal authorities during lawful stops.</p></div>'+
   '</div>'},
  {id:"c3-aca", h:"Obamacare: the test of federalism", body:
   '<ul><li><b>2010</b> — the Patient Protection and Affordable Care Act, President Obama’s signature health care move. The test of federalism: telling states that the <b>individual mandate</b> was necessary, and requiring the <b>expansion of Medicaid</b> — or risk losing Medicaid funding.</li>'+
   '<li><b>2012</b> — the Supreme Court weighs in, 5 to 4: the individual mandate is constitutional <b>as a tax</b>, since Congress has the constitutional right to levy taxes. <b>But</b> the Medicaid provision was ruled unconstitutional, so states are left to decide what to do with Medicaid.</li>'+
   '<li><b>2015</b> — <i>King v. Burwell</i>. States can set up exchanges; only about 12 did.</li>'+
   '<li><b>2019</b> — the IRS penalty for not having insurance is set at <b>$0</b> by Congress. You can stay on your parents’ insurance until you are 26.</li></ul>'},
  {id:"c3-money", h:"Federal money, state programs", body:
   '<p><b>Grants-in-aid</b> — money given by the national government to the states.</p>'+
   '<div class="tblwrap"><table class="tbl n0"><tbody>'+
   '<tr><td class="head">Land grants</td><td class="sm">The early years: grants to support wagon roads, canals, railroads and flood-control projects.</td></tr>'+
   '<tr><td class="head">Categorical grants</td><td class="sm">For specific purposes — building an airport, for example.</td></tr>'+
   '<tr><td class="head">Block grants</td><td class="sm">For broad purposes, with more state discretion; consolidating categorical grants into block grants was part of devolution.</td></tr>'+
   '</tbody></table></div>'+
   '<p>Medicaid is the largest grant: the federal government provided about <b>$668 billion</b> toward it, about 9.5% of federal spending, with a large rise in health care spending since 1960 — and, per Sep 10, some $9 billion in fraud.</p>'+
   '<ul><li><b>Conditions of aid</b> — terms set by the national government that states must meet if they are to receive certain federal funds.</li>'+
   '<li><b>Mandates</b> — requirements that apply whether or not the state takes the money: civil rights, environmental protection.</li></ul>'},
  {id:"c3-dev", h:"Devolution", body:
   '<p><b>Devolution</b> — the transfer of power from the national government to state and local governments.</p>'+
   '<ul><li>A Republican-led effort in the 1980s; grant consolidation.</li><li>Before the 1980s, federal people controlled more.</li><li>Has it worked? <b>Not really</b> — but it did send power over welfare to the states. Funding and costs only went up.</li></ul>'}
 ],
 decks:[
  {id:"terms", label:"Key terms", cards:[
   ["Federalism","Government authority shared by national and state governments"],
   ["Sovereignty","Supreme or ultimate political authority"],
   ["Unitary system","Sovereignty is fully vested in the national government — France"],
   ["Confederal system","The states are sovereign; the national government does only what they permit — the Articles"],
   ["Federal system","National and state governments share sovereignty — the United States"],
   ["Tenth Amendment","The states’ rights amendment: powers not delegated are reserved to the states"],
   ["Supremacy clause","Policy passed in Washington must be implemented in states and cities across the country"],
   ["Necessary and proper clause","Article I, Section 8, Clause 18 — lets Congress exercise powers not enumerated"],
   ["Elastic clause","The nickname for necessary and proper, because it stretches over a large range"],
   ["Commerce clause","Gives Congress the power to regulate interstate commerce, including navigation"],
   ["Federal preemption","Federal law displaces state law in a field — immigration, after Arizona v. United States"],
   ["Grants-in-aid","Money given by the national government to the states"],
   ["Land grants","Early federal grants for wagon roads, canals, railroads and flood control"],
   ["Categorical grants","Federal grants for specific purposes, such as building an airport"],
   ["Block grants","Federal grants for broad purposes, with more state discretion"],
   ["Conditions of aid","Terms states must meet to receive certain federal funds"],
   ["Mandates","Federal requirements that apply regardless of funding — civil rights, environmental protection"],
   ["Devolution","The transfer of power from the national government to state and local governments"],
   ["Individual mandate","Obamacare’s requirement to have health insurance or pay — upheld in 2012 as a tax"],
   ["Medicaid expansion","The Obamacare provision the Court said states could not be forced into"]]},
  {id:"cases", label:"Cases & dates", cards:[
   ["Gibbons v. Ogden","1824 — the commerce clause gives the national government exclusive power over interstate commerce"],
   ["Wabash v. Illinois","1886 — states may not regulate interstate commerce"],
   ["Arizona v. United States","2012 — only the federal government may regulate immigration enforcement"],
   ["McCulloch v. Maryland","1819 — the necessary-and-proper clause gives Congress implied powers"],
   ["The Affordable Care Act","2010 — Obamacare, President Obama’s signature health care law"],
   ["The 2012 Obamacare ruling","5–4: the individual mandate stands as a tax; the forced Medicaid expansion falls"],
   ["King v. Burwell","2015 — states can set up exchanges; only about 12 did"],
   ["The $0 penalty","2019 — Congress set the IRS penalty for having no insurance at zero"],
   ["Age 26","How long you can stay on your parents’ insurance under Obamacare"],
   ["The 1980s","Devolution — a Republican-led effort to send power back to the states"]]}
 ]
};

QB = QB.concat([
 {tp:"c3",real:1,t:"mc",q:"How many amendments to the US Constitution has there been up till now?",a:"27",w:["10","7","14"],e:"27 — the latest, the Twenty-seventh, in 1992. You missed this one on Canvas."},
 {tp:"c3",real:2,t:"mc",q:"What is the political definition of devolution?",a:"The transfer of power from the national government to state and local governments.",w:["The transfer of power from the national local government to state and federal governments.","The transfer of state funded health guidelines to local judiciary.","The transfer of power to the United Nations from the US government."],e:"National → state and local."},
 {tp:"c3",real:3,t:"mc",q:"According to our main text, what subject is perhaps the main challenge states face today when assuming more responsibility for public programs.",a:"funding",w:["legitimacy","power","votes"],e:"Funding."},
 {tp:"c3",real:4,t:"mc",q:"When was the national healthcare law, termed Obamacare, signed into law?",a:"2010",w:["2012","2008","2011"],e:"2010. The Supreme Court ruling came in 2012."},
 {tp:"c3",real:5,t:"mc",q:"What was the name of the mandate in Obamacare that caused so much debate across America and required everyone to have health insurance or pay a mandate?",a:"individual mandate",w:["group coverage mandate","annuities","umbrella mandate"],e:"The individual mandate — upheld as a tax in 2012."},
 {tp:"c3",real:6,t:"mc",q:"Constitutionally, in America’s federal system, what governments have a specially protected existence and the authority to make final decisions over many governmental activities?",a:"state",w:["House of Representatives","unions","Senators"],e:"State governments — the Tenth Amendment."},
 {tp:"c3",real:7,t:"mc",q:"Who was not one of the writers of the Federalist Papers?",a:"John Adams",w:["John Jay","Alexander Hamilton","James Madison"],e:"John Adams — he was in London at the time. Hamilton, Madison and Jay wrote them. You missed this one on Canvas."},
 {tp:"c3",real:8,t:"mc",q:"Which country, mentioned in our text, does not operate through a federal system of government?",a:"France",w:["United States","Canada","Australia"],e:"France is a unitary system."},
 {tp:"c3",real:9,t:"mc",q:"What type of federal grants were also made to support the building of wagon roads, canals, railroads, and flood-control projects in the early years of government operations?",a:"land grants",w:["bridge grants","Ulysses S Grant","pell grants"],e:"Land grants."},
 {tp:"c3",real:10,t:"mc",q:"What type of federal grants are used for specific purposes, such as building an airport?",a:"categorical grants",w:["Big-7 grants","block grants","matching grants"],e:"Categorical grants. Block grants are for broad purposes."},
 {tp:"c3",t:"mc",q:"Gibbons v. Ogden (1824) held that:",a:"the commerce clause gives the national government exclusive power to regulate interstate commerce",w:["states may regulate interstate commerce","only states may regulate navigation","Congress may not levy taxes"],e:"Interstate commerce, including navigation, belongs to Congress."},
 {tp:"c3",t:"mc",q:"Wabash, St. Louis &amp; Pacific Railroad v. Illinois (1886) held that:",a:"states may not regulate interstate commerce",w:["railroads are exempt from regulation","states may regulate interstate commerce","Congress may not regulate railroads"],e:"States may not regulate interstate commerce."},
 {tp:"c3",t:"mc",q:"Arizona v. United States (2012) held that:",a:"only the federal government may regulate immigration laws and enforcement",w:["states may write their own immigration laws","immigration is a reserved power","state officers may never talk to federal authorities"],e:"Federal preemption — with room for cooperative enforcement during lawful stops."},
 {tp:"c3",t:"mc",q:"A system in which sovereignty is fully vested in the national government is:",a:"unitary",w:["federal","confederal","bicameral"],e:"Unitary — France."},
 {tp:"c3",t:"mc",q:"A system in which the states are sovereign and the national government can do only what they permit is:",a:"confederal",w:["unitary","federal","republican"],e:"Confederal — the Articles of Confederation."},
 {tp:"c3",t:"mc",q:"The necessary-and-proper clause is found in:",a:"Article I, Section 8, Clause 18",w:["the Tenth Amendment","Article VI","the Preamble"],e:"Article I, Section 8, Clause 18 — the elastic clause."},
 {tp:"c3",t:"mc",q:"Why is the necessary-and-proper clause called “elastic”?",a:"It stretches to cover a large range of powers not specifically listed",w:["It can be repealed by a simple majority","It applies only in emergencies","It expires every ten years"],e:"It has let Congress exercise powers not enumerated."},
 {tp:"c3",t:"mc",q:"In the 2012 ruling on Obamacare, the individual mandate was upheld because:",a:"it could be treated as a tax, and Congress may levy taxes",w:["health care is interstate commerce","the states consented to it","the Tenth Amendment requires it"],e:"5–4, as a tax."},
 {tp:"c3",t:"mc",q:"In the same 2012 ruling, which part of Obamacare was struck down?",a:"Forcing states to expand Medicaid or lose Medicaid funding",w:["The individual mandate","Coverage until age 26","The exchanges"],e:"The Medicaid provision — so states decide for themselves."},
 {tp:"c3",t:"mc",q:"Ohio’s largest single program, by spending, is:",a:"Medicaid",w:["K–12 education","Corrections","Higher education"],e:"Medicaid first, K–12 education second."},
 {tp:"c3",t:"mc",q:"Terms that states must meet to receive certain federal funds are called:",a:"conditions of aid",w:["mandates","block grants","devolution"],e:"Conditions of aid. Mandates apply regardless of funding."},
 {tp:"c3",t:"mc",q:"Civil rights and environmental protection were the class examples of:",a:"mandates",w:["conditions of aid","land grants","categorical grants"],e:"Mandates."},
 {tp:"c3",t:"mc",q:"Devolution was chiefly a:",a:"Republican-led effort in the 1980s",w:["Democratic-led effort in the 1960s","Supreme Court decision in 2012","provision of the Articles of Confederation"],e:"The 1980s; its lasting effect was sending welfare to the states."},
 {tp:"c3",t:"mc",q:"Which is NOT one of the four reasons federalism matters (Sep 8)?",a:"It lowers taxes",w:["It balances power","It protects our freedom","It improves responsiveness"],e:"Balances power, protects freedom, manages diversity, improves responsiveness."},
 {tp:"c3",t:"mc",q:"The largest federal grant program is:",a:"Medicaid",w:["Highways","Education","Housing"],e:"Medicaid — about 9.5% of federal spending."},
 {tp:"c3",ap:true,t:"mc",q:"A state passes its own law letting state police arrest people for immigration violations. Which case says it cannot?",a:"Arizona v. United States",w:["Gibbons v. Ogden","Wabash v. Illinois","King v. Burwell"],e:"Only the federal government regulates immigration enforcement."},
 {tp:"c3",ap:true,t:"mc",q:"A state grants one company a monopoly on steamboat routes into a neighboring state. Which case controls?",a:"Gibbons v. Ogden",w:["Arizona v. United States","McCulloch v. Maryland","Wabash v. Illinois"],e:"Interstate commerce, including navigation, belongs to Congress."},
 {tp:"c3",ap:true,t:"mc",q:"Congress tells states they will lose highway money unless they raise the drinking age. This is:",a:"a condition of aid",w:["a mandate","devolution","a block grant"],e:"Money with strings attached = condition of aid."},
 {tp:"c3",ap:true,t:"mc",q:"A federal law requires wheelchair access in public buildings whether or not federal money is involved. This is:",a:"a mandate",w:["a condition of aid","a categorical grant","preemption"],e:"A mandate applies regardless of funding."},
 {tp:"c3",ap:true,t:"mc",q:"A federal grant labeled “community development,” which the state may spend as it sees fit within that area, is:",a:"a block grant",w:["a categorical grant","a land grant","a condition of aid"],e:"Broad purpose, state discretion = block grant."},
 {tp:"c3",t:"tf",q:"France operates through a federal system of government.",a:false,e:"False — France is unitary."},
 {tp:"c3",t:"tf",q:"In a confederal system the state governments are sovereign.",a:true,e:"True."},
 {tp:"c3",t:"tf",q:"The Supreme Court upheld the requirement that states expand Medicaid or lose their Medicaid funding.",a:false,e:"False — that provision was struck down; states decide."},
 {tp:"c3",t:"tf",q:"Under Arizona v. United States, state officers may still communicate with federal authorities during lawful stops.",a:true,e:"True — room was left for cooperative enforcement."},
 {tp:"c3",t:"tf",q:"Wabash v. Illinois (1886) allowed states to regulate interstate commerce.",a:false,e:"False — it said states may not."},
 {tp:"c3",t:"tf",q:"The Tenth Amendment reserves to the states the powers not delegated to the national government.",a:true,e:"True — the states’ rights amendment."},
 {tp:"c3",t:"tf",q:"Devolution clearly succeeded in cutting federal funding and costs.",a:false,e:"False — “not really”; funding and costs only went up, though welfare did move to the states."},
 {tp:"c3",t:"tf",q:"State and local government spending has been decreasing.",a:false,e:"False — it has been increasing."}
]);
