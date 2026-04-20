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
  {
    slug: 'ontario-divorce-procedures-negotiation',
    youtubeId: 'YhOVZxqwD_k',
    title: '安省离婚第一步：协商的两种方式与常见误区',
    topic: '离婚程序',
    topicSlug: 'divorce-procedures',
    uploadDate: '2026-04-17',
    summary:
      '在安省面临离婚，第一步往往是协商。双方自行协商与委托律师协商有本质区别——何淼律师提醒：提出没有法律依据的无理要求，只会拖长时间、增加律师费，对您毫无益处。',
    description:
      '在安省面临离婚，您最先可能接触的程序就是协商。协商分为两种：双方自行协商，或委托律师代为协商。自行协商达成一致后，可由律师起草<a href="/family-law/domestic-contracts#separation">分居协议</a>，将双方意见写入正式文件。委托律师协商则需先完成财务公开（Financial Disclosure），在厘清双方<a href="/blog/separation-vs-divorce-ontario/">净家庭资产（Net Family Property）</a>后再进行协商。',
    keyPoints: [
      '自行协商：双方就争议事项达成解决方案后，委托律师起草<a href="/family-law/domestic-contracts#separation">分居协议</a>，将已达成的意见写入正式法律文件。',
      '律师协商：双方各聘律师，先完成财务公开报告，再就家庭净资产分配、子女抚养等事项展开协商。',
      '常见误区——"净身出户"：在加拿大没有"净身出户"这一法律概念。提出无法律依据的要求，对方律师不会同意，只会耗费您大量时间和律师费，不会带来任何益处。',
      '何淼律师提醒：律师按时间计费。无效的协商除了带来高额账单，不会给您任何帮助。在协商前，务必先了解您在法律上实际能够主张的权利。',
      '本系列后续视频将继续介绍其他<a href="/family-law/divorce-litigation/">离婚程序</a>及注意要点，欢迎持续关注。',
    ],
    keywords: '安省离婚程序,离婚协商安省,分居协议多伦多,律师协商离婚,净身出户加拿大,何淼律师离婚',
  },
  {
    slug: 'ontario-divorce-certificate-three-paths',
    youtubeId: '2Ya-6FcACJk',
    title: '签了分居协议下一步怎么办？安省离婚三条路',
    topic: '离婚程序',
    topicSlug: 'divorce-procedures',
    uploadDate: '2026-04-17',
    summary:
      '签了分居协议，然后呢？安省离婚有三条路：共同离婚申请、单方离婚申请，或直接跳过分居协议提交共同申请。选错程序既浪费时间又浪费金钱，何淼律师为您梳理完整流程。',
    description:
      '许多人签了<a href="/family-law/domestic-contracts#separation">分居协议</a>后不知道下一步该怎么做。在安省，正式离婚需要向法院申请离婚证书（Divorce Certificate）。根据双方情况不同，可选择共同离婚申请或单方离婚申请两种方式。如果双方没有财产争议也没有子女，还可以跳过分居协议，直接提交共同申请。每种路径的时间成本和法律要求各不相同，选错了既浪费时间又浪费金钱。',
    keyPoints: [
      '第一步仍是协商：就财产、子女、<a href="/blog/separation-vs-divorce-ontario/">抚养费</a>等问题达成一致，签署<a href="/family-law/domestic-contracts#separation">分居协议（Separation Agreement）</a>。',
      '共同离婚申请（Joint Application）：双方均同意，由一位律师起草文件，双方签字后连同分居协议一起提交法院——从提交到拿到离婚证书通常需要 4 至 8 个月。',
      '单方离婚申请（Simple Application）：对方不配合提交共同申请时可单方面提交。分两步：① 提交申请并给对方答辩期（加拿大境内 30 天，境外 60 天）；② 答辩期过后无异议，法院单方审核并下达离婚令。',
      '快速通道：如双方无财产争议且无子女，可直接跳过分居协议，提交共同离婚申请。',
      '何淼律师提醒：每个人的情况不同，适合的<a href="/family-law/divorce-litigation/">离婚程序</a>也不同。建议预约咨询，由律师为您分析最适合的离婚路径。',
    ],
    keywords: '安省离婚证书,共同离婚申请安省,单方离婚申请安省,分居协议后离婚,安省离婚流程,何淼律师离婚程序',
  },
  {
    slug: 'ontario-divorce-litigation-uncooperative-spouse',
    youtubeId: 'ijYMwSMVUxI',
    title: '对方不配合也能离婚？安省离婚诉讼完整程序',
    topic: '离婚程序',
    topicSlug: 'divorce-procedures',
    uploadDate: '2026-04-17',
    summary:
      '协商不成、对方根本不配合——这在离婚案件中非常常见。即使对方不同意，您一样可以在安省单独提起离婚诉讼。何淼律师详解从立案到法院下达离婚令的完整程序。',
    description:
      '双方协商不成，对方不配合——这种情况在<a href="/family-law/divorce-litigation/">离婚诉讼</a>中非常常见。很多朋友不知道，即使对方不同意，您一样可以在安大略省单独提起离婚诉讼。法院有权在对方不配合的情况下作出判决。所有诉讼表格在安省法院官网均可免费下载，但程序涉及多个技术性步骤，建议委托律师处理以避免程序错误。',
    keyPoints: [
      '任何一方均可单独提起<a href="/family-law/divorce-litigation/">离婚诉讼</a>：可委托律师起草诉讼文件，也可自行填写安省法院官网的免费表格提交。',
      '给对方答辩期：提交申请后须给对方答辩期——加拿大境内 30 天，境外（如中国）60 天。对方如有正当理由可向法庭申请延期。',
      'Case Conference（庭前会议）：对方答辩后，双方可申请由法官主持的庭前会议，了解争议焦点、推动和解或确定后续程序。目前安省法院排期通常需 3 至 6 个月，请提前规划。',
      '对方不答辩怎么办：答辩期过后对方仍无异议，您无需等待其配合，可继续推进——法院可单方面审核文件并直接下达离婚令。',
      '何淼律师提示：<a href="/family-law/divorce-litigation/">离婚诉讼</a>涉及多个技术性步骤，不同情况适合不同策略。建议预约咨询，由律师根据您的具体情况制定方案。',
    ],
    keywords: '安省离婚诉讼,对方不同意离婚安省,case conference安省,离婚答辩期,单方离婚诉讼安省,何淼律师离婚诉讼',
  },
  {
    slug: 'common-law-china-marriage-license',
    youtubeId: 'cyR8my-zJT4',
    title: '在加拿大Common Law同居，可以回中国领结婚证吗？',
    topic: 'Common Law 同居',
    topicSlug: 'common-law',
    uploadDate: '2026-04-17',
    summary:
      '在加拿大维持 Common Law 关系、未正式结婚，想回中国领证——中国法律一般不将同居视为婚姻，民政登记上您可能仍为单身，回国领证在法律上通常可行，但子女、抚养费与财产未妥善处理则有实务风险。',
    description:
      '许多在加拿大维持<a href="/family-law/common-law/">Common Law（同居）关系</a>的朋友会问：没有正式结婚，想回中国与他人领取结婚证，法律上可以吗？从中国法律框架看，Common Law 事实婚姻通常不被承认为婚姻，民政登记上您可能仍为单身状态，回国领取结婚证在法律上通常是可行的。但何淼律师提醒您：长期同居往往已涉及<a href="/family-law/child-custody/">子女抚养与监护</a>、<a href="/family-law/support/">抚养费</a>及共同生活期间的财产安排；在未妥善处理上述问题前开始新关系，日后可能面临复杂法律纠纷。',
    keyPoints: [
      '中国法律视角：<a href="/family-law/common-law/">Common Law 同居关系</a>在中国法律框架下通常不被视为婚姻，民政登记上您可能仍为单身，回国领取结婚证在法律上通常是可行的。',
      '实务风险：长期<a href="/family-law/common-law/">同居关系</a>常已涉及子女安排、抚养费及共同生活期间的资产问题——未妥善处理前贸然开始新关系，可能引发日后诉讼或执行困难。',
      '何淼律师建议：先正式结束现有同居关系，厘清<a href="/family-law/child-custody/">子女</a>与<a href="/family-law/support/">经济扶养</a>安排，必要时通过<a href="/family-law/domestic-contracts/">同居协议（Cohabitation Agreement）</a>等书面方式固定双方权利义务。',
      '任何长久稳定的关系都应以真诚与信任为基础；若您考虑结束同居或想了解您在安省的法律权利，欢迎预约咨询。',
    ],
    keywords: '加拿大Common Law,同居回中国领证,中国结婚证Common Law,安省同居法律,何淼律师Common Law,多伦多同居律师',
  },
  {
    slug: 'marital-argument-police-ontario',
    youtubeId: 'h7l3sMaJzw8',
    title: '夫妻吵架冲动报警？先分清普通争吵与家暴',
    topic: '家暴与报警',
    topicSlug: 'domestic-violence',
    uploadDate: '2026-04-17',
    summary:
      '冲动报警后想帮对方撤诉？何淼律师建议：普通争吵先冷静、离开现场，不要轻易报警——警察是中立方，调查后可能对双方都出具命令；真实家庭暴力则应毫不犹豫地报警自保。',
    description:
      '何淼律师在工作中经常遇到：夫妻吵架一方冲动报警，警察到场后发现情况并非当初所想，又后悔并询问能否帮对方撤诉。需要先把两件事分开：<strong>普通争吵</strong>与<strong>真实家庭暴力</strong>。普通争吵下，警察不会因您是报警人就自动站您这边，他们会独立判断现场是否存在暴力或人身安全威胁，结果有时会对双方都出具命令。若您面临的是身体伤害、威胁或控制等<a href="/faq/jiabao/">家庭暴力</a>，则应优先保障安全、及时报警——两种选择的法律后果截然不同。',
    keyPoints: [
      '普通争吵：若仅为小事争执、气氛激烈，何淼律师建议先冷静、暂时离开现场，让双方降温——不建议为此类情况报警。警察是中立方，会自行调查并评估是否存在暴力或安全威胁；若仅为过激言语，结果可能是对双方都出具命令，与报警方原先预期完全不同。',
      '真实家暴：若存在身体伤害、威胁、控制等情形，请毫不犹豫地<a href="/faq/jiabao/">报警并寻求保护</a>。这与普通争吵的法律后果与资源介入完全不同。',
      '报警前请先判断：我现在面对的是家暴，还是一场激烈争吵？这一判断可能影响您与家人接下来很长一段时间的生活。',
      '关于事后反悔：警方接报后是否继续调查、检控机关是否提出指控等，通常不能仅凭一方「撤回」意愿决定；配偶亦无法通过律师单方面替对方「撤诉」。若您已报警并对后果感到困惑，请尽快咨询专业律师。',
      '若您正处于家暴风险中，或需要了解报警后的法律选项，欢迎联系何淼律师进行法律咨询。',
    ],
    keywords: '夫妻吵架报警加拿大,家暴报警安省,报警撤诉加拿大,家庭暴力何淼律师,多伦多家庭法律师,保护令安省',
  },
  {
    slug: 'common-law-duration-ontario-immigration',
    youtubeId: 'shh0y0eWiF4',
    title: '同居两年算 Common Law 吗？安省家庭法与移民标准不同',
    topic: 'Common Law 同居',
    topicSlug: 'common-law',
    uploadDate: '2026-04-17',
    summary:
      '「在一起住了两年算 Common Law 吗？」——取决于您在哪个省、以及要办的是家庭法、移民担保还是其他事项。安省家庭法为同居满 3 年或有共同子女；联邦移民法下同居担保常见标准为连续同居满 1 年。',
    description:
      '很多人以为 Common Law 有全国统一标准，其实并非如此。「我们在一起住了两年，算 Common Law 吗？」——答案要看<strong>您所在的省份</strong>以及<strong>您要处理的法律事项</strong>。在安大略省<a href="/family-law/common-law/">家庭法</a>框架下，通常须同居连续满 3 年，或双方处于同居关系且有共同子女，二者满足其一即可能被认定为 Common-law 伴侣并产生相应家庭法上的权利义务。若您办理的是<strong>联邦移民法</strong>下的同居伴侣担保等事项，认定标准与家庭法不同——常见标准为双方连续共同生活满 1 年（具体以当时有效的移民法规与材料要求为准）。BC 省、阿尔伯塔省等各省家庭法对同居伴侣的定义也可能不同。',
    keyPoints: [
      '没有放之四海皆准的单一标准：「算不算 Common Law」取决于您要适用的是哪一部法律——省家庭法、联邦移民法、税务规则等各不相同。',
      '安大略省家庭法：在<a href="/family-law/common-law/">安省家庭法</a>框架下，通常为同居连续满 3 年，或双方有共同子女且处于同居关系，满足其一即可能被认定为 Common-law 伴侣。',
      '联邦移民法（同居担保等）：在移民担保等场景下，认定标准与省家庭法不同——常见为连续共同生活满 1 年可能被认定为 Common-law 伴侣关系（以 IRCC 当时要求与您的证据材料为准）。',
      '其他省份：BC、阿尔伯塔等省对同居／adult interdependent partner 等的定义与时点要求可能与安省不同；若您不在安省，应查阅当地法律或咨询当地律师。',
      '何淼律师提醒：同一段关系在不同法律框架下可能被不同标准衡量。若不确定是否符合认定或应准备多长的同居证明，建议先咨询律师，避免因材料与法律依据不匹配而耽误程序。',
    ],
    keywords: '同居多久算Common Law,安省Common Law三年,移民担保同居一年,Common Law标准加拿大,何淼律师Common Law,多伦多同居律师',
  },
  {
    slug: 'dating-after-separation-ontario',
    youtubeId: 'BYFNkeIF1GA',
    title: '要等拿离婚证才能谈恋爱吗？安省分居即关系结束',
    topic: '分居与离婚',
    topicSlug: 'separation-divorce',
    uploadDate: '2026-04-17',
    summary:
      '在安省不必等离婚证才能开始新恋情——正式分居后婚姻关系即已结束。例外：分居后复合并连续同居超过 90 天，分居时间须重新计算。再婚须先取得离婚证；财产分割以分居日为基准。',
    description:
      '很多从中国来的客户会问：「是不是要等拿到离婚证，才能开始新的感情？」在中国与加拿大，这一点规定不同。在安大略省，<strong>通常不需要等离婚证</strong>：双方一旦<a href="/blog/separation-vs-divorce-ontario/">正式分居</a>，婚姻关系在家庭法意义上即已结束，分居后法律上一般并不禁止您开始新的恋情。但须注意<a href="/blog/separation-vs-divorce-ontario/">90 日复合理由</a>：若分居后又复合并连续同居超过 90 天，法律上可能视为先前分居不再存在，分居日须重新起算——这会直接影响<a href="/blog/separation-date-vs-divorce-date-ontario/">财产均等分割（equalization）的基准日</a>。',
    keyPoints: [
      '安省视角：一般不必等离婚证——双方正式分居后，婚姻关系在家庭法框架下通常即视为结束，分居后开始新恋情本身通常不构成法律障碍（个案仍可能有其他争议，例如育儿安排或协议义务，应另行评估）。',
      '再婚例外：若您计划与他人<strong>再婚</strong>，须先取得离婚证（Divorce Certificate）方可办理再婚登记——离婚证是「能否再婚」的关键，而不是「能否约会」的前提。',
      '90 天规则：分居后若双方又复合并连续共同生活超过 90 天，可能被认定为分居中断，分居日期须重新计算——若曾有短暂复合，务必与律师确认<a href="/blog/separation-vs-divorce-ontario/">分居日认定</a>。',
      '财产分割基准：安省夫妻财产分割一般以<strong>分居日</strong>为计算基准，而非领取离婚证之日。建议在分居时即以<a href="/family-law/domestic-contracts#separation">书面方式</a>记录分居意向与日期，并保存相关证据。',
      '若您对分居日、财产分割或再婚手续有疑问，欢迎预约何淼律师咨询。',
    ],
    keywords: '分居后可以恋爱吗安省,离婚证再婚加拿大,分居日财产分割安省,90天复合安省,何淼律师分居离婚,多伦多离婚律师',
  },
  {
    slug: 'parents-gift-money-divorce-ontario',
    youtubeId: 'AdoyJfXVjnw',
    title: '父母给的钱离婚要分给对方吗？安省法律这样规定',
    topic: '离婚财产',
    topicSlug: 'property-division',
    uploadDate: '2026-04-17',
    summary:
      '婚姻期间父母给的钱，离婚时要不要拿出来平分？安省《家庭法》对继承与第三方赠与等有排除规则，但您须证明资金来源、去向，且避免与夫妻共同财产混同——否则争议极大。',
    description:
      '这是何淼律师在离婚案件中遇到争议最多的问题之一：婚姻期间父母或第三方给的钱，离婚时要不要与对方分配？根据安省《<a href="https://www.ontario.ca/laws/statute/90f03" target="_blank" rel="noopener noreferrer">家庭法</a>》下的<a href="/blog/net-family-property-ontario/">净家庭财产（NFP）计算框架</a>，符合条件的继承与赠与等可能被认定为排除财产（excluded property），但具体能否排除、排除多少，取决于证据、资金是否混同、是否涉及<a href="/faq/fumu-shougou-toukuan/">婚房出资等特殊安排</a>等——每个案件不同，需个案分析。',
    keyPoints: [
      '原则概述：婚姻期间来自父母或第三方的<strong>赠与</strong>，在满足法定条件且证据充分的情况下，往往有可能主张为排除财产，从而不纳入与对方之间的财产分配计算——但法律适用与计算方式因案而异。',
      '关键前提——举证：您通常需要证明款项性质（例如赠与意图）、分居日仍可追溯、资金来源与去向清晰。若与夫妻共同账户或日常开支混同，日后很难说清楚。',
      '实务建议：尽量使用<strong>独立账户</strong>专门存放该部分资产，不与日常夫妻共用账户混用；保留银行转账记录、汇款凭证，最好有书面赠与说明或能印证当时意图的材料。',
      '涉及父母为首付出资、借款或代持等复杂安排时，争议规则与单纯现金赠与不同，建议结合<a href="/faq/fumu-shougou-toukuan/">父母出资 FAQ</a>与<a href="/blog/chinese-divorce-property-gift-loan-trust-ontario/">父母出资、赠与借款规则</a>一并评估。',
      '若您已在离婚程序中或不确定父母给予的资产应如何处理，欢迎预约何淼律师咨询。',
    ],
    keywords: '父母给的钱离婚分割,安省赠与财产离婚,排除财产安省,离婚财产举证,何淼律师离婚财产,多伦多离婚财产律师',
  },
  {
    slug: 'which-marriage-certificate-divorce-canada-china',
    youtubeId: 'TCVBF0342GY',
    title: '中国领证又在加拿大领证，离婚该交哪本结婚证？',
    topic: '中加婚姻',
    topicSlug: 'china-canada-marriage',
    uploadDate: '2026-04-17',
    summary:
      '先在中国领证、后在加拿大再领证的朋友，在安省办离婚时常纠结该交哪一本结婚证。结婚成立日通常以第一次合法登记为准，递交错误证件可能影响财产计算及日后在中国使用离婚文书。',
    description:
      '不少夫妻先在中国办理结婚登记，之后在加拿大补办仪式并再次领取结婚证。在<a href="/family-law/divorce-litigation/">加拿大申请离婚</a>时，究竟应提交哪一本证件，很多人未予重视，却可能影响后续程序。何淼律师在视频中说明：在典型情形下，<strong>结婚日期以第一次合法结婚的日期为准</strong>；若先在中国领证、后在加拿大领证，向安省法院递交离婚申请时，通常应提交<strong>能证明该段婚姻首次依法成立</strong>的文件（常见为中国结婚证及要求的翻译／认证材料），并与律师核对是否还需补充安省登记记录等——具体以法院要求与个案事实为准。离婚判决中会确认结婚日期与法院批准解除婚姻之日，二者可能影响<a href="/blog/separation-date-vs-divorce-date-ontario/">财产分割等计算</a>；若日后需在中国办理再婚、房产等手续，文件与婚姻历史不一致可能带来认证或使用上的困难。',
    keyPoints: [
      '常见误区：以为「在加拿大离婚就只交加拿大结婚证」——若您先在中国合法结婚、后又办理加拿大结婚登记，在安省启动离婚时，通常应以<strong>首次合法结婚</strong>的证明文件为主线向律师与法院说明婚姻史。',
      '日期意义：法院在离婚判决中一般会确认婚姻成立相关的日期信息与解除婚姻的时间节点，这可能影响<a href="/blog/separation-date-vs-divorce-date-ontario/">财产分割基准日</a>等问题的分析。',
      '跨境使用：许多客户日后需将加拿大离婚判决／离婚证带回中国使用（再婚登记、房产等）。若申请阶段提交或陈述的婚姻文件与真实婚姻历史不一致，可能影响后续公证认证及国内机关的审查。',
      '与中国结婚、在安省离婚的一般规则，还可参考本站<a href="/faq/zhongguo-jiehun-ansheng-lihun/">在中国结婚可以在安省离婚吗</a>等说明；您的个案是否涉及登记重复、文件认证或前段婚姻等，需单独评估。',
      '若您不确定应提交哪些婚姻证明文件，建议在递交离婚申请前先咨询何淼律师，避免小细节埋下大麻烦。',
    ],
    keywords: '加拿大离婚结婚证,中国结婚证加拿大离婚,两本结婚证离婚,安省离婚文件,何淼律师跨境离婚,多伦多离婚律师',
  },
  {
    slug: 'china-mediation-divorce-canadian-property',
    youtubeId: 'thq2Cu3mDkY',
    title: '在中国调解离婚，能把加拿大房产写进协议吗？',
    topic: '跨境离婚',
    topicSlug: 'cross-border-divorce',
    uploadDate: '2026-04-17',
    summary:
      '结婚证在中国领、想在中国调解离婚，但人在加拿大有房或其他资产——不必当然理解为「加国财产只能回加拿大再打一场官司」。关键是在中国达成的调解／协议内容是否清晰涵盖境外资产，以及日后在加拿大完成承认、登记或过户等配套程序。',
    description:
      '不少夫妻在中国登记结婚，离婚时希望在中国通过调解结案，同时在加拿大持有房产或其他资产。何淼律师在视频中说明：在中国调解程序中，双方可以在协议里<strong>明确约定加拿大境内财产的分配方式</strong>；经中国法院确认的调解书或判决书中对该等约定予以记载，有助于形成一份相对完整、可追踪的跨境安排文本。但「带回加拿大有效」在法律上通常要区分不同层面：解除婚姻关系、财产债务安排、以及<strong>在加拿大完成产权过户或金融机构配合</strong>等，往往仍可能需要依据加拿大程序办理承认与执行、或另行准备可在安省使用的法律文件。具体路径因资产类型、登记机关与文件形式而异，建议参阅<a href="/blog/china-canada-divorce-judgment-recognition/">中国离婚判决在加拿大的承认与执行</a>一文并与双执照律师提前规划。',
    keyPoints: [
      '思路概述：在中国以调解方式结案时，双方可在协议中写入对<strong>加拿大财产如何分割、如何配合办理过户或变现</strong>等安排；中国法院可在调解书／判决书中对该等已达成一致的内容予以确认（能否写入及措辞需符合中国程序与个案情况）。',
      '为何重要：若中国侧文书对加拿大资产完全未提及或表述含糊，日后回到<a href="/family-law/divorce-litigation/">安省程序</a>时，可能出现「争议未解决、需另行分割」的风险——这也是跨境案件中常见的隐患之一。',
      '与「不必再打一场完整离婚官司」的关系：在很多场景下，您未必需要就<strong>同一婚姻关系</strong>在加拿大重新提起一场完整的离婚诉讼；但就<strong>加拿大境内不动产过户、贷款解除、账户划转</strong>等，仍可能需要加拿大律师协助准备可在本地机构接受的文件，或办理必要的法院程序／承认程序。',
      '资产与证据：涉及加拿大房产、公司与账户时，建议同时了解<a href="/blog/cross-border-assets-divorce-ontario/">跨境资产披露与分割</a>中的举证与保全要点。',
      '何淼律师提醒：协议内容是否清晰、具体、可执行，以及是否符合两国法律与实务要求，是方案成败关键——签署前建议咨询同时熟悉中加法律与程序的律师。',
    ],
    keywords: '在中国离婚加拿大财产,中国调解离婚加拿大房产,跨境离婚协议,中加离婚财产,何淼律师跨境离婚,多伦多华人离婚律师',
  },
  {
    slug: 'contingency-fee-family-law-ontario',
    youtubeId: 'j3ssKkstgUM',
    title: '离婚能「风险代理」按追回财产提成吗？安省家庭法不允许',
    topic: '请律师须知',
    topicSlug: 'hiring-lawyer',
    uploadDate: '2026-04-17',
    summary:
      '有客户问能否按最终拿回财产的比例付律师费，或遇到承诺「包赢」的律师。何淼律师说明：有经验的家庭法律师通常不会对离婚结果作保证；在安省，家庭法案件中约定典型意义上的风险代理（按结果提成）属于监管规则所禁止的收费安排。',
    description:
      '何淼律师收到过这样的咨询：能否做<strong>风险代理</strong>，按最后拿回的财产比例收费；也有人转述「别的律师可以承诺案件结果」。在家庭法中，这两件事都值得警惕。离婚案件是<strong>对抗式程序</strong>，您掌握的材料与对方的主张、证据往往并存，任何负责任的律师在充分了解双方材料与程序走向之前，都不应对结果作出「包赢」式承诺。关于收费：在安省，律师协会对<strong>风险费用（contingency fee）协议</strong>适用于哪些案件类型有强制性限制——在典型的<strong>家庭法</strong>争议（如离婚财产、扶养、监护等）中，约定按诉讼结果或追回金额比例计提律师费的安排，通常属于不被允许的收费模式；这与部分人身损害等领域常见的风险收费不可混为一谈。起诉前应充分了解自己的权利义务、证据与程序风险；关于无争议与诉讼的大致费用结构，也可参阅本站<a href="/faq/toronto-lihun-feiyong-duoshao/">多伦多离婚费用大概多少</a>等说明。',
    keyPoints: [
      '「承诺结果」：离婚案件结果受事实、证据、对方策略、法官裁量等多重因素影响。若律师在仅听取您单方陈述后即承诺胜诉或确定金额，您应格外谨慎——这往往不符合专业与职业伦理要求。',
      '「风险代理／按追回财产提成」：在安省，律师对可适用的风险费用协议受《律师协会条例》（Rules of Professional Conduct）等监管框架约束；在典型家庭法案件中，约定按诉讼结果或追回财产比例支付律师费的收费结构通常<strong>不被允许</strong>。若有人提出「拿回 100 万收 30%」一类方案，您应意识到其可能已触碰职业规范红线。',
      '与按小时计费、分阶段报价等的区别：安省有争议的<a href="/family-law/divorce-litigation/">家庭法诉讼</a>中，律师常见做法是按小时计费或结合阶段性工作报价；费用区间需结合争议点与程序进展评估，详见<a href="/faq/duoshao/">在安省离婚需要多少钱</a>等介绍。',
      '真正「保护自己」的方式：在起诉或签署重要文件前，尽量完成证据整理与披露规划，对成本、时间与可能结果形成现实预期；选择愿意坦诚沟通风险与不确定性的律师，而不是只讲您想听的话的人。',
      '若您正在寻找家庭法律师，欢迎预约何淼律师——我们会如实讨论案件的可能走向与收费结构，而不是用不实承诺换取委托。',
    ],
    keywords: '安省家庭法风险代理,离婚律师费提成,律师承诺结果安省,何淼律师收费,多伦多离婚律师费,家庭法律师 contingency',
  },
  {
    slug: 'divorce-litigation-travel-abroad-ontario',
    youtubeId: '_8t-iAjM_SY',
    title: '提起离婚诉讼后还能离开加拿大吗？',
    topic: '离婚程序',
    topicSlug: 'divorce-procedures',
    uploadDate: '2026-04-17',
    summary:
      '很多人担心一旦在安省提起离婚诉讼就不能出境。原则上没有法律要求您必须全程留在加拿大；关键是与律师协调出庭、会议等日期。若涉及子女监护争议，本人或携子女出境则需格外谨慎。',
    description:
      '在家庭法咨询中，何淼律师经常被问到：一旦提起<a href="/family-law/divorce-litigation/">离婚诉讼</a>，是不是就不能离开加拿大了？原则上，<strong>没有任何法律要求您因已提起离婚诉讼而必须持续停留在加拿大境内</strong>；您仍可安排出差、探亲或旅行。实务中的关键是：在需要您本人到场的<strong>庭审、动议听证、重要会议或签署</strong>等日期，您能够按时出庭或与律师协调改期。安省法院排期往往较长，在排定日期之前，通常可与律师共同规划行程。若案件涉及<strong>子女监护、育儿时间或旅行限制</strong>，规则会显著不同——例如携未成年子女出境，可能需要对方同意或<a href="/family-law/child-custody/">法院许可</a>，建议在出境前先咨询律师。',
    keyPoints: [
      '原则：提起离婚诉讼本身通常不自动剥夺您本人出境自由；法律一般不要求您在整个诉讼期间一直留在加拿大。',
      '关键：与诉讼律师保持沟通，确保在需要您到场的庭审、听证或重要程序日期能够出席；若旅行计划与排期冲突，应尽早讨论改期或替代安排的可行性。',
      '排期现实：安省离婚相关程序排期有时可达数月，在正式日期确定前，通常仍有空间协调个人行程——但<strong>不得无故缺席</strong>法院命令要求到场的程序，否则可能产生不利后果。',
      '涉及子女时：若存在<strong>子女监护争议、禁止出境条款、护照扣押或跨境监护风险</strong>等，本人出境或携子女出境可能受到协议或法院命令限制——可参阅<a href="/faq/haizi-zhongguo/">对方要带孩子回中国怎么办</a>等紧急情形说明，并在行动前取得专业意见。',
      '若您正在进行离婚诉讼或对出境、旅行安排有疑问，欢迎预约何淼律师咨询。',
    ],
    keywords: '离婚诉讼出境加拿大,提起离婚能出国吗安省,离婚期间旅行,何淼律师离婚诉讼,多伦多离婚律师,安省离婚出庭',
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
