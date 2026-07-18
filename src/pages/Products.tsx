import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, ArrowRight, Search, ShieldCheck, Plus, ShoppingBag } from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { Reveal } from '@/components/Reveal'
import { Icon } from '@/components/Icon'
import { CTA } from '@/sections/home/CTA'
import { Button } from '@/components/ui/button'
import { productCategories, productDetails, brands, getBuyUrl, defaultBuyLinks } from '@/data/site'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

export function Products() {
  const [activeId, setActiveId] = useState(productCategories[0].id)
  const { addItem, hasItem } = useCart()

  const activeCategory = productCategories.find((c) => c.id === activeId)!
  const activeDetail = productDetails.find((d) => d.categoryId === activeId)!

  return (
    <>
      <PageHero
        eyebrow="PRODUCTS & SERVICES"
        title={<>产品<span className="tech-gradient-text">服务</span></>}
        description="全品类扫地机器人配件，原厂级品质，深度适配市面几乎所有品牌。选择分类，找到适合你机器的配件方案。"
      />

      {/* 分类导航 */}
      <section className="sticky top-[68px] z-30 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {productCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveId(cat.id)}
                className={cn(
                  'flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all',
                  activeId === cat.id
                    ? 'tech-gradient text-white shadow-tech'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/70'
                )}
              >
                <Icon name={cat.icon} className="h-4 w-4" />
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 产品详情 */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* 分类标题 */}
          <Reveal key={`head-${activeId}`}>
            <div className="flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <div className={cn('flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br shadow-tech', activeCategory.gradient)}>
                  <Icon name={activeCategory.icon} className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                    {activeCategory.name}
                    <span className="ml-2 text-base font-medium text-muted-foreground">{activeCategory.enName}</span>
                  </h2>
                  <p className="mt-1 max-w-xl text-sm text-muted-foreground">{activeCategory.description}</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* 左：核心亮点 */}
            <Reveal key={`high-${activeId}`} className="lg:col-span-2">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                {activeDetail.highlights.map((h, i) => (
                  <div key={h.title} className="tech-card tech-card-hover p-6" style={{ animationDelay: `${i * 80}ms` }}>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Check className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-base font-bold text-foreground">{h.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.desc}</p>
                  </div>
                ))}
              </div>

              {/* 产品型号 */}
              <div className="mt-8">
                <h3 className="mb-4 text-sm font-semibold tracking-wide text-muted-foreground">热门型号</h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {activeDetail.models.map((m) => {
                    const itemKey = `${activeId}-${m.name}`
                    const added = hasItem(itemKey)
                    return (
                      <div key={m.name} className="group flex flex-col rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/40 hover:shadow-tech">
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-sm font-semibold text-foreground">{m.name}</span>
                            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">{m.tag}</span>
                          </div>
                          <div className="mt-1 text-xs text-muted-foreground">{m.brand}</div>
                        </div>
                        <div className="mt-3 flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-8 flex-1"
                            onClick={() => addItem(activeId, m)}
                            disabled={added}
                          >
                            {added ? (
                              <><Check className="mr-1 h-3.5 w-3.5" />已加入</>
                            ) : (
                              <><Plus className="mr-1 h-3.5 w-3.5" />加入清单</>
                            )}
                          </Button>
                          <Button size="sm" className="h-8 flex-1 tech-gradient border-0 text-white" asChild>
                            <a href={getBuyUrl(m, 'douyin')} target="_blank" rel="noreferrer">
                              <ShoppingBag className="mr-1 h-3.5 w-3.5" />立即购买
                            </a>
                          </Button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </Reveal>

            {/* 右：规格表 */}
            <Reveal key={`spec-${activeId}`} delay={120}>
              <div className="tech-card sticky top-32 overflow-hidden">
                <div className="tech-gradient px-6 py-4">
                  <h3 className="text-base font-bold text-white">产品规格</h3>
                  <p className="text-xs text-white/70">技术参数 · 标准配置</p>
                </div>
                <div className="divide-y divide-border">
                  {activeDetail.specs.map((spec) => (
                    <div key={spec.label} className="flex items-center justify-between px-6 py-3.5">
                      <span className="text-sm text-muted-foreground">{spec.label}</span>
                      <span className="text-sm font-semibold text-foreground">{spec.value}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-2 border-t border-border p-4">
                  <Button asChild className="w-full tech-gradient border-0 text-white">
                    <a href={defaultBuyLinks.douyin} target="_blank" rel="noreferrer">
                      <ShoppingBag className="mr-2 h-4 w-4" />
                      立即购买
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/contact">
                      咨询此产品
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 适配查询 */}
      <section className="relative overflow-hidden navy-bg py-24 sm:py-28">
        <div className="absolute inset-0 grid-pattern-dark opacity-40" />
        <div className="absolute left-1/3 top-0 h-64 w-64 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold tracking-wider text-blue-300">FIND YOUR FIT</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              找到适配你机器的配件
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">
              我们已为以下品牌完成全型号适配，输入你的机型即可获取专属方案。
            </p>
          </Reveal>

          {/* 搜索框 */}
          <Reveal delay={150} className="mx-auto mt-10 max-w-xl">
            <div className="flex items-center gap-2 rounded-2xl glass p-2">
              <div className="flex flex-1 items-center gap-2 px-3">
                <Search className="h-5 w-5 text-white/40" />
                <input
                  type="text"
                  placeholder="输入品牌或型号，如 追觅 X20"
                  className="w-full bg-transparent py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none"
                />
              </div>
              <Button className="tech-gradient border-0 text-white">
                查询
              </Button>
            </div>
          </Reveal>

          <Reveal delay={300} className="mt-12">
            <div className="flex flex-wrap justify-center gap-3">
              {brands.map((brand) => (
                <span
                  key={brand}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/70 backdrop-blur transition-all hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-white"
                >
                  {brand}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 品质承诺 */}
      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { title: '12 个月质保', desc: '所有配件享 12 个月质保，质量问题免费换新。' },
              { title: '7 天无理由', desc: '不满意 7 天内无理由退换，购物零风险。' },
              { title: '1 对 1 顾问', desc: '专属顾问协助选型，确保适配无误。' },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="tech-card tech-card-hover flex items-start gap-4 p-7">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
