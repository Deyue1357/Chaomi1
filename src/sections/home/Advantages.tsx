import { Icon } from '@/components/Icon'
import { Reveal } from '@/components/Reveal'
import { advantages } from '@/data/site'

export function Advantages() {
  return (
    <section className="relative py-24 sm:py-28">
      {/* 背景装饰 */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute right-0 top-1/4 h-64 w-64 rounded-full bg-blue-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-wider text-primary">WHY ULTRASEEK</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            为什么选择超觅
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            以制造实力与适配能力构筑壁垒，让每一件配件都经得起考验。
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((adv, i) => (
            <Reveal key={adv.title} delay={i * 100}>
              <div className="group tech-card tech-card-hover h-full p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon name={adv.icon} className="h-6 w-6" />
                </div>

                <div className="mt-5">
                  <span className="tech-gradient-text text-3xl font-extrabold">{adv.metric}</span>
                  <span className="ml-1.5 text-sm text-muted-foreground">{adv.metricLabel}</span>
                </div>

                <h3 className="mt-3 text-lg font-bold text-foreground">{adv.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {adv.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
