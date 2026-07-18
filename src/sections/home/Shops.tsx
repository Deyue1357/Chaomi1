import { ExternalLink, ShoppingBag } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { DouyinIconColor, TmallIconColor } from '@/components/BrandIcons'
import { shops } from '@/data/site'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  douyin: DouyinIconColor,
  tmall: TmallIconColor,
}

export function Shops() {
  return (
    <section className="relative overflow-hidden navy-bg py-24 sm:py-28">
      <div className="absolute inset-0 grid-pattern-dark opacity-40" />
      <div className="absolute left-1/3 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-wider text-blue-300">OFFICIAL STORES</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            官方线上店铺
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">
            全网官方渠道，正品保障，优惠直达。
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 max-w-3xl mx-auto">
          {shops.map((shop, i) => {
            const IconCmp = iconMap[shop.id]
            return (
              <Reveal key={shop.id} delay={i * 120}>
                <a
                  href={shop.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col items-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-all hover:border-white/20 hover:bg-white/[0.08] hover:shadow-tech"
                >
                  {IconCmp && <IconCmp className="h-16 w-16" />}
                  <h3 className="mt-5 text-xl font-bold text-white">{shop.name}</h3>
                  <span
                    className="mt-1.5 inline-flex rounded-full px-3 py-0.5 text-xs font-medium"
                    style={{ backgroundColor: `${shop.color}20`, color: shop.color }}
                  >
                    {shop.platform}
                  </span>
                  <p className="mt-4 text-center text-sm leading-relaxed text-white/55">
                    {shop.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-300 transition-colors group-hover:text-white">
                    <ShoppingBag className="h-4 w-4" />
                    进店选购
                    <ExternalLink className="h-3.5 w-3.5" />
                  </div>

                  {/* 标签 */}
                  <span
                    className="absolute right-4 top-4 rounded-full px-2.5 py-0.5 text-[10px] font-semibold text-white"
                    style={{ backgroundColor: shop.color }}
                  >
                    {shop.tag}
                  </span>
                </a>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
