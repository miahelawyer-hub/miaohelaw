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
			title: '有遗嘱申请遗产认证 | Estate Trustee with a Will | 何淼律师',
			description:
				'安省有遗嘱如何申请 Certificate of Appointment of Estate Trustee。何淼律师办理遗嘱认证申请，近期案件约四个月拿到证书。中加双执照。647-930-6688。',
			keywords:
				'有遗嘱遗产认证安省,Estate Trustee with a Will,安省遗嘱认证,probate with a will Ontario,何淼律师',
			navLabel: '有遗嘱申请',
			serviceType: '有遗嘱申请遗产受托人证书',
		},
		en: {
			cardTitle: 'With a will: Certificate of Estate Trustee',
			cardDesc: 'The executor named in the will applies for a Certificate of Appointment of Estate Trustee with a Will.',
			h1: 'How to Apply for Probate in Ontario When There Is a Will',
			heroSub: 'Estate Trustee with a Will · Recent certificate in about four months · 647-930-6688',
			title: 'Probate with a Will Ontario | Estate Trustee Certificate | Miao He',
			description:
				'How to apply for a Certificate of Appointment of Estate Trustee with a Will in Ontario. Miao He recently obtained a certificate in about four months. Dual-licensed Canada–China lawyer. 647-930-6688.',
			keywords:
				'probate with a will Ontario,Certificate of Appointment of Estate Trustee with a Will,how to apply for probate Ontario,Miao He',
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
			title: '无遗嘱遗产认证安省 | Probate without a Will | 何淼律师',
			description:
				'安省无遗嘱如何申请遗产受托人证书、财产如何分配、谁有权申请。何淼律师办理无遗嘱申请，并可为符合条件的案件申请免除保证金。647-930-6688。',
			keywords:
				'无遗嘱遗产继承安省,probate without a will Ontario,intestate Ontario,安省无遗嘱谁有权申请,何淼律师',
			navLabel: '无遗嘱申请',
			serviceType: '无遗嘱申请遗产受托人证书',
		},
		en: {
			cardTitle: 'Without a will: who applies, who inherits',
			cardDesc: 'Intestacy follows the Succession Law Reform Act. Priority, consents, and the administration bond are where files stall.',
			h1: 'Probate Without a Will in Ontario: Who May Apply and Who Inherits',
			heroSub: 'Intestate estates · Recent file: application to dispense with the bond · 647-930-6688',
			title: 'Probate Without a Will Ontario | Intestate Estate Trustee | Miao He',
			description:
				'How to apply for a Certificate of Appointment of Estate Trustee without a Will in Ontario, who has priority, and how the estate is divided. Miao He recently applied to dispense with the administration bond. 647-930-6688.',
			keywords:
				'probate without a will Ontario,intestate Ontario,estate trustee without a will,who inherits no will Ontario,Miao He',
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
			title: '继承人在中国安省遗产认证 | 非居民Estate Trustee | 何淼律师',
			description:
				'人在中国、不是安省居民，如何办理安省遗产认证。何淼律师处理非居民申请人、保证金减免，以及国内亲属关系、继承权证明的公证认证。中加双执照。647-930-6688。',
			keywords:
				'继承人在中国安省遗产,非居民estate trustee,人在国内遗产认证Ontario,中国继承人probate,何淼律师',
			navLabel: '继承人在中国',
			serviceType: '非居民与中国继承人遗产认证',
		},
		en: {
			cardTitle: 'Heirs in China / not Ontario residents',
			cardDesc: 'The sole beneficiary lives in China. Who may apply, the administration bond, and the China-side proof documents.',
			h1: 'Heirs in China: How Ontario Probate Works When the Family Is Not Here',
			heroSub: 'Non-resident applicants · Administration bond · China documents & Apostille · 647-930-6688',
			title: 'Heirs in China Ontario Probate | Non-Resident Estate Trustee | Miao He',
			description:
				'Ontario probate when heirs live in China or the applicant is not an Ontario resident. Miao He handles non-resident applications, bond dispensation, and China kinship or inheritance documents. Dual-licensed. 647-930-6688.',
			keywords:
				'heirs in China Ontario probate,non-resident estate trustee Ontario,beneficiary in China estate,administration bond non-resident,Miao He',
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
			title: '安省遗产保证金免除 | Administration Bond Ontario | 何淼律师',
			description:
				'安省遗产认证保证金是什么、何时必须交、如何以同意方式申请免除或减免。何淼律师近期为无遗嘱案件申请免除 bond。647-930-6688。',
			keywords:
				'遗产保证金安省,administration bond Ontario,免除bond遗产,Rule 74.11,dispense with bond,何淼律师',
			navLabel: '保证金 Bond',
			serviceType: '遗产管理保证金免除与减免',
		},
		en: {
			cardTitle: 'Administration bond: when it is required, how to dispense',
			cardDesc: 'On consent, the court can dispense with or reduce the bond without a separate motion.',
			h1: 'Ontario Estate Administration Bond: Dispensing or Reducing It on Consent',
			heroSub: 'Rule 74.11(5) consent request · Recent intestacy file · 647-930-6688',
			title: 'Estate Administration Bond Ontario | Dispense with Bond | Miao He',
			description:
				'What an Ontario estate administration bond is, when it is required, and how to ask the court to dispense with or reduce it on consent instead of bringing a motion. 647-930-6688.',
			keywords:
				'estate administration bond Ontario,dispense with bond probate,Rule 74.11(5),reduce administration bond,Miao He',
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
			title: '安省遗产管理税 | Estate Administration Tax Ontario | 何淼律师',
			description:
				'安省遗产管理税现行算法：5 万及以下免税，超出部分每千元 15 元。附计算例子。出证后 180 天内还须提交 Estate Information Return。647-930-6688。',
			keywords:
				'安省遗产管理税,estate administration tax Ontario,遗产认证费用,probate tax Ontario 5万,每千元15元,何淼律师',
			navLabel: '遗产管理税',
			serviceType: '安省遗产管理税说明',
		},
		en: {
			cardTitle: 'Estate administration tax: first $50,000 exempt',
			cardDesc: 'The Ontario formula, with worked examples. This is tax to the province, not legal fees.',
			h1: 'Estate Administration Tax in Ontario: How to Calculate It',
			heroSub: 'First $50,000 exempt · $15 per $1,000 above that · 647-930-6688',
			title: 'Estate Administration Tax Ontario | Probate Tax Calculator | Miao He',
			description:
				'Ontario estate administration tax: $0 on the first $50,000; $15 per $1,000 (or part) above that. Worked examples. File an Estate Information Return within 180 days of the certificate. 647-930-6688.',
			keywords:
				'estate administration tax Ontario,probate tax Ontario,first $50000 exempt,15 per 1000 estate tax,Estate Information Return,Miao He',
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
