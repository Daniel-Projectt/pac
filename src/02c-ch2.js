/* ================================================================ chapter 2
   Sources: the Aug 27, Sep 1 and Sep 3 class notes and slides (The Articles of
   Confederation; Weaknesses; Shays’s Rebellion; The Framers; Structure of the
   Constitution; Principles of the Constitution; Federal vs. State Powers;
   Checks & Balances; Federalist No. 10 vs. No. 51; the Articles-and-amendments
   chart), the typed chapter 2 notes, and the chapter 2 quiz.                    */
CH.c2 = {n:2, title:"The Constitution", short:"Constitution",
 notes:[
  {id:"c2-liberty", h:"The problem of liberty", body:
   '<div class="quote">How can a government be powerful enough to govern effectively without becoming powerful enough to threaten liberty?<small>The question behind chapter 2 — Aug 27</small></div>'+
   '<h3>What the colonists believed</h3><ul><li>Political power can be abused.</li><li>Government should be limited.</li><li>Individual liberty must be protected.</li><li>Citizens possess natural rights.</li></ul>'+
   '<p>Men will seek power, many colonists believed, because they are <b>ambitious, greedy and easily corrupted</b>. The Revolution changed where political authority comes from: a legitimate government requires the <b>consent of the governed</b>.</p>'+
   '<h3>John Locke</h3><p>The Framers’ defense of liberty as a natural right came from the 17th-century English philosopher <b>John Locke</b>: the rights to <b>life, liberty and property</b>. Locke did not believe an all-powerful government was necessary, or that democracy was impossible.</p>'+
   '<p><b>Unalienable rights</b> are based on nature and Providence, not on the whims or preferences of people. (The Declaration’s spelling — and the quiz answer — is <i>unalienable</i>, not <i>inalienable</i>.)</p>'+
   '<div class="exam-tip"><b>The Framers’ motives</b>Wilson’s answer: a <b>mixture of motives</b> — not solely political, not solely economic, and not an attempt to mimic England’s constitution.</div>'+
   '<p class="ask">“Why might people who had just fought a revolution be suspicious of strong government?” — Sep 1</p>'},
  {id:"c2-aoc", h:"The Articles of Confederation", body:
   '<p><b>America’s first national government.</b> Adopted in 1781. Purpose: <b>prevent centralized tyranny</b>. Wilson calls it “a weak constitution that governed America during the Revolutionary War.”</p>'+
   '<div class="boxrow"><div class="box"><h4>Key features</h4><ul><li>Weak national government</li><li>Strong state governments</li><li>One-house legislature</li><li>No president</li><li>No national court system</li></ul></div>'+
   '<div class="box"><h4>Congress lacked authority to</h4><ul><li>Tax citizens directly</li><li>Regulate interstate commerce</li><li>Enforce laws</li><li>Raise a standing army</li><li>Resolve disputes effectively among states</li></ul></div></div>'+
   '<p>As a result, governing became difficult. The Articles failed under <b>economic instability, state rivalries, trade disputes and weak national authority</b>, and the difficulty of paying Revolutionary War debts — and they highlighted the need for a stronger central government.</p>'},
  {id:"c2-states", h:"Two state constitutions", body:
   '<div class="tblwrap"><table class="tbl"><thead><tr><th></th><th>Pennsylvania, 1776</th><th>Massachusetts, 1780</th></tr></thead><tbody>'+
   '<tr><td class="head">Character</td><td class="sm">The most radically democratic of the new state regimes.</td><td class="sm">A good deal less democratic.</td></tr>'+
   '<tr><td class="head">Design</td><td class="sm">All power given to a one-house (unicameral) legislature; one-year terms.</td><td class="sm">A clear separation of powers among the branches; a directly elected governor who could veto acts of the legislature; judges serving for life.</td></tr>'+
   '<tr><td class="head">People</td><td class="sm">Thomas Paine was a huge fan; France loved it.</td><td class="sm">John Adams played a big role.</td></tr>'+
   '<tr><td class="head">In class</td><td class="sm">The radical model.</td><td class="sm">The backdrop to Shays’s Rebellion — “the governor had too much power.”</td></tr>'+
   '</tbody></table></div>'+
   '<h3>The colonies by region (Sep 1)</h3><div class="chips"><span class="chip"><b>New England</b> — Connecticut, Rhode Island, Massachusetts, New Hampshire</span><span class="chip"><b>Middle</b> — New York, Pennsylvania, Delaware, New Jersey</span><span class="chip"><b>Southern</b> — Maryland, Virginia, North Carolina, South Carolina, Georgia</span></div>'},
  {id:"c2-shays", h:"Shays’s Rebellion", body:
   '<p><b>1786–1787, Massachusetts.</b> Farmers — many of them ex-Revolutionary War soldiers — protested <b>debt, high taxes and foreclosures</b>, led by <b>Daniel Shays</b>. Wilson: “a 1787 rebellion in which ex-Revolutionary War soldiers attempted to prevent foreclosures of farms as a result of high interest rates and taxes.”</p>'+
   '<div class="exam-tip"><b>Why it matters</b>A turning point. The rebellion convinced many leaders that stronger national institutions were necessary — the road to Philadelphia. Madison later used it (with the Whiskey Rebellion) as an example of faction in Federalist No. 10.</div>'},
  {id:"c2-convention", h:"Philadelphia, 1787", body:
   '<ul><li><b>Official purpose:</b> revise the Articles of Confederation. <b>Actual outcome:</b> the delegates quickly concluded they needed an entirely new constitution.</li>'+
   '<li><b>55 delegates</b> — lawyers, merchants, planters, political leaders. No women, no people of color.</li>'+
   '<li><b>Notable absences:</b> Thomas Jefferson, John Adams, Patrick Henry. <b>Rhode Island</b> sent no delegates at all.</li>'+
   '<li><b>George Washington</b> presided over the convention.</li></ul>'+
   '<p>The Framers intended to create a <b>republic</b> — a government in which a system of representation operates — not a direct democracy.</p>'},
  {id:"c2-plans", h:"Plans and compromises", body:
   '<div class="tblwrap"><table class="tbl"><thead><tr><th></th><th>Virginia Plan</th><th>New Jersey Plan</th></tr></thead><tbody>'+
   '<tr><td class="head">Goal</td><td class="sm">A <b>strong</b> national government.</td><td class="sm">A <b>weak</b> national government — amend the Articles rather than replace them.</td></tr>'+
   '<tr><td class="head">Legislature</td><td class="sm">Bicameral; representation proportional to population. Organized into the three branches that exist today.</td><td class="sm">Unicameral; equal representation — each state one vote.</td></tr>'+
   '<tr><td class="head">Power</td><td class="sm">The national legislature would have supreme power on all matters on which the separate states were not competent to act, plus the power to veto any and all state laws.</td><td class="sm">Born of the small states’ fear of being left out of major power.</td></tr>'+
   '</tbody></table></div>'+
   '<h3>The compromises</h3>'+
   '<ul><li><b>Connecticut (Great) Compromise</b> — a bicameral Congress: a popularly elected House based on state population, and a state-selected Senate with two members for each state.</li>'+
   '<li><b>Three-Fifths Compromise</b> — in determining each state’s representation in the House, “three-fifths of all other persons” (slaves) were added to the whole number of free persons; the same count applied to taxation.</li>'+
   '<li>Agreements on slavery importation, the presidency and federal power. Timing and the mood for a national government played a big role.</li></ul>'},
  {id:"c2-structure", h:"How the Constitution is built", body:
   '<p><b>Preamble</b> — purpose and guiding principles. Then seven Articles, and 27 amendments: “a framework for a living, adaptable government.”</p>'+
   '<div class="tblwrap"><table class="tbl n0"><tbody>'+
   '<tr><td class="head">Article I</td><td class="sm"><b>The legislative branch.</b> §1 a bicameral Congress · §2 the House · §3 the Senate · §4 elections · §5 rules · §6 salaries and immunities · §7 passing laws · §8 the powers of Congress · §9 restrictions on Congress · §10 restrictions on the states.</td></tr>'+
   '<tr><td class="head">Article II</td><td class="sm"><b>The executive branch.</b> §1 president and vice president · §2 powers of the president · §3 relations with Congress · §4 impeachment.</td></tr>'+
   '<tr><td class="head">Article III</td><td class="sm"><b>The judicial branch.</b> §1 federal courts · §2 jurisdiction · §3 treason.</td></tr>'+
   '<tr><td class="head">Article IV</td><td class="sm"><b>Relations among states.</b> §1 full faith and credit · §2 privileges and immunities · §3 new states and territories · §4 federal protection of states.</td></tr>'+
   '<tr><td class="head">Article V</td><td class="sm"><b>Amending the Constitution.</b></td></tr>'+
   '<tr><td class="head">Article VI</td><td class="sm"><b>National supremacy.</b></td></tr>'+
   '<tr><td class="head">Article VII</td><td class="sm"><b>The ratification process.</b></td></tr>'+
   '</tbody></table></div>'+
   '<h3>The amendments — 27 in all</h3>'+
   '<div class="tblwrap"><table class="tbl amend n0"><tbody>'+
   '<tr><td class="y">1791</td><td><b>1–10, the Bill of Rights.</b> 1 speech, press, religion, assembly, petition · 2 bear arms · 3 no quartering of soldiers · 4 no unreasonable searches · 5 due process, no double jeopardy, no self-incrimination, grand jury · 6 speedy public trial, counsel · 7 jury in civil cases · 8 no excessive bail, no cruel and unusual punishment · 9 rights not listed are kept by the people · 10 powers not delegated are reserved to the states.</td></tr>'+
   '<tr><td class="y">1798–1804</td><td><b>11</b> limits suits against states · <b>12</b> separate ballots for president and vice president.</td></tr>'+
   '<tr><td class="y">1865–1870</td><td><b>13</b> abolition of slavery · <b>14</b> citizenship, due process, equal protection · <b>15</b> the vote regardless of race.</td></tr>'+
   '<tr><td class="y">1913–1920</td><td><b>16</b> income tax · <b>17</b> direct election of senators · <b>18</b> Prohibition · <b>19</b> women’s right to vote.</td></tr>'+
   '<tr><td class="y">1933–1971</td><td><b>20</b> terms begin in January · <b>21</b> repeal of Prohibition · <b>22</b> two-term limit · <b>23</b> D.C. votes for president · <b>24</b> no poll taxes · <b>25</b> presidential succession and disability · <b>26</b> voting age 18.</td></tr>'+
   '<tr><td class="y">1992</td><td><b>27</b> congressional pay raises take effect only after the next election — the most recent amendment.</td></tr>'+
   '</tbody></table></div>'},
  {id:"c2-principles", h:"The six principles; federal vs. state powers", body:
   '<div class="tblwrap"><table class="tbl n0"><tbody>'+
   '<tr><td class="head">Popular sovereignty</td><td class="sm">Government derives its authority from the people.</td></tr>'+
   '<tr><td class="head">Limited government</td><td class="sm">Powers are defined and restricted.</td></tr>'+
   '<tr><td class="head">Separation of powers</td><td class="sm">Distribution among the legislative, executive and judicial branches.</td></tr>'+
   '<tr><td class="head">Checks and balances</td><td class="sm">Mechanisms to prevent the abuse of power.</td></tr>'+
   '<tr><td class="head">Federalism</td><td class="sm">Division of power between national and state governments.</td></tr>'+
   '<tr><td class="head">Judicial review</td><td class="sm">Courts interpret the Constitution.</td></tr>'+
   '</tbody></table></div>'+
   '<div class="exam-tip"><b>The quiz sentence</b>The American version of representative democracy was based on two major principles: <b>separation of powers and federalism</b>.</div>'+
   '<h3>Federal vs. state powers</h3>'+
   '<ul><li><b>Enumerated powers</b> — specifically delegated to the federal government (Wilson: given to the national government alone).</li>'+
   '<li><b>Reserved powers</b> — left to the states (Tenth Amendment).</li>'+
   '<li><b>Concurrent powers</b> — shared between the federal and state levels.</li>'+
   '<li><b>Supremacy clause</b> — federal law takes precedence.</li></ul>'},
  {id:"c2-checks", h:"Checks and balances", body:
   '<p>Each branch is “so constituted as to be a check on the others.” From the class diagram:</p>'+
   '<div class="tblwrap"><table class="tbl"><thead><tr><th>Who checks whom</th><th>How</th></tr></thead><tbody>'+
   '<tr><td class="head">Executive → Congress</td><td class="sm">Can propose laws; can veto laws; can call special sessions of Congress; makes appointments to federal posts; negotiates foreign trade and treaties.</td></tr>'+
   '<tr><td class="head">Congress → Executive</td><td class="sm">Can override a presidential veto; confirms executive appointments; ratifies treaties; can declare war; appropriates money; can impeach and remove the president.</td></tr>'+
   '<tr><td class="head">Courts → Executive</td><td class="sm">Can declare presidential acts unconstitutional.</td></tr>'+
   '<tr><td class="head">Courts → Congress</td><td class="sm">Can declare acts of Congress unconstitutional (judicial review).</td></tr>'+
   '<tr><td class="head">Congress → Courts</td><td class="sm">Creates the lower federal courts; confirms judicial appointments; can impeach and remove federal judges.</td></tr>'+
   '<tr><td class="head">Executive → Courts</td><td class="sm">Appoints federal judges; grants pardons.</td></tr>'+
   '</tbody></table></div>'+
   '<div class="exam-tip"><b>Line-item veto</b>The power to reject <i>parts</i> of a spending bill while signing the rest. It is not “the power to approve spending,” and the president does not have it — Congress granted one in 1996 and the Supreme Court struck it down in 1998.</div>'},
  {id:"c2-fed", h:"Federalist No. 10 and No. 51", know:true, body:
   '<p class="knowline"><span class="know">Exam question: why does each matter today?</span></p>'+
   '<p>The <b>Federalist Papers</b>: 85 essays (1787–88) by <b>Alexander Hamilton, James Madison and John Jay</b>, signed “Publius,” written to defend the Constitution’s structure during the ratification debate. Madison wrote No. 10 and No. 51.</p>'+
   '<p class="ask">Your Sep 3 note says “Madison wrote 1–51.” The count is actually about 51 essays by Hamilton, 29 by Madison and 5 by Jay — worth checking before you cite it.</p>'+
   '<div class="tblwrap"><table class="tbl"><thead><tr><th></th><th>Federalist No. 10</th><th>Federalist No. 51</th></tr></thead><tbody>'+
   '<tr><td class="head">Main issue</td><td class="sm">Factionalism and majority tyranny.</td><td class="sm">Checks and balances among branches.</td></tr>'+
   '<tr><td class="head">Problem addressed</td><td class="sm">The danger of majority factions destabilizing republican government.</td><td class="sm">The risk of concentration of power within government institutions.</td></tr>'+
   '<tr><td class="head">Proposed solution</td><td class="sm">A large republic and representative government to dilute faction influence.</td><td class="sm">Institutional separation and mutual checks between branches.</td></tr>'+
   '<tr><td class="head">Role of factions</td><td class="sm">Inevitable — to be controlled by structure.</td><td class="sm">External to branches — to be checked by institutional design.</td></tr>'+
   '<tr><td class="head">Mechanisms of control</td><td class="sm">The size and diversity of the republic; elected representation.</td><td class="sm">Ambition counteracting ambition; separation of powers, checks and balances.</td></tr>'+
   '<tr><td class="head">View of human nature</td><td class="sm">Self-interested citizens prone to faction.</td><td class="sm">Ambitious officeholders needing institutional constraints.</td></tr>'+
   '<tr><td class="head">Takeaway</td><td class="sm">Scale and representation mitigate factional danger.</td><td class="sm">Structural safeguards restrain governmental abuse.</td></tr>'+
   '</tbody></table></div>'+
   '<h3>No. 10 — the problem of factions</h3>'+
   '<ul><li>A <b>faction</b>: a group of citizens united by a common passion or interest adverse to the rights of other citizens or to the permanent interests of the community — economic, political or ideological.</li>'+
   '<li>Historical examples from the slide: Shays’s Rebellion, the Whiskey Rebellion.</li>'+
   '<li><b>Large vs. small republics:</b> large republics dilute factional influence; small republics are more vulnerable to domination by a few.</li></ul>'+
   '<div class="quote">The most common and durable source of faction is the unequal distribution of property.<small>Federalist No. 10</small></div>'+
   '<h3>No. 51 — separation of powers</h3>'+
   '<ul><li>Three branches with distinct powers; each must be “so constituted as to be a check on each other.”</li><li>The danger: one branch becoming too powerful. Examples of checks: judicial review, the veto, impeachment.</li></ul>'+
   '<div class="quote">Ambition must be made to counteract ambition.<small>Federalist No. 51</small></div>'+
   '<h3>Why they matter today (the exam question)</h3>'+
   '<ul><li><b>No. 10 → political polarization.</b> Today’s parties and movements are factions; Madison’s answer — a large, diverse republic with elected representatives — is still the mechanism that keeps any one of them from ruling outright.</li>'+
   '<li><b>No. 51 → partisanship and the branches.</b> When one party controls a branch, the other branches’ checks (veto, override, confirmation, judicial review, impeachment) are what still restrain it — ambition counteracting ambition.</li></ul>'},
  {id:"c2-ratify", h:"Ratification, the Bill of Rights, and the critics", body:
   '<ul><li><b>Federalists</b> supported ratification and a stronger national government. <b>Antifederalists</b> favored a weaker national government and demanded a bill of rights.</li>'+
   '<li>Ratification required negotiation — and eventually the inclusion of the <b>Bill of Rights</b>, the first ten amendments (1791).</li>'+
   '<li>The Constitution codifies governance, balances power and protects citizen rights (summary slide).</li></ul>'+
   '<h3>Modern critics</h3>'+
   '<p>Some contemporary critics say the defect of the Constitution is not that the government it created is too strong but that it is <b>too weak</b> — separation of powers makes it hard to act. Others say it is too strong. Both camps are in Wilson; the quiz asked about the first.</p>'}
 ],
 timeline:[
  {era:"Before the Constitution"},
  {y:"1776", t:"<b>Declaration of Independence</b>", s:"Unalienable rights; consent of the governed. Pennsylvania adopts the most radically democratic state constitution."},
  {y:"1780", t:"Massachusetts constitution", s:"Separation of powers, an elected governor with a veto, judges for life."},
  {y:"1781", t:"<b>Articles of Confederation adopted</b>", s:"America’s first national government — built to prevent centralized tyranny.", big:true},
  {y:"1786–87", t:"<b>Shays’s Rebellion</b>", s:"Massachusetts farmers against debt, taxes and foreclosures. A turning point.", big:true},
  {era:"Philadelphia"},
  {y:"May 1787", t:"<b>The Convention opens</b>", s:"55 delegates; Washington presides; Rhode Island stays home.", big:true},
  {y:"June 1787", t:"Virginia Plan, then New Jersey Plan", s:"A strong national government by population vs. one vote per state."},
  {y:"July 1787", t:"The Great Compromise", s:"House by population, Senate two per state."},
  {y:"Sept 1787", t:"<b>The Constitution is signed</b>", s:"September 17 — sent to the states for ratification.", big:true},
  {era:"Ratification and after"},
  {y:"1787–88", t:"The Federalist Papers", s:"85 essays by Hamilton, Madison and Jay defending the new structure."},
  {y:"1788", t:"Ratified", s:"New Hampshire is the ninth state in June; the new government begins in 1789."},
  {y:"1791", t:"<b>Bill of Rights</b>", s:"The first ten amendments — the price of ratification.", big:true},
  {y:"1868", t:"Fourteenth Amendment", s:"Due process and equal protection — later the door for applying the Bill of Rights to the states (chapter 5)."},
  {y:"1992", t:"Twenty-seventh Amendment", s:"The most recent — 27 in all."}
 ],
 decks:[
  {id:"terms", label:"Key terms", cards:[
   ["Articles of Confederation","A weak constitution that governed America during the Revolutionary War"],
   ["Unalienable rights","Rights based on nature and Providence, not on the whims or preferences of people"],
   ["Consent of the governed","What a legitimate government requires, in the colonists’ view"],
   ["Natural rights (Locke)","Life, liberty and property"],
   ["Unicameral","A one-house legislature — Pennsylvania in 1776; the Articles’ Congress"],
   ["Bicameral","A two-house legislature — the Congress created by the Great Compromise"],
   ["Shays’s Rebellion","1786–87: ex-soldier farmers in Massachusetts tried to stop farm foreclosures"],
   ["Virginia Plan","Proposal to create a strong national government; representation by population"],
   ["New Jersey Plan","Proposal to create a weak national government; one vote per state"],
   ["Great Compromise","A popularly elected House based on population and a state-selected Senate with two members per state"],
   ["Three-fifths Compromise","“Three-fifths of all other persons” added to the free population for representation and taxation"],
   ["Republic","A government in which a system of representation operates"],
   ["Popular sovereignty","Government derives its authority from the people"],
   ["Limited government","Powers are defined and restricted"],
   ["Separation of powers","Constitutional authority shared by the legislative, executive and judicial branches"],
   ["Checks and balances","Mechanisms that let each branch restrain the others and prevent abuse of power"],
   ["Federalism","Government authority shared by national and state governments"],
   ["Judicial review","Courts interpret the Constitution and can strike down laws that conflict with it"],
   ["Enumerated powers","Powers given to the national government alone"],
   ["Reserved powers","Powers left to the states — the Tenth Amendment"],
   ["Concurrent powers","Powers shared by the federal and state levels"],
   ["Supremacy clause","Federal law takes precedence over state law"],
   ["Federalists","Supporters of ratification and a stronger national government"],
   ["Antifederalists","Those who favored a weaker national government — and demanded a bill of rights"],
   ["Bill of Rights","The first ten amendments to the Constitution (1791)"],
   ["Faction","Madison: a group united by a common passion or interest adverse to the rights of others or the interests of the community"],
   ["Line-item veto","The power to reject parts of a spending bill — which the president does not have"],
   ["The Federalist Papers","85 essays by Hamilton, Madison and Jay defending the Constitution during ratification"]]},
  {id:"articles", label:"Articles & amendments", cards:[
   ["Preamble","Purpose and guiding principles"],
   ["Article I","The legislative branch — Congress"],
   ["Article II","The executive branch — the president"],
   ["Article III","The judicial branch — the courts"],
   ["Article IV","Relations among the states"],
   ["Article V","Amending the Constitution"],
   ["Article VI","National supremacy"],
   ["Article VII","The ratification process"],
   ["Article I, Section 8","The powers of Congress — including the necessary-and-proper clause"],
   ["Article I, Section 9","Restrictions on Congress — habeas corpus, no bills of attainder, no ex post facto laws"],
   ["Article I, Section 10","Restrictions on the states"],
   ["First Amendment (1791)","Speech, press, religion, assembly, petition"],
   ["Second Amendment (1791)","The right to bear arms"],
   ["Fourth Amendment (1791)","No unreasonable searches and seizures"],
   ["Fifth Amendment (1791)","Due process; no double jeopardy; no self-incrimination; grand jury"],
   ["Tenth Amendment (1791)","Powers not delegated to the national government are reserved to the states or the people"],
   ["Thirteenth Amendment (1865)","Abolition of slavery"],
   ["Fourteenth Amendment (1868)","Due process and equal protection against the states"],
   ["Fifteenth Amendment (1870)","The right to vote regardless of race"],
   ["Nineteenth Amendment (1920)","Women’s right to vote"],
   ["Twenty-second Amendment (1951)","The presidential two-term limit"],
   ["Twenty-sixth Amendment (1971)","Voting age 18"],
   ["Twenty-seventh Amendment (1992)","The most recent of the 27 — congressional pay raises take effect after the next election"]]},
  {id:"people", label:"People & places", cards:[
   ["John Locke","17th-century English philosopher; natural rights to life, liberty and property"],
   ["Thomas Paine","A huge fan of Pennsylvania’s radically democratic 1776 constitution — France loved it too"],
   ["John Adams","Played a big role in the Massachusetts constitution of 1780; absent from the Convention"],
   ["Daniel Shays","Led the Massachusetts farmers’ rebellion of 1786–87"],
   ["George Washington","Presided over the Constitutional Convention"],
   ["Thomas Jefferson, John Adams, Patrick Henry","The notable absences from the Convention"],
   ["Rhode Island","The state that sent no delegates to the Convention"],
   ["James Madison","Author of Federalist No. 10 and No. 51"],
   ["Alexander Hamilton","Wrote the largest share of the Federalist Papers; thought the plan too democratic"],
   ["John Jay","The third author of the Federalist Papers"],
   ["George Mason","Thought the Constitution not democratic enough"],
   ["Publius","The pen name the three Federalist authors shared"]]}
 ]
};

QB = QB.concat([
 {tp:"c2",real:1,t:"mc",q:"During the ratification debates, the framers intended to create:",a:"a republic",w:["direct democracy","a monarchy","federalism"],e:"A republic — a government in which a system of representation operates."},
 {tp:"c2",real:2,t:"mc",q:"According to our authors, the intent of the framers was:",a:"a mixture of motives",w:["solely political","solely economical","to mimic England’s constitution"],e:"A mixture of motives — neither purely political nor purely economic."},
 {tp:"c2",real:3,t:"mc",q:"What state did not send any representatives to the Constitutional Convention in 1787?",a:"Rhode Island",w:["Pennsylvania","Connecticut","New York"],e:"Rhode Island stayed home."},
 {tp:"c2",real:4,t:"mc",q:"Which Article of the Constitution outlines the powers and responsibilities of the legislative branch?",a:"Article I",w:["Article IV","Article III","Article II"],e:"Article I — Congress. II is the executive, III the judiciary, IV relations among states."},
 {tp:"c2",real:5,t:"mc",q:"Which Article of the US Constitution summarizes the amendment process?",a:"Article V",w:["Article I","Article VI","Article II"],e:"Article V. (VI is national supremacy.)"},
 {tp:"c2",real:6,t:"mc",q:"The American version of representative democracy was based on two major principles:",a:"Separation of Powers and Federalism",w:["Liberty and Democracy","The first and second amendments","The English Constitution and majoritarianism"],e:"Separation of powers and federalism. You missed this one on Canvas."},
 {tp:"c2",real:7,t:"mc",q:"What kind of right is defined in the Declaration of Independence as: based on nature and Providence, and not on the whims or preferences of people.",a:"unalienable",w:["inalienable","alienable","majority"],e:"Unalienable — the Declaration’s own spelling."},
 {tp:"c2",real:8,t:"mc",q:"In 1776, which state gave all power to the legislature in their state constitution?",a:"Pennsylvania",w:["Ohio","New York","Rhode Island"],e:"Pennsylvania — a one-house legislature holding all power."},
 {tp:"c2",real:9,t:"tf",q:"According to our text, the defect of the Constitution, to some contemporary critics, is not that the government it created is too strong but that it is too weak.",a:true,e:"True. One group of critics says separation of powers leaves the government too weak to act; another says it is too strong. You missed this one on Canvas."},
 {tp:"c2",real:10,t:"tf",q:"The president’s power to approve spending is called a line-item veto.",a:false,e:"False. A line-item veto is the power to reject parts of a bill — and the president does not have it. You missed this one on Canvas."},
 {tp:"c2",t:"mc",q:"The Framers’ defense of liberty as a natural right came from which philosopher?",a:"John Locke",w:["Thomas Hobbes","Jean-Jacques Rousseau","Aristotle"],e:"John Locke — life, liberty and property."},
 {tp:"c2",t:"mc",q:"The Articles of Confederation were adopted in:",a:"1781",w:["1776","1787","1791"],e:"1781. The Constitution came in 1787, the Bill of Rights in 1791."},
 {tp:"c2",t:"mc",q:"Under the Articles of Confederation, Congress could NOT:",a:"tax citizens directly",w:["declare war","make treaties","borrow money"],e:"It could not tax citizens directly, regulate interstate commerce, enforce laws or raise a standing army."},
 {tp:"c2",t:"mc",q:"Where did Shays’s Rebellion take place?",a:"Massachusetts",w:["Pennsylvania","Virginia","New York"],e:"Massachusetts, 1786–87."},
 {tp:"c2",t:"mc",q:"Who led the farmers in Shays’s Rebellion?",a:"Daniel Shays",w:["Thomas Paine","Patrick Henry","George Mason"],e:"Daniel Shays, an ex-Revolutionary War soldier."},
 {tp:"c2",t:"mc",q:"Which plan proposed a strong national government with representation based on population?",a:"The Virginia Plan",w:["The New Jersey Plan","The Connecticut Plan","The Pennsylvania Plan"],e:"The Virginia Plan."},
 {tp:"c2",t:"mc",q:"Which plan proposed a weak national government with one vote per state?",a:"The New Jersey Plan",w:["The Virginia Plan","The Great Compromise","The Massachusetts Plan"],e:"The New Jersey Plan — the small states’ answer."},
 {tp:"c2",t:"mc",q:"The Great Compromise created:",a:"a House based on population and a Senate with two members per state",w:["a one-house Congress with one vote per state","a Congress chosen entirely by the state legislatures","a national veto over state laws"],e:"Bicameral: House by population, Senate two per state."},
 {tp:"c2",t:"mc",q:"Under the Three-Fifths Compromise, slaves were counted as three-fifths of a person for:",a:"representation and taxation",w:["voting only","representation only","taxation only"],e:"Both representation in the House and taxation."},
 {tp:"c2",t:"mc",q:"Who presided over the Constitutional Convention?",a:"George Washington",w:["James Madison","Benjamin Franklin","Thomas Jefferson"],e:"Washington presided."},
 {tp:"c2",t:"mc",q:"Which of these was NOT at the Constitutional Convention?",a:"Thomas Jefferson",w:["James Madison","George Washington","Alexander Hamilton"],e:"Jefferson, John Adams and Patrick Henry were the notable absences."},
 {tp:"c2",t:"mc",q:"How many delegates attended the Convention?",a:"55",w:["13","39","85"],e:"55 delegates — lawyers, merchants, planters and political leaders."},
 {tp:"c2",t:"mc",q:"The official purpose of the Philadelphia convention was to:",a:"revise the Articles of Confederation",w:["write a new constitution","elect a president","ratify the Bill of Rights"],e:"Officially, revise the Articles; in fact, the delegates wrote an entirely new constitution."},
 {tp:"c2",t:"mc",q:"Which Article covers the judicial branch?",a:"Article III",w:["Article I","Article II","Article IV"],e:"Article III."},
 {tp:"c2",t:"mc",q:"Which Article establishes national supremacy?",a:"Article VI",w:["Article V","Article VII","Article IV"],e:"Article VI."},
 {tp:"c2",t:"mc",q:"Which Article sets out the ratification process?",a:"Article VII",w:["Article V","Article VI","Article III"],e:"Article VII."},
 {tp:"c2",t:"mc",q:"“Government derives its authority from the people” is the principle of:",a:"popular sovereignty",w:["limited government","federalism","judicial review"],e:"Popular sovereignty."},
 {tp:"c2",t:"mc",q:"Powers left to the states by the Tenth Amendment are called:",a:"reserved powers",w:["enumerated powers","concurrent powers","implied powers"],e:"Reserved powers."},
 {tp:"c2",t:"mc",q:"Who wrote Federalist No. 10 and No. 51?",a:"James Madison",w:["Alexander Hamilton","John Jay","Thomas Jefferson"],e:"Madison."},
 {tp:"c2",t:"mc",q:"According to Federalist No. 10, the most common and durable source of faction is:",a:"the unequal distribution of property",w:["religious difference","foreign influence","the size of the country"],e:"“The various and unequal distribution of property.”"},
 {tp:"c2",t:"mc",q:"Madison’s solution to faction in Federalist No. 10 was:",a:"a large republic with representative government",w:["a small, homogeneous republic","abolishing political parties","direct democracy"],e:"Large republics dilute factional influence; small ones are vulnerable to domination by a few."},
 {tp:"c2",t:"mc",q:"“Ambition must be made to counteract ambition” comes from:",a:"Federalist No. 51",w:["Federalist No. 10","The Declaration of Independence","The Articles of Confederation"],e:"No. 51 — separation of powers and checks and balances."},
 {tp:"c2",t:"mc",q:"How many Federalist Papers were written?",a:"85",w:["51","10","27"],e:"85 essays by Hamilton, Madison and Jay."},
 {tp:"c2",t:"mc",q:"The Antifederalists favored:",a:"a weaker national government",w:["a stronger national government","a monarchy","abolishing the states"],e:"A weaker national government — and a bill of rights."},
 {tp:"c2",t:"mc",q:"The Bill of Rights is:",a:"the first ten amendments to the Constitution",w:["the Preamble","Article I of the Constitution","the Declaration of Independence"],e:"The first ten amendments, 1791."},
 {tp:"c2",ap:true,t:"mc",q:"The president rejects a bill passed by Congress. Which check is this?",a:"The veto",w:["Judicial review","Impeachment","Appropriation"],e:"The veto — which Congress can override."},
 {tp:"c2",ap:true,t:"mc",q:"The Supreme Court strikes down an act of Congress. Which principle is at work?",a:"Judicial review",w:["Federalism","Popular sovereignty","Limited government"],e:"Judicial review — courts interpret the Constitution."},
 {tp:"c2",ap:true,t:"mc",q:"A state law conflicts with a federal law and the federal law wins. Why?",a:"The supremacy clause",w:["Reserved powers","The Tenth Amendment","Concurrent powers"],e:"Federal law takes precedence."},
 {tp:"c2",ap:true,t:"mc",q:"Both the federal government and the states can tax. Taxation is therefore a:",a:"concurrent power",w:["reserved power","enumerated power","denied power"],e:"Shared between levels = concurrent."},
 {tp:"c2",ap:true,t:"mc",q:"Today’s political polarization is best explained by the argument of:",a:"Federalist No. 10 — faction",w:["Federalist No. 51 — checks and balances","The Three-Fifths Compromise","The Tenth Amendment"],e:"Polarization = faction, No. 10; partisanship between branches = checks and balances, No. 51."},
 {tp:"c2",t:"tf",q:"The Articles of Confederation provided for a president and a national court system.",a:false,e:"False — no president, no national courts, a one-house legislature."},
 {tp:"c2",t:"tf",q:"Under the Massachusetts constitution of 1780, judges served for life.",a:true,e:"True — with separation of powers and a governor’s veto."},
 {tp:"c2",t:"tf",q:"Locke believed that democracy was impossible.",a:false,e:"False. Locke did not believe an all-powerful government was necessary or that democracy was impossible."},
 {tp:"c2",t:"tf",q:"Hamilton thought the proposed Constitution was too democratic.",a:true,e:"True — while George Mason thought it not democratic enough."},
 {tp:"c2",t:"tf",q:"The Bill of Rights was part of the original Constitution signed in 1787.",a:false,e:"False — it was added in 1791 as the price of ratification."},
 {tp:"c2",t:"tf",q:"Congress can override a presidential veto.",a:true,e:"True."},
 {tp:"c2",t:"tf",q:"The Senate ratifies treaties and confirms executive appointments.",a:true,e:"True."},
 {tp:"c2",t:"tf",q:"Madison believed factions could be eliminated in a free society.",a:false,e:"False — factions are inevitable; their effects are controlled by structure."},
 {tp:"c2",t:"tf",q:"Shays’s Rebellion convinced many leaders that stronger national institutions were necessary.",a:true,e:"True — a turning point."}
]);
