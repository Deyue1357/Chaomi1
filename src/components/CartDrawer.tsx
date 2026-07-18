import { useState } from 'react'
import { ShoppingCart, X, Trash2, ExternalLink, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

export function CartDrawer() {
  const [open, setOpen] = useState(false)
  const { items, count, removeItem, clear } = useCart()

  return (
    <>
      {/* 浮动按钮 */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full tech-gradient text-white shadow-tech-lg transition-transform hover:scale-105 active:scale-95"
        aria-label="查看购物清单"
      >
        <ShoppingCart className="h-6 w-6" />
        {count > 0 && (
          <span className="absolute -right-1 -top-1 flex h-6 min-w-6 items-center justify-center rounded-full bg-red-500 px-1.5 text-xs font-bold text-white ring-2 ring-background">
            {count}
          </span>
        )}
      </button>

      {/* 遮罩 */}
      <div
        className={cn(
          'fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity',
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
        onClick={() => setOpen(false)}
      />

      {/* 抽屉 */}
      <aside
        className={cn(
          'fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-background shadow-2xl transition-transform duration-300',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* 头部 */}
        <div className="flex items-center justify-between border-b border-border p-5">
          <div className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-bold text-foreground">购物清单</h2>
            {count > 0 && (
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">{count}</span>
            )}
          </div>
          <button
            onClick={() => setOpen(false)}
            className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            aria-label="关闭"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* 清单内容 */}
        <div className="flex-1 overflow-y-auto p-5">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                <ShoppingBag className="h-8 w-8 text-muted-foreground" />
              </div>
              <p className="mt-4 text-sm font-medium text-foreground">购物清单还是空的</p>
              <p className="mt-1 text-xs text-muted-foreground">在产品页选择需要的配件加入清单</p>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item) => (
                <div key={item.key} className="rounded-xl border border-border bg-card p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-sm font-semibold text-foreground">{item.name}</span>
                        <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">{item.tag}</span>
                      </div>
                      <div className="mt-1 text-xs text-muted-foreground">{item.brand}</div>
                    </div>
                    <button
                      onClick={() => removeItem(item.key)}
                      className="shrink-0 rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-red-50 hover:text-red-500"
                      aria-label="移除"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <a
                      href={item.douyinUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-1 items-center justify-center gap-1 rounded-lg px-3 py-1.5 text-xs font-semibold text-white transition-opacity hover:opacity-90"
                      style={{ backgroundColor: '#FE2C55' }}
                    >
                      <ExternalLink className="h-3 w-3" />抖音购买
                    </a>
                    <a
                      href={item.tmallUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-1 items-center justify-center gap-1 rounded-lg px-3 py-1.5 text-xs font-semibold text-white transition-opacity hover:opacity-90"
                      style={{ backgroundColor: '#FF0036' }}
                    >
                      <ExternalLink className="h-3 w-3" />天猫购买
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 底部操作 */}
        {items.length > 0 && (
          <div className="border-t border-border p-5">
            <button
              onClick={clear}
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-border py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-red-200 hover:text-red-500"
            >
              <Trash2 className="h-4 w-4" />清空清单
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
