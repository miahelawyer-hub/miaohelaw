/** Topic hubs for Chinese blog crawl paths. Tag pages are noindex; these groups live on indexable pages. */
export type BlogTopicHub = {
  id: string;
  title: string;
  intro: string;
  slugs: string[];
};

export const blogTopicHubs: BlogTopicHub[] = [
  {
    id: 'property',
    title: '财产分割与净家庭财产',
    intro: '婚房、婚前扣除、父母出资、强制出售，以及 NFP 算错了能不能重算。',
    slugs: [
      'net-family-property-ontario',
      'ontario-divorce-property-division',
      'matrimonial-home-property-division-not-based-on-title',
      'premarital-home-sold-ontario-deduction',
      'force-sale-matrimonial-home-ontario',
      'resulting-trust-parental-gifts-ontario',
      'chinese-divorce-property-gift-loan-trust-ontario',
      'dissipation-of-assets',
      'change-lawyer-recalculate-nfp-ontario',
      'high-net-worth-divorce-ontario',
    ],
  },
  {
    id: 'cross-border',
    title: '跨境资产与中加离婚',
    intro: '中国房产、跨境披露、判决互认，以及新移民身份与把孩子带回中国。',
    slugs: [
      'china-property-ontario-divorce',
      'china-property-premarital-depreciation-ontario',
      'cross-border-assets-divorce-ontario',
      'china-canada-divorce-judgment-recognition',
      'hague-service-spouse-in-china-ontario',
      'expert-witness-chinese-marriage-law-ontario',
      'new-immigrant-divorce-ontario',
      'child-taken-to-china-ontario',
    ],
  },
  {
    id: 'children-support',
    title: '子女监护与抚养费',
    intro: '监护判断标准、推定收入、SSAG，以及中加抚养费认定差异。',
    slugs: [
      'child-custody-ontario-chinese',
      'imputed-income-child-support-ontario',
      'imputed-income-spousal-support-ontario',
      'spousal-child-support-ontario',
      'ontario-spousal-support-ssag-imputed-income-misconceptions',
      'ontario-vs-china-child-spousal-support-comparison',
    ],
  },
  {
    id: 'court',
    title: '家暴、限制令与法庭程序',
    intro: '紧急保护、缺席判决、律师费、地区程序差异，以及案件卡住时怎么推进。',
    slugs: [
      'ontario-restraining-order-chinese-family',
      'no-fault-divorce-domestic-violence-ontario',
      'ontario-family-court-procedures-regional-differences',
      'ontario-family-law-lawyer-court-experience',
      'default-judgment-divorce-ontario',
      'costs-award-divorce-ontario',
      'stalled-family-law-case-ontario',
      'electronic-evidence-ontario-family-court',
      'ontario-divorce-timeline-2026',
      'markham-richmond-hill-newmarket-court-divorce-lawyer',
    ],
  },
  {
    id: 'agreements',
    title: '分居、协议与选律师',
    intro: '分居日、分居协议、婚前协议、同居分手，以及律师费和如何挑选律师。',
    slugs: [
      'separation-vs-divorce-ontario',
      'separation-agreement-vs-divorce-ontario',
      'separation-agreement-validity-ontario',
      'separation-date-vs-divorce-date-ontario',
      'common-law-vs-divorce-ontario',
      'prenuptial-agreement-ontario-2026',
      'prenuptial-agreement-validity-ontario',
      'uncontested-divorce-ontario',
      'ontario-divorce-five-myths',
      'how-to-choose-markham-family-lawyer',
      'how-to-choose-toronto-chinese-divorce-lawyer',
      'toronto-divorce-lawyer-fees-3000-vs-30000',
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
