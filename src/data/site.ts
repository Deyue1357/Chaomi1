// 超觅 Ultraseek 产品与品牌数据

export interface ProductCategory {
  id: string
  name: string
  enName: string
  icon: string
  description: string
  features: string[]
  gradient: string
  image?: string // 产品图，可选。配置后首页/产品页展示实拍图，未配置则回退到 icon 图标
}

// 产品分类
export const productCategories: ProductCategory[] = [
  {
    id: 'dust-bag',
    name: '尘袋',
    enName: 'Dust Bags',
    icon: 'bag',
    description: '高效过滤尘袋，大容量设计，锁尘不漏粉，HEPA 级过滤，守护家庭呼吸健康。',
    features: ['HEPA 级过滤', '大容量锁尘', '不漏粉设计', '易更换'],
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    id: 'side-brush',
    name: '边刷',
    enName: 'Side Brushes',
    icon: 'brush',
    description: '高耐磨纤维边刷，深入墙角缝隙，强力聚拢灰尘，静音运行不打扰。',
    features: ['高耐磨纤维', '深入墙角', '强力聚拢', '静音运行'],
    gradient: 'from-cyan-500 to-blue-400',
  },
  {
    id: 'filter',
    name: '滤网',
    enName: 'Filters',
    icon: 'filter',
    description: '多层复合滤网，拦截微米级颗粒，释放清新空气，可水洗重复使用。',
    features: ['多层复合', '微米拦截', '水洗复用', '释放清新'],
    gradient: 'from-sky-500 to-cyan-400',
  },
  {
    id: 'roller-brush',
    name: '滚刷',
    enName: 'Roller Brushes',
    icon: 'roller',
    description: '防缠绕滚刷，V 型导流设计，深入地毯纤维，毛发不缠绕易清理。',
    features: ['防缠绕', 'V 型导流', '深入地毯', '易清理'],
    gradient: 'from-blue-600 to-sky-400',
  },
  {
    id: 'mop-pad',
    name: '拖布',
    enName: 'Mop Pads',
    icon: 'mop',
    description: '超细纤维拖布，强效去污不留痕，兼容主流水箱模块，可机洗。',
    features: ['超细纤维', '强效去污', '不留水痕', '可机洗'],
    gradient: 'from-teal-500 to-cyan-400',
  },
  {
    id: 'accessories',
    name: '其他配件',
    enName: 'Accessories',
    icon: 'parts',
    description: '水箱、充电座、防撞条、遥控器等全系列原厂级配件，一站配齐。',
    features: ['全系列覆盖', '原厂级品质', '一站配齐', '即插即用'],
    gradient: 'from-indigo-500 to-blue-400',
  },
]

// 适配品牌
export const brands: string[] = [
  '追觅', '科沃斯', '石头', '云鲸', '小米', '美的', '海尔',
  'iRobot', '戴森', '由利', '哇力', '浦桑尼克', '飞利浦', '松下',
  '联想', '360', '京东京造', '华为智选',
]

// 品牌分组（品牌较多时分组展示更清晰）
export interface BrandGroup {
  label: string
  desc: string
  brands: string[]
}
export const brandGroups: BrandGroup[] = [
  {
    label: '国产主流',
    desc: '深度适配国货头部品牌，型号全覆盖',
    brands: ['追觅', '科沃斯', '石头', '云鲸', '小米', '美的', '海尔', '由利', '哇力', '联想', '360', '京东京造', '华为智选'],
  },
  {
    label: '海外品牌',
    desc: '兼容国际品牌，全球品质一视同仁',
    brands: ['iRobot', '戴森', '浦桑尼克', '飞利浦', '松下'],
  },
]

// 核心优势
export const advantages = [
  {
    icon: 'shield',
    title: '全品牌适配',
    description: '深度适配市面 50+ 主流扫地机器人品牌，型号覆盖 2000+，让每一台机器都能找到原厂级配件。',
    metric: '50+',
    metricLabel: '适配品牌',
  },
  {
    icon: 'sparkles',
    title: '原厂级品质',
    description: '严选材料，精密开模，每件配件均经过耐用、过滤、噪音等 36 项实验室检测，品质对标原厂。',
    metric: '36',
    metricLabel: '项检测标准',
  },
  {
    icon: 'factory',
    title: '自主研发制造',
    description: '自有工厂与研发团队，从材料配方到模具工艺全程自研，持续迭代优化清洁效能。',
    metric: '8',
    metricLabel: '年深耕制造',
  },
  {
    icon: 'truck',
    title: '极速交付',
    description: '全国多地智能仓配中心，现货直发，48 小时内送达全国主要城市，售后无忧。',
    metric: '48h',
    metricLabel: '全国送达',
  },
]

// 数据统计
export const stats = [
  { value: 50, suffix: '+', label: '适配品牌' },
  { value: 2000, suffix: '+', label: '适配型号' },
  { value: 100, suffix: '万+', label: '服务家庭' },
  { value: 99.2, suffix: '%', label: '用户好评率' },
]

// 发展历程
export const milestones = [
  { year: '2017', title: '品牌创立', description: '超觅科技在深圳成立，聚焦清洁电器配件赛道。' },
  { year: '2019', title: '自建工厂', description: '东莞自有制造基地投产，实现核心配件自主研发生产。' },
  { year: '2021', title: '品牌适配突破', description: '完成市面 30+ 主流品牌全型号配件适配，销量突破百万件。' },
  { year: '2023', title: '全球布局', description: '产品远销 40+ 国家与地区，跨境电商业务高速增长。' },
  { year: '2025', title: '智能升级', description: '推出智能材料与可降解尘袋系列，引领绿色清洁新标准。' },
]

// 企业文化
export const culture = [
  {
    icon: 'target',
    title: '使命',
    description: '让每一台扫地机器人都能拥有原厂级配件，让清洁更高效、更持久。',
  },
  {
    icon: 'eye',
    title: '愿景',
    description: '成为全球领先的智能清洁配件品牌，以科技重新定义家庭清洁体验。',
  },
  {
    icon: 'heart',
    title: '价值观',
    description: '匠心制造 · 用户至上 · 持续创新 · 开放共赢',
  },
]

// 资质认证
export interface Certification {
  name: string
  image?: string // 证书扫描件图，可选。配置后展示证书实图，未配置则回退到 Award 图标
}
export const certifications: Certification[] = [
  { name: 'ISO 9001 质量管理体系' },
  { name: 'ISO 14001 环境管理体系' },
  { name: 'CE 欧盟认证' },
  { name: 'RoHS 符合性认证' },
  { name: 'REACH 合规认证' },
  { name: '高新技术企业' },
]

// 产品详细规格（按分类）
export interface ProductSpec {
  label: string
  value: string
}

export interface ProductModel {
  name: string
  brand: string
  tag: string
  douyinUrl?: string // 该型号抖音商品链接（可选，未配置则用默认店铺链接）
  tmallUrl?: string // 该型号天猫商品链接（可选，未配置则用默认店铺链接）
}

export interface ProductGalleryImage {
  image?: string // 产品详情图，可选。配置后展示实拍图，未配置则显示渐变占位+图标
  title: string
  desc: string
}

export interface ProductDetail {
  categoryId: string
  specs: ProductSpec[]
  models: ProductModel[]
  highlights: { title: string; desc: string }[]
  gallery?: ProductGalleryImage[] // 产品详情图集，可选。配置后产品页展示大图+缩略图+图文说明
}

export const productDetails: ProductDetail[] = [
  {
    categoryId: 'dust-bag',
    specs: [
      { label: '过滤等级', value: 'HEPA H13' },
      { label: '过滤效率', value: '≥ 99.97% @ 0.3μm' },
      { label: '容量', value: '1.2L / 2.5L / 3.0L' },
      { label: '材质', value: '无纺布 + 熔喷层' },
      { label: '包装', value: '10 片 / 盒' },
      { label: '适配品牌', value: '50+ 品牌' },
    ],
    models: [
      { name: '通用型尘袋 10 片装', brand: '多品牌通用', tag: '热销' },
      { name: '大容量尘袋 2.5L', brand: '追觅 / 石头', tag: '新品' },
      { name: '抗菌尘袋 6 片装', brand: '科沃斯 / 云鲸', tag: '推荐' },
      { name: '可降解环保尘袋', brand: '全品牌适配', tag: '环保' },
    ],
    highlights: [
      { title: 'HEPA 级过滤', desc: '高效拦截 0.3 微米颗粒，过敏原无处遁形。' },
      { title: '锁尘不漏粉', desc: '热熔工艺封口，更换时粉尘零外溢。' },
      { title: '大容量设计', desc: '单袋可使用 4-6 周，减少更换频次。' },
    ],
    gallery: [
      { title: 'HEPA H13 过滤层', desc: '多层复合结构，拦截 0.3μm 颗粒，过滤效率 ≥ 99.97%，守护呼吸健康。' },
      { title: '热熔锁尘封口', desc: '热熔工艺封口，更换时粉尘零外溢，杜绝二次污染。' },
      { title: '大容量设计', desc: '1.2L / 2.5L / 3.0L 三种规格，单袋可用 4-6 周，减少更换频次。' },
    ],
  },
  {
    categoryId: 'side-brush',
    specs: [
      { label: '刷毛材质', value: '高耐磨尼龙纤维' },
      { label: '转速', value: '180-220 RPM' },
      { label: '直径', value: '标准 / 加长款' },
      { label: '寿命', value: '≥ 6 个月' },
      { label: '噪音', value: '< 45 dB' },
      { label: '包装', value: '2 / 4 / 6 支装' },
    ],
    models: [
      { name: '三臂边刷 4 支装', brand: '多品牌通用', tag: '热销' },
      { name: '加长款边刷', brand: '追觅 / 小米', tag: '推荐' },
      { name: '静音边刷 2 支装', brand: '科沃斯', tag: '静音' },
      { name: '六臂边刷', brand: '石头 / 云鲸', tag: '新品' },
    ],
    highlights: [
      { title: '高耐磨纤维', desc: '尼龙材质，长期使用不变形不卷曲。' },
      { title: '深入墙角', desc: 'V 型角度设计，墙角缝隙灰尘一扫净。' },
      { title: '静音运行', desc: '优化刷毛排列，降噪 30%，不打扰家人。' },
    ],
    gallery: [
      { title: '高耐磨尼龙纤维', desc: '尼龙刷毛，长期使用不变形不卷曲，寿命 ≥ 6 个月。' },
      { title: 'V 型角度设计', desc: '深入墙角缝隙，聚拢灰尘一扫净，覆盖率提升 35%。' },
      { title: '静音优化', desc: '刷毛排列优化，降噪 30%，运行噪音 < 45dB。' },
    ],
  },
  {
    categoryId: 'filter',
    specs: [
      { label: '过滤等级', value: 'HEPA H11-H13' },
      { label: '层数', value: '3-5 层复合' },
      { label: '可水洗', value: '支持（≤ 30 次）' },
      { label: '寿命', value: '6-12 个月' },
      { label: '尺寸', value: '按机型定制' },
      { label: '适配', value: '2000+ 机型' },
    ],
    models: [
      { name: 'HEPA H13 滤网', brand: '追觅 / 石头', tag: '推荐' },
      { name: '可水洗复合滤网', brand: '科沃斯 / 小米', tag: '热销' },
      { name: '活性炭除味滤网', brand: '全品牌适配', tag: '除味' },
      { name: '初效预过滤网', brand: '多品牌通用', tag: '基础' },
    ],
    highlights: [
      { title: '多层复合', desc: '初效 + HEPA + 活性炭，三级递进过滤。' },
      { title: '微米拦截', desc: '拦截 99.97% 微尘与过敏原，守护呼吸。' },
      { title: '水洗复用', desc: '支持水洗循环使用，环保又省钱。' },
    ],
    gallery: [
      { title: '三级递进过滤', desc: '初效 + HEPA + 活性炭，层层拦截微米级颗粒。' },
      { title: '水洗复用', desc: '支持水洗 ≤ 30 次，环保省钱，寿命 6-12 个月。' },
      { title: '定制尺寸', desc: '适配 2000+ 机型，按机型精准开模，严丝合缝。' },
    ],
  },
  {
    categoryId: 'roller-brush',
    specs: [
      { label: '刷毛材质', value: '防缠绕软胶 + 尼龙' },
      { label: '结构', value: 'V 型导流' },
      { label: '长度', value: '标准 / 加宽款' },
      { label: '寿命', value: '8-12 个月' },
      { label: '适配地毯', value: '支持' },
      { label: '防缠绕', value: '是' },
    ],
    models: [
      { name: '防缠绕滚刷', brand: '追觅 / 石头', tag: '热销' },
      { name: 'V 型导流滚刷', brand: '科沃斯', tag: '推荐' },
      { name: '软胶滚刷', brand: '云鲸', tag: '新品' },
      { name: '加宽滚刷', brand: '多品牌通用', tag: '加宽' },
    ],
    highlights: [
      { title: '防缠绕设计', desc: '软胶刮条 + 离心结构，毛发不缠绕。' },
      { title: 'V 型导流', desc: '聚拢灰尘至中央吸口，吸净率提升 40%。' },
      { title: '深入地毯', desc: '高转速拍打，深层清洁地毯纤维。' },
    ],
    gallery: [
      { title: '防缠绕软胶', desc: '软胶刮条 + 离心结构，毛发不缠绕，易清理。' },
      { title: 'V 型导流', desc: '聚拢至中央吸口，吸净率提升 40%。' },
      { title: '地毯深层清洁', desc: '高转速拍打，深层清洁地毯纤维。' },
    ],
  },
  {
    categoryId: 'mop-pad',
    specs: [
      { label: '材质', value: '超细纤维 + 海绵' },
      { label: '尺寸', value: '按机型定制' },
      { label: '可机洗', value: '支持' },
      { label: '寿命', value: '≥ 50 次清洗' },
      { label: '去污力', value: '强效' },
      { label: '适配', value: '主流水箱模块' },
    ],
    models: [
      { name: '超细纤维拖布 2 片装', brand: '追觅 / 石头', tag: '热销' },
      { name: '一次性拖布 10 片装', brand: '多品牌通用', tag: '便捷' },
      { name: '加厚拖布', brand: '云鲸', tag: '推荐' },
      { name: '除菌拖布', brand: '科沃斯 / 小米', tag: '除菌' },
    ],
    highlights: [
      { title: '超细纤维', desc: '高密度纤维，强效吸附污渍与水渍。' },
      { title: '不留水痕', desc: '优化含水率，擦过即干，不留痕迹。' },
      { title: '可机洗复用', desc: '支持机洗 50 次以上，持久耐用。' },
    ],
    gallery: [
      { title: '超细纤维', desc: '高密度纤维，强效吸附污渍与水渍，去污力强。' },
      { title: '不留水痕', desc: '优化含水率，擦过即干，不留痕迹。' },
      { title: '机洗耐用', desc: '支持机洗 50 次以上，持久耐用，性价比高。' },
    ],
  },
  {
    categoryId: 'accessories',
    specs: [
      { label: '品类', value: '水箱 / 充电座 / 防撞条' },
      { label: '兼容性', value: '原厂级' },
      { label: '质保', value: '12 个月' },
      { label: '材质', value: 'ABS + 硅胶' },
      { label: '认证', value: 'CE / RoHS' },
      { label: '适配', value: '50+ 品牌' },
    ],
    models: [
      { name: '智能水箱 250ml', brand: '追觅 / 石头', tag: '推荐' },
      { name: '快充充电座', brand: '多品牌通用', tag: '热销' },
      { name: '防撞条保护贴', brand: '全品牌适配', tag: '防护' },
      { name: '遥控器 / 清洁工具', brand: '多品牌通用', tag: '配件' },
    ],
    highlights: [
      { title: '全系列覆盖', desc: '水箱、充电座、清洁工具一站配齐。' },
      { title: '原厂级品质', desc: '精密开模，与原机严丝合缝。' },
      { title: '即插即用', desc: '无需调试，安装即用，省心省力。' },
    ],
    gallery: [
      { title: '全系列覆盖', desc: '水箱、充电座、防撞条、清洁工具一站配齐。' },
      { title: '原厂级品质', desc: '精密开模，与原机严丝合缝，ABS + 硅胶材质。' },
      { title: '即插即用', desc: '无需调试，安装即用，省心省力。' },
    ],
  },
]

// 官方线上店铺
export interface ShopInfo {
  id: string
  name: string
  platform: string
  description: string
  url: string // 替换为真实店铺链接
  color: string // 品牌色
  tag: string
}

export const shops: ShopInfo[] = [
  {
    id: 'douyin',
    name: '超觅智能家居',
    platform: '抖音店铺',
    description: '关注抖音官方账号，直播专属福利、新品首发，优惠不容错过。',
    url: 'https://v.douyin.com/4npzyngM789/',
    color: '#FE2C55',
    tag: '直播优惠',
  },
  {
    id: 'tmall',
    name: '超觅旗舰店',
    platform: '天猫店铺',
    description: '天猫官方旗舰店，正品保障、7天无理由退换，一键加购享好价。',
    url: 'https://www.tmall.com/', // TODO: 替换为真实天猫店铺链接
    color: '#FF0036',
    tag: '官方正品',
  },
]

// 默认店铺购买链接：型号未配置具体商品链接时，购买按钮跳转到对应店铺主页
export const defaultBuyLinks = {
  douyin: 'https://v.douyin.com/4npzyngM789/',
  tmall: 'https://www.tmall.com/',
}

// 获取某个型号在指定平台的购买链接（优先用型号专属链接，否则用默认店铺链接）
export function getBuyUrl(model: ProductModel, platform: 'douyin' | 'tmall'): string {
  return platform === 'douyin'
    ? model.douyinUrl ?? defaultBuyLinks.douyin
    : model.tmallUrl ?? defaultBuyLinks.tmall
}

// ============ 素材配置（以下字段全部可选，配置后自动展示，未配置则回退到图标/文字） ============

// 品牌适配 Logo 映射：品牌名 → Logo 图片路径
// 配置后，产品页「适配品牌」墙优先显示 Logo 图；未配置的品牌仍显示文字
export const brandLogos: Record<string, string> = {
  // 示例（取消注释并替换为真实路径即可）：
  // '追觅': '/images/brands/dreame.png',
  // '科沃斯': '/images/brands/ecovacs.png',
  // '石头': '/images/brands/roborock.png',
}

// 厂区/车间图片：配置后，关于我们页「公司简介」区展示图片网格
export const factoryImages: string[] = [
  // 示例：
  // '/images/factory/workshop1.jpg',
  // '/images/factory/production-line.jpg',
  // '/images/factory/team.jpg',
]

// 站点 Logo 与 Favicon：配置后，导航栏与浏览器标签使用自定义图片，未配置则用内置 SVG Logo
export const siteLogo = {
  logo: '', // 站点 Logo 图片，如 '/images/logo/logo.svg'（建议透明背景，高度 36px）
  favicon: '', // 浏览器标签图标，如 '/images/logo/favicon.png'（建议 32×32 或 180×180）
}
