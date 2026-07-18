import { useEffect, useState } from 'react'
import { Reveal } from '@/components/Reveal'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { stats } from '@/data/site'

function useCountUp(target: number, run: boolean, duration = 1600) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!run) return
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      // easeOutExpo
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p)
      setValue(target * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, run, duration])
  return value
}

function StatItem({ value, suffix, label, run }: { value: number; suffix: string; label: string; run: boolean }) {
  const v = useCountUp(value, run)
  const display = value % 1 === 0 ? Math.round(v).toLocaleString() : v.toFixed(1)
  return (
    <div className="text-center">
      <div className="tech-gradient-text text-4xl font-extrabold sm:text-5xl lg:text-6xl">
        {display}
        <span className="text-3xl sm:text-4xl">{suffix}</span>
      </div>
      <div className="mt-2 text-sm text-white/60 sm:text-base">{label}</div>
    </div>
  )
}

export function Stats() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.3 })

  return (
    <section ref={ref} className="relative overflow-hidden navy-bg py-20">
      <div className="absolute inset-0 grid-pattern-dark opacity-40" />
      <div className="absolute left-1/2 top-0 h-40 w-[50rem] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            数据见证信赖
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} run={visible} />
          ))}
        </div>
      </div>
    </section>
  )
}
