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
];

export function getVideosByTopic(): Map<string, VideoItem[]> {
  const map = new Map<string, VideoItem[]>();
  for (const v of videoItems) {
    if (!map.has(v.topic)) map.set(v.topic, []);
    map.get(v.topic)!.push(v);
  }
  return map;
}
