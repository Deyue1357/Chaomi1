import { useState, useEffect } from 'react'
import { ImageIcon, Maximize2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Icon } from '@/components/Icon'
import type { ProductGalleryImage } from '@/data/site'

interface ProductGalleryProps {
  gallery: ProductGalleryImage[]
  /** 分类图标名，用于占位图 */
  icon?: string
  /** 分类渐变色（tailwind from-... to-...），用于占位图背景 */
  gradient?: string
}

/**
 * 产品详情图组件
 * - 大图主区 + 底部图文浮层 + 下方缩略图条
 * - 每张图有 image 时显示实拍图，无 image 时显示渐变占位 + 图标
 * - 切换分类时自动重置到第一张
 */
export function ProductGallery({ gallery, icon, gradient = 'from-blue-500 to-cyan-400' }: ProductGalleryProps) {
  const [active, setActive] = useState(0)

  // 切换分类时重置到第一张
  useEffect(() => {
    setActive(0)
  }, [gallery])

  if (!gallery || gallery.length === 0) {
    return (
      <div className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-dashed border-border bg-secondary/40">
        <div className="text-center">
          <ImageIcon className="mx-auto h-8 w-8 text-muted-foreground/50" />
          <p className="mt-2 text-sm text-muted-foreground">产品详情图待补充</p>
        </div>
      </div>
    )
  }

  const current = gallery[active]

  return (
    <div>
      {/* 大图主区 */}
      <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-secondary/30 shadow-tech">
        {current.image ? (
          <img
            src={current.image}
            alt={current.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className={cn('relative h-full w-full bg-gradient-to-br', gradient)}>
            {/* 装饰网格 */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.3) 1px,transparent 1px)', backgroundSize: '32px 32px' }} />
            {/* 大图标 */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 animate-glow-pulse rounded-full bg-white/30 blur-2xl" />
                <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-white/15 backdrop-blur-sm ring-1 ring-white/30">
                  {icon ? <Icon name={icon} className="h-10 w-10 text-white" /> : <ImageIcon className="h-10 w-10 text-white" />}
                </div>
              </div>
            </div>
            {/* 角标 */}
            <div className="absolute right-4 top-4 rounded-full bg-black/20 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm">
              示意图 · 待替换实拍图
            </div>
          </div>
        )}

        {/* 底部图文浮层 */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 pt-12">
          <div className="flex items-end justify-between gap-4">
            <div className="min-w-0">
              <h4 className="text-base font-bold text-white">{current.title}</h4>
              <p className="mt-1 text-sm leading-relaxed text-white/75">{current.desc}</p>
            </div>
            <span className="shrink-0 rounded-full bg-white/15 px-2.5 py-1 text-xs font-medium text-white/80 backdrop-blur-sm">
              {active + 1} / {gallery.length}
            </span>
          </div>
        </div>
      </div>

      {/* 缩略图条 */}
      <div className="mt-4 flex gap-3 overflow-x-auto pb-1 [scrollbar-width:thin]">
        {gallery.map((g, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={cn(
              'group/thumb relative aspect-square w-24 shrink-0 overflow-hidden rounded-xl border-2 transition-all',
              active === i
                ? 'border-primary shadow-tech'
                : 'border-transparent opacity-60 hover:opacity-100'
            )}
          >
            {g.image ? (
              <img src={g.image} alt={g.title} loading="lazy" className="h-full w-full object-cover" />
            ) : (
              <div className={cn('flex h-full w-full flex-col items-center justify-center gap-1 bg-gradient-to-br', gradient)}>
                <Maximize2 className="h-4 w-4 text-white/70" />
                <span className="text-[10px] font-medium text-white/70">{i + 1}</span>
              </div>
            )}
            {/* 选中标识 */}
            {active === i && (
              <div className="absolute inset-0 ring-2 ring-inset ring-primary/30" />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
