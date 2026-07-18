import { cn } from '@/lib/utils'
import { siteLogo } from '@/data/site'

interface LogoProps {
  className?: string
  variant?: 'light' | 'dark'
  showText?: boolean
}

/**
 * 超觅 Ultraseek Logo
 * 默认由搜索/雷达意象演化而来 —— 圆环 + 定位核心，寓意"精准适配，超凡寻觅"
 * 配置 siteLogo.logo 后自动切换为自定义图片 Logo
 */
export function Logo({ className, variant = 'dark', showText = true }: LogoProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-foreground'
  const subColor = variant === 'light' ? 'text-white/60' : 'text-muted-foreground'

  // 自定义图片 Logo 优先
  if (siteLogo.logo) {
    return (
      <div className={cn('flex items-center gap-2.5', className)}>
        <img src={siteLogo.logo} alt="超觅 Ultraseek" className="h-9 w-auto shrink-0" />
        {showText && (
          <div className="flex flex-col leading-none">
            <span className={cn('text-lg font-extrabold tracking-tight', textColor)}>
              超觅
            </span>
            <span className={cn('text-[10px] font-semibold tracking-[0.2em]', subColor)}>
              ULTRASEEK
            </span>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <svg
        viewBox="0 0 40 40"
        className="h-9 w-9 shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="ultraseek-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0084FF" />
            <stop offset="0.5" stopColor="#00B8FF" />
            <stop offset="1" stopColor="#00E0FF" />
          </linearGradient>
        </defs>
        {/* 外环 */}
        <circle cx="20" cy="20" r="16" stroke="url(#ultraseek-grad)" strokeWidth="2.5" strokeDasharray="78 14" strokeLinecap="round" transform="rotate(-30 20 20)" />
        {/* 定位核心 */}
        <circle cx="20" cy="20" r="6.5" fill="url(#ultraseek-grad)" />
        <circle cx="20" cy="20" r="2.5" fill="white" />
        {/* 信号波 */}
        <path d="M30 10 L33 7" stroke="url(#ultraseek-grad)" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M32 14 L35.5 11.5" stroke="url(#ultraseek-grad)" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
      </svg>
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={cn('text-lg font-extrabold tracking-tight', textColor)}>
            超觅
          </span>
          <span className={cn('text-[10px] font-semibold tracking-[0.2em]', subColor)}>
            ULTRASEEK
          </span>
        </div>
      )}
    </div>
  )
}
