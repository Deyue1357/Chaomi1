import { Link } from 'react-router-dom'
import { ArrowUpRight, ShoppingBag, ArrowRight } from 'lucide-react'
import { Icon } from '@/components/Icon'
import { Reveal } from '@/components/Reveal'
import { Button } from '@/components/ui/button'
import { productCategories, defaultBuyLinks } from '@/data/site'

export function ProductCategories() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-wider text-primary">PRODUCTS</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            全品类配件 · 一站配齐
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            从尘袋到滚刷，覆盖扫地机器人全生命周期耗材，原厂级品质，让清洁始终如新。
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 80}>
              <div className="group tech-card tech-card-hover flex h-full flex-col overflow-hidden p-7">
                {/* 顶部图标 */}
                <div className="flex items-start justify-between">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${cat.gradient} shadow-tech`}>
                    <Icon name={cat.icon} className="h-7 w-7 text-white" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>

                <h3 className="mt-5 text-xl font-bold text-foreground">
                  {cat.name}
                  <span className="ml-2 text-sm font-medium text-muted-foreground">{cat.enName}</span>
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {cat.description}
                </p>

                {/* 特性标签 */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {cat.features.map((f) => (
                    <span
                      key={f}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* 操作按钮 */}
                <div className="mt-auto flex items-center gap-2 pt-6">
                  <Button asChild size="sm" className="flex-1 tech-gradient border-0 text-white">
                    <a href={defaultBuyLinks.douyin} target="_blank" rel="noreferrer">
                      <ShoppingBag className="mr-1 h-3.5 w-3.5" />立即购买
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline" className="flex-1">
                    <Link to="/products">
                      查看详情
                      <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
