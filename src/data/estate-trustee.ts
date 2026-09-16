/** Ontario Certificate of Estate Trustee (probate) pages. Hub: /estate-trustee/ */

export type EstateTrusteeSlug =
	| 'with-a-will'
	| 'without-a-will'
	| 'china-heirs'
	| 'administration-bond'
	| 'estate-administration-tax';

export type EstateTrusteeCopy = {
	cardTitle: string;
	cardDesc: string;
	h1: string;
	heroSub: string;
	title: string;
	description: string;
	keywords: string;
	navLabel: string;
	serviceType: string;
};

export const ESTATE_TRUSTEE_PAGES: {
	slug: EstateTrusteeSlug;
	zh: EstateTrusteeCopy;
	en: EstateTrusteeCopy;
}[] = [
	{
		slug: 'with-a-will',
		zh: {
			cardTitle: '有遗嘱：申请遗产受托人证书',
			cardDesc: '遗嘱指定的执行人向安省法院申请 Certificate of Appointment of Estate Trustee with a Will。',
			h1: '有遗嘱如何申请安省遗产受托人证书',
			heroSub: '有遗嘱路径 · 近期案件约四个月拿到证书 · 647-930-6688',
			title: '华人律师办理有遗嘱遗产认证 | 普通话律师协助遗产执行 | 何淼律师',
			description:
				'万锦华人律师为您办理有遗嘱遗产认证，普通话律师协助遗产执行与 Estate Trustee 申请。多伦多、安省华人律师处理遗嘱 probate。近期约四个月拿到证书。647-930-6688。',
			keywords:
				'华人律师办理遗产继承,普通话律师协助遗产执行,万锦华人律师处理遗产继承,多伦多华人律师处理遗产,安省华人律师probate,有遗嘱遗产认证,何淼律师',
			navLabel: '有遗嘱申请',
			serviceType: '有遗嘱申请遗产受托人证书',
		},
		en: {
			cardTitle: 'With a will: Certificate of Estate Trustee',
			cardDesc: 'The executor named in the will applies for a Certificate of Appointment of Estate Trustee with a Will.',
			h1: 'How to Apply for Probate in Ontario When There Is a Will',
			heroSub: 'Estate Trustee with a Will · Recent certificate in about four months · 647-930-6688',
			title: 'Chinese Lawyer Probate with a Will Ontario | Mandarin Estate Lawyer Markham | Miao He',
			description:
				'Mandarin-speaking Chinese lawyer in Markham for Ontario probate with a will. Help with estate trustee applications and estate administration. Serving Toronto and Ontario. Recent certificate in about four months. 647-930-6688.',
			keywords:
				'Chinese lawyer Ontario probate,Mandarin lawyer estate administration,Markham Chinese lawyer probate,Toronto Chinese lawyer estate,probate with a will Ontario,Miao He',
			navLabel: 'With a will',
			serviceType: 'Estate Trustee with a Will',
		},
	},
	{
		slug: 'without-a-will',
		zh: {
			cardTitle: '无遗嘱：谁有权申请、怎么继承',
			cardDesc: '无遗嘱按《继承法改革法》分配。优先顺位、同意后换申请人、保证金常是卡点。',
			h1: '无遗嘱安省遗产继承：谁来申请、财产怎么分',
			heroSub: 'Intestate · 近期案件已申请免除保证金 · 647-930-6688',
			title: '华人律师办理无遗嘱遗产继承 | 万锦普通话律师 | 何淼律师',
			description:
				'万锦华人律师为您办理无遗嘱遗产继承：谁有权申请、财产怎么分。普通话律师协助无遗嘱 probate 与保证金。多伦多、安省华人律师处理遗产。647-930-6688。',
			keywords:
				'华人律师办理遗产继承,普通话律师协助遗产执行,万锦华人律师处理遗产继承,多伦多华人律师处理遗产,安省华人律师probate,无遗嘱遗产继承,何淼律师',
			navLabel: '无遗嘱申请',
			serviceType: '无遗嘱申请遗产受托人证书',
		},
		en: {
			cardTitle: 'Without a will: who applies, who inherits',
			cardDesc: 'Intestacy follows the Succession Law Reform Act. Priority, consents, and the administration bond are where files stall.',
			h1: 'Probate Without a Will in Ontario: Who May Apply and Who Inherits',
			heroSub: 'Intestate estates · Recent file: application to dispense with the bond · 647-930-6688',
			title: 'Chinese Lawyer Probate Without a Will Ontario | Mandarin Estate Lawyer | Miao He',
			description:
				'Markham Chinese lawyer for Ontario probate without a will: who may apply and who inherits. Mandarin help with intestacy and the administration bond. Serving Toronto and Ontario. 647-930-6688.',
			keywords:
				'Chinese lawyer Ontario probate,Mandarin lawyer estate administration,Markham Chinese lawyer probate,Toronto Chinese lawyer estate,probate without a will Ontario,Miao He',
			navLabel: 'Without a will',
			serviceType: 'Estate Trustee without a Will',
		},
	},
	{
		slug: 'china-heirs',
		zh: {
			cardTitle: '继承人在中国 / 不是安省居民',
			cardDesc: '人在国内、唯一受益人不是安省居民：谁能当申请人、保证金、国内证明文件怎么准备。',
			h1: '继承人在中国：安省遗产认证怎么做',
			heroSub: '非居民申请人 · 保证金 · 国内文件与海牙认证 · 647-930-6688',
			title: '人在中国 | 万锦华人律师办理安省遗产继承 | 何淼律师',
			description:
				'继承人在国内，万锦华人律师为您办理安省遗产继承。普通话律师协助非居民申请、保证金与国内证明。多伦多华人律师处理跨境遗产，安省华人律师 probate。647-930-6688。',
			keywords:
				'华人律师办理遗产继承,普通话律师协助遗产执行,万锦华人律师处理遗产继承,多伦多华人律师处理遗产,安省华人律师probate,继承人在中国,何淼律师',
			navLabel: '继承人在中国',
			serviceType: '非居民与中国继承人遗产认证',
		},
		en: {
			cardTitle: 'Heirs in China / not Ontario residents',
			cardDesc: 'The sole beneficiary lives in China. Who may apply, the administration bond, and the China-side proof documents.',
			h1: 'Heirs in China: How Ontario Probate Works When the Family Is Not Here',
			heroSub: 'Non-resident applicants · Administration bond · China documents & Apostille · 647-930-6688',
			title: 'Heirs in China | Markham Chinese Lawyer Ontario Probate | Miao He',
			description:
				'Heirs in China: a Markham Mandarin-speaking Chinese lawyer handles Ontario probate, non-resident applicants, the bond, and China-side documents. Serving Toronto and Ontario. 647-930-6688.',
			keywords:
				'Chinese lawyer Ontario probate,Mandarin lawyer estate administration,Markham Chinese lawyer probate,Toronto Chinese lawyer estate,heirs in China Ontario probate,Miao He',
			navLabel: 'Heirs in China',
			serviceType: 'Non-resident and China-heir probate',
		},
	},
	{
		slug: 'administration-bond',
		zh: {
			cardTitle: '保证金 Bond：什么时候要、怎么免除',
			cardDesc: '符合条件可以用同意方式申请免除或减免，不必一上来就走动议。',
			h1: '安省遗产保证金：免除、减免与同意申请',
			heroSub: 'Rule 74.11(5) 同意申请 · 近期无遗嘱案件已申请免除 · 647-930-6688',
			title: '华人律师申请免除遗产保证金 | 万锦普通话律师 | 何淼律师',
			description:
				'万锦华人律师协助申请免除安省遗产保证金。普通话讲解 bond、同意免除与动议。多伦多华人律师处理遗产认证保证金，安省华人律师 probate。647-930-6688。',
			keywords:
				'华人律师办理遗产继承,普通话律师协助遗产执行,万锦华人律师处理遗产继承,多伦多华人律师处理遗产,安省华人律师probate,遗产保证金免除,何淼律师',
			navLabel: '保证金 Bond',
			serviceType: '遗产管理保证金免除与减免',
		},
		en: {
			cardTitle: 'Administration bond: when it is required, how to dispense',
			cardDesc: 'On consent, the court can dispense with or reduce the bond without a separate motion.',
			h1: 'Ontario Estate Administration Bond: Dispensing or Reducing It on Consent',
			heroSub: 'Rule 74.11(5) consent request · Recent intestacy file · 647-930-6688',
			title: 'Chinese Lawyer Dispense with Probate Bond Ontario | Markham | Miao He',
			description:
				'Markham Chinese lawyer for Ontario estate administration bonds: when a bond is required and how to ask the court to dispense with it on consent. Mandarin. Serving Toronto. 647-930-6688.',
			keywords:
				'Chinese lawyer Ontario probate,Mandarin lawyer estate administration,Markham Chinese lawyer probate,Toronto Chinese lawyer estate,dispense with bond Ontario,Miao He',
			navLabel: 'Administration bond',
			serviceType: 'Estate administration bond dispensation',
		},
	},
	{
		slug: 'estate-administration-tax',
		zh: {
			cardTitle: '遗产管理税：5 万以下免，超出每千元 15 元',
			cardDesc: '按 ontario.ca 现行算法写清楚。这是交给省政府的税，不是律师费。',
			h1: '安省遗产管理税怎么算',
			heroSub: '5 万以下免 · 超出部分每千元 15 元 · 647-930-6688',
			title: '华人律师说明安省遗产管理税 | 万锦普通话律师 | 何淼律师',
			description:
				'万锦华人律师说明安省遗产管理税：5 万以下免，超出每千元 15 元。普通话协助遗产执行费用计算。多伦多华人律师处理遗产认证税。647-930-6688。',
			keywords:
				'华人律师办理遗产继承,普通话律师协助遗产执行,万锦华人律师处理遗产继承,多伦多华人律师处理遗产,安省华人律师probate,安省遗产管理税,何淼律师',
			navLabel: '遗产管理税',
			serviceType: '安省遗产管理税说明',
		},
		en: {
			cardTitle: 'Estate administration tax: first $50,000 exempt',
			cardDesc: 'The Ontario formula, with worked examples. This is tax to the province, not legal fees.',
			h1: 'Estate Administration Tax in Ontario: How to Calculate It',
			heroSub: 'First $50,000 exempt · $15 per $1,000 above that · 647-930-6688',
			title: 'Chinese Lawyer Estate Administration Tax Ontario | Markham | Miao He',
			description:
				'Markham Chinese lawyer explains Ontario estate administration tax: first $50,000 exempt, $15 per $1,000 above that. Mandarin help with probate tax. Serving Toronto and Ontario. 647-930-6688.',
			keywords:
				'Chinese lawyer Ontario probate,Mandarin lawyer estate administration,Markham Chinese lawyer probate,Toronto Chinese lawyer estate,estate administration tax Ontario,Miao He',
			navLabel: 'Estate administration tax',
			serviceType: 'Ontario estate administration tax',
		},
	},
];

export function estateTrusteePath(slug: EstateTrusteeSlug, lang: 'zh' | 'en'): string {
	return lang === 'zh' ? `/estate-trustee/${slug}/` : `/en/estate-trustee/${slug}/`;
}

export function estateTrusteeHubPath(lang: 'zh' | 'en'): string {
	return lang === 'zh' ? '/estate-trustee/' : '/en/estate-trustee/';
}

export function getEstateTrusteePage(slug: EstateTrusteeSlug) {
	const page = ESTATE_TRUSTEE_PAGES.find((item) => item.slug === slug);
	if (!page) throw new Error(`Unknown estate-trustee slug: ${slug}`);
	return page;
}
