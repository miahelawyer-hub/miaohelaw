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
];

export function getVideosByTopic(): Map<string, VideoItem[]> {
  const map = new Map<string, VideoItem[]>();
  for (const v of videoItems) {
    if (!map.has(v.topic)) map.set(v.topic, []);
    map.get(v.topic)!.push(v);
  }
  return map;
}
