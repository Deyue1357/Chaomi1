import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface PageHeroProps {
  eyebrow?: string
  title: ReactNode
  description?: string
  className?: string
}

/**
 * 内页通用 Hero 横幅 —— 深色科技背景
 */
export function PageHero({ eyebrow, title, description, className }: PageHeroProps) {
  return (
    <section className={cn('relative overflow-hidden navy-bg pt-32 pb-20 text-white', className)}>
      <div className="absolute inset-0 grid-pattern-dark opacity-50" />
      <div className="absolute -top-24 left-1/2 h-72 w-[44rem] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        {eyebrow && (
          <span className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs font-medium text-blue-300 backdrop-blur">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
