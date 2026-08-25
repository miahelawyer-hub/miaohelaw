/** Hague Apostille document-type landing pages. Hub: /hague-apostille/ */

export type HagueDocSlug =
	| 'china-property-power-of-attorney'
	| 'same-name-declaration'
	| 'parent-child-declaration'
	| 'renunciation-of-inheritance'
	| 'canada-divorce-certificate';

export type HagueDocCopy = {
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

export const HAGUE_DOCS: {
	slug: HagueDocSlug;
	zh: HagueDocCopy;
	en: HagueDocCopy;
}[] = [
	{
		slug: 'china-property-power-of-attorney',
		zh: {
			cardTitle: '国内卖房 / 买房 / 办房产证 · 授权委托书',
			cardDesc: '人在加拿大，国内过户、递件、领证。按当地房产局要求起草，急件次日可取原件。',
			h1: '国内卖房、买房、办理房产证：授权委托书海牙认证',
			heroSub: '一站式 · 办公室签一次字 · 急件次日可取原件 · 647-930-6688',
			title: '国内房产授权委托书海牙认证 | 卖房买房办房产证 | 何淼律师',
			description:
				'人在加拿大、国内卖房买房或办理房产证，授权委托书须经 Ontario 公证并做海牙认证。何淼律师按国内房产局格式起草，急件次日可取 Apostille 原件。中加双执照诉讼律师。647-930-6688。',
			keywords:
				'授权委托书海牙认证,国内卖房委托书加拿大,买房委托书海牙认证,房产证委托书公证Ontario,人在加拿大国内过户,何淼律师',
			navLabel: '国内房产委托书',
			serviceType: '中国房产授权委托书海牙认证',
		},
		en: {
			cardTitle: 'China property POA · sell, buy, title registration',
			cardDesc: 'You are in Canada; the house is in China. Drafted to the local registry’s requirements. Urgent originals next day.',
			h1: 'Power of Attorney Apostille for Selling, Buying or Registering Property in China',
			heroSub: 'One office visit · Urgent originals next day · Dual-licensed litigation lawyer · 647-930-6688',
			title: 'China Property Power of Attorney Apostille | Sell, Buy, Title | Miao He',
			description:
				'Need a Power of Attorney apostilled in Ontario so someone in China can sell, buy, or register title? Miao He drafts to the local housing bureau’s format. Urgent Apostille originals available the next day. Dual-licensed Canada–China litigation lawyer. 647-930-6688.',
			keywords:
				'China property power of attorney apostille,POA sell house China from Canada,Ontario notary POA China real estate,title registration China apostille,Miao He',
			navLabel: 'China property POA',
			serviceType: 'China real estate Power of Attorney Apostille',
		},
	},
	{
		slug: 'same-name-declaration',
		zh: {
			cardTitle: '同名认证 / 同一人声明',
			cardDesc: '护照英文名、身份证、房产证登记名不一致时，国内办事常卡在这一步。',
			h1: '同名认证海牙认证：护照、身份证与房产证不是同一写法怎么办',
			heroSub: '一站式 · 同一人声明 · 急件次日可取原件 · 647-930-6688',
			title: '同名认证海牙认证 | 同一人声明 | 何淼律师',
			description:
				'中英文姓名、曾用名或房产证登记名不一致，国内过户、继承、银行常要求同名认证。何淼律师办理同一人声明公证及海牙认证，急件次日可取原件。647-930-6688。',
			keywords: '同名认证海牙认证,同一人声明公证加拿大,护照身份证姓名不一致,房产证英文名,何淼律师',
			navLabel: '同名认证',
			serviceType: '同名认证 / 同一人声明海牙认证',
		},
		en: {
			cardTitle: 'Same-person / same-name declaration',
			cardDesc: 'Passport name, Chinese ID and the name on the property deed do not match. This is where filings in China often stop.',
			h1: 'Same-Name Apostille: When Your Passport, ID and Property Deed Do Not Match',
			heroSub: 'One office visit · One-and-the-same-person declaration · Urgent originals next day · 647-930-6688',
			title: 'Same-Name Declaration Apostille Ontario | Miao He',
			description:
				'Chinese-English names, former names, or a different spelling on a China property deed often require a same-person declaration. Miao He notarizes and apostilles it in Ontario. Urgent originals next day. 647-930-6688.',
			keywords:
				'same name declaration apostille Canada,one and the same person affidavit Ontario,Chinese English name mismatch property China,Miao He',
			navLabel: 'Same-name declaration',
			serviceType: 'Same-person / same-name declaration Apostille',
		},
	},
	{
		slug: 'parent-child-declaration',
		zh: {
			cardTitle: '亲子关系声明',
			cardDesc: '继承、户口、入学或国内办事需要证明父母子女关系时使用。',
			h1: '亲子关系声明海牙认证',
			heroSub: '一站式 · 继承 · 户口 · 急件次日可取原件 · 647-930-6688',
			title: '亲子关系声明海牙认证 | 何淼律师',
			description:
				'在加拿大办理亲子关系声明公证并做海牙认证，供国内继承、户口或行政手续使用。何淼律师按受理机关要求起草，急件次日可取原件。647-930-6688。',
			keywords: '亲子关系声明海牙认证,亲属关系公证加拿大,继承亲子证明,Ontario公证亲子,何淼律师',
			navLabel: '亲子关系声明',
			serviceType: '亲子关系声明海牙认证',
		},
		en: {
			cardTitle: 'Parent-child relationship declaration',
			cardDesc: 'Used for inheritance, household registration, school, or other filings in China that require proof of parentage.',
			h1: 'Parent-Child Relationship Declaration Apostille',
			heroSub: 'One office visit · Inheritance · household registration · Urgent originals next day · 647-930-6688',
			title: 'Parent-Child Declaration Apostille Ontario | Miao He',
			description:
				'Notarize and apostille a parent-child relationship declaration in Ontario for inheritance, hukou, or administrative use in China. Drafted to the receiving office’s requirements. Urgent originals next day. 647-930-6688.',
			keywords:
				'parent child relationship declaration apostille,kinship affidavit Ontario China,parentage notary Canada,Miao He',
			navLabel: 'Parent-child declaration',
			serviceType: 'Parent-child relationship declaration Apostille',
		},
	},
	{
		slug: 'renunciation-of-inheritance',
		zh: {
			cardTitle: '放弃继承证明',
			cardDesc: '国内继承里，在加拿大的继承人要出具放弃继承文件并做海牙认证。',
			h1: '放弃继承证明海牙认证',
			heroSub: '一站式 · 表述须一次写对 · 急件次日可取原件 · 647-930-6688',
			title: '放弃继承证明海牙认证 | 何淼律师',
			description:
				'人在加拿大、国内遗产要放弃继承，须办理放弃继承声明公证及海牙认证。何淼律师按公证处和不动产登记要求起草，急件次日可取原件。中加双执照。647-930-6688。',
			keywords: '放弃继承海牙认证,放弃继承声明公证加拿大,国内继承放弃,Ontario公证继承,何淼律师',
			navLabel: '放弃继承证明',
			serviceType: '放弃继承证明海牙认证',
		},
		en: {
			cardTitle: 'Renunciation of inheritance',
			cardDesc: 'An heir in Canada must apostille a waiver so a China estate can proceed without them.',
			h1: 'Renunciation of Inheritance Apostille',
			heroSub: 'One office visit · The wording has to be right the first time · Urgent originals next day · 647-930-6688',
			title: 'Renunciation of Inheritance Apostille Ontario | Miao He',
			description:
				'Renounce a China inheritance from Ontario with a notarized, apostilled waiver. Drafted for the notary office and real-estate registry in China. Urgent originals next day. Dual-licensed lawyer. 647-930-6688.',
			keywords:
				'renunciation of inheritance apostille China,waiver of succession Ontario,heir in Canada China estate,Miao He',
			navLabel: 'Renunciation of inheritance',
			serviceType: 'Renunciation of inheritance Apostille',
		},
	},
	{
		slug: 'canada-divorce-certificate',
		zh: {
			cardTitle: '加拿大离婚证书 / 离婚判决',
			cardDesc: '拿到中国再婚、民政、银行或房产手续，通常要先做海牙认证。',
			h1: '加拿大离婚证书海牙认证',
			heroSub: '一站式 · 熟悉法院出证程序 · 急件次日可取原件 · 647-930-6688',
			title: '加拿大离婚证书海牙认证 | 离婚判决中国使用 | 何淼律师',
			description:
				'加拿大离婚证书或离婚判决拿到中国再婚、办事，须经海牙认证。何淼律师熟悉安省法院出证程序，中加双执照诉讼律师，急件次日可取 Apostille 原件。647-930-6688。',
			keywords:
				'加拿大离婚证书海牙认证,离婚判决书海牙认证中国,Certificate of Divorce apostille,安省离婚证中国再婚,何淼律师',
			navLabel: '加拿大离婚证书',
			serviceType: '加拿大离婚证书 / 离婚判决海牙认证',
		},
		en: {
			cardTitle: 'Canadian divorce certificate / divorce order',
			cardDesc: 'Remarriage, civil affairs, banking or property filings in China usually require an apostille first.',
			h1: 'Canadian Divorce Certificate Apostille for Use in China',
			heroSub: 'One office visit · Court-document procedure · Urgent originals next day · 647-930-6688',
			title: 'Canadian Divorce Certificate Apostille | Use in China | Miao He',
			description:
				'Apostille a Canadian Certificate of Divorce or divorce order for remarriage or administrative use in China. Miao He is a dual-licensed litigation lawyer familiar with Ontario court documents. Urgent originals next day. 647-930-6688.',
			keywords:
				'Canadian divorce certificate apostille,Certificate of Divorce China remarriage,Ontario divorce order apostille,Miao He',
			navLabel: 'Canadian divorce certificate',
			serviceType: 'Canadian divorce certificate / divorce order Apostille',
		},
	},
];

export function hagueDocPath(slug: HagueDocSlug, lang: 'zh' | 'en'): string {
	return lang === 'zh' ? `/hague-apostille/${slug}/` : `/en/hague-apostille/${slug}/`;
}

export function hagueHubPath(lang: 'zh' | 'en'): string {
	return lang === 'zh' ? '/hague-apostille/' : '/en/hague-apostille/';
}

export function getHagueDoc(slug: HagueDocSlug) {
	const doc = HAGUE_DOCS.find((item) => item.slug === slug);
	if (!doc) throw new Error(`Unknown Hague document slug: ${slug}`);
	return doc;
}
