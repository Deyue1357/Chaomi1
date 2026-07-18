import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { getBuyUrl, type ProductModel } from '@/data/site'

export interface CartItem {
  key: string
  categoryId: string
  name: string
  brand: string
  tag: string
  douyinUrl: string
  tmallUrl: string
}

interface CartContextValue {
  items: CartItem[]
  count: number
  hasItem: (key: string) => boolean
  addItem: (categoryId: string, model: ProductModel) => void
  removeItem: (key: string) => void
  clear: () => void
}

const CartContext = createContext<CartContextValue | null>(null)
const STORAGE_KEY = 'chaomi-cart-v1'

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? (JSON.parse(raw) as CartItem[]) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // 忽略写入异常（隐私模式等）
    }
  }, [items])

  const hasItem = (key: string) => items.some((i) => i.key === key)

  const addItem = (categoryId: string, model: ProductModel) => {
    const key = `${categoryId}-${model.name}`
    setItems((prev) => {
      if (prev.some((i) => i.key === key)) return prev // 已在清单中，不重复添加
      return [
        ...prev,
        {
          key,
          categoryId,
          name: model.name,
          brand: model.brand,
          tag: model.tag,
          douyinUrl: getBuyUrl(model, 'douyin'),
          tmallUrl: getBuyUrl(model, 'tmall'),
        },
      ]
    })
  }

  const removeItem = (key: string) => {
    setItems((prev) => prev.filter((i) => i.key !== key))
  }

  const clear = () => setItems([])

  return (
    <CartContext.Provider value={{ items, count: items.length, hasItem, addItem, removeItem, clear }}>
      {children}
    </CartContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart 必须在 CartProvider 内使用')
  return ctx
}
