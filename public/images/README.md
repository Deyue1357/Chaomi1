# 素材目录说明

把图片放进对应子目录，然后在 `src/data/site.ts` 里配置路径即可自动展示。
**所有图片都是可选的** —— 不配置就用内置图标/文字，配置后自动替换为实拍图。

## 目录结构与用途

```
public/images/
├── products/   产品实拍图（首页分类卡 + 产品页）
├── factory/    厂区/车间/团队照（关于我们页）
├── certs/      资质证书扫描件（关于我们页）
├── brands/     适配品牌 Logo（产品页品牌墙，透明 PNG）
└── logo/       站点 Logo + Favicon
```

## 各类素材规范

### 1. 产品图 `products/`（优先级 ★★★）

- **命名**：用分类 id，如 `dust-bag.jpg`、`side-brush.jpg`、`filter.jpg`、`roller-brush.jpg`、`mop-pad.jpg`、`accessories.jpg`
- **尺寸**：800×800（正方形）或 4:3
- **格式**：JPG / WebP，单张 ≤ 300KB
- **建议**：白底或浅灰底实拍，主体居中
- **配置**：在 `site.ts` 的 `productCategories` 对应项加 `image: '/images/products/dust-bag.jpg'`

### 2. 厂区图 `factory/`（优先级 ★★★）

- **命名**：自由命名，如 `workshop1.jpg`、`production-line.jpg`、`team.jpg`
- **尺寸**：1200×800（横版）
- **格式**：JPG，单张 ≤ 500KB
- **配置**：在 `site.ts` 的 `factoryImages` 数组里填路径

### 3. 资质证书 `certs/`（优先级 ★★）

- **命名**：用证书简称，如 `iso9001.jpg`、`ce.jpg`、`high-tech.jpg`
- **尺寸**：600×800（竖版，接近证书实际比例）
- **格式**：JPG / PNG，单张 ≤ 400KB
- **配置**：在 `site.ts` 的 `certifications` 对应项加 `image: '/images/certs/iso9001.jpg'`

### 4. 品牌 Logo `brands/`（优先级 ★★）

- **命名**：品牌拼音或英文，如 `dreame.png`、`ecovacs.png`、`roborock.png`
- **尺寸**：宽 200px 左右，高度不限（等比缩放）
- **格式**：**透明背景 PNG**（必须透明底）
- **配置**：在 `site.ts` 的 `brandLogos` 映射里加 `'追觅': '/images/brands/dreame.png'`

### 5. 站点 Logo / Favicon `logo/`（优先级 ★）

- `logo.svg` 或 `logo.png`：导航栏 Logo，透明背景，高度建议 36px
- `favicon.png`：浏览器标签图标，32×32 或 180×180
- **配置**：在 `site.ts` 的 `siteLogo` 里填 `logo` 和 `favicon` 路径

## 图片优化建议

- 用 TinyPNG / Squoosh 压缩后再上传（可减小 60-80% 体积）
- 产品图统一背景色，视觉更整齐
- 大图建议转 WebP 格式，加载更快
- 文件名用英文小写 + 连字符，避免中文和空格

## 配置示例

在 `src/data/site.ts` 中：

```ts
// 产品图
{ id: 'dust-bag', name: '尘袋', image: '/images/products/dust-bag.jpg', ... }

// 厂区图
export const factoryImages = [
  '/images/factory/workshop1.jpg',
  '/images/factory/production-line.jpg',
]

// 证书图
{ name: 'ISO 9001 质量管理体系', image: '/images/certs/iso9001.jpg' }

// 品牌 Logo
export const brandLogos = {
  '追觅': '/images/brands/dreame.png',
  '科沃斯': '/images/brands/ecovacs.png',
}

// 站点 Logo
export const siteLogo = {
  logo: '/images/logo/logo.svg',
  favicon: '/images/logo/favicon.png',
}
```

配好后告诉我，我帮你重新构建部署上线。
