export interface VideoItem {
  slug: string;
  youtubeId: string;
  title: string;
  topic: string;
  topicSlug: string;
  uploadDate: string;
  summary: string;
  description: string;
  keyPoints: string[];
  keywords: string;
  metaTitle?: string;
  metaDescription?: string;
}

export const videoItems: VideoItem[] = [
  {
    slug: 'parents-property-matrimonial-home',
    youtubeId: '-6qCG00loGo',
    title: '父母名下的房产不是你的婚房？安省法律这样规定',
    topic: '婚房认定',
    topicSlug: 'matrimonial-home',
    uploadDate: '2026-04-19',
    summary:
      '住在父母名下的房子里，离婚时配偶能分走一半吗？根据安省家庭法第18条，配偶必须在房产上具有法律利益才能主张分割——父母名下的房子通常不构成婚房。',
    description:
      '这个问题在离婚案件中并不罕见——孩子结婚后住在父母名下的房子里，离婚时，配偶可以主张分割这套房产吗？简单的回答是：不可以。但有例外。根据安省《<a href="https://www.ontario.ca/laws/statute/90f03" target="_blank" rel="noopener noreferrer">家庭法</a>》第18条，婚房指的是配偶具有个人利益（legal interest）的家庭主要居所。只要能证明孩子在这个房产上没有法律利益——地税、账单、修葺费用均由父母承担——配偶就无权主张分割这套房产。',
    keyPoints: [
      '婚房的法律定义：根据安省《<a href="https://www.ontario.ca/laws/statute/90f03" target="_blank" rel="noopener noreferrer">家庭法</a>》第18条，婚房必须是配偶具有法律利益（legal interest）的家庭主要居所。',
      '<a href="/faq/fumu-shougou-toukuan/">父母名下的房产</a>属于父母财产，配偶无权分割——前提是地税、账单、修葺等一切费用均由父母承担，孩子未在该房产上建立任何利益。',
      '关键风险：如果孩子长期支付房屋相关费用，可能被认定在该房产上具有利益，进而影响离婚时的财产分割。',
      '何淼律师建议：如果您目前住在父母名下的房产中，提前做好账单、费用归属管理，留存证据，避免离婚程序中产生不必要的争议。',
    ],
    keywords: '婚房认定安省,父母名下房产离婚,安省家庭法婚房,婚房分割安省,何淼律师',
  },
  {
    slug: 'marriage-contract-validity-ontario',
    youtubeId: 'k1HtbyMaLwM',
    title: '婚前协议真的有用吗？安省认定有效的四个条件',
    topic: '婚前协议',
    topicSlug: 'marriage-contract',
    uploadDate: '2026-04-17',
    summary:
      '婚前协议签了就有效吗？在安省，协议必须满足自愿、完整财产披露、内容真实、充分考量四个条件，否则可能被法院认定为全部或部分无效。',
    description:
      '许多朋友问何淼律师：签了<a href="/faq/hunqian/">婚前协议</a>真的有用吗？简单回答：有效。但"有效"是有前提的。根据安省《<a href="https://www.ontario.ca/laws/statute/90f03" target="_blank" rel="noopener noreferrer">家庭法</a>》，婚前协议属于<a href="/family-law/domestic-contracts#separation">婚姻合同（Domestic Contract）</a>，法院在审查其效力时会重点考察四个条件。任何一个条件缺失，协议都可能被认定为全部或部分无效。',
    keyPoints: [
      '自愿签署：双方须出于自由意志签署书面协议，不得存在欺诈、胁迫等行为。',
      '完整财产披露：双方须真实、完整地公开婚前财产状况——隐瞒财产是协议被推翻的常见原因。',
      '内容真实且婚前签署：协议条款须如实反映双方意愿，且必须在婚礼前完成签署。',
      '充分考量与独立法律意见：双方须有足够时间审阅协议，并各自咨询独立律师——何淼律师通常建议男女双方各聘一名律师。',
      '何淼律师提醒：签婚前协议的目的不是走形式，而是确保将来产生纠纷时能够切实执行。每一个细节都需认真对待。',
    ],
    keywords: '婚前协议安省,婚前协议有效条件,安省婚姻合同,婚前协议律师多伦多,何淼律师婚前协议,domestic contract ontario',
  },
];

export function getVideosByTopic(): Map<string, VideoItem[]> {
  const map = new Map<string, VideoItem[]>();
  for (const v of videoItems) {
    if (!map.has(v.topic)) map.set(v.topic, []);
    map.get(v.topic)!.push(v);
  }
  return map;
}
