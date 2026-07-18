import { PageHero } from '@/components/layout/PageHero'
import { Reveal } from '@/components/Reveal'
import { Icon } from '@/components/Icon'
import { CTA } from '@/sections/home/CTA'
import { Stats } from '@/sections/home/Stats'
import { milestones, culture, certifications } from '@/data/site'
import { Award, Building2, Users, Globe, Wrench } from 'lucide-react'

export function About() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT ULTRASEEK"
        title={<>关于<span className="tech-gradient-text">超觅</span></>}
        description="专注扫地机器人配件赛道八年，以原厂级品质与全品牌适配能力，服务全球百万家庭。"
      />

      {/* 公司简介 */}
      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <span className="text-sm font-semibold tracking-wider text-primary">OUR STORY</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                以制造实力，重新定义配件品质
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  超觅（Ultraseek）创立于 2017 年，总部位于深圳，是一家专注于扫地机器人配件研发与制造的科技企业。我们相信，每一台扫地机器人都值得拥有原厂级的配件来释放其全部清洁潜能。
                </p>
                <p>
                  从最初几款尘袋的代工起步，到如今拥有自有工厂、自主研发团队，覆盖尘袋、边刷、滤网、滚刷、拖布等全品类配件，深度适配市面 50+ 主流品牌、2000+ 机型，产品远销 40 余个国家与地区。
                </p>
                <p>
                  "超"代表对品质与适配的极致追求，"觅"代表为每一位用户精准寻觅最合适的清洁方案。这是超觅名字的由来，也是我们持续的承诺。
                </p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="grid grid-cols-2 gap-5">
                {[
                  { icon: Building2, value: '8 年', label: '行业深耕' },
                  { icon: Wrench, value: '自有', label: '研发制造基地' },
                  { icon: Users, value: '100万+', label: '服务家庭' },
                  { icon: Globe, value: '40+', label: '出口国家地区' },
                ].map((item) => (
                  <div key={item.label} className="tech-card tech-card-hover p-6">
                    <item.icon className="h-8 w-8 text-primary" />
                    <div className="mt-4 text-2xl font-extrabold tech-gradient-text">{item.value}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{item.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 企业文化 */}
      <section className="relative overflow-hidden navy-bg py-24 sm:py-28">
        <div className="absolute inset-0 grid-pattern-dark opacity-40" />
        <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold tracking-wider text-blue-300">CULTURE</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              我们相信什么
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {culture.map((c, i) => (
              <Reveal key={c.title} delay={i * 120}>
                <div className="group h-full rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-all hover:border-blue-400/30 hover:bg-white/[0.07]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                    <Icon name={c.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-white">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{c.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 发展历程 */}
      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold tracking-wider text-primary">MILESTONES</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              八年成长足迹
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              从初创到全球化，每一步都走得扎实。
            </p>
          </Reveal>

          <div className="relative mt-16">
            {/* 中线 */}
            <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-blue-300 via-blue-200 to-transparent md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-10">
              {milestones.map((m, i) => (
                <Reveal key={m.year} delay={i * 80}>
                  <div className={`relative flex items-start gap-6 md:w-1/2 ${i % 2 === 0 ? 'md:ml-auto md:flex-row' : 'md:mr-auto md:flex-row-reverse md:text-right'}`}>
                    {/* 节点 */}
                    <div className="absolute left-4 top-2 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center md:left-0">
                      <div className="h-3 w-3 rounded-full tech-gradient ring-4 ring-background" />
                    </div>
                    <div className="ml-10 md:ml-0 md:flex-1">
                      <div className="tech-card tech-card-hover p-6">
                        <span className="tech-gradient-text text-2xl font-extrabold">{m.year}</span>
                        <h3 className="mt-1 text-lg font-bold text-foreground">{m.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.description}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 资质认证 */}
      <section className="relative overflow-hidden py-24 sm:py-28">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="absolute right-1/4 top-10 h-64 w-64 rounded-full bg-cyan-200/40 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold tracking-wider text-primary">CERTIFICATIONS</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              权威认证 · 品质背书
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              通过多项国际权威认证，每一件产品都合规、可靠。
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {certifications.map((cert, i) => (
              <Reveal key={cert} delay={i * 70}>
                <div className="tech-card tech-card-hover flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{cert}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Stats />
      <CTA />
    </>
  )
}
