export interface FaqItemEn {
  slug: string;
  question: string;
  summary: string;
  answers: string[];
  details: string[];
  keywords: string;
  featured?: boolean;
  /** Chinese FAQ path for hreflang, e.g. `/faq/toronto-lihun-feiyong-duoshao/` */
  pairedFaqPath?: string;
  metaTitle?: string;
  metaDescription?: string;
}

export const faqItemsEn: FaqItemEn[] = 
[
  {
    "slug": "husband-rrsp-divorce-ontario",
    "question": "My husband has an RRSP in his name — can I get a share of it when we divorce?",
    "summary": "Yes. An RRSP held in only one spouse name must still be disclosed and valued. Growth during the marriage is generally captured in the separation-date snapshot and addressed through equalization of net family property. What you ultimately receive depends on the overall equalization calculation — not on the RRSP alone.",
    "answers": [
      "If the RRSP grew during the marriage, you can share in that growth. In Ontario, the analysis compares property on the date of separation to what already existed on the date of marriage. The increase over the marriage is the basic idea behind net family property.",
      "So in Ontario, when one spouse holds an RRSP at separation, the other spouse can often claim a share of the value through equalization. In our experience, the dollar result depends on both spouses full assets and debts — bring statements and disclosure to a lawyer for a proper calculation."
    ],
    "details": [
      "Ontario <em>Family Law Act</em> equalization is not a line-by-line 50/50 split of each asset. Each spouse values their property on the date of separation, subtracts date-of-marriage property, applies permitted deductions and exclusions, and arrives at net family property. The spouse with the higher NFP typically pays the other half the difference as an equalization payment.",
      "Legal title to an RRSP in one spouse name does not remove it from disclosure or from the separation-date balance sheet. Market growth during the marriage is usually reflected in the account value at separation. Pre-marital balances, pre-marital contributions, or other excludable amounts may reduce what is included — that is case-specific.",
      "In our experience, many clients assume that because the account is in the other spouse name, it is off limits. That is not how Ontario equalization works. How payment is made — cash, negotiated terms, or in appropriate cases discussions of RRSP rollover mechanics — depends on the file, tax rules, and institutional requirements.",
      "Gather recent statements, contribution history, and separation-date values as early as you can. Contact Miao He at 647-930-6688 to book a consultation."
    ],
    "keywords": "RRSP divorce Ontario,divide RRSP separation,equalization net family property Ontario,spouse RRSP family law,Miao He lawyer",
    "featured": true
  },
  {
    "slug": "child-preference-custody-ontario",
    "question": "My child says they want to live with Dad after divorce — will the court listen?",
    "summary": "Courts may consider a child's views, but the child does not decide. A judge's primary focus is the best interests of the child, with heavy weight on the parenting status quo during the marriage and after separation. For children roughly six or seven and under, expressed preferences usually carry less weight; as children mature, their views can matter more.",
    "answers": [
      "Courts can take a child's preferences into account, but the child does not make the decision. The child's voice is only one factor in a broader analysis.",
      "A central question is the parenting status quo: who has actually been caring for the child during the marriage and after separation — school runs, day-to-day medical issues, and routine school communication."
    ],
    "details": [
      "Under Ontario family law, the voice of the child is one factor in parenting disputes, but it is neither the only factor nor automatically decisive. The overarching principle is always the best interests of the child.",
      "Courts place significant weight on status quo — who has primarily cared for the child, handled pickups and drop-offs, and managed day-to-day health and school matters during the marriage and after separation. That lived reality is often the most persuasive evidence.",
      "Age matters. For very young children, courts tend to treat expressed preferences as carrying limited weight because the child may not yet be able to grasp what best interests means in a legal sense. For older, more mature children, appropriately gathered views can carry more weight.",
      "Where a child views need to be presented formally, Ontario often involves the Office of the Children Lawyer (OCL) rather than putting the child on the witness stand in open court.",
      "Practical takeaway: building a stable, child-focused parenting pattern after separation can be critical. For advice tailored to your situation, contact Miao He at 647-930-6688."
    ],
    "keywords": "child preference custody Ontario,child wants live with father,best interests child Ontario,voice of the child Ontario,OCL Ontario,Miao He lawyer",
    "featured": true
  },
  {
    "slug": "child-relocation-vancouver-ex-objects",
    "question": "After divorce I want to move with my child to Vancouver — my ex does not agree. Can I just move?",
    "summary": "No. If the other parent does not agree, you cannot simply relocate with the child. Ontario and federal relocation rules require formal written notice and, if there is no agreement, a court determination based on the child's best interests. Moving without consent or a court order can carry serious legal consequences.",
    "answers": [
      "No. If the other parent does not agree, you should not relocate with the child without following the statutory relocation process and, if necessary, obtaining a court order.",
      "In short: without the other parent's agreement or a court order, unilateral relocation can be unlawful and can seriously harm your position on parenting time and decision-making."
    ],
    "details": [
      "Ontario 《Children Law Reform Act》 and the 《Divorce Act》 relocation framework require advance written notice of a proposed move (a Notice of Relocation in many cases). The other parent has a legislated window to respond with objections and reasons.",
      "If there is no timely response, the law may treat the situation as consent in limited circumstances — but a clear objection means the dispute must go before a judge. Courts decide whether the relocation is permitted based primarily on the best interests of the child.",
      "Judges typically weigh the child's schooling and community ties, the feasibility of preserving a meaningful relationship with the non-moving parent, travel and contact costs, and whether the moving parent's reasons are adequate and good-faith (for example employment or family support).",
      "Relocating without consent or a court order can expose you to urgent motions, enforcement issues, and serious credibility problems in parenting litigation — in extreme cases it can undermine your parenting case.",
      "Plan early. Contact Miao He at 647-930-6688 to understand timelines, notice requirements, and how to present (or respond to) a relocation application."
    ],
    "keywords": "child relocation Ontario,Notice of Relocation Canada,move province divorce parenting,Vancouver relocation custody,Miao He lawyer,Chinese family lawyer GTA",
    "featured": true
  },
  {
    "slug": "spouse-credit-card-debt-divorce-ontario",
    "question": "My husband ran up a lot of credit card debt during our marriage — do I have to pay it after divorce?",
    "summary": "Not necessarily. It depends on the nature of the debt and where the money actually went — whether it supported joint household living expenses and whether it was truly personal to your spouse. Creditors generally cannot pursue you solely because you were married. If litigation is started, courts look closely at use of funds.",
    "answers": [
      "It depends on the nature of the debt. If the borrowing supported joint household living expenses, you may have exposure. If it was entirely your spouse's personal conduct and you did not benefit, creditors often cannot pursue you.",
      "If the card is only in your spouse name and you did not guarantee the debt, creditors usually cannot demand payment from you directly. If your spouse is sued, a court may still trace where the money went."
    ],
    "details": [
      "Under Ontario family law, debts incurred during a marriage are not automatically joint in every sense. A core question is where the money ultimately went.",
      "If debt funded ordinary family living — groceries, utilities, children's expenses, or jointly used assets — it may be treated as a family-related obligation in which both spouses have some stake, depending on the facts and pleadings.",
      "If the debt is purely personal — gambling, private loans to friends, undisclosed online borrowing, and similar — and you did not benefit, and the obligation sits only in the other spouse's name, the other spouse's creditors often have no direct claim against you as a separate person.",
      "If creditors sue both spouses, courts examine actual use of funds. If the money was spent on personal dissipation unrelated to the household, the non-borrowing spouse is often far less exposed.",
      "Debt allocation is a central part of separation planning. Contact Miao He at 647-930-6688 or WeChat 372656035 to clarify your exposure early."
    ],
    "keywords": "spouse credit card debt divorce Ontario,joint debt separation Ontario,gambling debt divorce Ontario,personal debt spouse liability Ontario,Miao He lawyer,Chinese family lawyer GTA",
    "featured": true
  },
  {
    "slug": "stay-home-10-years-spousal-support-ontario",
    "question": "I stayed home full-time with the kids for 10 years of marriage — can I get spousal support after divorce? For how long?",
    "summary": "You can apply for spousal support. Full-time caregiving and career sacrifice are important factors courts consider. Amount and duration are not fixed by a mandatory formula — judges weigh income disparity, length of marriage, dependency, and future earning capacity, often using the federal Spousal Support Advisory Guidelines (SSAG) as a non-binding range. Longer marriages and greater dependency can support longer or higher support, but every case differs.",
    "answers": [
      "You can seek spousal support. Staying home to raise children and forgoing paid employment is a strong basis courts recognize when assessing entitlement.",
      "How much and for how long has no one-size-fits-all answer. Courts may consult the SSAG ranges, but Ontario judges retain discretion and tailor orders to the facts."
    ],
    "details": [
      "In Ontario, spousal support analysis focuses heavily on economic dependency built during the marriage. Ten years of full-time childcare and foregone career progression is powerful evidence of need and compensatory themes.",
      "Amount is closely tied to income disparity. If you are not currently employed, the court will look at the payor's income and your needs and capacities — larger gaps often correlate with higher awards, subject to the overall matrix.",
      "Duration is linked to length of marriage. Longer marriages often support longer support periods; a decade-long marriage can justify a substantial term, and in some cases indefinite or non-fixed duration is argued where the facts support it.",
      "The SSAG provides advisory ranges for amount and duration, but courts are not strictly bound — judges can move above or below the range where fairness requires.",
      "Disability or health limitations affecting employability can lengthen duration or increase amount when proven and relevant.",
      "Many stay-at-home parents underestimate their claims. Contact Miao He at 647-930-6688 or WeChat 372656035 to understand your realistic range early."
    ],
    "keywords": "stay at home parent spousal support Ontario,10 year marriage spousal support,SSAG Ontario,spousal support duration Ontario,Miao He lawyer,Chinese family lawyer GTA",
    "featured": true
  },
  {
    "slug": "work-permit-spouse-pr-divorce-immigration",
    "question": "I have a work permit and my spouse is a permanent resident — we are divorcing. Will my immigration status be affected?",
    "summary": "An existing work permit or already-issued PR is not automatically lost simply because you divorce, assuming your original applications were truthful. The high-risk scenario is an in-land spousal sponsorship still in progress: separation can end the sponsor relationship and jeopardize the application — get coordinated family-law and immigration advice quickly.",
    "answers": [
      "If you already hold PR, divorce usually does not cause PR to be revoked — provided the information in your original application was genuine.",
      "If you are on a work permit without PR and you were relying on your spouse to sponsor you for PR, separation materially changes the spousal relationship. The sponsor may not be able to continue as your sponsor in the same way."
    ],
    "details": [
      "Issued PR is a standalone status. Divorce, by itself, does not automatically cancel a valid PR card.",
      "An important caveat: if IRCC later finds material misrepresentation in the marriage-based application, PR can be challenged. That is about honesty of the file — not divorce as such.",
      "If you hold a work permit, do not yet have PR, and your PR pathway is spousal sponsorship through your partner, formal separation can alter the legal relationship that underpins the sponsorship.",
      "In that situation, the application may be refused or otherwise derailed, and you should urgently map alternative pathways — for example employer-driven work permits, other eligible programs, or lawful status extensions where available.",
      "These issues sit at the intersection of family law and immigration law. Consult both a family lawyer and an immigration lawyer early. Contact Miao He at 647-930-6688 or WeChat 372656035."
    ],
    "keywords": "work permit divorce Ontario,spousal sponsorship PR divorce Canada,immigration status divorce Ontario,PR revoked divorce Canada,Miao He lawyer,Chinese family lawyer GTA",
    "featured": true
  },
  {
    "slug": "china-pension-social-insurance-equalization-ontario",
    "question": "My spouse has pension and social insurance in China — can those be divided in an Ontario separation?",
    "summary": "Yes, in principle. Ontario equalization of net family property is based on worldwide net family property. Chinese pension and social-insurance entitlements must be disclosed with a credible cash value; growth during the marriage is generally included in the holder's NFP for equalization. Practical disclosure and valuation can be difficult and may require court tools if a spouse resists.",
    "answers": [
      "Yes. Ontario equalization looks at worldwide assets. Location of the asset does not remove it from disclosure and valuation.",
      "Chinese pension and social insurance programs should be valued in cash terms, with values tied to the date of marriage and the date of separation. Marriage-period growth is typically included in the holder's net family property for equalization purposes."
    ],
    "details": [
      "Under Ontario <em>Family Law Act</em> equalization, the starting point is each spouse's worldwide property on the date of separation, with permitted deductions and exclusions. If your family life and divorce process are centred in Ontario, overseas entitlements remain within the disclosure and equalization frame.",
      "Occupational annuities, enterprise annuities, and basic old-age social insurance for urban employees in China are common categories that must be translated into a disclosure schedule with credible values and documentation for both key dates.",
      "What is equalized through the NFP formula is generally the growth during the marriage — separation-date value minus marriage-date value — subject to proof and any applicable exclusions for pre-marital portions.",
      "Enforcement and verification can be hard if a spouse resists production. Ontario courts have tools such as disclosure orders and, in appropriate cases, adverse inferences where disclosure is inadequate.",
      "Miao He is dual-licensed in Ontario and China and regularly handles cross-border cases involving Chinese benefits and payroll systems. Contact 647-930-6688 or WeChat 372656035."
    ],
    "keywords": "China pension divorce Ontario,social insurance equalization Canada,worldwide net family property Ontario,cross-border divorce China assets Ontario,Miao He lawyer,dual licensed family lawyer",
    "featured": true
  },
  {
    "slug": "remarriage-certificate-divorce-ontario",
    "question": "After I receive my Certificate of Divorce, when can I remarry?",
    "summary": "Once you hold a Certificate of Divorce, you may remarry at any time — there is no further waiting period under Canadian law. Remember the two-step ending: the court first grants a Divorce Order; after the usual 31-day appeal window you may apply for the Certificate, which is the document that proves the marriage is legally ended.",
    "answers": [
      "After the Certificate of Divorce is issued, you can remarry whenever you wish. There is no additional statutory waiting period tied to remarriage.",
      "Two steps matter: the court issues a Divorce Order first. You typically apply for the Certificate of Divorce after the 31-day appeal period. Only with the certificate is the marriage formally dissolved for remarriage purposes."
    ],
    "details": [
      "In Ontario, clients often confuse the Divorce Order with being fully divorced. The order is the court pronouncement, but it is not the same thing as the final proof used for remarriage and many administrative steps.",
      "There is a 31-day appeal period after the Divorce Order. If no appeal is taken, you may apply for the Certificate of Divorce. That certificate is the clearest proof the marriage has been legally terminated.",
      "After you have the certificate, you may remarry without an extra Canadian-law waiting period.",
      "Practical planning: if you will register a new marriage in China or elsewhere, you may need authentication — for example Apostille steps where available, or Chinese consular authentication depending on timing and routing. Confirm the receiving country requirements early.",
      "If you need help expediting the certificate or coordinating cross-border document authentication, contact Miao He at 647-930-6688 or WeChat 372656035."
    ],
    "keywords": "remarriage after divorce Ontario,Certificate of Divorce Ontario,Divorce Order vs certificate Ontario,how long remarry Canada,Miao He lawyer,Chinese family lawyer GTA",
    "featured": true
  },
  {
    "slug": "parents-down-payment-divorce-ontario",
    "question": "My parents contributed to the down payment on our home — can that money be recovered in a divorce?",
    "summary": "Not necessarily. The answer depends on four factors: whether the property is a matrimonial home or investment property, whose account the money was deposited into, whether the contribution was a gift or a loan, and what evidence exists to prove the parties' intentions. There is no fixed answer — every case is different.",
    "answers": [
      "It depends on the nature of the property, where the money was transferred, and whether there is any documentation or communication establishing the intention behind the contribution.",
      "In our experience, cases involving parental contributions to a down payment are among the most contested property disputes in Chinese-Canadian divorces. The Ontario <em>Family Law Act</em> treats matrimonial homes differently from investment properties, and whether the money was a gift or a loan makes a significant legal difference."
    ],
    "details": [
      "Parental contributions to a down payment are extremely common in Chinese-Canadian families — and they are among the most frequently disputed issues when a marriage breaks down. Under Ontario's <em>Family Law Act</em>, the answer depends on several interconnected factors that must be analyzed together.",
      "First: the nature of the property. Ontario law treats matrimonial homes differently from investment properties. A matrimonial home is valued at its full market value on the date of separation — no deductions are permitted for pre-marital contributions or parental funds used toward the purchase. This means that if the parental contribution went into a matrimonial home, it cannot simply be deducted from the equalization calculation. Investment properties are treated differently — pre-marital value can potentially be deducted as a date-of-marriage asset.",
      "Second: whose account the money was deposited into. If the funds were transferred only into one spouse's personal account, it is easier to argue that the contribution was made to that individual — whether as a gift or a loan. If the money went into a joint account or directly to the other spouse, establishing ownership becomes more difficult, and the other side may argue the contribution was made to both spouses equally.",
      "Third: gift or loan. If the parents signed a loan agreement or there was a clear expectation of repayment, the contribution can potentially be treated as a debt in the net family property calculation — meaning it does not need to be equalized. If it was a gift, the analysis is more complex, particularly when the property is a matrimonial home. Under the Douglas v Douglas, 2022 ONSC 585 (CanLII) framework, courts assess seven factors to distinguish a loan from a gift: whether contemporaneous loan documents exist, whether repayment terms were specified, whether security was provided, whether the advance was made to one child but not others, whether repayment was ever demanded before separation, whether any partial repayment occurred, and whether there was any reasonable expectation of repayment. Even without a formal loan agreement, evidence pointing toward these factors can support a loan characterization.",
      "Fourth: what evidence exists. Even without a formal agreement, WeChat messages, emails, e-transfer notes, and bank records can all be critical evidence of the parties' true intentions. Courts will look at everything available to determine what the contribution was intended to be. We recommend gathering all relevant records and bringing them to a consultation so that Miao He can analyze the specific facts of your case. Contact us at 647-930-6688."
    ],
    "keywords": "parents down payment divorce Ontario,parental contribution matrimonial home Ontario,gift or loan family law Ontario,down payment divorce Chinese Canadian,Miao He lawyer"
  },
  {
    "slug": "divorce-requirements-ontario",
    "question": "What are the requirements for divorce in Ontario?",
    "summary": "There are three grounds for divorce in Ontario: one year of separation, adultery, or physical or mental cruelty. The vast majority of cases use the one-year separation ground. Separation for one year is a condition for the court to grant the divorce — not a condition for filing.",
    "answers": [
      "There are three grounds for divorce under the 《Divorce Act》: one year of separation, adultery, or physical or mental cruelty.",
      "The one-year separation ground is by far the most common. It does not require proof of fault, and the parties can agree that separation has occurred even while continuing to live under the same roof."
    ],
    "details": [
      "The 《Divorce Act》 sets out three grounds on which a court may grant a divorce. The first, and most commonly used, is separation for one year or more with no reasonable prospect of reconciliation. The second is adultery. The third is physical or mental cruelty of such a kind that the petitioning spouse cannot reasonably be expected to continue cohabiting.",
      "A critical distinction that many clients miss: the one-year separation period is a condition for the court to grant the divorce order — not a condition for filing the application. You can file a divorce application at any point after separating. The court will simply wait until one year has passed before issuing the divorce order.",
      "In practice, this means you can and should begin dealing with property division, support, and parenting arrangements immediately after separation, without waiting for one year to pass. Delaying can result in assets being dissipated or positions hardening. The earlier you engage a lawyer, the better protected your interests will be.",
      "If you are unsure whether you meet the grounds for divorce, or want to understand which approach best fits your circumstances, contact Miao He at 647-930-6688 for an initial consultation."
    ],
    "keywords": "divorce requirements Ontario,grounds for divorce Canada,one year separation Ontario,Miao He lawyer,Chinese family lawyer Toronto"
  },
  {
    "slug": "new-immigrant-divorce-ontario",
    "question": "Can a new immigrant get divorced in Ontario?",
    "summary": "Yes. Ontario courts do not consider immigration status in divorce proceedings. As long as either spouse has been ordinarily resident in Ontario for at least one year, the court has jurisdiction. This applies regardless of whether you are a permanent resident, work permit holder, student, or visitor.",
    "answers": [
      "Yes. Immigration status is not a factor in Ontario divorce proceedings. The only relevant question is residency.",
      "As long as either you or your spouse has been ordinarily resident in Ontario for at least one year immediately before the divorce application is filed, an Ontario court can hear the case."
    ],
    "details": [
      "Under the 《Divorce Act》, an Ontario court has jurisdiction to hear a divorce if either spouse has been ordinarily resident in Ontario for at least one year immediately before the divorce application is filed. Ordinarily resident means Ontario is your primary and habitual home — not merely a temporary stay.",
      "Immigration status is entirely irrelevant to this analysis. The court does not ask whether you are a citizen, permanent resident, or temporary resident. If you have lived in Ontario for at least one year, you can file for divorce here.",
      "One area of caution for newcomers: if your immigration status is linked to your spouse — for example, if you came to Canada under spousal sponsorship — a divorce may have immigration consequences that are separate from the family law proceedings. It is important to get both family law and immigration advice before proceeding.",
      "Miao He is a bilingual lawyer who serves the Chinese-Canadian community in the GTA. If you have questions about divorce as a newcomer, contact 647-930-6688."
    ],
    "keywords": "new immigrant divorce Ontario,immigration status divorce Canada,divorce PR work permit Ontario,Chinese family lawyer,Miao He"
  },
  {
    "slug": "spouse-refuses-divorce-ontario",
    "question": "What if my spouse refuses to cooperate with the divorce?",
    "summary": "A spouse who refuses to participate cannot stop a divorce. After one year of separation, you can proceed with a divorce application even without the other party cooperation. If they do not respond, the court can proceed in their absence and issue a Default Judgment.",
    "answers": [
      "You can proceed with divorce even without your spouse cooperation. Ontario courts do not require both parties to consent.",
      "After one year of separation, if your spouse refuses to participate, the court can issue a divorce order in their absence — called a Default Judgment."
    ],
    "details": [
      "Ontario courts do not require the consent of both parties to grant a divorce. The 《Divorce Act》 entitles either spouse to apply for a divorce after one year of separation, regardless of whether the other party agrees.",
      "If your spouse is served with the divorce application and fails to file an Answer within the required time (30 days if they are in Ontario; 60 days if they are outside Canada), they can be noted in default. Once noted in default, you can proceed to seek the divorce order without further participation from your spouse.",
      "The court will review your materials and, if satisfied that the one-year separation requirement is met and there are no other barriers, will issue the divorce order.",
      "One important nuance: obtaining the divorce order is one thing; resolving property division, support, and parenting issues is another. Even if you get the divorce, outstanding family law issues can still be brought before the court by either party. Dealing with these issues proactively — ideally through a separation agreement — is strongly recommended.",
      "For advice on how to proceed when your spouse is uncooperative, contact Miao He at 647-930-6688."
    ],
    "keywords": "spouse refuses divorce Ontario,uncontested divorce Ontario,default judgment divorce,divorce without consent Canada,Miao He lawyer"
  },
  {
    "slug": "house-split-divorce-ontario",
    "question": "Does the house have to be split 50/50 in a divorce?",
    "summary": "No. Ontario uses equalization of net family property, not a simple 50/50 split of every asset. The matrimonial home full value at the date of separation is included in the calculation, but the outcome depends on the difference between each party net family property — not a mechanical division of the home itself.",
    "answers": [
      "The house does not automatically get split 50/50. Ontario uses a net family property equalization system.",
      "The matrimonial home is treated differently from other assets: its full value at the date of separation is included in the equalization calculation, regardless of who owned it before marriage."
    ],
    "details": [
      "Ontario <em>Family Law Act</em> does not divide property by splitting each asset in half. Instead, it uses an equalization of net family property system. Each spouse calculates their Net Family Property (NFP): assets at the date of separation, minus debts, minus the value of property brought into the marriage (with exceptions). The spouse with the higher NFP pays the other half the difference.",
      "The matrimonial home is subject to a special rule: unlike other assets, the value the home had at the date of marriage cannot be deducted. Its full value at the date of separation is included in the calculation. This often surprises clients who owned the home before the marriage.",
      "What this means in practice: the house itself does not need to be divided — what matters is the dollar amount of the equalization payment. The parties can agree that one spouse buys out the other, or that the home is sold and proceeds distributed, or that some other asset is transferred in satisfaction of the equalization payment.",
      "Both spouses have equal rights to possession of the matrimonial home during the separation, regardless of whose name is on title. Neither party can sell or mortgage the home without the other consent.",
      "For a clear assessment of how property division would apply in your specific situation, contact Miao He at 647-930-6688."
    ],
    "keywords": "house split divorce Ontario,equalization net family property,matrimonial home Ontario,property division Ontario divorce,Miao He lawyer"
  },
  {
    "slug": "child-spousal-support-ontario",
    "question": "How are child support and spousal support calculated?",
    "summary": "Child support is mandatory and formula-based under the Federal Child Support Guidelines: it depends on the paying parent income and number of children. Spousal support is not automatic — it requires an entitlement analysis — and is calculated using the Spousal Support Advisory Guidelines, which provide a range rather than a fixed amount.",
    "answers": [
      "Child support is mandatory and calculated under the federal Child Support Guidelines based on the paying parent gross income and the number of children. The parties cannot agree to pay less than the table amount.",
      "Spousal support is not automatic. There must be a legal entitlement (compensatory, non-compensatory, or contractual), and then the amount and duration are determined using the Spousal Support Advisory Guidelines."
    ],
    "details": [
      "Child support in Ontario is governed by the Federal Child Support Guidelines. The table amount depends on: (1) the paying parent gross annual income, (2) the number of children, and (3) the province of residence. This amount is mandatory — neither party can agree to waive or reduce it below the table amount.",
      "In addition to the table amount, parents may share Section 7 special and extraordinary expenses proportionally based on income. These include childcare costs, medical expenses not covered by insurance, extracurricular activities, and post-secondary education costs.",
      "Spousal support is different. First, there must be a legal entitlement: compensatory (one spouse gave up career opportunities for the family), non-compensatory (one spouse is in financial need), or contractual (the domestic contract provides for it). Without entitlement, there is no support.",
      "Once entitlement is established, the Spousal Support Advisory Guidelines provide a range for the amount and duration. Courts have significant discretion. Key factors include the length of the marriage, each spouse income and earning capacity, and the economic consequences of the marriage breakdown.",
      "If you want to understand what support obligations you may face — or what you may be entitled to — contact Miao He at 647-930-6688."
    ],
    "keywords": "child support Ontario calculation,spousal support Ontario,Child Support Guidelines,SSAG Ontario,Miao He family lawyer"
  },
  {
    "slug": "prenuptial-agreement-ontario",
    "question": "Is a prenuptial agreement enforceable in Ontario?",
    "summary": "Yes, but only if strict requirements are met. Both parties must sign voluntarily, each must receive independent legal advice from their own lawyer, both must fully disclose their financial situation, and the terms must be fair and reasonable. Agreements signed without these protections are at serious risk of being set aside.",
    "answers": [
      "Yes — a properly executed marriage contract (the Ontario term for a prenuptial agreement) is legally binding.",
      "However, courts can set aside a marriage contract if the conditions for valid execution were not met: both parties must have received independent legal advice, full financial disclosure must have been made, and neither party must have signed under duress."
    ],
    "details": [
      "Ontario <em>Family Law Act</em> permits spouses to enter into a marriage contract before or during marriage that governs how their property and support will be handled on separation. A marriage contract can exclude assets from equalization, modify support entitlements, and address specific property.",
      "For a marriage contract to be enforceable, several conditions must be satisfied. First, each party must have received independent legal advice (ILA) from their own lawyer — not a shared lawyer. Second, both parties must have made full financial disclosure before signing. Third, the agreement must have been signed voluntarily, without duress, undue influence, or oppressive time pressure. Fourth, a witness must be present at signing.",
      "Courts scrutinize marriage contracts carefully. A contract signed days before the wedding, with no time for proper review, is at elevated risk of challenge. A contract where one party did not truly understand what they were signing — perhaps due to a language barrier — may also be vulnerable.",
      "One area of particular difficulty is the matrimonial home. Even if a marriage contract purports to exclude the matrimonial home from equalization, courts have sometimes declined to enforce such provisions.",
      "If you are considering a marriage contract — whether before marriage or during — contact Miao He at 647-930-6688 for advice on how to make it as robust as possible."
    ],
    "keywords": "prenuptial agreement Ontario,marriage contract Ontario,domestic contract enforceable,independent legal advice Ontario,Miao He lawyer"
  },
  {
    "slug": "assets-china-divorce-ontario",
    "question": "How are assets in China handled in an Ontario divorce?",
    "summary": "Ontario equalization of net family property applies to worldwide assets, including Chinese real estate, bank accounts, and business interests. Tracing and enforcing judgments on overseas assets involves both legal systems. A lawyer licensed in both Ontario and China is essential for cross-border cases.",
    "answers": [
      "Ontario equalization principle applies to global assets. Chinese real estate, bank accounts, investments, and business interests held in China must all be disclosed and included in the net family property calculation.",
      "Enforcing Ontario orders against Chinese assets requires separate proceedings under Chinese law. China and Canada have no bilateral treaty on judgment recognition, which makes cross-border enforcement complex."
    ],
    "details": [
      "Ontario <em>Family Law Act</em> requires each spouse to disclose all of their property — worldwide — for the purposes of equalization. This includes real property in China, Chinese bank accounts, investments held through Chinese financial institutions, and interests in Chinese businesses.",
      "Tracing and verifying assets in China presents practical challenges. Chinese property registries, bank records, and corporate ownership structures require access to Chinese legal resources. Without a lawyer who is licensed in both Ontario and China and has active connections on both sides, this verification is often impossible for a purely Canadian legal team.",
      "Even after an Ontario court issues an equalization or property order, enforcing that order against assets physically located in China requires a separate recognition and enforcement process under Chinese law. China does not automatically enforce Ontario judgments. A further proceeding in the Chinese courts may be necessary.",
      "One of the most common patterns in Chinese-Canadian divorce cases is a spouse transferring funds to China — often to a parent or sibling — in anticipation of divorce proceedings. Asset preservation orders can be obtained from the Ontario court to prevent dissipation, but they must be obtained before assets are moved.",
      "Miao He holds both an Ontario bar licence and a Chinese bar licence, with active legal connections in China. For cross-border asset cases, contact 647-930-6688."
    ],
    "keywords": "assets China divorce Ontario,cross-border divorce Canada China,Chinese real estate divorce Ontario,dual licensed family lawyer,Miao He"
  },
  {
    "slug": "child-taken-china-ontario",
    "question": "What if my spouse wants to take the children to China?",
    "summary": "This is an emergency. China is not a signatory to the Hague Convention on international child abduction. Once a child is in China, recovery is extremely difficult. An Ontario court can issue a Non-Removal Order before the child leaves. You must act immediately.",
    "answers": [
      "If you believe your spouse may take your child to China, contact a lawyer immediately. Every hour matters.",
      "China is not a Hague Convention country. There is no automatic mechanism for compelling the return of a child from China to Canada. Prevention is the only reliable strategy."
    ],
    "details": [
      "The Hague Convention on the Civil Aspects of International Child Abduction provides a framework for the prompt return of children wrongfully removed from their country of habitual residence — but only between signatory countries. China has not signed the Hague Convention.",
      "This means that if your child is taken to China, you cannot rely on the Hague framework to compel their return. Your options are limited to proceedings in the Chinese courts, diplomatic channels, and negotiation — all of which are slow, uncertain, and expensive.",
      "The most effective approach is prevention. If you are concerned about abduction risk, an Ontario court can issue a Non-Removal Order prohibiting either parent from removing the child from Ontario (or Canada) without the other consent or a court order. The child passport can be seized and surrendered to the court. The child name can be placed on the RCMP watch list at border crossings.",
      "These measures must be obtained before the child leaves. Once the child is in China, your legal remedies are significantly more limited. Do not wait to see if your concerns materialize — act at the first sign of risk.",
      "Miao He has experience in both Ontario family law and Chinese law. For urgent child protection matters, call 647-930-6688 immediately."
    ],
    "keywords": "child taken China Ontario,international child abduction Canada China,Hague Convention China,Non-Removal Order Ontario,Miao He lawyer"
  },
  {
    "slug": "divorce-timeline-ontario",
    "question": "How long does a divorce take in Ontario?",
    "summary": "An uncontested divorce typically takes 4 to 8 months from filing. A contested divorce involving property, support, or custody disputes can take 1 to 3 years or longer depending on complexity. The single most effective way to shorten the timeline is to reach agreement before filing.",
    "answers": [
      "An uncontested divorce (both parties agree on all issues) typically takes 4 to 8 months from filing.",
      "A contested divorce can take 1 to 3 years or more, depending on complexity, the number of issues in dispute, and court scheduling."
    ],
    "details": [
      "The timeline for a divorce in Ontario depends primarily on whether it is contested or uncontested. An uncontested divorce — where both parties have already agreed on property, support, and parenting — proceeds by filing the application, serving the other party, waiting for the response period, and then filing the affidavit materials. Court processing times in Ontario currently add 3 to 6 months to the timeline.",
      "A contested divorce follows the family court process: Application, Case Conference, Settlement Conference, Trial Management Conference, Trial. Each stage takes months. Most cases settle at the settlement conference stage, but some proceed to trial. A full contested trial can be 2 to 5 years from the date of filing.",
      "Common causes of delay include: disputes over financial disclosure, difficulty in valuing business interests or pensions, court scheduling backlogs, and last-minute settlement breakdowns. International cases involving assets or parties in China add further complexity.",
      "The most effective way to shorten the timeline is to negotiate a separation agreement before or concurrent with filing. Every issue resolved by agreement is one less issue for the court to decide. A well-structured separation agreement, followed by an uncontested divorce application, is almost always faster, cheaper, and less stressful than contested litigation.",
      "To discuss your timeline and options, contact Miao He at 647-930-6688."
    ],
    "keywords": "divorce timeline Ontario,how long divorce Ontario,uncontested divorce Ontario months,contested divorce Ontario years,Miao He lawyer"
  },
  {
    "slug": "divorce-lawyer-cost-ontario",
    "question": "How much does a divorce lawyer cost in Ontario?",
    "summary": "An uncontested divorce with a fixed fee arrangement typically costs $2,000 to $5,000. Contested litigation is billed hourly — complex cases can cost $50,000 to $80,000+ per year in legal fees. Miao He initial 30-minute consultation is $220 + HST.",
    "answers": [
      "Costs vary significantly. An uncontested divorce fixed-fee arrangement is typically $2,000 to $5,000.",
      "Contested litigation is billed at hourly rates. In complex cases involving property valuation disputes, custody battles, or cross-border assets, annual legal fees can reach $50,000 to $80,000 or more."
    ],
    "details": [
      "Ontario divorce lawyers typically charge either a fixed fee for uncontested divorces or an hourly rate for contested matters. Fixed fee arrangements for a straightforward uncontested divorce range from approximately $2,000 to $5,000 depending on the firm.",
      "Contested matters are billed at hourly rates that vary by lawyer experience and location. For contested litigation involving multiple issues (property, support, and custody), a client can expect to spend $15,000 to $30,000 at minimum, and significantly more in complex cases. Cases involving business valuations, cross-border assets, or lengthy trials can cost $80,000 to $200,000 or more over the life of the file.",
      "Courts also have the power to award costs against a party who has conducted the litigation unreasonably — which provides an incentive to behave reasonably and make realistic settlement offers.",
      "The most cost-effective approach in almost every case is to invest upfront in negotiating a comprehensive separation agreement. The cost of a well-drafted agreement is typically a fraction of the cost of contested litigation.",
      "Miao He initial consultation is 30 minutes at $220 + HST, conducted in Mandarin or English. To book, call 647-930-6688."
    ],
    "keywords": "divorce lawyer cost Ontario,family lawyer fees Ontario,uncontested divorce cost,contested divorce cost Ontario,Miao He consultation"
  },
  {
    "slug": "toronto-divorce-cost-how-much",
    "question": "How much does a divorce cost in Toronto?",
    "featured": true,
    "pairedFaqPath": "/faq/toronto-lihun-feiyong-duoshao/",
    "metaTitle": "Toronto Divorce Cost (2026) | ~CAD $5,000 Uncontested | Separation Agreement + Application | Miao He",
    "metaDescription": "Toronto divorce costs vary by case type: many uncontested matters (separation agreement + divorce application) are often planned around roughly CAD $5,000 as an order-of-magnitude anchor; contested cases are usually hourly. Mandarin/English family lawyer serving Markham, Richmond Hill, Scarborough, and the GTA. Call 647-930-6688.",
    "summary": "There is no single standard answer — cost depends heavily on whether your divorce is uncontested or contested. For many uncontested paths (separation agreement plus divorce application), total legal spend is often in the ballpark of <strong>about CAD $5,000</strong>, subject to complexity. Contested litigation is usually hourly, so totals are harder to predict upfront.",
    "answers": [
      "<strong>Uncontested divorce</strong>: where spouses already agree on separation, property, and children, the workflow commonly starts with a <strong>Separation Agreement</strong>, followed by a <strong>Divorce Application</strong>. Many GTA family files in this category are handled as a structured process, which makes budgeting more realistic — <strong>around CAD $5,000</strong> is a common order-of-magnitude estimate (it can move up or down with disclosure and drafting complexity).",
      "<strong>Contested divorce</strong>: custody/access disputes, contested property issues, a spouse who will not agree, or court-driven litigation typically means <strong>hourly billing</strong>. Hourly rates differ by counsel and the file, and every additional step (disclosure, motions, conferences, trial prep) adds time — so totals are inherently uncertain."
    ],
    "details": [
      "Clients understandably want a single number, but in Ontario (including Toronto, Markham, Richmond Hill, Scarborough, and nearby regions) family counsel — including Mandarin/Cantonese-speaking divorce lawyers — often price <strong>very differently</strong> depending on whether the matter is negotiated and paper-driven versus adversarial and court-driven.",
      "<strong>Uncontested path (more predictable)</strong>: when both sides can agree, counsel typically focuses on drafting/review, financial disclosure, parenting/support language, and then the divorce application paperwork. Because the scope is narrower, many firms can quote a range or staged fee so you know what “done” looks like before you start. That is why a figure like <strong>about CAD $5,000</strong> can be a useful planning anchor — not a guarantee for every household, but a realistic discussion point for a straightforward uncontested workflow.",
      "<strong>Contested path (less predictable)</strong>: disputes over children, support, or property, refusal to sign, or repeated court events expand lawyer time quickly. Ontario litigation is usually billed hourly; the opposing side’s tactics and delay can lengthen the timeline, which increases fees even if you want the case finished yesterday.",
      "<strong>Why contested costs are hard to estimate early</strong>: more issues means more correspondence, disclosure review, evidence preparation, and court appearances. In Ontario family law, one side cannot unilaterally “shut down” a contested process if the other side continues to litigate — so costs can accumulate while issues remain live.",
      "<strong>Takeaway</strong>: think in two buckets — <strong>uncontested</strong>: often controllable, commonly discussed around <strong>about CAD $5,000</strong> as a starting planning range for a typical separation agreement + divorce application workflow; <strong>contested</strong>: depends on complexity and procedural history, so a responsible lawyer usually gives a range and assumptions rather than a fixed price on day one.",
      "In consultations, the most useful question is not only “how much,” but <strong>which bucket your case is in</strong> and what facts would move it from negotiated to contested. For a confidential discussion tailored to your situation, contact Miao He at <strong>647-930-6688</strong>."
    ],
    "keywords": "Toronto divorce cost,how much is a divorce in Toronto,Toronto divorce lawyer fees,GTA divorce cost,Greater Toronto Area family lawyer fees,uncontested divorce cost Toronto,Toronto separation agreement lawyer fee,divorce application Ontario cost,separation agreement and divorce application price,contested divorce hourly rate Ontario,Chinese divorce lawyer Toronto cost,Mandarin family lawyer Toronto fees,Markham divorce lawyer cost,Richmond Hill divorce lawyer fees,Scarborough divorce lawyer cost,North York family lawyer fees,Vaughan divorce cost,Mississauga divorce lawyer fees,Ontario family court lawyer hourly rate,high conflict divorce cost Toronto,Miao He lawyer,Miao He family law,6479306688"
  },
  {
    "slug": "contested-vs-uncontested-divorce-ontario",
    "question": "What is the difference between contested and uncontested divorce?",
    "summary": "An uncontested divorce means both parties have agreed on all issues: property division, support, and parenting. It is resolved without a trial and is faster and less expensive. A contested divorce means one or more issues cannot be resolved by agreement and must be decided by a judge at trial.",
    "answers": [
      "An uncontested divorce: both parties agree on all issues. No trial. Faster, cheaper, less stressful.",
      "A contested divorce: one or more issues cannot be resolved by agreement. A judge decides at trial."
    ],
    "details": [
      "In an uncontested divorce, both spouses have reached agreement — typically through negotiation or mediation — on every family law issue: how property will be divided, whether support will be paid and at what amount, and how children will be cared for. The agreement is formalized in a separation agreement. The divorce application then proceeds as an administrative matter, without a trial.",
      "In a contested divorce, one or more issues cannot be resolved by agreement. The matter proceeds through the family court process: Application, Case Conference, Settlement Conference, Trial Management Conference, Trial. A judge hears evidence from both sides and makes final orders.",
      "Most family law cases begin as contested and settle before trial — usually at the settlement conference stage. The settlement conference is a meeting before a judge who reviews the positions of both parties, identifies the strengths and weaknesses of each side case, and makes recommendations. Many cases that seem destined for trial resolve at this stage.",
      "The distinction matters practically because of cost and time. An uncontested divorce can be resolved in 4 to 8 months at a fraction of the cost of a trial. A contested divorce can take 2 to 3 years and cost tens of thousands of dollars in legal fees.",
      "Contact Miao He at 647-930-6688 to discuss which path applies to your situation."
    ],
    "keywords": "contested uncontested divorce Ontario,divorce trial Ontario,settlement conference Ontario,separation agreement Ontario,Miao He"
  },
  {
    "slug": "married-china-divorce-ontario",
    "question": "Can I get divorced in Ontario if I was married in China?",
    "summary": "Yes. Ontario courts recognize marriages performed in China as valid under Chinese law. You can proceed with divorce in Ontario as long as either you or your spouse has been ordinarily resident in Ontario for at least one year. A certified translation of your Chinese marriage certificate is typically required.",
    "answers": [
      "Yes. Ontario courts recognize Chinese marriages as legally valid, provided they were valid under Chinese law at the time of the ceremony.",
      "The residency requirement still applies: either you or your spouse must have been ordinarily resident in Ontario for at least one year."
    ],
    "details": [
      "Ontario courts apply the principle that a marriage valid in the jurisdiction where it was performed is valid in Ontario. Chinese marriages that complied with Chinese law at the time of the ceremony are recognized in Ontario.",
      "You will typically need to provide a certified copy of your Chinese marriage certificate. If it is in Chinese, it must be translated into English by a certified translator. The translation and original certificate are filed with the divorce application.",
      "The procedural requirements are the same as for any Ontario divorce: one-year separation (or another ground), residency requirement satisfied, and service on the other party.",
      "One issue that arises specifically with Chinese marriages is whether the marriage was properly registered in China. In China, a marriage is legally constituted by registration with the civil affairs bureau — not by a ceremony alone. If registration did not occur, the marriage may not be legally valid, which has implications for divorce proceedings and property rights. A lawyer familiar with Chinese marriage law can assess whether your marriage was properly constituted.",
      "Miao He is qualified as an expert witness in Chinese family law and marriage law in Ontario courts. For questions about the validity of your Chinese marriage or how to proceed with an Ontario divorce, contact 647-930-6688."
    ],
    "keywords": "married China divorce Ontario,Chinese marriage certificate Ontario,divorce China Canada,Chinese family lawyer Toronto,Miao He"
  },
  {
    "slug": "separation-agreement-ontario",
    "question": "What is a separation agreement and do I need one?",
    "summary": "A separation agreement is a legally binding contract between spouses that sets out the terms of their separation: property division, support, and parenting arrangements. It is not legally required, but it is strongly recommended. A well-drafted agreement avoids court, saves money, and gives both parties certainty.",
    "answers": [
      "A separation agreement is a contract between spouses that resolves all family law issues arising from the breakdown of the marriage.",
      "It is not legally required — but without one, unresolved issues remain open to court proceedings that can be costly and unpredictable."
    ],
    "details": [
      "A separation agreement is a domestic contract under the Ontario <em>Family Law Act</em>. It can address: how net family property will be equalized (or how specific assets will be transferred), support obligations, and parenting arrangements including decision-making responsibility and parenting time.",
      "For the agreement to be enforceable, both parties should receive independent legal advice from their own lawyers, full financial disclosure must be exchanged, both parties must sign voluntarily, and a witness must be present at signing.",
      "A well-drafted separation agreement gives both parties legal certainty: once signed, neither party can unilaterally reopen settled issues. It also allows the parties to structure their affairs in a way that the court might not be able to order — for example, creative asset transfers, tailored support arrangements, or detailed parenting schedules.",
      "Without a separation agreement, any unresolved issue can be brought to court at any time within the applicable limitation period. Court proceedings are expensive, slow, and emotionally draining. The upfront investment in a proper separation agreement is almost always worthwhile.",
      "Miao He assists clients in negotiating, drafting, and reviewing separation agreements. To discuss your situation, call 647-930-6688."
    ],
    "keywords": "separation agreement Ontario,domestic contract Ontario,what is separation agreement,family law agreement Ontario,Miao He lawyer"
  },
  {
    "slug": "pension-division-divorce-ontario",
    "question": "Is my spouse pension divided in a divorce?",
    "summary": "Yes. Pension plans are included in the equalization of net family property calculation. The value accrued during the marriage is included in the pension holder NFP. The method of division depends on the type of pension — defined benefit pensions require actuarial valuation.",
    "answers": [
      "Yes. Pension plans — both defined benefit and defined contribution — are included in the net family property calculation for equalization purposes.",
      "Only the value accrued during the marriage is included. Pre-marital pension credits can be excluded with proper documentation."
    ],
    "details": [
      "Under Ontario <em>Family Law Act</em>, pension plans are property subject to equalization. The pension value as of the date of separation is included in the pension holder net family property. The value accrued before the marriage can be deducted as a pre-marital exclusion, provided it can be properly documented.",
      "Defined benefit pensions — particularly government and public sector pensions — require actuarial valuation to determine their present value. This is a technical calculation that requires expert input and can be one of the most contested aspects of a high-net-worth divorce.",
      "For defined benefit pensions, Ontario allows two methods of division: the pension can be valued and the value included in the equalization calculation (with the non-member spouse receiving other assets in lieu), or the pension can be divided at source under Ontario pension division rules, with each party receiving their own separate pension entitlement.",
      "For defined contribution plans, the calculation is more straightforward: the value of the account at the date of separation is included in NFP, with a deduction for any pre-marital contributions.",
      "Pension division is a technically complex area. To ensure your pension assets are properly addressed in your divorce, contact Miao He at 647-930-6688."
    ],
    "keywords": "pension division divorce Ontario,defined benefit pension divorce,net family property pension,equalization pension Ontario,Miao He lawyer"
  },
  {
    "slug": "net-family-property-equalization-ontario",
    "question": "What is equalization of net family property?",
    "summary": "Equalization of net family property is Ontario property division system. Each spouse calculates their Net Family Property (NFP): assets at date of separation minus debts minus pre-marital assets (with exceptions). The spouse with the higher NFP pays the other half the difference — called the equalization payment.",
    "answers": [
      "Equalization of net family property is the system Ontario uses to divide wealth accumulated during a marriage. It is not a 50/50 split of every asset.",
      "Each spouse calculates their NFP. The higher-NFP spouse pays the other half the difference between their NFPs."
    ],
    "details": [
      "Ontario <em>Family Law Act</em> uses a system called equalization of net family property. The goal is to ensure that both spouses share equally in the wealth accumulated during the marriage — not to split every asset in half.",
      "Each spouse calculates their Net Family Property (NFP) using this formula: (Value of all property at date of separation) minus (Debts and liabilities at date of separation) minus (Value of property owned at date of marriage, with exceptions). The result is each spouse NFP.",
      "The spouse with the higher NFP pays the other spouse half the difference between their NFPs. This payment is called the equalization payment. It is a dollar amount — not a transfer of specific assets. The parties can agree on how to fund it.",
      "Important exceptions: certain property is excluded from NFP, including gifts and inheritances received during the marriage (if properly traced), damages for personal injury, and life insurance proceeds. However, these exclusions require careful documentation and tracing.",
      "The matrimonial home is subject to a special rule: unlike other assets, the value the home had at the date of marriage cannot be deducted from NFP, even if one spouse owned it before the marriage.",
      "To understand how equalization would apply to your specific assets, contact Miao He at 647-930-6688."
    ],
    "keywords": "equalization net family property Ontario,NFP calculation Ontario,property division Ontario divorce,equalization payment Ontario,Miao He"
  },
  {
    "slug": "pre-marital-assets-divorce-ontario",
    "question": "Can I keep assets I owned before marriage?",
    "summary": "Generally yes — pre-marital assets can be excluded from the equalization calculation. But the exclusion must be properly documented, the assets must be traceable, and they must not have been commingled with marital property. The matrimonial home is a critical exception: its pre-marital value cannot be deducted.",
    "answers": [
      "In most cases, yes. Assets you owned before the marriage can be deducted from your NFP calculation as pre-marital property.",
      "However, the exclusion requires careful documentation and tracing. And the matrimonial home is a major exception: even if you owned it before the marriage, its full current value is included in your NFP."
    ],
    "details": [
      "Under Ontario <em>Family Law Act</em>, the value of property owned at the date of marriage is deductible from a spouse NFP. This means that pre-marital assets — cash, investments, real estate, business interests — are generally not subject to equalization.",
      "However, the exclusion comes with important conditions. First, the asset must be properly valued as of the date of marriage. This requires documentation — bank statements, investment account records, property appraisals — from the date of marriage. If you cannot document the value at marriage, you cannot claim the deduction.",
      "Second, the asset must be traceable. If pre-marital funds were deposited into a joint account and intermingled with marital funds in a way that makes it impossible to identify what came from where, the exclusion may be lost.",
      "Third, the matrimonial home is categorically different. Under the <em>Family Law Act</em>, even if one spouse owned the matrimonial home before the marriage, the pre-marital value cannot be deducted from their NFP. The full value of the home at the date of separation is included. This is one of the most significant and surprising aspects of Ontario family law for clients who owned a home before marrying.",
      "If you have significant pre-marital assets, it is critical to document them properly and seek legal advice early. Contact Miao He at 647-930-6688."
    ],
    "keywords": "pre-marital assets divorce Ontario,property before marriage Ontario,NFP deduction Ontario,matrimonial home exclusion,Miao He"
  },
  {
    "slug": "matrimonial-home-dispute-ontario",
    "question": "What happens to the matrimonial home if we cannot agree?",
    "summary": "If the parties cannot agree on the matrimonial home, either can apply to the court. The court can order the home sold and proceeds divided, or one party to buy out the other. Both spouses have equal possession rights to the matrimonial home during separation, regardless of who owns it.",
    "answers": [
      "Either party can apply to the court for an order of partition and sale, requiring the home to be sold and proceeds distributed.",
      "Both spouses have equal possession rights to the matrimonial home during the marriage and separation, regardless of whose name is on the title."
    ],
    "details": [
      "Under Ontario <em>Family Law Act</em>, both spouses have an equal right to possession of the matrimonial home during the marriage — regardless of who owns the property or whose name is on title. This right continues during the separation until it is dealt with by agreement or court order.",
      "Neither spouse can sell, mortgage, or encumber the matrimonial home without the other written consent, even if only one spouse is on title. This protection exists to prevent one party from unilaterally disposing of the family home during a divorce.",
      "If the parties cannot agree on what to do with the home, either party can bring an application to the court. The court has the power to: order the home sold and proceeds divided; order one party to buy out the other at fair market value; grant exclusive possession of the home to one party (typically where there are children and it is in their best interests to remain in the home); or make any other order the court considers appropriate.",
      "The court will not leave the home in a state of permanent uncertainty. If the parties cannot agree, a court order will resolve the issue.",
      "For advice on your rights regarding the matrimonial home, contact Miao He at 647-930-6688."
    ],
    "keywords": "matrimonial home dispute Ontario,sell house divorce Ontario,partition sale Ontario,possession matrimonial home,Miao He lawyer"
  },
  {
    "slug": "child-custody-factors-ontario",
    "question": "What factors does the court consider in child custody decisions?",
    "summary": "The paramount consideration is always the best interests of the child. Relevant factors include each parent relationship with the child, ability to meet the child needs, each parent willingness to support the child relationship with the other parent, the child own views, and any history of family violence.",
    "answers": [
      "The best interests of the child is the only consideration. Every other factor is assessed through that lens.",
      "Key factors include: each parent relationship with the child, stability of each home environment, the child own views and preferences, willingness to facilitate the child relationship with the other parent, and any history of violence or abuse."
    ],
    "details": [
      "Under both the 《Divorce Act》 and the Ontario 《Children Law Reform Act》, the paramount consideration in all parenting decisions is the best interests of the child. Courts do not apply a presumption in favour of either parent.",
      "Specific factors courts consider include: the nature and strength of the child relationship with each parent; each parent ability to provide for the child physical, emotional, and developmental needs; the child own views and preferences, considered proportionally to their age and maturity; each parent willingness to support the child relationship with the other parent; the stability and continuity of the child current environment; and any history of family violence, including the impact on the child.",
      "Courts pay particular attention to the willingness of each parent to facilitate the child relationship with the other parent. A parent who attempts to alienate the child from the other parent — through negative comments, withholding information, or frustrating parenting time — risks losing credibility with the court.",
      "The child own voice is increasingly important. While courts do not allow children to simply choose which parent they live with, older children expressed preferences carry significant weight, particularly if the preference is clearly articulated and consistent.",
      "For advice on parenting arrangements in your specific circumstances, contact Miao He at 647-930-6688."
    ],
    "keywords": "child custody factors Ontario,best interests child Ontario,parenting time Ontario,custody decision Ontario,Miao He family lawyer"
  },
  {
    "slug": "decision-making-parenting-time-ontario",
    "question": "What is the difference between decision-making responsibility and parenting time?",
    "summary": "Decision-making responsibility (formerly custody) is the authority to make major decisions about a child life: education, health care, religion, and extracurricular activities. Parenting time (formerly access) is the time a child spends with each parent. The two are separate — joint decision-making does not mean equal time.",
    "answers": [
      "Decision-making responsibility: authority over major life decisions for the child (education, health, religion).",
      "Parenting time: the schedule of when the child is with each parent. These two concepts are independent of each other."
    ],
    "details": [
      "The 2021 amendments to the 《Divorce Act》 replaced the terms custody and access with decision-making responsibility and parenting time. The change reflects a shift in focus from parental rights to parental responsibilities.",
      "Decision-making responsibility refers to the authority to make significant decisions about a child upbringing: which school they attend, what medical treatment they receive, what religion they are raised in, and what extracurricular activities they participate in. This can be held solely by one parent (sole decision-making) or shared by both parents (joint decision-making).",
      "Parenting time refers to the schedule of when the child physically lives with or is in the care of each parent. Common arrangements include primary residence with one parent and scheduled time with the other; week-on/week-off alternating schedules; or customized arrangements based on each family specific circumstances.",
      "Critically, decision-making responsibility and parenting time are separate concepts. A child can live primarily with one parent while both parents share decision-making responsibility. Or one parent may have sole decision-making while the other has substantial parenting time. The arrangement depends on what serves the child best interests.",
      "For advice on what parenting arrangement is most likely to be appropriate in your case, contact Miao He at 647-930-6688."
    ],
    "keywords": "decision-making responsibility Ontario,parenting time Ontario,custody access Divorce Act 2021,joint decision-making Ontario,Miao He"
  },
  {
    "slug": "book-consultation-miao-he",
    "question": "How do I book a consultation with Miao He?",
    "summary": "Call 647-930-6688 or email miao@miaohelaw.ca. Consultations are 30 minutes at $220 + HST, conducted in Mandarin or English, in person at the Markham office or by video. There is no obligation to retain after the consultation.",
    "answers": [
      "Call 647-930-6688 or email miao@miaohelaw.ca to book a 30-minute initial consultation at $220 + HST.",
      "Consultations are available in Mandarin and English, in person at the Markham office (208-7050 Woodbine Ave) or by video."
    ],
    "details": [
      "Miao He offers initial consultations of 30 minutes at a fixed fee of $220 + HST. The consultation can be conducted in Mandarin or English, depending on your preference.",
      "The consultation can take place in person at the H. LAW FIRM office at 208-7050 Woodbine Avenue, Markham, Ontario, or by video conference for clients who prefer to meet remotely.",
      "The initial consultation is designed to give you a clear understanding of your legal situation: what rights you have, what the process looks like, and what options are available to you. You are under no obligation to retain Miao He after the consultation.",
      "Miao He serves clients throughout the Greater Toronto Area and all of Ontario. She holds both an Ontario bar licence (LSO #83315K) and a Chinese bar licence, making her uniquely equipped to handle family law matters involving Canadian and Chinese elements.",
      "To book, call 647-930-6688 or email miao@miaohelaw.ca. You can also submit an inquiry through the contact form at miaohelaw.ca/en/contact."
    ],
    "keywords": "book consultation Miao He,family lawyer Markham,Chinese family lawyer GTA,Ontario family law consultation,647-930-6688",
    "pairedFaqPath": "/faq/book-consultation-miao-he/"
  },

  // ── Separation vs Divorce series (2026-04-19) ─────────────────
  {
    slug: "is-separation-the-same-as-divorce",
    question: "Is separation the same as divorce?",
    summary:
      "No. Separation and divorce are completely different things. Separation is a factual state — spouses stop living together as a couple, with no court process and no documents required. Divorce is a legal process — you must apply to a Canadian court and obtain a Divorce Order before the marriage is legally ended.",
    answers: [
      "<strong>Separation is a factual state</strong> — spouses stop functioning as a couple in their daily and financial lives. No court process and no documents are required.",
      "<strong>Divorce is a legal process</strong> — you must apply to a Canadian court and obtain a <strong>Divorce Order (Divorce Certificate)</strong> before the marriage is legally terminated.",
    ],
    details: [
      "After separation, the parties are still legally married: they cannot remarry, spousal rights and obligations continue, and the separation does not automatically convert into a divorce. Only a court-issued Divorce Order ends the marriage.",
      "A common misconception among clients from a Chinese legal background is that separation equals divorce. This misunderstanding can be costly — remaining legally married affects your ability to remarry and complicates property characterization.",
      "If you wish to formally end the marriage, you must go through a <a href=\"/en/family-law/divorce-litigation\">divorce litigation</a> application. If the parties have agreed on property and parenting matters, a <a href=\"/en/family-law/domestic-contracts#separation\">separation agreement</a> can be signed first to document those terms before filing.",
      "For the full explanation, read: <a href=\"/en/blog/separation-vs-divorce-ontario/\">Separation vs. Divorce in Canada: Key Legal Differences</a>. Contact Miao He at 647-930-6688 to book a consultation.",
    ],
    keywords: "is separation divorce Canada,separation vs divorce Ontario,legal consequences separation Ontario,Divorce Order Canada,Miao He lawyer",
    pairedFaqPath: "/faq/fenju-jiushi-lihun-ma/",
    featured: true,
  },
  {
    slug: "separation-one-year-automatic-divorce",
    question: "Does being separated for one year mean we are automatically divorced?",
    summary:
      "No. Canada does not have automatic divorce. No matter how long you stay separated — one year, five years, even ten years — the marriage continues unless you actively apply to court for a divorce. One year of separation gives you the right to apply; it does not end the marriage by itself.",
    answers: [
      "The Canadian <a href=\"https://laws-lois.justice.gc.ca/eng/acts/d-3.4/\"><em>Divorce Act</em></a> provides that <strong>one year of separation</strong> is the most common ground for divorce (marriage breakdown). But it only gives you the <strong>right to apply</strong> — it does not automatically end the marriage.",
      "You must actively file a <a href=\"/en/family-law/divorce-litigation\">divorce application</a> with the Ontario Superior Court of Justice, go through the court process, and receive a Divorce Order before the marriage is legally over.",
    ],
    details: [
      "Miao He has represented a client who had been separated for <strong>ten years</strong> and had never filed for divorce. He believed the passage of time had ended the marriage automatically — it had not. He remained legally married, could not remarry, and the property issues had become significantly more complicated.",
      "After one year of separation, if you are ready to proceed, you will typically need to prepare evidence of the separation date, a financial disclosure, and the necessary court documents to file the application.",
      "\"Long separation = automatic divorce\" is a costly misconception. Once you have been separated for a year, consult a lawyer about starting the <a href=\"/en/family-law/divorce-litigation\">divorce application</a> process.",
      "For the full explanation, read: <a href=\"/en/blog/separation-vs-divorce-ontario/\">Separation vs. Divorce in Canada: Key Legal Differences</a>. Contact Miao He at 647-930-6688 to book a consultation.",
    ],
    keywords: "separated one year automatic divorce Canada,how long separated to divorce Ontario,Divorce Act one year separation,marriage breakdown Canada,Miao He lawyer",
    pairedFaqPath: "/faq/fenju-yinian-zidong-lihun/",
    featured: true,
  },
  {
    slug: "can-you-reconcile-after-separation",
    question: "Can you change your mind and reconcile after separating?",
    summary:
      "Yes, but the timing matters. Canadian law allows spouses to reconcile after separation. The key rule: if you resume living together for 90 days or less, the original separation date is preserved. If you live together for more than 90 days, the prior separation period is broken and you will need to recalculate your separation date if you separate again.",
    answers: [
      "Yes. Canadian law recognizes <strong>reconciliation</strong> after separation.",
      "The <strong>90-day rule</strong> is critical: resuming cohabitation for 90 days or less does not reset your separation date. Resuming for <strong>more than 90 days</strong> breaks the prior separation period — if you separate again in the future, you will need to <strong>recalculate the separation date</strong>.",
    ],
    details: [
      "Section 8(3) of the Canadian <a href=\"https://laws-lois.justice.gc.ca/eng/acts/d-3.4/\"><em>Divorce Act</em></a> sets out the rule explicitly: a brief resumption of cohabitation (90 days or less) does not restart the clock; resumption beyond 90 days is treated as a genuine reconciliation that interrupts the separation period.",
      "The separation date directly affects: the valuation date for property division, when the one-year clock to file for divorce starts, and the scope of a <a href=\"/en/family-law/domestic-contracts#separation\">separation agreement</a>. These are significant financial implications.",
      "Keep evidence of your separation date — texts, emails, and separate bank accounts. If you have briefly reconciled and then separated again, consult a lawyer promptly to confirm whether your separation date needs to be re-established.",
      "For the full explanation, read: <a href=\"/en/blog/separation-vs-divorce-ontario/\">Separation vs. Divorce in Canada: Key Legal Differences</a>. Contact Miao He at 647-930-6688 to book a consultation.",
    ],
    keywords: "reconcile after separation Canada,90-day reconciliation rule Canada,separation date reset Ontario,Divorce Act reconciliation,Miao He lawyer",
    pairedFaqPath: "/faq/fenju-zhihou-fanhou-hehao/",
    featured: true,
  },
  {
    slug: "can-you-reconcile-after-divorce",
    question: "Can you change your mind after a divorce is granted?",
    summary:
      "No. Once a Divorce Order is issued, the marriage is permanently ended in law. If the parties later wish to resume their relationship as spouses, they must register a completely new marriage — the same process as marrying for the first time. There is no such thing as a reinstatement of the prior marriage.",
    answers: [
      "No. Once a <strong>Divorce Order (Divorce Certificate)</strong> is issued, the marriage is <strong>permanently terminated in law</strong>.",
      "If the parties later wish to be spouses again, they must <strong>register a new marriage</strong>. There is no \"remarriage certificate\" — the process is identical to marrying a stranger for the first time.",
    ],
    details: [
      "This is fundamentally different from separation: separation can be \"undone\" by resuming cohabitation for more than 90 days. Once a divorce is granted, however strong the reconciliation, the prior legal marriage no longer exists.",
      "If you have any uncertainty about whether you want to end the marriage, please think carefully before filing a <a href=\"/en/family-law/divorce-litigation\">divorce application</a>. Once the court issues the Divorce Order, it is irreversible.",
      "In practice, some former couples do reconcile after divorce and choose to remarry. That remarriage involves a new ceremony and new registration — exactly like a first marriage.",
      "For the full explanation, read: <a href=\"/en/blog/separation-vs-divorce-ontario/\">Separation vs. Divorce in Canada: Key Legal Differences</a>. Contact Miao He at 647-930-6688 to book a consultation.",
    ],
    keywords: "reconcile after divorce Canada,divorce irreversible Ontario,remarry after divorce Canada,Divorce Order permanent,Miao He lawyer",
    pairedFaqPath: "/faq/lihun-zhihou-keyi-fanhui/",
    featured: true,
  },
  {
    slug: "separation-under-one-roof",
    question: "Can you be legally separated while still living under the same roof?",
    summary:
      "Yes. Ontario courts recognize separation under one roof. The law does not require spouses to physically live apart — what matters is whether they have substantively stopped living as a couple: separate bedrooms, separate finances, separate daily lives. Separation under one roof has the same legal effect as conventional separation, but proving it requires stronger evidence.",
    answers: [
      "Yes. Ontario courts recognize <strong>separation under one roof</strong>. Physical separation is not required.",
      "The key question is whether the parties have <strong>substantively stopped living as spouses</strong>: separate bedrooms, independent finances, separate daily routines, separate social lives, and informing family or friends of the separation. Not all of these need to be present, but the more indicators, the stronger the evidence.",
    ],
    details: [
      "Many spouses cannot immediately move to separate residences due to financial pressure, children's schooling, or shared property ownership. Canadian law reflects this reality and does not treat physical co-habitation as incompatible with legal separation.",
      "Courts look at indicators such as: sleeping in separate bedrooms with no spousal intimacy; financially independent — separate accounts, separate expenses; not eating together, shopping together, or sharing household chores; not attending events as a couple; and informing family and friends of the separation.",
      "Separation under one roof is legally equivalent to conventional separation — the separation date carries the same weight for property division and divorce timing, and a <a href=\"/en/family-law/domestic-contracts#separation\">separation agreement</a> is equally applicable. However, because the parties still share a residence, proving the separation date is harder — preserve <a href=\"/en/blog/electronic-evidence-ontario-family-court/\">electronic evidence such as texts and emails</a> to document the separation.",
      "For the full explanation, read: <a href=\"/en/blog/separation-vs-divorce-ontario/\">Separation vs. Divorce in Canada: Key Legal Differences</a>. Contact Miao He at 647-930-6688 to book a consultation.",
    ],
    keywords: "separation under one roof Ontario,live together separated Canada,same house separated Ontario,prove separation date same roof,Miao He lawyer",
    pairedFaqPath: "/faq/tongwuyan-fenju/",
    featured: true,
  },
  {
    slug: "empathy-and-law-both-matter-ontario-family-lawyer",
    question: "In Ontario, why is empathy just as important as knowing the law when choosing a family lawyer?",
    summary:
      "Statutes set the frame, but family disputes arrive with intense emotion and lived context. Without empathy, counsel may not truly understand why you insist on a particular outcome or why you cannot compromise in this file. Hearing the \"why\" is what lets legal tools be aimed at your core interests. Knowing the law is the baseline; understanding the client at emotional depth is often what makes strategy credible in negotiation and in court.",
    answers: [
      "Rules are abstract, but family disputes are personal. If a lawyer cannot empathize, it is harder to stand in your shoes on why a demand matters or why a line cannot be crossed.",
      "Only after counsel understands <strong>why</strong> you are fighting this case can they fight effectively for what matters most. Statute knowledge is the passing bar; depth of understanding is what often builds a stronger shield in negotiation and litigation.",
    ],
    details: [
      "Rules are cold on the page; family disputes carry heat and cost. If a lawyer cannot empathize, they may not truly grasp why you insist on a particular outcome or why you cannot back down in this case. Once counsel hears <strong>why</strong> you are pursuing the case, they can align strategy with your central interests. Knowing the law is the minimum; understanding the client at an emotional depth is what often makes a lawyer your most reliable backstop in negotiation and in court.",
      "For more on \"human\" legal service and how to interview counsel, read Miao He’s <a href=\"/en/blog/how-to-choose-markham-family-lawyer/\">How to Choose a Good Markham Family Lawyer</a>. You may also compare notes with <a href=\"/en/blog/how-to-choose-toronto-chinese-divorce-lawyer/\">How to Choose the Best Chinese Divorce Lawyer in Toronto</a> on consults and fit.",
      "Call <strong>647-930-6688</strong> or WeChat <strong>372656035</strong> to book a consultation.",
    ],
    keywords: "Ontario family lawyer empathy,Chinese family lawyer GTA,Markham family lawyer,choose family lawyer Ontario,Miao He lawyer",
    pairedFaqPath: "/faq/gongqing-yu-dongfalv-tongyang-zhongyao/",
    featured: true,
  },
  {
    slug: "lawyer-interrupts-during-family-law-consult",
    question: "Why does my family lawyer sometimes interrupt me — does that mean they do not respect me?",
    summary:
      "Not necessarily. Timing matters: if counsel has already heard the full narrative, later interruptions often filter out irrelevant detail, control hourly cost, and refocus on issues and evidence. If interruptions start from minute one and never let you finish, that can mean the full picture — and key facts hiding in detail — are being missed. True professionalism is disciplined triage <em>after</em> listening, not cold cutting you off at the outset.",
    answers: [
      "It depends on timing. If your lawyer has already heard the full story and then redirects in follow-up meetings, that is often professional time management — removing information that will not change outcomes and focusing on admissible facts and leverage points.",
      "If counsel is impatient from the first minute and interrupts constantly, the file may lose context and even miss evidence buried in detail. True professionalism is precise triage after a real listen — not dismissive interruption from the start.",
    ],
    details: [
      "After counsel has heard the full arc, interruptions in later communications often help strip out facts that will not move the needle, protect your legal spend, and concentrate on issues, evidence, and procedural steps that matter.",
      "If counsel never lets you finish and interrupts throughout, they may be losing the forest for the trees — and can miss critical evidence hiding in the details.",
      "This is consistent with what Miao He describes in <a href=\"/en/blog/how-to-choose-markham-family-lawyer/\">How to Choose a Good Markham Family Lawyer</a>: holding space for emotion while still managing consult time. Professional listening is not unlimited repetition of the same story; it is spending limited time on information that can change results. For how hourly costs add up, see <a href=\"/en/faq/divorce-lawyer-cost-ontario/\">How much does a divorce lawyer cost in Ontario?</a>",
      "Call <strong>647-930-6688</strong> to book a consultation with Miao He.",
    ],
    keywords: "lawyer interrupts consult,hourly billing family lawyer,Markham family lawyer,Ontario family law consult,Miao He lawyer",
    pairedFaqPath: "/faq/lushi-weishenme-you-shi-dazhuan-chenshu/",
    featured: true,
  },
  {
    slug: "court-evidence-vs-emotional-noise-family-law",
    question: "In a family law case, how do I tell \"court evidence\" apart from \"emotional noise\"?",
    summary:
      "Emotional noise is usually subjective feeling without objective support — hard for a judge to credit on its own. Court evidence ties to verifiable facts: documents, transfers, third-party witnesses, medical or police records. Experienced counsel will press for details that can be turned into proof. Emotional harm is not always noise: family violence or personal injury can become central evidence in family or criminal proceedings, and telling the difference takes seasoned judgment.",
    answers: [
      "Emotional noise is often pure subjective feeling (\"I am unhappy,\" \"I feel hurt\"). Without objective material, a judge will rarely rely on it alone.",
      "Court evidence maps to facts you can prove: written records, transfer slips, third-party witnesses, medical or police materials. Strong lawyers ask for those specifics while you speak.",
    ],
    details: [
      "Sorting story from proof is highly experience-dependent. Emotional noise is usually subjective feeling without objective anchors — difficult for a court to accept standing alone.",
      "Court evidence means the narrative can be tied to materials you can file and test: \"Is there a paper trail?\" \"Transfers or third-party witnesses?\" Those convertible details are the core.",
      "Important caveat: emotional harm is not always noise. Where <strong>family violence</strong> or personal injury is involved, the same facts may be critical evidence in criminal or family proceedings. Drawing the line takes deep practical judgment.",
      "On electronic and documentary habits in court, see <a href=\"/en/blog/electronic-evidence-ontario-family-court/\">Electronic evidence in Ontario family court</a>. Miao He also discusses carrying your \"usable voice\" into court in <a href=\"/en/blog/how-to-choose-markham-family-lawyer/\">How to Choose a Good Markham Family Lawyer</a>. Call <strong>647-930-6688</strong> to book.",
    ],
    keywords: "family law evidence Ontario,emotional noise court,family violence evidence Ontario,Miao He lawyer",
    pairedFaqPath: "/faq/fating-zhengju-yu-qingxu-zaoyin/",
    featured: true,
  },
  {
    slug: "control-litigation-costs-hourly-ontario",
    question: "Ontario lawyers bill by the hour — how can I keep my litigation costs under control?",
    summary:
      "Much of the answer is the depth of your <strong>first consultation</strong>. You do not have to wait until mid-case to think about savings. In the first meeting, map strategy, likely direction, and a preliminary plan with counsel; retain once you share a strategic baseline. The most expensive pattern is re-asking the same questions. Efficient, targeted negotiation or litigation on a shared plan is usually the soundest way to save money.",
    answers: [
      "The secret is <strong>depth in the initial consult</strong>. You should not wait until the file is half finished to think about cost. In the first meeting, explore case theory, likely trajectory, and a preliminary litigation or negotiation strategy; retaining after strategic alignment usually saves time and fees.",
      "The most expensive habit is repeating the same conversations. With a shared plan, move negotiations or litigation efficiently and purposefully.",
    ],
    details: [
      "You do not have to wait until mid-case to think about savings. In the first consultation, work through case theory, likely trajectory, and a preliminary strategy with your lawyer. Once you align on strategy before retaining, later work is more likely to \"aim true\" from day one.",
      "The most expensive pattern is repeating the same issues. On a shared strategic baseline, advance negotiation or litigation efficiently and purposefully — that is usually the most rational way to control cost.",
      "For how we try to keep communication on outcome-driving topics and cost thinking, read <a href=\"/en/blog/how-to-choose-markham-family-lawyer/\">How to Choose a Good Markham Family Lawyer</a>. For fee ranges and variables, compare <a href=\"/en/faq/divorce-lawyer-cost-ontario/\">How much does a divorce lawyer cost in Ontario?</a> and <a href=\"/en/faq/toronto-divorce-cost-how-much/\">How much does a divorce cost in Toronto?</a>.",
      "Call <strong>647-930-6688</strong> to book a consultation.",
    ],
    keywords: "Ontario hourly lawyer fees,control litigation cost,family lawyer first consult,Miao He lawyer",
    pairedFaqPath: "/faq/an-sheng-xiaoshoufei-kongzhi-susong-chengben/",
    featured: true,
  },
  {
    slug: "outside-markham-hire-ontario-family-lawyer",
    question: "I live outside Markham — can I still hire you for an Ontario family law matter?",
    summary:
      "Yes. With an Ontario licence, we can represent family law clients province-wide. Whether you are in Toronto, Ottawa, London, or Windsor, distance is rarely a barrier: video meetings, e-signatures, and Ontario court e-filing can support the same quality of service as for local Markham clients. Justice in law is province-wide; professional service can be as well (subject to conflicts checks and scheduling).",
    answers: [
      "Yes. Holding an Ontario licence, we can represent family law matters across the province.",
      "Whether you are in Toronto, Ottawa, London, or Windsor, distance is no longer a practical barrier. Video conferences, electronic signatures, and Ontario court electronic filing allow the same depth of service as for Markham-area clients.",
    ],
    details: [
      "With an Ontario licence, we can represent family law matters across the province.",
      "Whether you are in Toronto, Ottawa, London, or Windsor, distance is no longer a barrier to legal service. Video meetings, e-signatures, and Ontario court electronic filing support the same high-quality, in-depth work as for local Markham clients.",
      "The fairness of the law is province-wide, and so is our professional service — whether a retainer fits still depends on case-by-case review (conflicts, capacity, and file structure). Miao He explains province-wide service in the closing section of <a href=\"/en/blog/how-to-choose-markham-family-lawyer/\">How to Choose a Good Markham Family Lawyer</a>, subject to individual assessment.",
      "Call <strong>647-930-6688</strong> with your location and a short case summary, and we can discuss whether a retainer is appropriate.",
    ],
    keywords: "Markham family lawyer Ontario wide,GTA family lawyer,Ontario family law remote consult,Miao He lawyer",
    pairedFaqPath: "/faq/markham-wai-pinren-an-sheng-jiatingfa/",
    featured: true,
  },
];

export function getFaqItemsEnForListing(): FaqItemEn[] {
  const pinned = faqItemsEn.filter((item) => item.featured);
  const rest = faqItemsEn.filter((item) => !item.featured);
  // Featured blocks are appended in chronological order; list newest first on /en/faq.
  return [...pinned].reverse().concat(rest);
}