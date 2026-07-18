import { Reveal } from '@/components/Reveal'
import { FlaskConical, Cog, ShieldCheck, PackageCheck } from 'lucide-react'

const steps = [
  {
    icon: FlaskConical,
    title: '严选材料',
    en: 'Material',
    description: '与全球材料供应商合作，从纤维到滤材，每一项原料均通过 RoHS、REACH 合规检测。',
  },
  {
    icon: Cog,
    title: '精密开模',
    en: 'Molding',
    description: '自有模具车间，CNC 精密加工，公差控制在 0.05mm，确保与原机完美贴合。',
  },
  {
    icon: ShieldCheck,
    title: '36 项检测',
    en: 'Testing',
    description: '过滤效率、耐磨、噪音、密封等 36 项实验室检测，品质对标甚至超越原厂标准。',
  },
  {
    icon: PackageCheck,
    title: '极速交付',
    en: 'Delivery',
    description: '全国多地智能仓配，现货直发，48 小时送达主要城市，7 天无理由退换。',
  },
]

export function Process() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-wider text-primary">QUALITY FLOW</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            从材料到交付的全链路把控
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            四道关卡，层层把关，让每一件出厂配件都值得托付。
          </p>
        </Reveal>

        <div className="relative mt-16">
          {/* 连接线 */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent lg:block" />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 120}>
                <div className="relative text-center">
                  <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-tech ring-1 ring-blue-100">
                    <step.icon className="h-7 w-7 text-primary" />
                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full tech-gradient text-[10px] font-bold text-white">
                      {i + 1}
                    </span>
                  </div>
                  <div className="mt-5">
                    <span className="text-xs font-semibold tracking-wider text-primary">{step.en}</span>
                    <h3 className="mt-1 text-lg font-bold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
