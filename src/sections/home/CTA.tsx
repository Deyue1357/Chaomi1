import { Link } from 'react-router-dom'
import { ArrowRight, PhoneCall } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/Reveal'

export function CTA() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl tech-gradient px-8 py-16 text-center shadow-tech-lg sm:px-16">
            {/* 装饰 */}
            <div className="absolute inset-0 grid-pattern-dark opacity-30" />
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />

            <div className="relative">
              <h2 className="mx-auto max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                让你的扫地机器人
                <br className="hidden sm:block" />
                始终保持最佳状态
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base text-white/80 sm:text-lg">
                立即获取适配你机型的原厂级配件方案，专业团队 1 对 1 服务。
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-12 border-0 bg-white px-7 text-base text-blue-600 shadow-lg hover:bg-white/90">
                  <Link to="/contact">
                    获取专属报价
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-12 border-white/40 bg-white/10 px-7 text-base text-white backdrop-blur hover:bg-white/20 hover:text-white">
                  <a href="tel:4000751369">
                    <PhoneCall className="mr-2 h-5 w-5" />
                    4000751369
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
