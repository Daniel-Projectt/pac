/* ================================================================ Exam 2 · chapters 7–12
   Source: the professor's "Study Guide – Exam 2" (Politics and American Culture, chapters 7–12),
   sent 6-nov. The tab IS that guide: each chapter's key terms, core concepts (a short answer and
   one example), the review questions answered from the guide, and his practice check with his
   answer key. Practice questions are written from the same guide. Where the guide says the
   supplied highlights are incomplete (reading checkpoint, "Effects of Elections on Policy",
   regulation), the page says so instead of guessing.                                           */
var E2 = {
 start:{
  pairs:[
   ["VAP vs. VEP", "VAP counts everyone of voting age, even those who can’t legally vote; VEP counts only those eligible. Same ballots, VEP turnout is higher."],
   ["Plurality vs. majority", "Plurality = the most votes. Majority = more than half. 42% can win a plurality race without a majority."],
   ["Partisanship vs. ideology", "Partisanship = attachment to a party. Ideology = consistent policy beliefs. Sorting = the two lining up."],
   ["Affective polarization", "Disliking and distrusting people in the other party (feelings, not policy)."],
   ["Retrospective vs. prospective", "Retrospective = judging past performance. Prospective = choosing a plan for the future."],
   ["Valence vs. positional issue", "Valence = everyone wants it (honest government); the fight is over who can deliver. Positional = people disagree on the policy itself."],
   ["Open vs. closed primary", "Closed = only registered party members; tends to strengthen party control. Open = voters don’t have to be party members."],
   ["PAC vs. Super PAC", "A Super PAC can raise and spend unlimited money, but only independently: no coordinating with the candidate."],
   ["Material vs. purposive incentive", "Material = a tangible benefit (discounts, services). Purposive = belief in the group’s goal."],
   ["Insider vs. outsider strategy", "Insider = direct lobbying and information. Outsider = public pressure and mobilization. They work best together."],
   ["Agenda-setting vs. priming vs. framing", "Agenda-setting = what we pay attention to. Priming = what we judge officials by. Framing = how we interpret an issue."],
   ["Resources, interest, mobilization", "Resources (time, money, civic skills) make it possible; interest makes it worthwhile; being asked supplies the prompt."]
  ],
  numbers:[
   ["Turnout", "4,800 ballots ÷ 10,000 of voting age = <b>48% VAP</b>. 4,800 ÷ 8,000 eligible = <b>60% VEP</b>. A 12-point gap from the denominator alone."],
   ["Plurality", "A 42%, B 38%, C 20% → <b>A wins with a plurality, not a majority</b>."],
   ["Two voters", "“Past performance was effective” = <b>retrospective</b>. “I like the plan for the next four years” = <b>prospective</b>."],
   ["Transit news", "Covering transit over and over = <b>agenda-setting</b>; judging officials by transit = <b>priming</b>; stressing cost or jobs access = <b>framing</b>."],
   ["Clean water group", "Residents benefit without joining = <b>free rider problem</b>. Member services = material incentive; belief in clean water = purposive. Neither guarantees joining."]
  ]
 },
 chapters:[
  {n:7, title:"Public Opinion", pages:"pp. 155–170",
   question:"How do we measure what citizens think, what shapes their opinions, and how do those opinions influence government?",
   goals:"Evaluate polling methods; distinguish political identities and informational shortcuts; explain why policy does not always mirror majority opinion.",
   terms:[
    ["Public opinion","What people think or feel about particular matters."],
    ["Poll","A survey intended to measure public opinion."],
    ["Random sampling","Selection that gives each member of the relevant population an equal chance of being interviewed."],
    ["Sampling error","Variation in estimates that comes from observing a sample rather than the entire population. A difference between two samples alone does not establish a poll’s margin of error."],
    ["Exit poll","Interviews with sampled voters on Election Day."],
    ["Question wording","The particular language used in a survey question, which can influence responses."],
    ["Political socialization","The development of political views; the highlights emphasize the family’s influence."],
    ["Impressionable years hypothesis","Events during adolescence and early adulthood have especially strong effects on political attitudes."],
    ["Partisanship","Identification with a political party."],
    ["Party sorting","Increasing alignment between party identification and issue positions."],
    ["Affective polarization","Disliking and distrusting members of the opposing party."],
    ["Political ideology","A relatively consistent set of beliefs about the policies government should pursue."],
    ["Political elites","People with a disproportionate share of political power."],
    ["Heuristics","Informational shortcuts used to make political decisions."]],
   concepts:[
    {h:"Representation is not immediate majority rule", p:"pp. 155–156", a:"The Framers wanted government to pursue substantive governing goals, not to obey each day’s opinion automatically.", ex:"A poll this week shows most people want a policy; Congress takes months to deliberate. That delay fits the constitutional design."},
    {h:"Poll quality depends on selection and wording", p:"pp. 156–158", a:"A valid poll needs both a properly drawn sample and clear, balanced questions. Many responses do not fix an unrepresentative sample or a slanted question.", ex:"Loaded: “Should the government keep spending even more of your money on this wasteful program?” (“wasteful” assumes the answer; “even more of your money” stirs emotion). Neutral: “Do you favor increasing, maintaining, or decreasing funding for this specified government program?”"},
    {h:"Opinions need not form a coherent ideology", p:"pp. 158–168", a:"People can hold preferences that are hard to reconcile. Family socialization, formative experiences, party identity and ideology help explain attitudes.", ex:"Wanting expanded government programs and lower taxes at the same time."},
    {h:"Partisanship and ideology are related but different", p:"pp. 165–168", a:"Party identification is an attachment to a party; ideology is a set of policy beliefs. Sorting lines the two up; affective polarization is about feelings toward the other side.", ex:"A voter who identifies as a Republican (partisanship), holds conservative positions on most issues (ideology), and so is “sorted”; if she also dislikes and distrusts Democrats, that is affective polarization."},
    {h:"Limited knowledge does not mean no decision-making capacity", p:"pp. 169–170", a:"Citizens use shortcuts: trusted political actors and party positions. A cue is only as good as its source, so judge both its usefulness and its reliability.", ex:"A voter follows a trusted organization’s position on a ballot measure. Helpful if the organization is reliable; misleading if it is not."},
    {h:"Responsiveness can be unequal", p:"p. 170", a:"Policy can reflect public preferences, but it may respond more strongly to economic elites and politically active citizens. Responsiveness to a majority is not the same as responsiveness to those who participate.", ex:"A policy most people support in surveys gets little action because the people who vote and contact officials care about something else."}],
   review:[
    ["Why might government policy differ from majority opinion without necessarily violating the constitutional design?","The Framers built representation, not immediate majority rule: officials are meant to pursue substantive goals and deliberate, not follow each day’s opinion. Policy can also respond more to active participants and elites."],
    ["Explain why a large convenience sample is not automatically better than a smaller random sample.","Size does not fix who is in the sample. A random sample gives everyone an equal chance; a large convenience sample can be full of unrepresentative people, so it can mislead even with many responses."],
    ["Distinguish sampling error from misleading question wording.","Sampling error is natural variation from studying a sample instead of everyone. Misleading wording is bias built into the question’s language, and it pushes answers the same way no matter how good the sample is."],
    ["How do socialization and the impressionable years hypothesis explain the development of political attitudes?","Socialization is how views develop, starting with the family. The impressionable years hypothesis adds that events during adolescence and early adulthood leave an especially strong mark."],
    ["Compare party sorting and political ideology.","Ideology is a consistent set of policy beliefs. Sorting is the growing match between a person’s party identification and those issue positions."],
    ["When can a heuristic improve a voter’s decision, and when might it mislead?","It helps when the cue comes from a reliable, trusted source that shares the voter’s concerns, saving time without losing accuracy. It misleads when the source is unreliable or the cue does not fit the voter’s actual interests."]],
   checks:[0,1,2]},

  {n:8, title:"Political Participation", pages:"pp. 174–190",
   question:"Why do some citizens participate while others do not, and how do electoral rules shape participation?",
   goals:"Distinguish turnout measures; explain resources, interest, and mobilization; connect participation to representation.",
   terms:[
    ["Political participation","Activities through which citizens try to influence politics, not just voting."],
    ["Voting-age population (VAP)","Residents who meet the minimum voting age, including some who are legally ineligible to vote."],
    ["Voting-eligible population (VEP)","The population legally eligible to vote, excluding those barred from voting."],
    ["National Voter Registration Act","The 1993 “motor-voter” law, making registration easier through motor vehicle offices and other registration opportunities."],
    ["Get-out-the-vote (GOTV)","Efforts to mobilize people to cast ballots."],
    ["Activists","People who participate across many forms of political activity."],
    ["Civic skills","Communication and organizational abilities that support participation."],
    ["Mobilization","Encouragement or recruitment that prompts people to participate."]],
   concepts:[
    {h:"The turnout denominator matters", p:"pp. 174–175", a:"Ballots ÷ VAP gives a lower turnout than ballots ÷ VEP, because VAP includes ineligible residents. Always say which population you divided by.", ex:"4,800 ÷ 10,000 (VAP) = 48%; 4,800 ÷ 8,000 (VEP) = 60%. Assessment version: 6,000 ÷ 12,000 = 50% VAP; 6,000 ÷ 10,000 = 60% VEP."},
    {h:"Registration and voting are different steps", p:"p. 176", a:"Easier registration need not raise voting by as much. Interest, feelings about the candidates and mobilization still matter, and registration rules are not the same everywhere.", ex:"The motor-voter law signs up many new registrants, but turnout rises far less, because registering is not the same as caring enough to vote."},
    {h:"Election rules developed through state and federal action", p:"pp. 178–183", a:"Expansion of suffrage, direct election of senators, the secret ballot, and federal intervention through the Voting Rights Act. Removing a formal restriction and securing effective access are two different achievements.", ex:"A right to vote on paper can still be blocked in practice; federal enforcement such as the Voting Rights Act was needed to make access real."},
    {h:"Participation extends beyond elections", p:"pp. 184–185", a:"Organizational activity, political discussion, campaign work and efforts to influence officials all count, alongside voting.", ex:"Volunteering for a campaign, or calling a representative about a bill."},
    {h:"Resources, interest, and recruitment work together", p:"pp. 185–187", a:"Time, money and civic skills make participation possible; interest makes it worthwhile; mobilization supplies the prompt. Education feeds both skills and interest.", ex:"A resident with free time and organizing skills (resources), who cares about schools (interest), goes to a board meeting after a neighbor asks her to come (mobilization)."},
    {h:"Participation can become habitual", p:"pp. 187–188", a:"Voting in one election makes later participation more likely, and government responsiveness follows who actually participates.", ex:"A first-time voter who votes this year is more likely to vote next time, and officials pay more attention to groups that turn out."}],
   review:[
    ["Why does VEP offer a different picture of turnout than VAP?","VEP removes people who are legally ineligible (VAP keeps them in the denominator), so the same ballots give a higher, truer turnout rate."],
    ["Why might a registration reform have a smaller effect on voting than on registration?","Registration removes one barrier, but voting still depends on interest, preferences about the candidates and being mobilized."],
    ["How did the secret ballot change the voting process described in the highlights?","Voters could mark their choices privately instead of in public view, as part of the election-rule changes the chapter traces. (Check the reading for the details the highlights give.)"],
    ["Distinguish an individual’s resources, political interest, and mobilization.","Resources (time, money, civic skills) are the ability to participate; interest is the motivation; mobilization is being asked or recruited."],
    ["Explain the two pathways through which education can increase participation.","Education builds civic skills (communication, organization) and raises political interest."],
    ["How can unequal participation produce unequal political responsiveness?","Officials respond to the people who vote and act. Groups that participate less get less attention, even if they are numerous."],
    ["Reading checkpoint: the Fifteenth and Nineteenth Amendments, the Voting Rights Act of 1965, Shelby County v. Holder, and voting at 18.","The guide says these details are truncated or missing from the highlights, so check them in the reading. Standard facts: the Fifteenth Amendment (1870) bars denying the vote because of race; the Nineteenth (1920) because of sex; the Voting Rights Act of 1965 brought federal enforcement; Shelby County v. Holder (2013) struck down the formula that decided which places needed federal approval to change voting rules; the Twenty-sixth Amendment (1971) set the voting age at 18."],
    ["Essay: Explain why low participation cannot be attributed to a single cause.","Use four parts: <b>institutional rules</b> (registration steps, rules that differ by state, the history of restrictions and of effective access); <b>resources</b> (time, money, civic skills, helped by education); <b>political interest</b> (caring about the outcome or the candidates); and <b>mobilization</b> (being asked, GOTV). Each alone falls short: easier registration does not guarantee voting, and resources without interest or a prompt may not lead to action."]],
   checks:[3,4,5]},

  {n:9, title:"Political Parties", pages:"pp. 192–210",
   question:"What do parties do, how are they organized, and why does the United States sustain a two-party system?",
   goals:"Explain the three dimensions of parties; compare nomination methods; connect electoral rules and voter preferences to party competition.",
   terms:[
    ["Political party","A group seeking to elect candidates to public office."],
    ["Party organization","The people and structures that recruit candidates and support campaigns."],
    ["Party in the electorate","Party identities and attachments among voters."],
    ["Party in government","Officeholders who coordinate legislative and executive action through party affiliations."],
    ["Realignment","A major, enduring shift in the coalitions supporting one or both parties."],
    ["Primary election","An election used to select a party’s nominee."],
    ["Closed primary","A primary restricted to registered members of the party."],
    ["Open primary","A primary that lets voters take part without being registered members of that party (rules vary)."],
    ["Crossover voting","Participating in another party’s primary."],
    ["National convention","The party delegate meeting that formally nominates its presidential candidate."],
    ["Invisible primary","The competition before any voting to attract important party and interest-group support."],
    ["National committee","The body managing party affairs between conventions."],
    ["Congressional campaign committee","A party committee supporting congressional candidates."],
    ["Partisan identification","A relatively stable attachment to a party."],
    ["Plurality system","The candidate with the most votes wins, even without a majority."]],
   concepts:[
    {h:"Parties connect voters, candidates, and governing institutions", p:"pp. 192–193", a:"Their roles: recruiting candidates, supporting campaigns, giving voters an identity, and coordinating officeholders. Three dimensions: the party organization, the party in the electorate, and the party in government.", ex:"The organization recruits a candidate for Congress; voters who identify with the party back her; once elected, she coordinates with her party’s leaders in Congress."},
    {h:"Nomination rules affect party control", p:"pp. 201–203", a:"Closed primaries tend to strengthen party influence. Reformers argue broader participation can favor moderation, but an argument is not a guarantee.", ex:"Opening a primary to Independents may or may not produce a more moderate nominee."},
    {h:"Activists and leaders may have different priorities", p:"pp. 202–204", a:"Activists tend to stress policy commitments; party leaders tend to stress winning elections. Early endorsements and organizational support matter but do not decide the nomination.", ex:"Activists want the candidate who is most committed on their issue; leaders want the one most likely to win in November."},
    {h:"Independent identity does not always mean no party preference", p:"p. 206", a:"Many self-identified Independents lean toward a party; only some lean toward neither.", ex:"A voter who says “I’m an Independent” but votes for the same party every time is a leaner."},
    {h:"Rules and preferences reinforce two-party competition", p:"pp. 209–210", a:"Plurality elections reward the top vote-getter, winner-take-all electoral allocation, and voters’ existing party preferences all sustain the two major parties. Plurality is not majority.", ex:"A third-party candidate who wins 20% everywhere can finish first nowhere, and so win nothing."}],
   review:[
    ["Identify the three dimensions of a political party and explain a function of each.","Party organization: recruits candidates and supports campaigns. Party in the electorate: voters’ party identities, a cue for how to vote. Party in government: officeholders coordinating legislative and executive action."],
    ["How do federalism and primary elections decentralize American parties?","Parties are organized state by state under different state rules, and primaries let voters, not central party leaders, choose the nominees, so power is spread out instead of held at the top."],
    ["How does realignment differ from a party losing a single election?","Realignment is a major, lasting shift in the coalitions behind the parties; one loss can be temporary and leave the coalitions unchanged."],
    ["Compare open and closed primaries. What trade-offs do they create for party control and voter access?","Closed primaries (members only) strengthen party control but shut out Independents; open primaries widen voter access and allow crossover voting but weaken the party’s control over its nominee."],
    ["Why can activist priorities differ from those of party leaders?","Activists care most about policy commitments; leaders care most about winning elections, which may require a less committed but more electable candidate."],
    ["Why is it misleading to treat all self-identified Independents as equally detached from parties?","Many Independents lean toward one party and vote like partisans; only those who lean toward neither are truly detached."],
    ["Application: A gets 42%, B 38%, C 20% in a plurality election. Who wins? Did the winner get a majority?","A wins with the largest share, a plurality. 42% is not more than half, so it is not a majority. (The assessment uses 44%: also a winning plurality, not a majority.)"]],
   checks:[6,7,8]},

  {n:10, title:"Elections and Campaigns", pages:"pp. 216–239",
   question:"How do nominations, campaigns, electoral rules, and campaign finance shape elections?",
   goals:"Distinguish nomination from election; explain campaign effects and voting choices; compare presidential and congressional contests; distinguish forms of political money.",
   terms:[
    ["Caucus","A meeting of party participants where delegates are selected."],
    ["Momentum","Increased support in later contests after a victory, especially an unexpected one."],
    ["Electoral College","The constitutional mechanism through which electors select the president."],
    ["Battleground (swing) state","A state where either major candidate has a realistic chance of winning."],
    ["Retrospective voting","Voting based on evaluations of past performance."],
    ["Prospective voting","Voting based on proposed future policies."],
    ["Latent partisanship","A party attachment that a campaign can activate or reinforce."],
    ["Defection","Supporting a candidate outside one’s usual party."],
    ["Valence issue","A broadly shared goal; the disagreement is over a candidate’s ability or commitment to achieve it."],
    ["Positional issue","An issue on which candidates and voters disagree about the desired policy."],
    ["Incumbency advantage","Current officeholders tend to outperform otherwise similar challengers."],
    ["Gerrymandering","Manipulating district boundaries to favor a party. Odd shapes are an illustration, not the defining feature."],
    ["Surge and decline","The president’s party does better in presidential elections and worse in midterms."],
    ["Coattails","Benefits other candidates get from support for the candidate at the top of the ticket."],
    ["Political action committee (PAC)","A committee that raises and spends political funds; often tied to an organization, from voluntary contributions."],
    ["Soft money","The historical category of party funds for activities not directly supporting a named candidate."],
    ["Super PAC","Can raise unlimited funds for independent expenditures, but may not coordinate them with candidates or campaigns."]],
   concepts:[
    {h:"Nomination and election are separate hurdles", p:"pp. 216–218", a:"Presidential candidates seek early organizational support (the invisible primary), compete in primaries and caucuses, and are formally nominated at the convention. Media attention and early wins create momentum.", ex:"An unexpected early primary win brings attention and donations, so the candidate gains more than that state’s delegates."},
    {h:"The Electoral College shapes campaign geography", p:"pp. 219–220", a:"Every state but Maine and Nebraska gives all its electors to the statewide winner, so campaigns concentrate on competitive states.", ex:"A candidate spends little in a state she is sure to win or lose, and campaigns heavily in a battleground state."},
    {h:"Campaigns connect election choices to three considerations", p:"pp. 220–224", a:"They help assign credit or blame for national conditions, activate party attachments, and present information about candidate qualities. Retrospective voting looks back; prospective voting looks ahead.", ex:"“The economy did well, so I’m keeping them” (retrospective) vs. “Their plan for the next four years is better” (prospective)."},
    {h:"Campaign influence is meaningful but limited", p:"pp. 224–228", a:"Ads can inform voters and affect how they see candidates, but effects are modest and competing messages offset each other. Conventions and debates draw attention and move polls.", ex:"Both sides run heavy ads in a state, and much of their effect cancels out."},
    {h:"Congressional incumbents possess distinct advantages", p:"pp. 231–232", a:"Name recognition and fundraising explain much of their reelection success; district boundaries and election timing also affect competition.", ex:"A long-serving member is known by name and has a large war chest, so a challenger starts far behind."},
    {h:"Midterm and presidential electorates can produce different outcomes", p:"pp. 232–233", a:"Surge and decline and presidential coattails explain why the president’s party can do differently when the president is or is not on the ballot. These are patterns, not laws.", ex:"The president’s party gains House seats in a presidential year, then loses some in the next midterm."},
    {h:"Campaign finance: free speech vs. anticorruption", p:"pp. 234–237", a:"Separate money given to candidates from independent spending, and PACs from Super PACs and tax-code groups. The dollar limits in the highlights are not a statement of current law.", ex:"A Super PAC can spend unlimited money on ads for a candidate, as long as it never coordinates with her campaign."},
    {h:"Coverage limit", p:"p. 239", a:"The guide gives only the heading “Effects of Elections on Policy.” Read that section in the chapter instead of guessing its argument from the heading.", ex:"If it comes up, answer from the reading, not from this page."}],
   review:[
    ["How do the invisible primary, primaries or caucuses, and convention fit into the nomination process?","In order: the invisible primary (winning party and group support before voting), then primaries and caucuses (winning delegates), then the convention (the formal nomination)."],
    ["Why can early primary victories have effects beyond the delegates immediately won?","They create momentum: media attention, money and support in later contests, especially after an unexpected win."],
    ["Explain why Electoral College rules encourage attention to battleground states.","With winner-take-all in almost every state, a few extra votes in a safe state win nothing; in a battleground state they can swing all its electors."],
    ["Compare retrospective and prospective voting with an example of each.","Retrospective: voting to reelect because past performance was good. Prospective: voting for the candidate whose future plan you prefer."],
    ["Distinguish valence and positional issues without evaluating a real candidate.","Valence: a shared goal like honest government, where voters ask who can deliver it. Positional: voters disagree about the policy itself, such as raising or lowering a particular tax."],
    ["Why can advertisements matter without determining an election’s outcome?","Ads inform and shape impressions, but their effects are modest and the other side’s ads offset them, while party identity and national conditions weigh heavily."],
    ["Explain how name recognition, fundraising, coattails, and surge and decline affect congressional elections.","Name recognition and fundraising help incumbents win; coattails help the president’s party in presidential years; surge and decline means that party often loses ground in the midterm."],
    ["Why is independent spending different from a direct campaign contribution?","A contribution goes to the campaign, which controls it; independent spending is done separately and may not be coordinated with the campaign."],
    ["Application: “past performance was effective” vs. “I support the plan for the next four years.”","The first is retrospective voting; the second is prospective voting."],
    ["Essay: “Campaigns matter, but they do not operate on a blank slate.”","Agree, using four parts: <b>party identity</b> (most voters start with an attachment; campaigns activate latent partisanship more than they convert); <b>national conditions</b> (voters assign credit or blame, retrospective voting); <b>communications</b> (ads, debates and conventions inform and move polls, but modestly, and messages offset); <b>electoral rules</b> (Electoral College battlegrounds, incumbency, district lines, surge and decline). Campaigns work within these."]],
   checks:[9,10,11]},

  {n:11, title:"Interest Groups", pages:"pp. 244–265",
   question:"Why do interest groups form, how do they attract members, and how do they influence policy?",
   goals:"Distinguish parties from interest groups; explain collective-action problems; compare insider and outsider strategies.",
   terms:[
    ["Interest group","An organization sharing an interest or goal that seeks to influence public policy."],
    ["Lobbyist","Someone who seeks to influence legislation on behalf of a client."],
    ["Institutional interest","A person or organization representing another organization or set of organizations."],
    ["Membership interest","An organization built around individual members."],
    ["Free rider problem","People won’t contribute when they can get the benefit without joining or helping."],
    ["Public good","A benefit whose use by one person does not reduce it for others, and which nonmembers also enjoy."],
    ["Material incentive","A tangible membership benefit, such as discounts and services."],
    ["Purposive incentive","The appeal of contributing to the organization’s goals."],
    ["Social movement","A widely shared demand for change in the social or political order."],
    ["Political cue","A signal that identifies the values at stake in a policy question."],
    ["Earmark","A provision directing a benefit to a particular recipient or project, not separately reviewed on its merits by all of Congress."],
    ["Grassroots lobbying","Mobilizing citizens to contact public officials."],
    ["Insider strategy","Influence through direct engagement with policymakers: lobbying and providing information."],
    ["Outsider strategy","Influence through public pressure and mobilization."]],
   concepts:[
    {h:"Group formation has multiple causes", p:"pp. 244–245", a:"Four factors: economic developments, government policies that create interests, leadership, and the expansion of government activity. A shared concern alone does not create an organization.", ex:"A new government program creates people with a stake in it (its recipients or providers), who then organize."},
    {h:"Organizations and individuals both seek representation", p:"pp. 246–247", a:"Institutional groups represent other organizations; membership groups recruit individuals. Large, diverse associations struggle to take clear positions on issues that divide their members.", ex:"A trade association speaks for companies (institutional); a citizens’ group signs up individual people (membership)."},
    {h:"Collective benefits create recruitment problems", p:"pp. 248–250", a:"When nonmembers enjoy a policy benefit, people avoid the costs of joining. Tangible member benefits and commitment to the goal encourage contributions.", ex:"A group wins cleaner drinking water for everyone, so residents benefit whether or not they join: a free rider problem. Member-only services (material) or belief in clean water (purposive) can help, but neither guarantees joining."},
    {h:"Movements and organizations are connected but distinct", p:"pp. 251–254", a:"A broad demand for change can produce formal organizations, and groups pursuing related goals can differ in intensity, size and strategy.", ex:"One movement gives rise to several organizations: a large moderate one and a smaller, more intense one."},
    {h:"Credible information is a major resource", p:"pp. 254–255", a:"Officials face more issues than they can master alone. Groups supply policy information and political cues, so credibility matters alongside access and money.", ex:"A legislator relies on a group’s accurate research on a bill; if it is ever caught giving false information, its influence drops."},
    {h:"Insider and outsider tactics can complement one another", p:"pp. 258–263", a:"Direct lobbying, public mobilization and political spending are not either-or. The strongest approach combines them and shows officials the electoral consequences.", ex:"Lobbyists meet a senator while members flood her office with calls, showing that voters care."},
    {h:"Regulation operates within constitutional protection", p:"pp. 264–265", a:"Interest-group activity is protected political speech. The guide says its regulation section is incomplete, so check the chapter for specific disclosure and campaign-finance rules.", ex:"A group may lobby and speak freely, subject to the disclosure rules in the reading."}],
   review:[
    ["How does an interest group’s central purpose differ from a political party’s?","A party seeks to elect candidates to office; an interest group seeks to influence public policy."],
    ["Explain the four factors that promote the emergence of interest groups.","Economic developments (new industries and occupations), government policies that create interests, leadership (organizers who start groups), and the expansion of government activity."],
    ["Distinguish institutional interests from membership interests.","Institutional: represents other organizations. Membership: built around individual members."],
    ["Why does pursuing a public good create a free rider problem?","A public good benefits nonmembers too, so people can enjoy it without paying the costs of joining."],
    ["Compare material and purposive incentives.","Material: a tangible benefit such as discounts and services. Purposive: the appeal of the group’s goals. (The guide says the incentive section is incomplete; check the reading for the full classification.)"],
    ["Why is providing credible information valuable to legislators?","Legislators face more issues than they can study themselves, so reliable information and cues help them decide. That makes credibility a source of influence."],
    ["How can grassroots mobilization make direct lobbying more effective?","It shows the official that voters care, so the lobbyist’s message carries electoral consequences."],
    ["Application: a group works for cleaner public drinking water; residents benefit whether or not they join.","Free rider problem. Member-only services supply a material incentive; belief in clean water supplies a purposive one. Neither guarantees participation."],
    ["Essay: Explain why money alone is not a complete account of interest-group influence.","Four parts: <b>information</b> (credible research and cues officials need); <b>membership commitment</b> (purposive members who stay active); <b>mobilization</b> (grassroots pressure alongside lobbying); <b>electoral consequences</b> (showing officials that votes are at stake). Money helps, but these make it count."]],
   checks:[12,13,14]},

  {n:12, title:"The Media", pages:"pp. 269–294",
   question:"How do news media shape political knowledge, attention, interpretation, and accountability?",
   goals:"Explain media development; distinguish agenda-setting, priming, and framing; evaluate the limits of media influence and the challenges of misinformation.",
   terms:[
    ["Party press","Newspapers sponsored or controlled by political factions and parties."],
    ["Popular press","Mass-readership newspapers seeking broad audiences."],
    ["Selective exposure","Preferring information that matches existing views."],
    ["Echo chamber","An information environment that keeps reinforcing similar views, with little exposure to alternatives."],
    ["Fake news","Manufactured stories presented as news, often serving a viewpoint or candidate."],
    ["Bots","Automated or fake accounts used to repost and circulate content."],
    ["Agenda-setting (gatekeeping)","Media influence over which topics get public attention."],
    ["Priming","Media influence over the considerations people use to evaluate political figures."],
    ["Framing","Emphasizing selected aspects of an issue, shaping how audiences interpret it."],
    ["Watchdog role","Media scrutiny of government conduct in the public interest."],
    ["Fact checking","Evaluating the accuracy of public claims."],
    ["Game frame","Coverage emphasizing strategy and competition rather than policy substance."],
    ["Horse-race journalism","Reporting focused on who is ahead or behind."],
    ["Prior restraint","Government restriction of publication before it happens."],
    ["Adversarial press","Journalism that approaches officials skeptically and seeks unfavorable information."],
    ["FCC","The Federal Communications Commission, discussed in relation to broadcast licensing."],
    ["Equal time rule","Shorthand for rules on comparable broadcast opportunities for candidates (the reading has the exceptions)."]],
   concepts:[
    {h:"Technology changes access and presentation", p:"pp. 269–275", a:"From party newspapers to mass-readership papers, opinion magazines, radio, television and the Internet. New media allow direct communication but also competing responses and audience avoidance.", ex:"An official posts directly to the public online, and critics answer in the same place right away."},
    {h:"More available information is not the same as more knowledge", p:"pp. 275–277", a:"Interested citizens can find more than ever; others can avoid politics more easily. Declining local news leaves gaps in knowledge of local government and accountability.", ex:"A town loses its paper, and no one is covering city council meetings anymore."},
    {h:"Online communication can assist mobilization without transforming all participation", p:"pp. 277–278", a:"Online organizing and turnout efforts help, but the effects are modest or uneven. Not every online environment is an echo chamber.", ex:"An online turnout drive raises voting a little among people already somewhat interested."},
    {h:"Misinformation can spread rapidly", p:"pp. 279–281", a:"Sharing tools and bots can circulate manufactured stories. Judge a claim on its evidence, not on how widely it is shared.", ex:"A fake story is reposted thousands of times by automated accounts within an hour."},
    {h:"Three media effects answer different questions", p:"pp. 281–283", a:"Agenda-setting: what gets attention. Priming: what officials are judged by. Framing: how an issue is interpreted. They overlap but are not interchangeable.", ex:"Transit: repeated transit coverage = agenda-setting; judging officials by transit performance = priming; stressing costs or access to jobs = framing."},
    {h:"Watchdog reporting supports accountability", p:"pp. 283–284", a:"Investigative scrutiny and fact checking expose problems and help citizens judge public claims. Fewer local outlets weaken oversight.", ex:"Reporters uncover misuse of public funds, and officials are held to account."},
    {h:"Commercial pressures influence coverage", p:"pp. 285–288", a:"Competition for attention encourages horse-race coverage, sensationalism and negativity. Keep separate: audience incentives, reporters’ personal views, factual accuracy, and bias in what is published.", ex:"Election coverage dwells on who is ahead in the polls instead of what the candidates propose."},
    {h:"Different media face different regulatory frameworks", p:"pp. 290–294", a:"Press freedom for print, broadcast licensing for radio and TV, and narrow limits on prior restraint. The liability summary and renewal intervals in the highlights are not complete or current law.", ex:"A newspaper needs no license; a TV station holds an FCC license."}],
   review:[
    ["Application (from the answer key): a city’s transit coverage.","Repeated transit coverage illustrates agenda-setting; evaluating officials by transit performance illustrates priming; emphasizing costs or access to jobs illustrates framing."],
    ["Selective exposure vs. echo chamber.","Selective exposure is a person’s preference for agreeable information; an echo chamber is the environment that results when similar views keep being reinforced with few alternatives."],
    ["Game frame vs. horse-race journalism.","The game frame emphasizes strategy and competition over policy; horse-race journalism is the narrower focus on who is ahead or behind."]],
   checks:[15,16,17]}
 ],
 checks:[
  {c:7, n:"7.1", q:"Which combination is most important for a valid public opinion poll?", o:["Many respondents and dramatic wording","A properly drawn sample and carefully worded questions","Party endorsements and online distribution","Unanimous responses and a short questionnaire"], a:1, e:"Both representative selection and sound wording matter."},
  {c:7, n:"7.2", q:"Disliking and distrusting members of the other party is best described as:", o:["Random sampling","Political socialization","Affective polarization","Prospective voting"], a:2, e:"Affective polarization concerns distrust and dislike of opposing partisans."},
  {c:7, n:"7.3", q:"A voter uses a trusted organization’s policy position to help make a decision. This is an example of:", o:["A heuristic","Sampling error","An exit poll","Federalism"], a:0, e:"A heuristic is an informational shortcut."},
  {c:8, n:"8.1", q:"Which turnout denominator excludes residents who are legally ineligible to vote?", o:["Total population","VAP","VEP","Number of campaign donors"], a:2, e:"VEP excludes legally ineligible residents."},
  {c:8, n:"8.2", q:"Communication and organization abilities are examples of:", o:["Civic skills","Sampling error","Electoral coattails","Party sorting"], a:0, e:"Communication and organizational abilities are civic skills."},
  {c:8, n:"8.3", q:"Which statement best reflects the chapter highlights?", o:["Participation means voting only.","Easier registration automatically guarantees higher turnout.","Money is the only resource necessary for participation.","Being asked to participate can be an important step toward political activity."], a:3, e:"Mobilization can prompt participation."},
  {c:9, n:"9.1", q:"A party’s efforts to recruit candidates belong most directly to:", o:["Party in the electorate","Party organization","Sampling methods","Judicial review"], a:1, e:"Recruitment is an organizational function."},
  {c:9, n:"9.2", q:"A primary restricted to registered party members is:", o:["Closed","Open","A general election","A national convention"], a:0, e:"A closed primary restricts participation to party members."},
  {c:9, n:"9.3", q:"A lasting change in a party’s supporting coalition is called:", o:["Momentum","A campaign bump","Crossover voting","Realignment"], a:3, e:"Realignment involves lasting coalition change."},
  {c:10, n:"10.1", q:"Voting based on an officeholder’s past performance is:", o:["Prospective voting","Retrospective voting","Crossover voting","Random sampling"], a:1, e:"Retrospective voting evaluates the past."},
  {c:10, n:"10.2", q:"A generally shared goal such as honest government is best classified as:", o:["A positional issue","A caucus","A valence issue","A realignment"], a:2, e:"Honest government is a broadly shared goal."},
  {c:10, n:"10.3", q:"Which statement best distinguishes a Super PAC?", o:["It can make unlimited independent expenditures while remaining uncoordinated with campaigns.","It directly selects electors.","It is a party’s national convention.","It guarantees electoral victory through advertising."], a:0, e:"Super PAC expenditures must remain independent of campaigns."},
  {c:11, n:"11.1", q:"Receiving a group-created public benefit without contributing illustrates:", o:["Party sorting","A free rider problem","Momentum","Redistricting"], a:1, e:"Noncontributors can benefit from collective efforts."},
  {c:11, n:"11.2", q:"Joining because one believes strongly in an organization’s goals reflects:", o:["A purposive incentive","A random sample","A material discount only","A closed primary"], a:0, e:"Purposive incentives appeal to goals."},
  {c:11, n:"11.3", q:"Which conclusion best reflects the supplied highlights?", o:["Money is the only source of influence.","Direct lobbying and public mobilization cannot be combined.","Credible information and mobilized supporters can both strengthen influence.","Shared interests automatically produce organizations."], a:2, e:"Information and mobilization complement other resources."},
  {c:12, n:"12.1", q:"Increasing public attention to a topic by repeatedly covering it illustrates:", o:["Agenda-setting","A purposive incentive","Party realignment","An exit poll"], a:0, e:"Agenda-setting affects topic attention."},
  {c:12, n:"12.2", q:"Emphasizing the economic benefits of a policy rather than its environmental costs illustrates:", o:["VEP","Framing","Closed primaries","Coattails"], a:1, e:"Framing emphasizes selected aspects of an issue."},
  {c:12, n:"12.3", q:"Investigating government conduct to promote accountability reflects the media’s:", o:["Invisible primary","Material incentive","Watchdog role","Plurality function"], a:2, e:"Watchdog reporting scrutinizes government conduct."}
 ],
 cross:{
  theme:"Public preferences become politically consequential through participation, organizations, elections, and communication. Constitutional rules and unequal resources mediate those connections. Be ready to explain a process, not just list terms.",
  items:[
   ["Opinion and action (ch. 7–8): why might widespread support for a policy not produce government action?","The design is representation, not instant majority rule (7); policy responds more to elites and to those who participate (7, 8); supporters may lack resources, interest or mobilization, so they don’t act (8)."],
   ["Organizations (ch. 9 and 11): compare parties and interest groups.","Parties seek to elect candidates (recruit, campaign, coordinate officeholders); interest groups seek to influence policy (lobbying, information, mobilization) whoever holds office."],
   ["Identity and choice: connect partisanship, party sorting, heuristics, and campaign activation of party attachments.","Partisanship is a stable attachment (7, 9); sorting lines it up with issue positions (7); party positions serve as heuristics (7); campaigns activate latent partisanship more than they convert (10)."],
   ["Communication (ch. 10 and 12): how do campaign messages and media framing influence the information voters use?","Campaigns supply information on conditions and candidate qualities (10); media decide what gets attention (agenda-setting), what officials are judged by (priming) and how issues are understood (framing) (12)."],
   ["Collective action (ch. 8 and 11): connect civic skills and mobilization to interest-group recruitment and grassroots lobbying.","Civic skills and being asked drive individual participation (8); groups overcome free riding with incentives and mobilize members to contact officials, which is grassroots lobbying (11)."],
   ["Accountability: how voting, retrospective judgments, and watchdog journalism each hold officials accountable.","Voting removes or keeps officials (8, 10); retrospective voting rewards or punishes past performance (10); watchdog reporting and fact checking expose problems so voters can judge (12)."],
   ["Rules: how federalism, primary rules, plurality elections, Electoral College allocation, and district boundaries shape outcomes.","Federalism decentralizes parties (9); primary rules shift control between party and voters (9); plurality and winner-take-all sustain two parties (9, 10); the Electoral College focuses campaigns on battlegrounds (10); district lines and gerrymandering affect competition (10)."],
   ["Extended essay: a policy is popular in surveys but gets little legislative attention. Use at least four chapters.","Separate four things: <b>what the public wants</b> (7: polls, wording, incoherent or weak preferences, representation not instant majority rule); <b>who participates</b> (8: unequal turnout and resources, so responsiveness follows participants); <b>how groups organize</b> (11: free riders, so broad public goods are under-organized while concentrated interests lobby); <b>what information officials and citizens receive</b> (12: agenda-setting, framing, declining local news). Parties and elections (9, 10) can add: activists’ priorities, safe incumbents, plurality rules."]]
 },
 key45:"Chapter 7: 1 B · 2 D · 3 A · 4 C · 5 B · 6 A · 7 D. Chapter 8: 8 C · 9 A · 10 D · 11 B · 12 C · 13 A · 14 D. Chapter 9: 15 B · 16 C · 17 A · 18 D · 19 C · 20 B · 21 A. Chapter 10: 22 D · 23 A · 24 B · 25 C · 26 D · 27 A · 28 C · 29 B · 30 D · 31 A. Chapter 11: 32 C · 33 B · 34 A · 35 D · 36 C · 37 B · 38 A. Chapter 12: 39 D · 40 B · 41 A · 42 C · 43 D · 44 B · 45 A."
};

/* ---- practice questions, written from the guide; c = chapter. pc = one of his practice-check questions ---- */
var E2_QB = [
 /* ---- chapter 7 ---- */
 {c:7,t:"mc",q:"What does random sampling give each member of the relevant population?",a:"An equal chance of being interviewed",w:["A say in how the questions are worded","An equal weight in the final estimate","A guaranteed place in the next poll"],e:"Random sampling: selection that gives each member of the relevant population an equal chance of being interviewed."},
 {c:7,t:"mc",ap:true,q:"A news site gets 80,000 people to answer an online poll; a firm surveys 1,000 people chosen at random. Which is likely more accurate?",a:"The 1,000, because each person had an equal chance to be chosen",w:["The 80,000, because a bigger sample always gives a better estimate","The 80,000, because volunteers care more and answer more honestly","Neither is better, because both asked the very same question"],e:"A large convenience sample is not automatically better: if the respondents are unrepresentative, size does not fix it."},
 {c:7,t:"mc",q:"Interviews with sampled voters on Election Day are called:",a:"Exit polls",w:["Random samples","Convenience samples","Tracking polls"],e:"Exit poll: interviews with sampled voters on Election Day."},
 {c:7,t:"mc",ap:true,q:"Two polls drawn the same careful way find 52% and 49% support. The gap most likely comes from:",a:"Sampling error",w:["Question wording","Party sorting","Affective polarization"],e:"Sampling error is the variation that comes from observing a sample instead of the whole population. (The guide adds: such a difference alone does not establish a poll’s margin of error.)"},
 {c:7,t:"mc",ap:true,q:"A survey asks, “Should the government keep spending even more of your money on this wasteful program?” What is wrong with it?",a:"Loaded wording that pushes people toward a negative answer",w:["Sampling error from interviewing too few people in the town","An unrepresentative sample of volunteer respondents","Too few answer choices to count as a valid exit poll"],e:"“Wasteful” assumes a negative judgment and “even more of your money” invites emotion. Neutral: “Do you favor increasing, maintaining, or decreasing funding for this specified government program?”"},
 {c:7,t:"mc",q:"According to the impressionable years hypothesis, which events shape political attitudes most strongly?",a:"Events during adolescence and early adulthood",w:["Events during early childhood, before school","Events in middle age, at the height of a career","Events in the years just before retirement"],e:"The impressionable years hypothesis: adolescence and early adulthood have especially strong effects."},
 {c:7,t:"mc",q:"In the highlights, which influence on political socialization is emphasized?",a:"The family",w:["The workplace","Social media","The church"],e:"Political socialization is the development of political views; the highlights emphasize family influence."},
 {c:7,t:"mc",q:"Increasing alignment between party identification and issue positions is called:",a:"Party sorting",w:["Affective polarization","Political socialization","Realignment"],e:"Sorting lines up party identity and issue positions. Affective polarization is about feelings toward the other party; realignment (ch. 9) is a lasting coalition shift."},
 {c:7,t:"tf",q:"Partisanship and political ideology mean the same thing: both describe a person’s policy beliefs.",a:false,e:"False. Partisanship is an attachment to a party; ideology is a set of policy beliefs."},
 {c:7,t:"tf",q:"The chapter says people can hold preferences that are hard to reconcile, such as wanting expanded programs and lower taxes.",a:true,e:"True. Opinions need not form a coherent ideology."},
 {c:7,t:"mc",q:"According to the highlights (p. 170), policy may respond more strongly to whom?",a:"Economic elites and politically active citizens",w:["Young voters and first-time voters","Poll respondents and survey firms","Independents and voters for third-party candidates"],e:"Responsiveness can be unequal: tell responsiveness to a majority apart from responsiveness to those who participate."},
 {c:7,t:"mc",ap:true,q:"When is a heuristic most likely to mislead a voter?",a:"When the cue comes from an unreliable source",w:["When the cue comes from the voter’s own party","When the voter uses it close to Election Day","When the voter has a busy schedule"],e:"Citizens may use trusted actors and party positions as shortcuts; judge both the cue’s usefulness and whether its source is reliable."},
 {c:7,t:"mc",q:"People with a disproportionate share of political power are called:",a:"Political elites",w:["Activists and party leaders","Partisans","Lobbyists"],e:"Political elites: people with a disproportionate share of political power."},
 {c:7,t:"mc",q:"A relatively consistent set of beliefs about the policies government should pursue is:",a:"A political ideology",w:["Partisanship","A heuristic","Political socialization"],e:"Ideology concerns policy beliefs; partisanship is attachment to a party."},
 {c:7,t:"tf",q:"Policy that differs from majority opinion always violates the constitutional design.",a:false,e:"False. The Framers built representation, not immediate majority rule."},

 /* ---- chapter 8 ---- */
 {c:8,t:"mc",ap:true,q:"A town has 10,000 residents of voting age, 8,000 of them eligible, and 4,800 vote. What is turnout?",a:"48% of VAP and 60% of VEP",w:["60% of VAP and 48% of VEP","48% of both, since the ballots are the same","80% of VAP and 60% of VEP"],e:"4,800 ÷ 10,000 = 48% (VAP); 4,800 ÷ 8,000 = 60% (VEP). The same ballots give a 12-point gap because the denominators differ."},
 {c:8,t:"mc",ap:true,q:"6,000 people vote. The voting-age population is 12,000 and the voting-eligible population is 10,000. What is turnout?",a:"50% of VAP and 60% of VEP",w:["60% of VAP and 50% of VEP","50% of both, since the ballots are the same","83% of VAP and 60% of VEP"],e:"6,000 ÷ 12,000 = 50% (VAP); 6,000 ÷ 10,000 = 60% (VEP). This is the assessment’s own example."},
 {c:8,t:"mc",q:"Why is turnout measured by VAP usually lower than turnout measured by VEP?",a:"VAP includes residents who are legally ineligible to vote",w:["VEP counts only registered voters who actually voted","VAP leaves out everyone who is under the age of 21 years old","VEP adds absentee ballots that VAP does not count"],e:"VAP includes some who are legally ineligible; VEP excludes those barred from voting."},
 {c:8,t:"mc",q:"The 1993 law commonly called the motor-voter law is:",a:"The National Voter Registration Act",w:["The Voting Rights Act","The Help America Vote Act of 1993","The Civil Rights Act"],e:"It was designed to make registration easier through motor vehicle services and other registration opportunities."},
 {c:8,t:"tf",q:"Making registration easier produces an equally large increase in voting.",a:false,e:"False. Registration and voting are different steps; interest, candidate preferences and mobilization still matter."},
 {c:8,t:"mc",q:"Time, money and civic skills are examples of:",a:"Resources",w:["Mobilization","Political interest","Heuristics"],e:"Resources make participation possible; interest makes it worthwhile; mobilization supplies a prompt."},
 {c:8,t:"mc",ap:true,q:"A neighbor knocks on a resident’s door and asks her to come to a city council meeting, and she goes. What prompted her to participate?",a:"Mobilization",w:["Civic skills","Political socialization","Party sorting"],e:"Mobilization: encouragement or recruitment that prompts people to participate."},
 {c:8,t:"mc",q:"Through which two pathways can education increase participation?",a:"It builds civic skills and raises political interest",w:["It raises income and lowers the voting age","It adds registration drives and exit polls","It builds party loyalty and makes people give to campaigns"],e:"Education can support both skills and political interest."},
 {c:8,t:"tf",q:"Participating in one election can make a person more likely to participate in later elections.",a:true,e:"True. Participation can become habitual."},
 {c:8,t:"mc",q:"People who participate across many forms of political activity are:",a:"Activists",w:["Partisans","Political elites","Lobbyists"],e:"Activists: people who participate across many forms of political activity."},
 {c:8,t:"mc",q:"Why are removing a formal restriction and securing effective access two different achievements?",a:"A right on paper can still be blocked in practice",w:["A formal restriction applies only in federal elections","Effective access follows automatically once a ban is lifted","Removing a restriction always takes a constitutional amendment"],e:"The guide asks you to explain this distinction; federal intervention such as the Voting Rights Act was about making access real."},
 {c:8,t:"mc",q:"Which change appears in the chapter’s account of election rules developed through state and federal action?",a:"The secret ballot",w:["The Electoral College","The national convention","The invisible primary"],e:"The highlights emphasize the expansion of suffrage, direct election of senators, the secret ballot, and the Voting Rights Act."},
 {c:8,t:"mc",q:"How can unequal participation produce unequal political responsiveness?",a:"Officials respond more to the people who actually participate",w:["Officials are required by law to follow the views of nonvoters","Nonvoters’ views are counted twice in most polls","Participation has little link to what officials do"],e:"Government responsiveness is affected by who actually participates."},
 {c:8,t:"tf",q:"By the chapter’s definition, political participation means voting only.",a:false,e:"False. It includes organizational activity, political discussion, campaign work and efforts to influence officials."},
 {c:8,t:"mc",q:"Reading checkpoint: which amendment set the voting age at 18?",a:"The Twenty-sixth",w:["The Nineteenth","The Fifteenth","The Twenty-fourth"],e:"The Twenty-sixth Amendment (1971). The guide says this detail is not in the highlights; confirm it in the reading."},

 /* ---- chapter 9 ---- */
 {c:9,t:"mc",q:"Officeholders who coordinate legislative and executive action through their party make up:",a:"The party in government",w:["The party organization","The party in the electorate","The national committee"],e:"The three dimensions: organization, electorate, government."},
 {c:9,t:"mc",q:"Voters’ party identities and attachments make up:",a:"The party in the electorate",w:["The party organization","The party in government","The congressional campaign committee"],e:"Party in the electorate: party identities and attachments among voters."},
 {c:9,t:"mc",ap:true,q:"In a plurality election, A gets 42%, B 38% and C 20%. What happens?",a:"A wins with a plurality but not a majority",w:["A wins with a majority of the votes","No one wins until a runoff between A and B is held","B and C together take the seat"],e:"A has the largest share (plurality). 42% is not more than half (majority)."},
 {c:9,t:"tf",q:"In a plurality system, a candidate with 44 percent of the vote can win.",a:true,e:"True. 44% can be a winning plurality, though it is not a majority (assessment question 20)."},
 {c:9,t:"mc",q:"A primary that lets voters take part without being registered members of that party is:",a:"An open primary",w:["A closed primary","A caucus","A national convention"],e:"Open primary; rules vary by system."},
 {c:9,t:"mc",q:"Taking part in another party’s primary is called:",a:"Crossover voting",w:["Defection","Realignment","Party realignment"],e:"Crossover voting is in primaries; defection (ch. 10) is supporting another party’s candidate."},
 {c:9,t:"mc",q:"The competition before any voting to attract important party and interest-group support is:",a:"The invisible primary",w:["The open primary","Momentum","The national convention"],e:"Invisible primary: the pre-voting competition for support."},
 {c:9,t:"mc",q:"Which body manages party affairs between conventions?",a:"The national committee",w:["The congressional campaign committee","The party in government","The national convention"],e:"The congressional campaign committee supports congressional candidates."},
 {c:9,t:"mc",q:"What do closed primaries tend to do?",a:"Strengthen party influence over the nomination",w:["Guarantee more moderate nominees","Increase crossover voting from members of other parties","Weaken the party organization’s role"],e:"Closed primaries tend to strengthen party influence."},
 {c:9,t:"tf",q:"Opening primaries to more voters is guaranteed to produce more moderate nominees.",a:false,e:"False. Reformers argue it can favor moderation; an argument is not a guarantee."},
 {c:9,t:"mc",q:"Why might party activists and party leaders disagree?",a:"Activists stress policy commitments; leaders stress winning elections",w:["Activists stress winning elections; leaders stress policy commitments","Activists want closed primaries; leaders want caucuses only","Activists raise the money; leaders recruit all the voters"],e:"Activists may emphasize policy; leaders may emphasize electoral success."},
 {c:9,t:"mc",q:"Why is it misleading to treat all Independents as detached from parties?",a:"Many Independents lean toward one party",w:["Most Independents are registered party members","Independents cannot vote in any primary","Independents nearly always vote for third parties"],e:"The highlights distinguish Independents who lean toward a party from those who lean toward neither."},
 {c:9,t:"mc",q:"Which combination helps sustain the two-party system, according to pp. 209–210?",a:"Plurality elections, winner-take-all allocation and existing party preferences",w:["Proportional representation, runoff elections and public funding","Open primaries, caucuses and widespread crossover voting","Strong national committees and closed primaries held in every single state"],e:"Rules and preferences reinforce two-party competition."},
 {c:9,t:"mc",q:"A relatively stable attachment to a party is:",a:"Partisan identification",w:["Realignment","Crossover voting","The party organization"],e:"Partisan identification: a relatively stable attachment to a party."},

 /* ---- chapter 10 ---- */
 {c:10,t:"mc",ap:true,q:"One voter says, “The administration’s past performance was effective.” Another says, “I support this candidate’s plan for the next four years.” Classify them.",a:"Retrospective, then prospective",w:["Prospective, then retrospective","Both retrospective","Both prospective"],e:"Past performance = retrospective; future plans = prospective."},
 {c:10,t:"mc",q:"Increased support in later contests after a victory, especially an unexpected one, is:",a:"Momentum",w:["Coattails","Surge and decline","Incumbency advantage"],e:"Early victories can matter beyond the delegates won."},
 {c:10,t:"mc",q:"Which two states do not use winner-take-all allocation, according to the highlights?",a:"Maine and Nebraska",w:["Maine and Vermont","Nebraska and Iowa","New Hampshire and Maine"],e:"Every other state gives all its electors to the statewide winner."},
 {c:10,t:"mc",q:"Why do battleground states get so much campaign attention?",a:"Either candidate can realistically win all of their electors",w:["They hold the earliest primaries and caucuses","They always have the most electoral votes","Their electors may vote for any candidate they choose, whatever the result"],e:"With winner-take-all, competitive states are where votes change the result."},
 {c:10,t:"mc",q:"An issue on which candidates and voters disagree about the desired policy is:",a:"A positional issue",w:["A valence issue","Latent partisanship","A caucus"],e:"Valence = shared goal, argue over who can deliver; positional = disagreement over the policy."},
 {c:10,t:"mc",ap:true,q:"A campaign reminds a long-time but inactive party member why she belongs to the party, and she turns out to vote for its candidate. This is:",a:"Activating latent partisanship",w:["Encouraging defection to the other party","Prospective voting","Riding the coattails"],e:"Latent partisanship: a party attachment a campaign can activate or reinforce."},
 {c:10,t:"mc",q:"Supporting a candidate outside one’s usual party is:",a:"Defection",w:["Crossover voting","Realignment","Party sorting"],e:"Defection is in the general election; crossover voting is in another party’s primary."},
 {c:10,t:"mc",q:"What do the highlights say about the effects of campaign ads?",a:"They are modest, and competing messages can offset one another",w:["They are large, and they usually decide the closest elections","They have no effect at all on what voters think","They affect only voters who have already voted"],e:"Campaign influence is meaningful but limited."},
 {c:10,t:"mc",q:"Which two advantages help explain congressional incumbents’ reelection success?",a:"Name recognition and fundraising",w:["Term limits and public financing","Coattails and Super PACs","Open primaries and crossover votes"],e:"District boundaries and election timing also affect competition."},
 {c:10,t:"mc",q:"Surge and decline describes the president’s party doing:",a:"Better in presidential elections and worse in midterms",w:["Better in midterms and worse in presidential elections","Better after an early primary win than before it","Worse the longer its incumbents stay in office"],e:"Treat it as a pattern, not a universal law."},
 {c:10,t:"mc",q:"Benefits other candidates get from support for the candidate at the top of the ticket are:",a:"Coattails",w:["Momentum","Incumbency advantage","Soft money"],e:"Coattails help the president’s party in presidential years."},
 {c:10,t:"tf",q:"An unusual district shape is the essential defining feature of gerrymandering.",a:false,e:"False. Gerrymandering is manipulating boundaries to favor a party; odd shapes are only an illustration."},
 {c:10,t:"mc",q:"Why is independent spending different from a direct campaign contribution?",a:"It is spent separately and may not be coordinated with the campaign",w:["It is capped at a lower dollar limit than contributions","It must go through a party instead of a candidate","It may be spent only in the last week or two before Election Day"],e:"A contribution goes to the campaign; independent spending stays separate from it."},
 {c:10,t:"tf",q:"According to the guide, the dollar limits in the highlights are a statement of current legal requirements.",a:false,e:"False. The guide says the dollar limits and historical soft-money practices are not a statement of current law."},
 {c:10,t:"tf",q:"Campaigns can matter even though party identity, national conditions and electoral rules limit their effect.",a:true,e:"True. “Campaigns matter, but they do not operate on a blank slate.”"},
 {c:10,t:"mc",q:"A meeting of party participants where delegates are selected is:",a:"A caucus",w:["A primary election","A national convention","The invisible primary"],e:"Caucus: a meeting of party participants where delegates are selected."},

 /* ---- chapter 11 ---- */
 {c:11,t:"mc",ap:true,q:"A group works for cleaner public drinking water; residents benefit whether or not they join. What problem does the group face?",a:"A free rider problem",w:["An earmark problem in Congress","Sampling error","Selective exposure"],e:"Cleaner water benefits nonmembers, so people can enjoy it without contributing."},
 {c:11,t:"mc",ap:true,q:"To recruit in that case, the group offers member-only services such as discounts. That is:",a:"A material incentive",w:["A purposive incentive","A political cue","Grassroots lobbying"],e:"Material = tangible benefit; purposive = belief in the goal. Neither guarantees participation."},
 {c:11,t:"mc",q:"How does an interest group’s central purpose differ from a party’s?",a:"A group seeks to influence policy; a party seeks to elect candidates",w:["A group seeks to elect candidates; a party seeks to influence policy","A group represents only businesses; a party represents only voters","A group works only in the courts; a party works only in Congress"],e:"Interest group: seeks to influence public policy. Party: seeks to elect candidates."},
 {c:11,t:"mc",q:"Which is NOT one of the four factors the highlights say promote interest groups?",a:"A shared concern on its own",w:["Economic developments","Expansion of government activity","Government policies that create interests"],e:"The four: economic developments, policies that create interests, leadership, expansion of government. A shared concern does not automatically create an organization."},
 {c:11,t:"mc",q:"A person or organization representing other organizations is:",a:"An institutional interest",w:["A membership interest","A social movement","A political action committee"],e:"Membership interests are built around individual members."},
 {c:11,t:"mc",q:"Why may large, diverse associations struggle to take clear positions?",a:"Their constituents are divided on some issues",w:["They are barred by law from lobbying Congress","They have too little money to hire lobbyists","They are not allowed to provide policy information"],e:"Large, diverse associations find it harder to take positions on issues that divide their constituents."},
 {c:11,t:"mc",q:"A widely shared demand for change in the social or political order is:",a:"A social movement",w:["An interest group","A membership interest","Grassroots lobbying"],e:"A movement can generate formal organizations, but the two are distinct."},
 {c:11,t:"mc",q:"Why is credible information valuable to legislators?",a:"They face more issues than they can master on their own",w:["It removes the need for campaign money entirely","The law requires that it come only from registered interest groups","It guarantees that a group’s bill will pass"],e:"Groups supply policy information and political cues, so credibility matters alongside access and money."},
 {c:11,t:"mc",q:"A signal that identifies the values at stake in a policy question is:",a:"A political cue",w:["A heuristic","An earmark","A purposive incentive"],e:"Political cue (ch. 11); compare heuristics (ch. 7), the shortcuts voters use."},
 {c:11,t:"mc",q:"A provision directing a benefit to a particular recipient or project, not separately reviewed on its merits by all of Congress, is:",a:"An earmark",w:["A political cue","Soft money","A material incentive"],e:"Earmark: a benefit for a particular recipient or project."},
 {c:11,t:"mc",ap:true,q:"A group’s lobbyists meet with a senator while its members flood her office with calls. This shows:",a:"Insider and outsider strategies used together",w:["An insider strategy only, since lobbyists did the talking","An outsider strategy only","A free rider problem"],e:"Insider and outsider tactics can complement one another, and the calls show electoral consequences."},
 {c:11,t:"tf",q:"Mobilizing citizens to contact public officials is an insider strategy.",a:false,e:"False. That is grassroots lobbying, an outsider strategy; insider means direct engagement such as lobbying and providing information."},
 {c:11,t:"tf",q:"Interest-group activity involves protected political speech.",a:true,e:"True. Regulation operates within constitutional protection."},
 {c:11,t:"mc",q:"Someone who seeks to influence legislation on behalf of a client is:",a:"A lobbyist",w:["An activist","A political elite","A partisan"],e:"Lobbyist: seeks to influence legislation on behalf of a client."},

 /* ---- chapter 12 ---- */
 {c:12,t:"mc",ap:true,q:"A station covers transit problems night after night, and more viewers begin to call transit a top issue. This is:",a:"Agenda-setting",w:["Priming","Framing","Fact checking by the station"],e:"Agenda-setting: what receives attention."},
 {c:12,t:"mc",ap:true,q:"After that coverage, viewers begin judging the mayor mainly by how well the buses run. This is:",a:"Priming",w:["Agenda-setting","Framing","Selective exposure"],e:"Priming: the considerations used to evaluate officials."},
 {c:12,t:"mc",ap:true,q:"A story presents a transit plan as a question of access to jobs rather than cost. This is:",a:"Framing",w:["Priming","Agenda-setting","Horse-race journalism"],e:"Framing: emphasizing selected aspects shapes how an issue is interpreted."},
 {c:12,t:"mc",q:"Newspapers sponsored or controlled by political factions and parties were the:",a:"Party press",w:["Popular press","Adversarial press","Opinion magazines"],e:"The popular press: mass-readership newspapers seeking broad audiences."},
 {c:12,t:"mc",q:"Preferring information that matches the views one already holds is:",a:"Selective exposure",w:["Living in an echo chamber","Framing","Priming"],e:"Selective exposure is the preference; an echo chamber is the environment that keeps reinforcing similar views."},
 {c:12,t:"tf",q:"The highlights caution against assuming that every online environment is an echo chamber.",a:true,e:"True. Online communication can assist mobilization without transforming all participation."},
 {c:12,t:"mc",q:"Automated or fake accounts used to repost and circulate content are:",a:"Bots",w:["Fake news","Echo chambers","Fact checkers"],e:"Fake news is the manufactured story; bots help spread it."},
 {c:12,t:"mc",q:"Coverage that emphasizes political strategy and competition rather than policy substance is:",a:"The game frame",w:["The watchdog role","Agenda-setting","Prior restraint"],e:"Horse-race journalism, the focus on who is ahead, is a close relative."},
 {c:12,t:"mc",q:"Government restriction of publication before it occurs is:",a:"Prior restraint",w:["The equal time rule","Gatekeeping","Broadcast licensing"],e:"The highlights discuss narrow limits on prior restraint."},
 {c:12,t:"mc",q:"Why does declining local news matter, according to the chapter?",a:"It leaves gaps in knowledge and oversight of local government",w:["It makes national news coverage much less accurate and less trusted","It ends the FCC’s licensing of broadcast stations","It doubles the number of online echo chambers"],e:"Fewer local news sources weaken knowledge of local government and accountability."},
 {c:12,t:"mc",q:"Which regulator do the highlights discuss in relation to broadcast licensing?",a:"The FCC",w:["The FEC","The FTC","The FDA"],e:"The Federal Communications Commission. (The FEC handles campaign finance.)"},
 {c:12,t:"tf",q:"More available political information means citizens automatically know more.",a:false,e:"False. Interested citizens can learn more, while others can more easily avoid politics."},
 {c:12,t:"mc",q:"What can competition for audience attention encourage in coverage?",a:"Horse-race coverage, sensationalism and negativity",w:["More detailed reporting on policy proposals","Equal time for every story in the news","An end to the watchdog role of the press in local politics"],e:"Commercial pressures influence coverage."},
 {c:12,t:"mc",q:"Journalism that approaches officials skeptically and seeks unfavorable information is:",a:"The adversarial press",w:["The party press","The popular, mass-readership press","The game frame"],e:"Adversarial press; compare the watchdog role, scrutiny in the public interest."},
 {c:12,t:"tf",q:"Agenda-setting, priming and framing can overlap, but they are not interchangeable.",a:true,e:"True. Attention, evaluation criteria and interpretation are different questions."}
];

/* one practice question as the quiz engine wants it; key "e2:i" (bank) or "e2:pc:i" (his practice check) */
function fromE2(i){
  var b = E2_QB[i]; if(!b) return null;
  var q = fromBank({tp:"e"+b.c, t:b.t, q:b.q, a:b.a, w:b.w, e:b.e, ap:b.ap}, i);
  q.key = "e2:"+i; return q;
}
function fromE2Check(i){
  var p = E2.checks[i]; if(!p) return null;
  return {key:"e2:pc:"+i, tp:"e"+p.c, ap:false, real:0, kind:"mc", pc:p.n, text:p.q,
          opts:p.o.map(function(o, j){ return {html:o, ok:j === p.a}; }),
          explain:"<b>Answer key "+p.n+": "+"ABCD"[p.a]+".</b> "+p.e, miss:p.q+" — <b>"+p.o[p.a]+"</b>"};
}
/* the Exam 2 practice: ch = "all" or 7–12; kind = all / mc / tf / ap / pc (his practice checks only); n = 0 means every one */
function e2Questions(cfg){
  cfg = cfg || {};
  var ch = cfg.ch || "all", kind = cfg.kind || "all", n = cfg.n === 0 ? 0 : (cfg.n || 15);
  var inCh = function(c){ return ch === "all" || String(c) === String(ch); };
  var out = [];
  if(kind === "all" || kind === "pc" || kind === "mc") E2.checks.forEach(function(p, i){ if(inCh(p.c)) out.push(fromE2Check(i)); });
  if(kind !== "pc") E2_QB.forEach(function(b, i){
    if(!inCh(b.c)) return;
    if(kind === "mc" && b.t !== "mc") return;
    if(kind === "tf" && b.t !== "tf") return;
    if(kind === "ap" && !b.ap) return;
    out.push(fromE2(i));
  });
  out = shuffle(out);
  return n ? out.slice(0, n) : out;
}
