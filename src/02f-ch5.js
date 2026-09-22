/* ================================================================ chapter 5
   Sources: your chapter 5 card list (the fronts), the chapter 5 quiz, and Wilson
   chapter 5 for the backs. The quiz for this chapter is the next one up.        */
CH.c5 = {n:5, title:"Civil Liberties", short:"Liberties",
 notes:[
  {id:"c5-basics", h:"Civil liberties, civil rights, and rights in conflict", body:
   '<div class="boxrow"><div class="box"><h4>Civil liberties</h4><p>Protections <i>from</i> government — what government may not do to you: speech, press, religion, searches, trials. Mostly the Bill of Rights.</p></div>'+
   '<div class="box"><h4>Civil rights</h4><p>Claims to equal treatment — protection against discrimination by government and others. The Fourteenth Amendment’s <b>equal protection of the laws</b>.</p></div></div>'+
   '<ul><li><b>Bill of Rights / Constitution</b> — most liberties are in the first ten amendments, but the original Constitution already had some: <b>Article I, Section 9</b> protects habeas corpus and bans bills of attainder and ex post facto laws.</li>'+
   '<li><b>The libertarian view of personal freedom</b> — people should be free to do as they choose so long as they do not harm others; government’s main job is to protect that freedom.</li>'+
   '<li><b>Rights in conflict</b> — a free press vs. a fair trial; free speech vs. public order; free exercise of religion vs. general laws. Clashes over rights usually end up in <b>the courts</b>.</li>'+
   '<li>Wilson: the broad language of the Constitution and the personal beliefs of judges have led to a general <b>expansion</b> of civil liberties, not a decrease.</li></ul>'},
  {id:"c5-culture", h:"Culture, crisis, and liberty", body:
   '<ul><li><b>Original diversity in the U.S.:</b> ethnic, religious and cultural. The <b>potato famine</b> brought a wave of Irish Catholic immigrants and a wave of anti-Catholic feeling — cultural conflict has always shaped which liberties get protected.</li>'+
   '<li><b>War and crisis narrow the limits of speech and the press.</b> Examples: the <b>Sedition Act of 1798</b> (Jefferson pardoned those convicted under it), the Civil War, World War I (sedition and espionage laws), World War II, the Cold War — and after September 11, the <b>Patriot Act</b>, enacted in <b>October 2001</b>.</li>'+
   '<li>The Patriot Act broadened wiretaps and internet surveillance, allowed detention of non-citizens, and eased searches in terrorism cases.</li></ul>'},
  {id:"c5-states", h:"Applying the Bill of Rights to the states", body:
   '<p>The Bill of Rights originally limited only the federal government. The <b>Fourteenth Amendment</b> (1868) changed that: no state shall “deprive any person of life, liberty, or property without <b>due process of law</b>; nor deny to any person… the <b>equal protection of the laws</b>.”</p>'+
   '<div class="tblwrap"><table class="tbl"><thead><tr><th>Case</th><th>What it did</th></tr></thead><tbody>'+
   '<tr><td class="head">Gitlow v. New York (1925)</td><td class="sm">First applied the First Amendment (speech and press) to the states through the due process clause — the start of “incorporation.”</td></tr>'+
   '<tr><td class="head">Palko v. Connecticut (1937)</td><td class="sm">Selective incorporation: only rights “implicit in the concept of ordered liberty” apply to the states, one at a time.</td></tr>'+
   '<tr><td class="head">McDonald v. Chicago (2010)</td><td class="sm">The Second Amendment applies to the states — Chicago’s handgun ban fell.</td></tr>'+
   '<tr><td class="head">The New York gun law (2022)</td><td class="sm">The Court struck New York’s requirement that people show “proper cause” to carry a handgun (<i>Bruen</i>).</td></tr>'+
   '</tbody></table></div>'+
   '<p><b>Exceptions</b> — a few parts of the Bill of Rights still do not bind the states: the grand jury requirement, the Third Amendment, the civil-jury requirement, and (arguably) excessive bail.</p>'},
  {id:"c5-speech", h:"Freedom of expression", body:
   '<ul><li><b>Press freedom from prior restraint</b> — <b>William Blackstone</b>: liberty of the press means no censorship <i>before</i> publication. Prior restraint is also called censorship; the government may punish after, not stop before.</li>'+
   '<li><b>Tests for expression</b> — the <b>clear-and-present-danger test</b> (Schenck, 1919): speech may be punished when it creates a clear and present danger of harm the government may prevent. Later narrowed to speech inciting imminent lawless action.</li>'+
   '<li><b>Sedition laws</b> — from 1798 onward, wartime governments have punished criticism; Jefferson’s pardons after the Sedition Act of 1798 were the first pushback.</li></ul>'+
   '<h3>Four kinds of speaking and writing not automatically protected</h3>'+
   '<div class="tblwrap"><table class="tbl n0"><tbody>'+
   '<tr><td class="head">Libel</td><td class="sm">A <b>written</b> statement that defames another person (spoken = slander). Public figures must also prove “actual malice.”</td></tr>'+
   '<tr><td class="head">Obscenity</td><td class="sm">Judged by the <b>locality</b> (contemporary community standards) plus the <b>court</b>: appeals to prurient interest, patently offensive, lacks serious value.</td></tr>'+
   '<tr><td class="head">Symbolic speech</td><td class="sm">An act that carries a message. Burning a draft card was not protected; burning a flag was.</td></tr>'+
   '<tr><td class="head">False advertising</td><td class="sm">Commercial speech gets less protection and can be regulated for truth.</td></tr>'+
   '</tbody></table></div>'+
   '<p><b>Commercial and youthful speech</b> — commercial speech is protected but regulable; students keep some speech rights (the armband case) but schools may control school-sponsored expression such as a school newspaper.</p>'},
  {id:"c5-religion", h:"Freedom of religion", body:
   '<p>The <b>two parts</b> of the First Amendment’s religion language: “Congress shall make no law respecting an establishment of religion” — the <b>establishment clause</b> — “or prohibiting the free exercise thereof” — the <b>free exercise clause</b>.</p>'+
   '<ul><li><b>Wall of separation</b> — Jefferson’s phrase (1802 letter to the Danbury Baptists). The Court adopted it in 1947 when it applied the establishment clause to the states.</li>'+
   '<li><b>Does the First Amendment require the separation of church and state?</b> The text says only that <b>no religion shall be established by law</b>. The debate is whether that bars any government support of religion (the wall) or only an official national church.</li>'+
   '<li><b>The Court’s final statement of interpretation</b> — for fifty years the three-part <i>Lemon</i> test (1971): a law must have a secular purpose, neither advance nor inhibit religion, and avoid excessive entanglement. Since 2022 the Court has leaned on history and tradition instead.</li>'+
   '<li><b>Free exercise</b> — government may not target religion, but a neutral law of general application can still burden a religious practice.</li></ul>'},
  {id:"c5-crime", h:"Crime and due process", body:
   '<ul><li><b>Exclusionary rule</b> — evidence gathered in violation of the Constitution cannot be used in a trial. Applied to the states in 1961 (<i>Mapp v. Ohio</i>).</li>'+
   '<li><b>Two ways a search is reasonable</b> — with a <b>warrant</b> issued on probable cause, or <b>incident to a lawful arrest</b> (the person, things in plain view, things under immediate control). A good-faith exception softens the rule.</li>'+
   '<li><b>Miranda warnings</b> (1966) — the right to remain silent and to counsel before questioning.</li>'+
   '<li><b>Civil forfeiture</b> — law-enforcement officers taking assets (money or property) from people suspected of involvement with illegal activity but not charged with a crime.</li>'+
   '<li>After September 11 the Patriot Act (October 2001) expanded surveillance and detention powers in terrorism cases.</li></ul>'}
 ],
 decks:[
  {id:"terms", label:"Key terms", cards:[
   ["Civil liberties","Protections from government — what it may not do to you"],
   ["Civil rights","Claims to equal treatment; protection against discrimination"],
   ["Equal protection of the laws","The Fourteenth Amendment’s guarantee behind civil rights"],
   ["Due process of law","The Fourteenth Amendment: no state shall deprive any person of life, liberty or property without it"],
   ["Article I, Section 9","Rights in the original Constitution: habeas corpus, no bills of attainder, no ex post facto laws"],
   ["Libertarian view of personal freedom","Free to do as you choose so long as you harm no one; government exists to protect that freedom"],
   ["Incorporation","Applying the Bill of Rights to the states through the Fourteenth Amendment, one right at a time"],
   ["Selective incorporation","Only rights implicit in ordered liberty bind the states — Palko, 1937"],
   ["Prior restraint","Censorship before publication — what press freedom forbids (Blackstone)"],
   ["Clear-and-present-danger test","Speech may be punished when it creates a clear and present danger of harm the government may prevent"],
   ["Sedition Act of 1798","Punished criticism of the government; Jefferson pardoned those convicted"],
   ["Libel","A written statement that defames another person"],
   ["Slander","A spoken statement that defames another person"],
   ["Obscenity","Judged by local community standards plus the courts’ three-part test"],
   ["Symbolic speech","An act that carries a message — draft-card burning not protected, flag burning protected"],
   ["Commercial speech","Advertising — protected, but regulable for truth"],
   ["Youthful speech","Students keep some rights, but schools may control school-sponsored expression"],
   ["Establishment clause","“No law respecting an establishment of religion”"],
   ["Free exercise clause","“Or prohibiting the free exercise thereof”"],
   ["Wall of separation","Jefferson’s phrase for the establishment clause, adopted by the Court in 1947"],
   ["Lemon test","Secular purpose; neither advances nor inhibits religion; no excessive entanglement"],
   ["Exclusionary rule","Evidence gathered in violation of the Constitution cannot be used at trial"],
   ["Two ways a search is reasonable","With a warrant, or incident to a lawful arrest"],
   ["Good-faith exception","Evidence stands if officers reasonably believed the warrant was valid"],
   ["Miranda warnings","The right to remain silent and to counsel before questioning (1966)"],
   ["Civil forfeiture","Taking assets from people suspected of illegal activity but not charged with a crime"],
   ["Patriot Act","October 2001 — expanded surveillance and detention powers after September 11"],
   ["Potato famine","Brought Irish Catholic immigrants — and anti-Catholic conflict — to America"]]},
  {id:"cases", label:"Cases", cards:[
   ["Gitlow v. New York (1925)","First applied the First Amendment to the states — the start of incorporation"],
   ["Palko v. Connecticut (1937)","Selective incorporation: rights implicit in the concept of ordered liberty"],
   ["McDonald v. Chicago (2010)","The Second Amendment applies to the states; Chicago’s handgun ban fell"],
   ["The New York gun case (2022)","Struck New York’s proper-cause requirement to carry a handgun"],
   ["Schenck v. United States (1919)","The clear-and-present-danger test"],
   ["Near v. Minnesota (1931)","No prior restraint on the press"],
   ["New York Times v. Sullivan (1964)","Public figures must prove actual malice to win a libel suit"],
   ["Miller v. California (1973)","The obscenity test: community standards plus serious value"],
   ["Texas v. Johnson (1989)","Flag burning is protected symbolic speech"],
   ["Tinker v. Des Moines (1969)","Students’ armbands were protected speech"],
   ["Everson v. Board of Education (1947)","Applied the establishment clause to the states; adopted the wall of separation"],
   ["Lemon v. Kurtzman (1971)","The three-part establishment-clause test"],
   ["Mapp v. Ohio (1961)","Applied the exclusionary rule to the states"],
   ["Miranda v. Arizona (1966)","Suspects must be told their rights before questioning"]]}
 ]
};

QB = QB.concat([
 {tp:"c5",real:1,t:"mc",q:"In Chapter 5, what rule holds that evidence gathered in violation of the Constitution cannot be used in a trial?",a:"exclusionary rule",w:["Miranda rights","Article 1, Section 8","chain of custody"],e:"The exclusionary rule."},
 {tp:"c5",real:2,t:"mc",q:"According to information in Chapter 5, where do clashes over civil rights often end up?",a:"the courts",w:["in church","the schools","the police"],e:"The courts."},
 {tp:"c5",real:3,t:"mc",q:"First Amendment ban on laws “respecting an establishment of religion” is termed what?",a:"establishment clause",w:["supremacy rule","freedom of choice","congressional act"],e:"The establishment clause; its partner is the free exercise clause."},
 {tp:"c5",real:4,t:"mc",q:"Prior restraint is also called freedom from?",a:"censorship",w:["law","the people","government"],e:"Censorship — Blackstone’s meaning of press freedom."},
 {tp:"c5",real:5,t:"mc",q:"When was the Patriot Act enacted as law?",a:"October, 2001",w:["March, 2006","May, 2011","September 11, 2001"],e:"October 2001, weeks after the attacks."},
 {tp:"c5",real:6,t:"mc",q:"The 14th amendment says that no state shall “deprive any person of life, liberty, or property without",a:"due process of law",w:["the pursuit of happiness","their Miranda rights being issued","a court order"],e:"Due process of law."},
 {tp:"c5",real:7,t:"mc",q:"What term describes the practice of law-enforcement officers taking assets (such as money or property) from people suspected of involvement with illegal activity, but not charged with a crime?",a:"civil forfeiture",w:["civil society","civil trial","civil liability"],e:"Civil forfeiture."},
 {tp:"c5",real:8,t:"mc",q:"The Free Exercise Clause pertains to?",a:"Religion",w:["Speech","Freedom","Property"],e:"Religion — “or prohibiting the free exercise thereof.”"},
 {tp:"c5",real:9,t:"mc",q:"What is a written statement that defames the character of another person called?",a:"libel",w:["harassment","gossip","slander"],e:"Libel is written; slander is spoken."},
 {tp:"c5",real:10,t:"tf",q:"According to Chapter 5, the broad language of the Constitution, and the personal beliefs of judges have led to a general decrease of civil liberties.",a:false,e:"False — Wilson says they have led to a general expansion of civil liberties."},
 {tp:"c5",t:"mc",q:"Which case first applied the First Amendment to the states?",a:"Gitlow v. New York (1925)",w:["Palko v. Connecticut (1937)","McDonald v. Chicago (2010)","Mapp v. Ohio (1961)"],e:"Gitlow, 1925 — the start of incorporation."},
 {tp:"c5",t:"mc",q:"Palko v. Connecticut (1937) established:",a:"selective incorporation — only rights implicit in ordered liberty bind the states",w:["that the whole Bill of Rights binds the states","the exclusionary rule","the clear-and-present-danger test"],e:"Selective incorporation."},
 {tp:"c5",t:"mc",q:"McDonald v. Chicago (2010) applied which amendment to the states?",a:"The Second",w:["The First","The Fourth","The Eighth"],e:"The Second Amendment — Chicago’s handgun ban fell."},
 {tp:"c5",t:"mc",q:"Whose view of press freedom was “no prior restraint”?",a:"William Blackstone",w:["John Locke","Thomas Jefferson","James Madison"],e:"Blackstone."},
 {tp:"c5",t:"mc",q:"Who pardoned those convicted under the Sedition Act of 1798?",a:"Thomas Jefferson",w:["John Adams","George Washington","James Madison"],e:"Jefferson, after taking office in 1801."},
 {tp:"c5",t:"mc",q:"The clear-and-present-danger test came from:",a:"Schenck v. United States (1919)",w:["Gitlow v. New York (1925)","Near v. Minnesota (1931)","Texas v. Johnson (1989)"],e:"Schenck, 1919 — Justice Holmes."},
 {tp:"c5",t:"mc",q:"Which is NOT one of the four kinds of expression that are not automatically protected?",a:"Criticism of the president",w:["Libel","Obscenity","Symbolic speech"],e:"Libel, obscenity, symbolic speech and false advertising. Political criticism is the core of protected speech."},
 {tp:"c5",t:"mc",q:"Obscenity is judged by:",a:"local community standards plus the courts’ test",w:["a national standard set by Congress","the president","the author’s intent"],e:"“Locality + court.”"},
 {tp:"c5",t:"mc",q:"Which act of symbolic speech is protected?",a:"Burning the flag",w:["Burning a draft card","Blocking a highway","Trespassing to protest"],e:"Flag burning (Texas v. Johnson); draft-card burning was not protected."},
 {tp:"c5",t:"mc",q:"Which case applied the exclusionary rule to the states?",a:"Mapp v. Ohio (1961)",w:["Miranda v. Arizona (1966)","Gitlow v. New York (1925)","Everson (1947)"],e:"Mapp, 1961."},
 {tp:"c5",t:"mc",q:"A search without a warrant is reasonable when it is:",a:"incident to a lawful arrest",w:["requested by a neighbor","conducted in daylight","for a serious crime"],e:"The two ways: a warrant, or incident to a lawful arrest."},
 {tp:"c5",t:"mc",q:"Jefferson’s “wall of separation” phrase describes:",a:"the establishment clause",w:["the free exercise clause","the supremacy clause","the exclusionary rule"],e:"The establishment clause, adopted by the Court in 1947."},
 {tp:"c5",t:"mc",q:"The Lemon test asks whether a law has a secular purpose, neither advances nor inhibits religion, and:",a:"avoids excessive entanglement with religion",w:["was passed by two-thirds of Congress","applies only to public schools","has a sunset clause"],e:"No excessive entanglement."},
 {tp:"c5",t:"mc",q:"The original diversity in the U.S. was:",a:"ethnic, religious and cultural",w:["economic only","regional only","political only"],e:"Ethnic, religious and cultural."},
 {tp:"c5",t:"mc",q:"The potato famine brought a wave of immigrants from:",a:"Ireland",w:["Germany","Italy","Poland"],e:"Irish Catholics — and anti-Catholic conflict."},
 {tp:"c5",t:"mc",q:"Which part of the original Constitution already protected some liberties?",a:"Article I, Section 9",w:["Article II","Article VI","The Preamble"],e:"Habeas corpus, no bills of attainder, no ex post facto laws."},
 {tp:"c5",t:"mc",q:"A public figure suing for libel must also prove:",a:"actual malice",w:["financial loss","that the statement was spoken","that a jury was seated"],e:"New York Times v. Sullivan (1964)."},
 {tp:"c5",ap:true,t:"mc",q:"A judge orders a newspaper not to print a story before it runs. This is:",a:"prior restraint",w:["libel","sedition","symbolic speech"],e:"Censorship before publication — what press freedom forbids."},
 {tp:"c5",ap:true,t:"mc",q:"Police search a home without a warrant and find evidence; the court throws it out. Which rule applied?",a:"The exclusionary rule",w:["The Lemon test","Selective incorporation","Civil forfeiture"],e:"Unconstitutionally gathered evidence cannot be used."},
 {tp:"c5",ap:true,t:"mc",q:"A city bans all handguns in private homes. Which case says it cannot?",a:"McDonald v. Chicago",w:["Gitlow v. New York","Palko v. Connecticut","Mapp v. Ohio"],e:"The Second Amendment applies to the states."},
 {tp:"c5",ap:true,t:"mc",q:"A public school requires a spoken prayer to open each day. Which clause is at issue?",a:"The establishment clause",w:["The free exercise clause","The supremacy clause","Due process"],e:"Government sponsorship of religion = establishment clause."},
 {tp:"c5",ap:true,t:"mc",q:"A state bans a specific religious ritual while allowing similar non-religious conduct. Which clause is at issue?",a:"The free exercise clause",w:["The establishment clause","The commerce clause","Equal protection"],e:"Targeting religion = free exercise."},
 {tp:"c5",ap:true,t:"mc",q:"A blogger writes a false, damaging story about a private citizen. This is:",a:"libel",w:["slander","obscenity","sedition"],e:"Written defamation = libel."},
 {tp:"c5",ap:true,t:"mc",q:"Officers seize cash from a driver who is never charged with a crime. This is:",a:"civil forfeiture",w:["the exclusionary rule","a lawful arrest","due process"],e:"Civil forfeiture."},
 {tp:"c5",t:"tf",q:"The Bill of Rights originally limited only the federal government, not the states.",a:true,e:"True — the Fourteenth Amendment and incorporation changed that."},
 {tp:"c5",t:"tf",q:"Slander is written defamation and libel is spoken.",a:false,e:"False — it is the other way around."},
 {tp:"c5",t:"tf",q:"Every part of the Bill of Rights now applies to the states.",a:false,e:"False — the grand jury requirement, the Third Amendment and the civil-jury requirement still do not."},
 {tp:"c5",t:"tf",q:"War and crisis have historically narrowed the limits of free speech and press.",a:true,e:"True — 1798, the Civil War, the world wars, the Cold War, the Patriot Act."},
 {tp:"c5",t:"tf",q:"Burning a draft card was held to be protected symbolic speech.",a:false,e:"False — it was not protected; flag burning was."},
 {tp:"c5",t:"tf",q:"Commercial speech receives less protection than political speech.",a:true,e:"True — it can be regulated for truth."},
 {tp:"c5",t:"tf",q:"The Patriot Act was enacted before the September 11 attacks.",a:false,e:"False — October 2001, after the attacks."},
 {tp:"c5",t:"tf",q:"Under the good-faith exception, evidence may be used if officers reasonably believed their warrant was valid.",a:true,e:"True."}
]);
