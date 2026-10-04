/** Topic hubs for blog crawl paths. Tag pages are noindex; these groups live on indexable pages. */
export type BlogTopicHub = {
  id: string;
  title: string;
  titleEn: string;
  chip: string;
  chipEn: string;
  intro: string;
  introEn: string;
  slugs: string[];
};

/** ZH filename → EN filename when the paired posts do not share a slug. */
const EN_SLUG_OVERRIDES: Record<string, string> = {
  'matrimonial-home-property-division-not-based-on-title':
    'matrimonial-home-title-vs-property-division-ontario',
  'markham-richmond-hill-newmarket-court-divorce-lawyer':
    'markham-richmond-hill-newmarket-court-chinese-divorce-lawyer',
};

export function hubSlugsForLang(hub: BlogTopicHub, lang: 'zh' | 'en'): string[] {
  if (lang === 'zh') return hub.slugs;
  return hub.slugs.map((slug) => EN_SLUG_OVERRIDES[slug] ?? slug);
}

export const blogTopicHubs: BlogTopicHub[] = [
  {
    id: 'property',
    title: '财产分割与净家庭财产',
    titleEn: 'Property Division & Net Family Property',
    chip: '财产分割',
    chipEn: 'Property',
    intro: '婚房、婚前扣除、结婚不到五年打不公平门槛极高、父母出资、妈妈给的钱在几个账户之间转来转去就越说不清、已经结婚了签婚内协议说婚房和父母首付还来得及、公司开在我名下账从没看过离婚先算谁的、强制出售，分居后房价升值还分不分，分居后拿存款再买一套新房数字还在，房子在对方名下还能不能带着孩子住，房子写在他名下能注册成婚房不让他偷偷贷款，公婆名下住了十几年还能不能分，NFP 算错了能不能重算，均等化时效，离完婚对方还住在房子里，房贷断供了拿家庭官司拖不住银行卖房，安省同居满三年也不走夫妻财产平分，同居分开把房子份额过户过来不算买断抚养费，以及房子卖掉钱也分了AI写的协议不等于结案。',
    introEn: 'The matrimonial home, pre-marriage deductions, why under five years almost never shocks the court into unequal division, parental gifts, why moving mom’s gift between accounts weakens the proof, why it is not too late after the wedding to contract the home and a parental down payment, why a company registered in your name is counted on your side first even if you never looked at the books, forced sale, whether a post-separation increase is still shared, why buying another house after separation with money already on the books still counts, whether you can stay with the kids when title is in the other name, whether you can designate a house in his name as the matrimonial home so he cannot secretly mortgage it, whether a house titled in the in-laws’ names after a decade still yields a share, whether a wrong NFP can be recalculated, equalization limitation periods, an ex still occupying the house after divorce, why a family lawsuit will not stop a bank sale after mortgage default, why three years of common-law cohabitation in Ontario does not equalize property, why transferring a house share on a common-law split does not buy out child support, and why selling the house and splitting the money with an AI-written agreement is not closing the case.',
    slugs: [
      'net-family-property-ontario',
      'ontario-divorce-property-division',
      'equalization-limitation-chinese-lawyer-ontario',
      'china-divorce-ontario-equalization-afterward',
      'house-appreciation-after-separation-ontario',
      'buy-house-after-separation-still-divide-ontario',
      'house-in-spouse-name-stay-with-kids-separation-ontario',
      'house-in-his-name-designate-matrimonial-home-ontario',
      'in-laws-name-house-lived-decade-divorce-ontario',
      'already-married-marriage-contract-home-down-payment-ontario',
      'matrimonial-home-property-division-not-based-on-title',
      'after-divorce-ex-still-in-my-house-ontario',
      'premarital-home-sold-ontario-deduction',
      'married-under-five-years-matrimonial-home-unfair-ontario',
      'force-sale-matrimonial-home-ontario',
      'mortgage-default-family-court-cannot-stop-bank-sale-ontario',
      'resulting-trust-parental-gifts-ontario',
      'chinese-divorce-property-gift-loan-trust-ontario',
      'mom-gift-moved-between-accounts-divorce-ontario',
      'common-law-three-years-ontario-split-property',
      'common-law-house-share-transfer-buyout-child-support-ontario',
      'sold-house-split-money-ai-agreement-ontario',
      'dissipation-of-assets',
      'change-lawyer-recalculate-nfp-ontario',
      'high-net-worth-divorce-ontario',
      'company-in-my-name-never-looked-books-divorce-ontario',
    ],
  },
  {
    id: 'cross-border',
    title: '跨境资产与中加离婚',
    titleEn: 'Cross-Border Assets & China–Canada Divorce',
    chip: '跨境资产',
    chipEn: 'Cross-border',
    intro: '中国房产、跨境披露、判决互认，只在中国结的婚人在加拿大要不要离两次，人在加拿大被中国法院起诉离婚怎么应诉，中国离完安省还能不能分财产或要赡养费，新移民担保，以及带孩子搬家或被带回中国。',
    introEn: 'Property in China, cross-border disclosure, recognition of judgments, whether a China-only marriage needs two divorces if you live in Canada, answering a Chinese divorce claim while you live in Canada, equalization and support after a foreign divorce, sponsorship after divorce, and relocating or recovering a child from China.',
    slugs: [
      'china-property-ontario-divorce',
      'china-property-premarital-depreciation-ontario',
      'cross-border-assets-divorce-ontario',
      'china-canada-divorce-judgment-recognition',
      'married-only-china-living-in-canada-one-divorce',
      'china-divorce-lawsuit-living-in-canada',
      'china-divorce-ontario-equalization-afterward',
      'foreign-divorce-avoid-spousal-support-ontario',
      'after-divorce-ex-still-in-my-house-ontario',
      'hague-service-spouse-in-china-ontario',
      'expert-witness-chinese-marriage-law-ontario',
      'new-immigrant-divorce-ontario',
      'sponsorship-undertaking-chinese-lawyer-ontario',
      'child-taken-to-china-ontario',
      'relocate-child-china-mandarin-lawyer-ontario',
    ],
  },
  {
    id: 'children-support',
    title: '子女监护与抚养费',
    titleEn: 'Child Custody & Support',
    chip: '子女抚养',
    chipEn: 'Children',
    intro: '监护判断标准、唯一抚养权是不是就是孩子跟我住、孩子不愿单独见面能不能要监督探视、成年子女还有没有抚养权、带孩子搬家、协议能不能放弃抚养费、同居分开把房子份额过户过来不算买断抚养费、分居后还没起诉的追溯抚养费、境外离婚和赡养费、推定收入、报税三千法院不只看报税、SSAG，以及中加抚养费认定差异。',
    introEn: 'Best-interests tests, whether wanting sole custody just means the kids live with you, whether a child’s reluctance supports supervised parenting time, whether an adult child is still a custody case, relocation, whether support can be waived, why transferring a house share on a common-law split does not buy out child support, retroactive support before anyone files, foreign divorce and spousal support, imputed income, why reporting $3,000 a month does not end the inquiry, SSAG, and China–Canada differences in support.',
    slugs: [
      'child-custody-ontario-chinese',
      'sole-custody-vs-child-lives-with-me-ontario',
      'supervised-parenting-time-child-does-not-want-ontario',
      'adult-child-no-custody-ontario',
      'relocate-child-china-mandarin-lawyer-ontario',
      'child-support-waiver-separation-agreement-ontario',
      'common-law-house-share-transfer-buyout-child-support-ontario',
      'retroactive-child-support-ontario',
      'foreign-divorce-avoid-spousal-support-ontario',
      'imputed-income-child-support-ontario',
      'company-in-my-name-never-looked-books-divorce-ontario',
      'imputed-income-spousal-support-ontario',
      'spousal-child-support-ontario',
      'ontario-spousal-support-ssag-imputed-income-misconceptions',
      'ontario-vs-china-child-spousal-support-comparison',
    ],
  },
  {
    id: 'court',
    title: '家暴、限制令与法庭程序',
    titleEn: 'Family Violence, Restraining Orders & Court Procedure',
    chip: '法庭程序',
    chipEn: 'Court',
    intro: '紧急保护、缺席判决、律师费、地区程序差异，案件卡住时怎么推进，房贷断供后家庭诉讼拖不住银行卖房，以及对方手滑分享的文件法庭上能不能用。',
    introEn: 'Emergency protection, default judgment, costs, regional court differences, stalled files, why a family lawsuit will not stop a bank sale after mortgage default, and whether files accidentally shared with you can be used in court.',
    slugs: [
      'ontario-restraining-order-chinese-family',
      'no-fault-divorce-domestic-violence-ontario',
      'ontario-family-court-procedures-regional-differences',
      'ontario-family-law-lawyer-court-experience',
      'default-judgment-divorce-ontario',
      'costs-award-divorce-ontario',
      'stalled-family-law-case-ontario',
      'mortgage-default-family-court-cannot-stop-bank-sale-ontario',
      'electronic-evidence-ontario-family-court',
      'accidentally-shared-files-family-court-ontario',
      'ontario-divorce-timeline-2026',
      'markham-richmond-hill-newmarket-court-divorce-lawyer',
    ],
  },
  {
    id: 'agreements',
    title: '分居、协议与选律师',
    titleEn: 'Separation, Contracts & Choosing a Lawyer',
    chip: '协议选律师',
    chipEn: 'Agreements',
    intro: '分居日、同屋檐下分居、还一起吃饭一起去婚礼那个分居日还算不算、口头说分开锁不住分居后再买一套房、分居协议、两个人不能共用一个律师写协议、他说房子和钱都给我不肯写成协议到法庭不算数、房子卖掉钱也分了AI写的协议不等于结案、同居分开把房子份额过户过来不算买断抚养费、婚前婚内协议锁不住孩子、已经结婚了签婚内协议说婚房和父母首付还来得及、结婚不到五年打不公平门槛极高、同居分手、同居满三年财产也不平分，以及律师费和如何挑选律师。',
    introEn: 'Separation date, same-roof separation, why eating together and attending weddings as a couple can undo a date you agreed, why a verbal split does not lock a later house purchase, agreements, why both sides cannot share one lawyer to draft, why an oral promise that the house and money are yours counts for nothing in court, why selling the house and splitting the money with an AI-written agreement is not closing the case, why transferring a house share on a common-law split does not buy out child support, prenups that cannot lock parenting, why it is not too late after the wedding to contract the matrimonial home and a parental down payment, why under five years almost never shocks the court into unequal division, common-law breakdown, why three years together still does not split property like a marriage, fees, and how to choose counsel.',
    slugs: [
      'separation-vs-divorce-ontario',
      'house-in-spouse-name-stay-with-kids-separation-ontario',
      'same-roof-wedding-separation-date-ontario',
      'separation-agreement-vs-divorce-ontario',
      'separation-agreement-validity-ontario',
      'same-lawyer-both-sides-separation-agreement-ontario',
      'separation-date-vs-divorce-date-ontario',
      'buy-house-after-separation-still-divide-ontario',
      'common-law-vs-divorce-ontario',
      'common-law-three-years-ontario-split-property',
      'prenuptial-agreement-ontario-2026',
      'prenuptial-agreement-validity-ontario',
      'marriage-contract-child-parenting-ontario',
      'already-married-marriage-contract-home-down-payment-ontario',
      'said-house-money-yours-wont-sign-agreement-ontario',
      'sold-house-split-money-ai-agreement-ontario',
      'child-support-waiver-separation-agreement-ontario',
      'common-law-house-share-transfer-buyout-child-support-ontario',
      'uncontested-divorce-ontario',
      'ontario-divorce-five-myths',
      'married-under-five-years-matrimonial-home-unfair-ontario',
      'how-to-choose-markham-family-lawyer',
      'how-to-choose-toronto-chinese-divorce-lawyer',
      'toronto-divorce-lawyer-fees-3000-vs-30000',
    ],
  },
  {
    id: 'estates-documents',
    title: '遗产继承与同一人认证',
    titleEn: 'Estates & Same-Person Proof',
    chip: '遗产文件',
    chipEn: 'Estates',
    intro: '人去世后不能再做同一人认证；只剩旧文件和政府记录，没有就证明不了。妈妈遗嘱在国内签，亲子关系和户口本公证现在就要办。',
    introEn: 'After death a same-person declaration cannot be made. Only old documents and government records remain; if those are gone, you cannot prove it. A will for assets in China is signed in China; parent-child and hukou notarizations should be done now.',
    slugs: [
      'same-person-declaration-after-death-ontario',
      'mom-gift-moved-between-accounts-divorce-ontario',
    ],
  },
];

/** Older evergreen posts to surface from the homepage, beyond the three newest cards. */
export const homepageEvergreenSlugs: string[] = [
  'net-family-property-ontario',
  'cross-border-assets-divorce-ontario',
  'high-net-worth-divorce-ontario',
  'ontario-restraining-order-chinese-family',
  'child-custody-ontario-chinese',
  'china-property-ontario-divorce',
  'matrimonial-home-property-division-not-based-on-title',
  'imputed-income-child-support-ontario',
  'prenuptial-agreement-ontario-2026',
  'separation-agreement-validity-ontario',
  'ontario-divorce-property-division',
  'new-immigrant-divorce-ontario',
];
