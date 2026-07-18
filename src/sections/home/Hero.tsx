import { Link } from 'react-router-dom'
import { ArrowRight, Play, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden navy-bg pt-24">
      {/* 背景层 */}
      <div className="absolute inset-0 grid-pattern-dark opacity-60" />
      <div className="absolute inset-0 navy-radial" />
      {/* 浮动光球 */}
      <div className="absolute left-[8%] top-[20%] h-72 w-72 rounded-full bg-blue-500/20 blur-3xl animate-float-slow" />
      <div className="absolute right-[12%] top-[30%] h-64 w-64 rounded-full bg-cyan-400/15 blur-3xl animate-float" />
      <div className="absolute bottom-[10%] left-[40%] h-80 w-80 rounded-full bg-blue-600/10 blur-3xl animate-float-slow" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* 左：文案 */}
        <div className="text-center lg:text-left">
          <span className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs font-medium text-blue-300 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            扫地机器人配件专业制造商
          </span>

          <h1 className="mt-6 animate-fade-up text-4xl font-extrabold leading-[1.1] tracking-tight text-white delay-100 sm:text-5xl lg:text-6xl xl:text-7xl">
            超凡适配
            <br />
            <span className="tech-gradient-text animate-gradient">觅见洁净未来</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl animate-fade-up text-base leading-relaxed text-white/60 delay-200 sm:text-lg lg:mx-0">
            尘袋 · 边刷 · 滤网 · 滚刷 —— 全品类原厂级配件，
            <br className="hidden sm:block" />
            深度适配市面几乎所有扫地机器人品牌，以科技驱动每一次清洁。
          </p>

          <div className="mt-9 flex animate-fade-up flex-col items-center gap-3 delay-300 sm:flex-row lg:justify-start">
            <Button asChild size="lg" className="tech-gradient h-12 border-0 px-7 text-base text-white shadow-tech-lg hover:opacity-90">
              <Link to="/products">
                探索产品
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 border-white/20 bg-white/5 px-7 text-base text-white backdrop-blur hover:bg-white/10 hover:text-white">
              <Link to="/about">
                <Play className="mr-2 h-4 w-4" />
                了解超觅
              </Link>
            </Button>
          </div>

          {/* 小指标 */}
          <div className="mt-12 flex animate-fade-up items-center justify-center gap-8 delay-400 lg:justify-start">
            {[
              { v: '50+', l: '适配品牌' },
              { v: '2000+', l: '适配型号' },
              { v: '100万+', l: '服务家庭' },
            ].map((s) => (
              <div key={s.l} className="text-center lg:text-left">
                <div className="text-2xl font-bold tech-gradient-text">{s.v}</div>
                <div className="mt-1 text-xs text-white/50">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 右：视觉 */}
        <div className="relative hidden animate-fade-in delay-300 lg:block">
          <HeroVisual />
        </div>
      </div>

      {/* 底部渐隐 */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}

/** Hero 视觉：环绕核心的科技产品意象 */
function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-lg">
      {/* 旋转外环 */}
      <div className="absolute inset-0 animate-spin-slow rounded-full border border-blue-400/20" />
      <div className="absolute inset-8 animate-spin-slow rounded-full border border-cyan-400/15" style={{ animationDirection: 'reverse' }} />
      <div className="absolute inset-16 rounded-full border border-blue-400/10" />

      {/* 中心光核 */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="absolute inset-0 animate-glow-pulse rounded-full bg-blue-500/40 blur-2xl" />
          <div className="relative flex h-40 w-40 items-center justify-center rounded-full tech-gradient shadow-tech-lg">
            <svg viewBox="0 0 80 80" className="h-24 w-24 text-white" fill="none">
              {/* 扫地机雷达意象 */}
              <circle cx="40" cy="40" r="30" stroke="currentColor" strokeWidth="2.5" strokeDasharray="120 20" strokeLinecap="round" opacity="0.5" />
              <circle cx="40" cy="40" r="20" stroke="currentColor" strokeWidth="2.5" opacity="0.7" />
              <circle cx="40" cy="40" r="10" fill="currentColor" />
              <path d="M40 6 V14 M40 66 V74 M6 40 H14 M66 40 H74" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* 浮动配件卡片 */}
      <FloatCard className="left-0 top-12 animate-float" title="尘袋" sub="HEPA 级过滤" />
      <FloatCard className="right-0 top-24 animate-float-slow" title="边刷" sub="防缠绕" />
      <FloatCard className="bottom-16 left-4 animate-float-slow" title="滤网" sub="可水洗" />
      <FloatCard className="bottom-8 right-8 animate-float" title="滚刷" sub="V 型导流" />
    </div>
  )
}

function FloatCard({ className, title, sub }: { className?: string; title: string; sub: string }) {
  return (
    <div className={`absolute ${className ?? ''}`}>
      <div className="glass rounded-xl px-3.5 py-2.5 shadow-tech">
        <div className="text-sm font-semibold text-white">{title}</div>
        <div className="text-[11px] text-blue-300">{sub}</div>
      </div>
    </div>
  )
}
