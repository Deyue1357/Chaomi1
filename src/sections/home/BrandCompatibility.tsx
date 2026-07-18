import { Reveal } from '@/components/Reveal'
import { brands } from '@/data/site'

export function BrandCompatibility() {
  return (
    <section className="relative overflow-hidden navy-bg py-24 sm:py-28">
      <div className="absolute inset-0 grid-pattern-dark opacity-40" />
      <div className="absolute -top-32 left-1/3 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-wider text-blue-300">COMPATIBILITY</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            几乎适配所有品牌
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">
            深度兼容市面主流扫地机器人品牌，无论你使用哪一台，都能找到原厂级配件。
          </p>
        </Reveal>

        <Reveal delay={150} className="mt-14">
          <div className="flex flex-wrap justify-center gap-3">
            {brands.map((brand, i) => (
              <span
                key={brand}
                style={{ animationDelay: `${i * 50}ms` }}
                className="group relative cursor-default rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/70 backdrop-blur transition-all hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-white"
              >
                {brand}
              </span>
            ))}
            <span className="rounded-xl border border-dashed border-blue-400/30 bg-blue-500/5 px-5 py-3 text-sm font-medium text-blue-300">
              + 更多品牌持续适配中
            </span>
          </div>
        </Reveal>

        <Reveal delay={300} className="mt-12 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <p className="text-sm text-white/50">找不到你的型号？</p>
          <a
            href="#/contact"
            className="text-sm font-semibold text-blue-300 underline-offset-4 hover:underline"
          >
            联系客服查询适配方案 →
          </a>
        </Reveal>
      </div>
    </section>
  )
}
