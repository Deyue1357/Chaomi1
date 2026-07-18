import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { Home } from '@/pages/Home'
import { About } from '@/pages/About'
import { Products } from '@/pages/Products'
import { Contact } from '@/pages/Contact'
import { NotFound } from '@/pages/NotFound'
import { siteLogo } from '@/data/site'

function App() {
  // 配置 siteLogo.favicon 后，运行时动态切换浏览器标签图标
  useEffect(() => {
    if (siteLogo.favicon) {
      let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement | null
      if (!link) {
        link = document.createElement('link')
        link.rel = 'icon'
        document.head.appendChild(link)
      }
      link.href = siteLogo.favicon
    }
  }, [])

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default App
