/**
 * Client intake fields copied from the office PDFs:
 * Separation & Divorce, Common-Law Separation, Prenuptial Agreement,
 * Marriage Contract, Designation of Matrimonial Home, Real Estate Purchase,
 * Real Estate Sale, Real Estate Refinance, Real Estate Title Transfer.
 * Required marks follow the asterisks printed on those PDFs.
 */

export const DOCUMENT_EMAIL = 'Lawyer@HLawFirmOntario.com';

export type Choice = { value: string; label: string };

type TextKind = 'text' | 'email' | 'tel' | 'date';

export type IntakeField =
	| {
			kind: TextKind;
			name: string;
			label: string;
			required?: boolean;
			wide?: boolean;
			clientName?: boolean;
			replyEmail?: boolean;
			autoComplete?: string;
	  }
	| {
			kind: 'radio' | 'checks';
			name: string;
			label: string;
			required?: boolean;
			options: Choice[];
	  }
	| { kind: 'note'; text: string }
	| {
			kind: 'grid';
			caption?: string;
			rowLabel: string;
			namePrefix: string;
			rows: number;
			columns: { key: string; label: string; type?: 'text' | 'date' }[];
	  };

export type IntakeSection = { title: string; fields: IntakeField[] };

export type IntakeFormDef = {
	slug: string;
	titleZh: string;
	titleEn: string;
	kickerZh: string;
	kickerEn: string;
	subject: string;
	sections: IntakeSection[];
};

const yesNo: Choice[] = [
	{ value: 'Yes', label: 'Yes 是' },
	{ value: 'No', label: 'No 否' },
];

const yesNoUnsure: Choice[] = [
	...yesNo,
	{ value: 'Not sure', label: 'Not sure 不确定' },
];

const heardAbout: Choice[] = [
	{ value: 'AI recommendation', label: 'AI recommendation AI推荐' },
	{ value: 'Google search', label: 'Google search Google搜索' },
	{ value: 'Xiaohongshu', label: 'Xiaohongshu 小红书' },
	{ value: 'Referral', label: 'Referral 他人介绍' },
	{ value: 'Other', label: 'Other 其他' },
];

const consultFormat: Choice[] = [
	{ value: 'Zoom', label: 'Zoom 视频' },
	{ value: 'In person', label: 'In person 到所面谈' },
];

const maritalStatus: Choice[] = [
	{ value: 'Single', label: 'Single 单身' },
	{ value: 'Married', label: 'Married 已婚' },
	{ value: 'Common-law', label: 'Common-law 同居' },
	{ value: 'Separated', label: 'Separated 分居' },
	{ value: 'Divorced', label: 'Divorced 离婚' },
	{ value: 'Widowed', label: 'Widowed 丧偶' },
];

const courtNote =
	'Please send us copies of any court documents you have received or filed. 请将已收到或已提交的法院文件发至 Lawyer@HLawFirmOntario.com。';

function t(
	name: string,
	label: string,
	extra: Partial<Extract<IntakeField, { kind: TextKind }>> = {},
): IntakeField {
	return { kind: 'text', name, label, ...extra };
}

function consultation(extra: IntakeField[] = []): IntakeSection {
	return {
		title: '1. Consultation Details 咨询安排',
		fields: [
			{
				kind: 'radio',
				name: 'Consultation format',
				label: 'Consultation format 咨询方式',
				required: true,
				options: consultFormat,
			},
			{
				kind: 'checks',
				name: 'How did you hear about us',
				label: 'How did you hear about us? 您是如何得知本所的？',
				options: heardAbout,
			},
			...extra,
		],
	};
}

function previousDivorce(whose: 'you' | 'spouse' | 'partner'): IntakeField {
	const copy = {
		you: {
			name: 'Have you been divorced previously',
			label: 'Have you been divorced previously? 您以前是否离过婚？',
			options: yesNo,
		},
		spouse: {
			name: 'Has your spouse been divorced previously',
			label: 'Has your spouse been divorced previously? 配偶以前是否离过婚？',
			options: yesNoUnsure,
		},
		partner: {
			name: 'Has your partner been divorced previously',
			label: 'Has your partner been divorced previously? 同居伴侣以前是否离过婚？',
			options: yesNoUnsure,
		},
	}[whose];
	return { kind: 'radio', required: true, ...copy };
}

function children(rows: number, caption?: string): IntakeField {
	return {
		kind: 'grid',
		caption,
		rowLabel: '子女',
		namePrefix: 'Child',
		rows,
		columns: [
			{ key: 'full name', label: "Child's full name 子女姓名" },
			{ key: 'birthday', label: 'Birthday 出生日期', type: 'date' },
			{ key: 'currently lives with', label: 'Currently lives with 目前与谁同住' },
		],
	};
}

function otherParties(rowLabel: string, namePrefix: string): IntakeField {
	return {
		kind: 'grid',
		rowLabel,
		namePrefix,
		rows: 2,
		columns: [
			{ key: 'full legal name', label: 'Full legal name 姓名' },
			{ key: 'relationship to you', label: 'Relationship to you 与您的关系' },
			{ key: 'phone / email', label: 'Phone / email 电话/邮箱' },
		],
	};
}

const courtSection: IntakeSection = {
	title: '6. Legal Proceedings 法律诉讼',
	fields: [
		{
			kind: 'radio',
			name: 'Has any court case been started',
			label:
				'Has any court case been started (in Canada or elsewhere, e.g. China)? 是否已有法律诉讼（加拿大或其他国家/地区，如中国）？',
			required: true,
			options: yesNo,
		},
		{
			kind: 'radio',
			name: 'If yes, who started it',
			label: 'If yes, who started it? 如是，由谁提起？',
			options: [
				{ value: 'Me', label: 'Me 我' },
				{ value: 'My spouse / partner', label: 'My spouse / partner 对方' },
			],
		},
		t('Court location / country', 'Court location / country 法院所在地/国家'),
		t('Court file number', 'Court file number 法院案号'),
		{ kind: 'date', name: 'Next court date', label: 'Next court date 下次开庭日期' },
		t('Current stage', 'Current stage 目前进展', { wide: true }),
		{ kind: 'note', text: courtNote },
	],
};

const familyKicker = {
	kickerZh: '家事法咨询登记表',
	kickerEn: 'Family Law Consultation Intake Form',
};

const realEstateKicker = {
	kickerZh: '房地产登记表',
	kickerEn: 'Real Estate Intake Form',
};

export const intakeForms: IntakeFormDef[] = [
	{
		slug: 'separation-divorce',
		titleZh: '分居及离婚',
		titleEn: 'Separation & Divorce',
		subject: '客户登记表 | 分居及离婚',
		...familyKicker,
		sections: [
			consultation([
				{
					kind: 'checks',
					name: 'What do you need help with',
					label: 'What do you need help with? 您需要哪方面的帮助？',
					options: [
						{ value: 'Separation agreement', label: 'Separation agreement 分居协议' },
						{ value: 'Divorce', label: 'Divorce 离婚' },
						{ value: 'Court case / litigation', label: 'Court case / litigation 诉讼' },
						{ value: 'Not sure', label: 'Not sure 不确定' },
					],
				},
			]),
			{
				title: '2. Your Information 您的信息',
				fields: [
					t('Full legal name', 'Full legal name 姓名', {
						required: true,
						clientName: true,
						autoComplete: 'name',
					}),
					{ kind: 'date', name: 'Birthday', label: 'Birthday 出生日期', required: true, autoComplete: 'bday' },
					t('Residence address', 'Residence address 居住地址', {
						required: true,
						wide: true,
						autoComplete: 'street-address',
					}),
					{ kind: 'tel', name: 'Phone number', label: 'Phone number 电话', required: true, autoComplete: 'tel' },
					{
						kind: 'email',
						name: 'Email (please confirm)',
						label: 'Email (please confirm) 邮箱（请确认）',
						required: true,
						replyEmail: true,
						autoComplete: 'email',
					},
					t('Occupation', 'Occupation 职业', { required: true, autoComplete: 'organization-title' }),
					t('Business address', 'Business address 工作单位地址', { required: true, wide: true }),
					previousDivorce('you'),
				],
			},
			{
				title: '3. Spouse Information 配偶信息',
				fields: [
					t("Spouse's full name", "Spouse's full name 姓名", { required: true }),
					{ kind: 'date', name: "Spouse's birthday", label: 'Birthday 出生日期', required: true },
					t("Spouse's address", "Spouse's address 地址", { required: true, wide: true }),
					{ kind: 'tel', name: "Spouse's phone number", label: 'Phone number 电话', required: true },
					{ kind: 'email', name: "Spouse's email", label: 'Email 邮箱', required: true },
					previousDivorce('spouse'),
				],
			},
			{
				title: '4. Relationship Details 婚姻信息',
				fields: [
					{ kind: 'date', name: 'Marriage date', label: 'Marriage date 结婚日期', required: true },
					{ kind: 'date', name: 'Separation date', label: 'Separation date 分居日期', required: true },
					t('Place of marriage (city, country)', 'Place of marriage (city, country) 结婚登记地（城市、国家）', {
						wide: true,
					}),
					{
						kind: 'date',
						name: 'Cohabitation start (if before marriage)',
						label: 'Cohabitation start (if before marriage) 婚前同居日期（如有）',
					},
				],
			},
			{
				title: '5. Children and Pets 子女及宠物',
				fields: [
					t('How many children do you have', 'How many children do you have? 子女人数', { required: true }),
					t('How many pets do you have', 'How many pets do you have? 宠物数量', { required: true }),
					children(4, 'Children (if any) 子女信息（如有）'),
				],
			},
			courtSection,
		],
	},
	{
		slug: 'common-law-separation',
		titleZh: '同居关系分居',
		titleEn: 'Common-Law Separation',
		subject: '客户登记表 | 同居关系分居',
		...familyKicker,
		sections: [
			consultation(),
			{
				title: '2. Your Information 您的信息',
				fields: [
					t('Full legal name', 'Full legal name 姓名', {
						required: true,
						clientName: true,
						autoComplete: 'name',
					}),
					{ kind: 'date', name: 'Birthday', label: 'Birthday 出生日期', required: true, autoComplete: 'bday' },
					t('Residence address', 'Residence address 居住地址', {
						required: true,
						wide: true,
						autoComplete: 'street-address',
					}),
					{ kind: 'tel', name: 'Phone number', label: 'Phone number 电话', required: true, autoComplete: 'tel' },
					{
						kind: 'email',
						name: 'Email (please confirm)',
						label: 'Email (please confirm) 邮箱（请确认）',
						required: true,
						replyEmail: true,
						autoComplete: 'email',
					},
					t('Occupation', 'Occupation 职业', { required: true, autoComplete: 'organization-title' }),
					t('Business address', 'Business address 工作单位地址', { required: true, wide: true }),
					previousDivorce('you'),
				],
			},
			{
				title: '3. Partner Information 同居伴侣信息',
				fields: [
					t("Partner's full name", "Partner's full name 姓名", { required: true }),
					{ kind: 'date', name: "Partner's birthday", label: 'Birthday 出生日期', required: true },
					t("Partner's address", "Partner's address 地址", { required: true, wide: true }),
					{ kind: 'tel', name: "Partner's phone number", label: 'Phone number 电话', required: true },
					{ kind: 'email', name: "Partner's email", label: 'Email 邮箱', required: true },
					previousDivorce('partner'),
				],
			},
			{
				title: '4. Relationship Details 同居关系信息',
				fields: [
					{
						kind: 'date',
						name: 'Date you started living together',
						label: 'Date you started living together 同居开始日期',
						required: true,
					},
					{ kind: 'date', name: 'Separation date', label: 'Separation date 分居日期', required: true },
				],
			},
			{
				title: '5. Children and Pets 子女及宠物',
				fields: [
					t('How many children do you have', 'How many children do you have? 子女人数', { required: true }),
					t('How many pets do you have', 'How many pets do you have? 宠物数量', { required: true }),
					children(4, 'Children (if any) 子女信息（如有）'),
				],
			},
			courtSection,
		],
	},
	{
		slug: 'prenuptial-agreement',
		titleZh: '婚前协议 / 婚前咨询',
		titleEn: 'Prenuptial Agreement / Pre-Marriage Consultation',
		subject: '客户登记表 | 婚前协议',
		...familyKicker,
		sections: [
			consultation(),
			{
				title: '2. Your Information 您的信息',
				fields: [
					t('Full legal name', 'Full legal name 姓名', {
						required: true,
						clientName: true,
						autoComplete: 'name',
					}),
					{ kind: 'date', name: 'Birthday', label: 'Birthday 出生日期', required: true, autoComplete: 'bday' },
					t('Residence address', 'Residence address 居住地址', {
						required: true,
						wide: true,
						autoComplete: 'street-address',
					}),
					{ kind: 'tel', name: 'Phone number', label: 'Phone number 电话', required: true, autoComplete: 'tel' },
					{
						kind: 'email',
						name: 'Email (please confirm)',
						label: 'Email (please confirm) 邮箱（请确认）',
						required: true,
						replyEmail: true,
						autoComplete: 'email',
					},
					t('Occupation', 'Occupation 职业', { required: true, autoComplete: 'organization-title' }),
					t('Business address', 'Business address 工作单位地址', { required: true, wide: true }),
					previousDivorce('you'),
				],
			},
			{
				title: '3. Future Spouse Information 未婚配偶信息',
				fields: [
					t("Future spouse's full name", "Future Spouse's full name 姓名", { required: true }),
					{ kind: 'date', name: "Future spouse's birthday", label: 'Birthday 出生日期', required: true },
					t("Future spouse's address", "Future Spouse's address 地址", { required: true, wide: true }),
					{ kind: 'tel', name: "Future spouse's phone number", label: 'Phone number 电话', required: true },
					{ kind: 'email', name: "Future spouse's email", label: 'Email 邮箱', required: true },
				],
			},
			{
				title: '4. Relationship Details 关系信息',
				fields: [
					{
						kind: 'date',
						name: 'Expected marriage date',
						label: 'Expected marriage date 预计结婚日期',
						required: true,
					},
					t('Expected place of marriage', 'Expected place of marriage 预计结婚地点', { wide: true }),
				],
			},
		],
	},
	{
		slug: 'marriage-contract',
		titleZh: '婚内协议',
		titleEn: 'Marriage Contract',
		subject: '客户登记表 | 婚内协议',
		...familyKicker,
		sections: [
			consultation(),
			{
				title: '2. Your Information 您的信息',
				fields: [
					t('Full legal name', 'Full legal name 姓名', {
						required: true,
						clientName: true,
						autoComplete: 'name',
					}),
					{ kind: 'date', name: 'Birthday', label: 'Birthday 出生日期', required: true, autoComplete: 'bday' },
					{ kind: 'tel', name: 'Phone number', label: 'Phone number 电话', required: true, autoComplete: 'tel' },
					t('Residence address', 'Residence address 居住地址', {
						required: true,
						wide: true,
						autoComplete: 'street-address',
					}),
					{
						kind: 'email',
						name: 'Email (please confirm)',
						label: 'Email (please confirm) 邮箱（请确认）',
						required: true,
						replyEmail: true,
						autoComplete: 'email',
					},
					t('Occupation', 'Occupation 职业', { required: true, autoComplete: 'organization-title' }),
					t('Business address', 'Business address 工作单位地址', { required: true, wide: true }),
				],
			},
			{
				title: '3. Spouse Information 配偶信息',
				fields: [
					t("Spouse's full name", "Spouse's full name 姓名", { required: true }),
					{ kind: 'date', name: "Spouse's birthday", label: 'Birthday 出生日期', required: true },
					{ kind: 'tel', name: "Spouse's phone number", label: 'Phone number 电话', required: true },
					t("Spouse's address", "Spouse's address 地址", { required: true, wide: true }),
					{ kind: 'email', name: "Spouse's email", label: 'Email 邮箱', required: true },
				],
			},
			{
				title: '4. Relationship Details 婚姻信息',
				fields: [
					{ kind: 'date', name: 'Marriage date', label: 'Marriage date 结婚日期', required: true },
					t('Place of marriage (city, country)', 'Place of marriage (city, country) 结婚登记地（城市、国家）', {
						wide: true,
					}),
				],
			},
			{
				title: '5. Children and Pets 子女及宠物',
				fields: [
					t('How many children do you have', 'How many children do you have? 子女人数', { required: true }),
					t('How many pets do you have', 'How many pets do you have? 宠物数量', { required: true }),
					children(3),
				],
			},
		],
	},
	{
		slug: 'real-estate-purchase',
		titleZh: '购房',
		titleEn: 'Purchase',
		subject: '客户登记表 | 购房',
		...realEstateKicker,
		sections: [
			{
				title: '1. Purchaser Information 买方信息',
				fields: [
					t('Full legal name', 'Full legal name 姓名', {
						required: true,
						clientName: true,
						autoComplete: 'name',
					}),
					{ kind: 'date', name: 'Birthday', label: 'Birthday 出生日期', required: true, autoComplete: 'bday' },
					{ kind: 'tel', name: 'Phone number', label: 'Phone number 电话', required: true, autoComplete: 'tel' },
					t('Current address', 'Current address 现居住地址', {
						required: true,
						wide: true,
						autoComplete: 'street-address',
					}),
					{
						kind: 'email',
						name: 'Email',
						label: 'Email 邮箱',
						required: true,
						replyEmail: true,
						autoComplete: 'email',
					},
					t('Occupation', 'Occupation 职业', { required: true, autoComplete: 'organization-title' }),
					t('Employer / business address', 'Employer / business address 工作单位/地址', {
						required: true,
						wide: true,
					}),
					{
						kind: 'radio',
						name: 'Marital status',
						label: 'Marital status 婚姻状况',
						required: true,
						options: maritalStatus,
					},
					{
						kind: 'radio',
						name: 'Are all purchasers Canadian citizens or permanent residents',
						label:
							'Are all purchasers Canadian citizens or permanent residents? 所有买方是否均为加拿大公民或永久居民？',
						required: true,
						options: yesNo,
					},
				],
			},
			{
				title: '2. Spouse Information (if married or common-law) 配偶信息（如已婚或同居）',
				fields: [
					t("Spouse's full name", "Spouse's full name 姓名"),
					{ kind: 'date', name: "Spouse's birthday", label: 'Birthday 出生日期' },
					{ kind: 'tel', name: "Spouse's phone number", label: 'Phone number 电话' },
					{ kind: 'email', name: "Spouse's email", label: 'Email 邮箱' },
					{
						kind: 'radio',
						name: 'Will your spouse be on title',
						label: 'Will your spouse be on title? 配偶是否一同登记在产权上？',
						options: yesNo,
					},
				],
			},
			{
				title: '3. Other Purchasers (if any) 其他买方（如有）',
				fields: [
					otherParties('其他买方', 'Other purchaser'),
					{
						kind: 'radio',
						name: 'How will you hold title',
						label: 'How will you hold title? 产权持有方式',
						options: [
							{ value: 'Joint tenants', label: 'Joint tenants 联名共有' },
							{ value: 'Tenants in common', label: 'Tenants in common 按份共有' },
							{ value: 'Not sure', label: 'Not sure 不确定' },
						],
					},
				],
			},
			{
				title: '4. Property and Purchase 房产及交易信息',
				fields: [
					t('Property address', 'Property address 房产地址', { required: true, wide: true }),
					{ kind: 'date', name: 'Closing date', label: 'Closing date 交接日期', required: true },
					{
						kind: 'radio',
						name: 'Property type',
						label: 'Property type 房产类型',
						options: [
							{ value: 'House', label: 'House 独立/半独立屋' },
							{ value: 'Townhouse', label: 'Townhouse 镇屋' },
							{ value: 'Condo', label: 'Condo 公寓' },
							{ value: 'Pre-construction', label: 'Pre-construction 楼花' },
							{ value: 'Other', label: 'Other 其他' },
						],
					},
					{
						kind: 'radio',
						name: 'Will you use a mortgage to buy the property',
						label: 'Will you use a mortgage to buy the property? 是否使用贷款买房？',
						options: yesNo,
					},
					t(
						'Lender / mortgage broker (name, phone)',
						'Lender / mortgage broker (name, phone) 贷款银行/贷款经纪（姓名、电话）',
						{ wide: true },
					),
					t('Your realtor (name, phone, email)', 'Your realtor (name, phone, email) 您的地产经纪（姓名、电话、邮箱）', {
						wide: true,
					}),
				],
			},
			{
				title: '5. Use of Property and First-Time Buyer 房产用途及首次购房',
				fields: [
					{
						kind: 'radio',
						name: 'Will you live in the property as your principal residence',
						label: 'Will you live in the property as your principal residence? 是否自住（作为主要居所）？',
						required: true,
						options: yesNo,
					},
					{
						kind: 'radio',
						name: 'Are you a first-time home buyer',
						label: 'Are you a first-time home buyer? 您是否首次购房？',
						required: true,
						options: yesNoUnsure,
					},
					{
						kind: 'note',
						text: 'First-time buyer: you have never owned a home anywhere in the world. 首次购房：您从未在世界任何地方拥有过住房。',
					},
					{
						kind: 'radio',
						name: 'If married / common-law: has your spouse owned a home while being your spouse',
						label:
							'If married / common-law: has your spouse owned a home while being your spouse? 如已婚/同居：配偶在与您婚姻/同居期间是否拥有过住房？',
						options: yesNoUnsure,
					},
				],
			},
		],
	},
	{
		slug: 'real-estate-sale',
		titleZh: '卖房',
		titleEn: 'Sale',
		subject: '客户登记表 | 卖房',
		...realEstateKicker,
		sections: [
			{
				title: '1. Seller Information 卖方信息',
				fields: [
					t('Full legal name', 'Full legal name 姓名', {
						required: true,
						clientName: true,
						autoComplete: 'name',
					}),
					{ kind: 'date', name: 'Birthday', label: 'Birthday 出生日期', required: true, autoComplete: 'bday' },
					{ kind: 'tel', name: 'Phone number', label: 'Phone number 电话', required: true, autoComplete: 'tel' },
					t('Current address', 'Current address 现居住地址', {
						required: true,
						wide: true,
						autoComplete: 'street-address',
					}),
					{
						kind: 'email',
						name: 'Email',
						label: 'Email 邮箱',
						required: true,
						replyEmail: true,
						autoComplete: 'email',
					},
					t('Address after closing', 'Address after closing 交接后的地址', { wide: true }),
					t('Occupation', 'Occupation 职业', { required: true, autoComplete: 'organization-title' }),
					{
						kind: 'radio',
						name: 'Marital status',
						label: 'Marital status 婚姻状况',
						required: true,
						options: maritalStatus,
					},
					{
						kind: 'radio',
						name: 'Are all sellers residents of Canada for tax purposes',
						label: 'Are all sellers residents of Canada for tax purposes? 所有卖方是否均为加拿大税务居民？',
						required: true,
						options: yesNoUnsure,
					},
				],
			},
			{
				title: '2. Spouse Information (if married or common-law) 配偶信息（如已婚或同居）',
				fields: [
					t("Spouse's full name", "Spouse's full name 姓名"),
					{ kind: 'date', name: "Spouse's birthday", label: 'Birthday 出生日期' },
					{ kind: 'tel', name: "Spouse's phone number", label: 'Phone number 电话' },
					{ kind: 'email', name: "Spouse's email", label: 'Email 邮箱' },
					{
						kind: 'radio',
						name: 'Is your spouse on title',
						label: 'Is your spouse on title? 配偶是否在产权上？',
						options: yesNo,
					},
					{
						kind: 'radio',
						name: 'Is the property your matrimonial home',
						label: 'Is the property your matrimonial home? 该房产目前是否为您的婚姻住所？',
						options: yesNoUnsure,
					},
				],
			},
			{
				title: '3. Other Sellers on Title (if any) 产权上的其他卖方（如有）',
				fields: [otherParties('其他卖方', 'Other seller')],
			},
			{
				title: '4. Property and Sale 房产及交易信息',
				fields: [
					t('Property address', 'Property address 房产地址', { required: true, wide: true }),
					{ kind: 'date', name: 'Closing date', label: 'Closing date 交接日期', required: true },
					{
						kind: 'radio',
						name: 'Property type',
						label: 'Property type 房产类型',
						options: [
							{ value: 'House', label: 'House 独立/半独立屋' },
							{ value: 'Townhouse', label: 'Townhouse 镇屋' },
							{ value: 'Condo', label: 'Condo 公寓' },
							{ value: 'Other', label: 'Other 其他' },
						],
					},
					{
						kind: 'radio',
						name: 'Is there a mortgage or line of credit on the property',
						label: 'Is there a mortgage or line of credit on the property? 该房产是否有贷款或房屋信用额度？',
						options: yesNo,
					},
					t('If yes, lender name(s)', 'If yes, lender name(s) 如有，贷款银行名称', { wide: true }),
					{
						kind: 'radio',
						name: 'Is the property currently rented to tenants',
						label: 'Is the property currently rented to tenants? 该房产目前是否出租？',
						options: yesNo,
					},
					{
						kind: 'radio',
						name: 'Was the property your principal residence',
						label: 'Was the property your principal residence? 该房产是否为您的自住房（主要居所）？',
						options: yesNo,
					},
					t('Your realtor (name, phone, email)', 'Your realtor (name, phone, email) 您的地产经纪（姓名、电话、邮箱）', {
						wide: true,
					}),
				],
			},
		],
	},
	{
		slug: 'real-estate-refinance',
		titleZh: '转贷 / 再融资',
		titleEn: 'Refinance',
		subject: '客户登记表 | 转贷 / 再融资',
		...realEstateKicker,
		sections: [
			{
				title: '1. Owner Information 业主信息',
				fields: [
					t('Full legal name', 'Full legal name 姓名', {
						required: true,
						clientName: true,
						autoComplete: 'name',
					}),
					{ kind: 'date', name: 'Birthday', label: 'Birthday 出生日期', required: true, autoComplete: 'bday' },
					{ kind: 'tel', name: 'Phone number', label: 'Phone number 电话', required: true, autoComplete: 'tel' },
					t('Current address', 'Current address 现居住地址', {
						required: true,
						wide: true,
						autoComplete: 'street-address',
					}),
					{
						kind: 'email',
						name: 'Email',
						label: 'Email 邮箱',
						required: true,
						replyEmail: true,
						autoComplete: 'email',
					},
					t('Occupation', 'Occupation 职业', { required: true, autoComplete: 'organization-title' }),
					t('Employer / business address', 'Employer / business address 工作单位/地址', {
						required: true,
						wide: true,
					}),
					{
						kind: 'radio',
						name: 'Marital status',
						label: 'Marital status 婚姻状况',
						required: true,
						options: maritalStatus,
					},
				],
			},
			{
				title: '2. Spouse Information (if married or common-law) 配偶信息（如已婚或同居）',
				fields: [
					t("Spouse's full name", "Spouse's full name 姓名"),
					{ kind: 'date', name: "Spouse's birthday", label: 'Birthday 出生日期' },
					{ kind: 'tel', name: "Spouse's phone number", label: 'Phone number 电话' },
					{ kind: 'email', name: "Spouse's email", label: 'Email 邮箱' },
					{
						kind: 'radio',
						name: 'Is your spouse on title',
						label: 'Is your spouse on title? 配偶是否在产权上？',
						options: yesNo,
					},
					{
						kind: 'radio',
						name: 'Is the property your matrimonial home',
						label: 'Is the property your matrimonial home? 该房产目前是否为您的婚姻住所？',
						options: yesNoUnsure,
					},
				],
			},
			{
				title: '3. Other Owners on Title (if any) 产权上的其他业主（如有）',
				fields: [otherParties('其他业主', 'Other owner')],
			},
			{
				title: '4. Property 房产信息',
				fields: [
					t('Property address', 'Property address 房产地址', { required: true, wide: true }),
					{ kind: 'date', name: 'Expected funding date', label: 'Expected funding date 预计放款日期', required: true },
					{
						kind: 'radio',
						name: 'Property type',
						label: 'Property type 房产类型',
						options: [
							{ value: 'House', label: 'House 独立/半独立屋' },
							{ value: 'Townhouse', label: 'Townhouse 镇屋' },
							{ value: 'Condo', label: 'Condo 公寓' },
							{ value: 'Other', label: 'Other 其他' },
						],
					},
					{
						kind: 'radio',
						name: 'Is the property your principal residence',
						label: 'Is the property your principal residence? 该房产是否为您的自住房（主要居所）？',
						options: yesNo,
					},
					{
						kind: 'radio',
						name: 'Is the property currently rented to tenants',
						label: 'Is the property currently rented to tenants? 该房产目前是否出租？',
						options: yesNo,
					},
				],
			},
			{
				title: '5. Mortgage Details 贷款信息',
				fields: [
					t('New lender', 'New lender 新贷款银行'),
					t('Broker / bank contact (name, phone)', 'Broker / bank contact (name, phone) 贷款经纪/银行联系人（姓名、电话）', {
						wide: true,
					}),
					{
						kind: 'radio',
						name: 'Is there an existing mortgage or line of credit to be paid off',
						label:
							'Is there an existing mortgage or line of credit to be paid off? 是否有需要还清的现有贷款或房屋信用额度？',
						options: yesNo,
					},
					t('If yes, existing lender name(s)', 'If yes, existing lender name(s) 如有，现有贷款银行名称', { wide: true }),
					{
						kind: 'radio',
						name: 'Will any other debts be paid from the new mortgage',
						label:
							'Will any other debts be paid from the new mortgage (e.g. credit cards, car loan)? 新贷款是否用于偿还其他债务（如信用卡、车贷）？',
						options: yesNo,
					},
				],
			},
		],
	},
	{
		slug: 'real-estate-title-transfer',
		titleZh: '产权转让',
		titleEn: 'Title Transfer',
		subject: '客户登记表 | 产权转让',
		...realEstateKicker,
		sections: [
			{
				title: '1. Current Owner Information 现产权人信息',
				fields: [
					t('Full legal name', 'Full legal name 姓名', {
						required: true,
						clientName: true,
						autoComplete: 'name',
					}),
					{ kind: 'date', name: 'Birthday', label: 'Birthday 出生日期', required: true, autoComplete: 'bday' },
					{ kind: 'tel', name: 'Phone number', label: 'Phone number 电话', required: true, autoComplete: 'tel' },
					t('Current address', 'Current address 现居住地址', {
						required: true,
						wide: true,
						autoComplete: 'street-address',
					}),
					{
						kind: 'email',
						name: 'Email',
						label: 'Email 邮箱',
						required: true,
						replyEmail: true,
						autoComplete: 'email',
					},
					t('Occupation', 'Occupation 职业', { required: true, autoComplete: 'organization-title' }),
					t('Employer / business address', 'Employer / business address 工作单位/地址', {
						required: true,
						wide: true,
					}),
					{
						kind: 'radio',
						name: 'Marital status',
						label: 'Marital status 婚姻状况',
						required: true,
						options: maritalStatus,
					},
				],
			},
			{
				title: '2. Spouse Information (if married or common-law) 配偶信息（如已婚或同居）',
				fields: [
					t("Spouse's full name", "Spouse's full name 姓名"),
					{ kind: 'date', name: "Spouse's birthday", label: 'Birthday 出生日期' },
					{ kind: 'tel', name: "Spouse's phone number", label: 'Phone number 电话' },
					{ kind: 'email', name: "Spouse's email", label: 'Email 邮箱' },
					{
						kind: 'radio',
						name: 'Is your spouse on title',
						label: 'Is your spouse on title? 配偶是否在产权上？',
						options: yesNo,
					},
					{
						kind: 'radio',
						name: 'Is the property your matrimonial home',
						label: 'Is the property your matrimonial home? 该房产目前是否为您的婚姻住所？',
						options: yesNoUnsure,
					},
				],
			},
			{
				title: '3. Transfer Details 转让信息',
				fields: [
					{
						kind: 'radio',
						name: 'What kind of transfer',
						label: 'What kind of transfer? 转让类型',
						options: [
							{ value: 'Add a person to title', label: 'Add a person to title 加名' },
							{ value: 'Remove a person from title', label: 'Remove a person from title 减名' },
							{ value: 'Transfer to another person', label: 'Transfer to another person 转给他人' },
							{ value: 'Other', label: 'Other 其他' },
						],
					},
					{
						kind: 'radio',
						name: 'Reason for transfer',
						label: 'Reason for transfer 转让原因',
						options: [
							{ value: 'Gift to family', label: 'Gift to family 赠与家人' },
							{ value: 'Separation / divorce', label: 'Separation / divorce 分居/离婚' },
							{ value: 'Estate planning', label: 'Estate planning 遗产规划' },
							{ value: 'Other', label: 'Other 其他' },
						],
					},
					t('Person receiving / added to title – full name', 'Person receiving / added to title – full name 受让人/加名人姓名'),
					t('Relationship to you', 'Relationship to you 与您的关系'),
					{ kind: 'date', name: 'Recipient birthday', label: 'Birthday 出生日期' },
					{ kind: 'tel', name: 'Recipient phone number', label: 'Phone number 电话' },
					{ kind: 'email', name: 'Recipient email', label: 'Email 邮箱' },
				],
			},
			{
				title: '4. Property 房产信息',
				fields: [
					t('Property address', 'Property address 房产地址', { required: true, wide: true }),
					{ kind: 'date', name: 'Preferred transfer date', label: 'Preferred transfer date 希望转让日期' },
					{
						kind: 'radio',
						name: 'Property type',
						label: 'Property type 房产类型',
						options: [
							{ value: 'House', label: 'House 独立/半独立屋' },
							{ value: 'Townhouse', label: 'Townhouse 镇屋' },
							{ value: 'Condo', label: 'Condo 公寓' },
							{ value: 'Other', label: 'Other 其他' },
						],
					},
					{
						kind: 'radio',
						name: 'Is the property your principal residence',
						label: 'Is the property your principal residence? 该房产是否为您的自住房（主要居所）？',
						options: yesNo,
					},
				],
			},
			{
				title: '5. Mortgage 贷款',
				fields: [
					{
						kind: 'radio',
						name: 'Is there a mortgage or line of credit on the property',
						label: 'Is there a mortgage or line of credit on the property? 该房产是否有贷款或房屋信用额度？',
						required: true,
						options: yesNo,
					},
					t('If yes, lender name(s)', 'If yes, lender name(s) 如有，贷款银行名称', { wide: true }),
					{
						kind: 'note',
						text: 'Please note: if there is a mortgage on the property, it must be refinanced before the title can be transferred. 请注意：如房产上有贷款，必须先办理转贷（Refinance），才能办理产权转让。',
					},
				],
			},
		],
	},
	{
		slug: 'designation-of-matrimonial-home',
		titleZh: '婚房指定',
		titleEn: 'Designation of Matrimonial Home',
		subject: '客户登记表 | 婚房指定',
		kickerZh: '家事法登记表',
		kickerEn: 'Family Law Intake Form',
		sections: [
			{
				title: '1. Your Information 您的信息',
				fields: [
					t('Full legal name', 'Full legal name 姓名', {
						required: true,
						clientName: true,
						autoComplete: 'name',
					}),
					{ kind: 'date', name: 'Birthday', label: 'Birthday 出生日期', required: true, autoComplete: 'bday' },
					{ kind: 'tel', name: 'Phone number', label: 'Phone number 电话', required: true, autoComplete: 'tel' },
					t('Current address', 'Current address 现居住地址', {
						required: true,
						wide: true,
						autoComplete: 'street-address',
					}),
					{
						kind: 'email',
						name: 'Email',
						label: 'Email 邮箱',
						required: true,
						replyEmail: true,
						autoComplete: 'email',
					},
					t('Occupation', 'Occupation 职业', { required: true, autoComplete: 'organization-title' }),
					t('Employer / business address', 'Employer / business address 工作单位/地址', {
						required: true,
						wide: true,
					}),
				],
			},
			{
				title: '2. Spouse Information 配偶信息',
				fields: [
					t("Spouse's full legal name", "Full legal name 姓名", { required: true }),
					{ kind: 'date', name: "Spouse's birthday", label: 'Birthday 出生日期', required: true },
					{ kind: 'tel', name: "Spouse's phone number", label: 'Phone number 电话', required: true },
					t("Spouse's current address", "Current address 现居住地址", { required: true, wide: true }),
					{ kind: 'email', name: "Spouse's email", label: 'Email 邮箱', required: true },
					t("Spouse's occupation", 'Occupation 职业', { required: true }),
					t("Spouse's employer / business address", 'Employer / business address 工作单位/地址', {
						required: true,
						wide: true,
					}),
				],
			},
			{
				title: '3. Marriage Details 婚姻信息',
				fields: [
					{ kind: 'date', name: 'Marriage date', label: 'Marriage date 结婚日期', required: true },
					t('Place of marriage (city, country)', 'Place of marriage (city, country) 结婚登记地（城市、国家）', {
						wide: true,
					}),
					{
						kind: 'radio',
						name: 'Are you and your spouse currently living together',
						label: 'Are you and your spouse currently living together? 您与配偶目前是否同住？',
						options: yesNo,
					},
					{
						kind: 'radio',
						name: 'Do you have a marriage contract or prenuptial agreement',
						label: 'Do you have a marriage contract or prenuptial agreement? 是否签有婚内协议或婚前协议？',
						options: yesNo,
					},
				],
			},
			{
				title: '4. Property to be Designated 拟指定为婚房的房产',
				fields: [
					t('Property address', 'Property address 房产地址', { required: true, wide: true }),
					{
						kind: 'radio',
						name: 'Who is on title',
						label: 'Who is on title? 产权登记在谁名下？',
						required: true,
						options: [
							{ value: 'Me', label: 'Me 我' },
							{ value: 'My spouse', label: 'My spouse 配偶' },
						],
					},
					{
						kind: 'radio',
						name: 'Property type',
						label: 'Property type 房产类型',
						options: [
							{ value: 'House', label: 'House 独立/半独立屋' },
							{ value: 'Townhouse', label: 'Townhouse 镇屋' },
							{ value: 'Condo', label: 'Condo 公寓' },
						],
					},
				],
			},
		],
	},
];

export function fieldDomId(name: string): string {
	return `f-${name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`;
}
