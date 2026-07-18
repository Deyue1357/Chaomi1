import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import { Logo } from '@/components/Logo'
import { DouyinIcon, TmallIcon } from '@/components/BrandIcons'
import { productCategories, shops } from '@/data/site'

const quickLinks = [
  { name: '首页', path: '/' },
  { name: '关于我们', path: '/about' },
  { name: '产品服务', path: '/products' },
  { name: '联系我们', path: '/contact' },
]

const socials = [
  { icon: DouyinIcon, label: '抖音店铺', href: shops[0]?.url ?? '#', color: 'hover:text-[#00F2EA]' },
  { icon: TmallIcon, label: '天猫店铺', href: shops[1]?.url ?? '#', color: 'hover:text-[#FF0036]' },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden navy-bg text-white/70">
      {/* 顶部发光线 */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />
      <div className="absolute inset-0 grid-pattern-dark opacity-40" />
      <div className="absolute -top-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* 品牌区 */}
          <div className="lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-4 text-sm leading-relaxed text-white/55">
              专业扫地机器人配件制造商，全品类适配市面几乎所有品牌，以科技驱动清洁体验。
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className={`flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/60 transition-all hover:border-blue-400/40 hover:bg-blue-500/10 ${s.color}`}
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">快速导航</h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/55 transition-colors hover:text-blue-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 产品分类 */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">产品分类</h4>
            <ul className="space-y-3 text-sm">
              {productCategories.slice(0, 5).map((cat) => (
                <li key={cat.id}>
                  <Link
                    to="/products"
                    className="text-white/55 transition-colors hover:text-blue-300"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">联系我们</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5 text-white/55">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                <span>4000751369</span>
              </li>
              <li className="flex items-start gap-2.5 text-white/55">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                <span>3838991320@qq.com</span>
              </li>
              <li className="flex items-start gap-2.5 text-white/55">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                <span className="text-xs">江苏省常州市武进牛塘曹溪村新兴路35号</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
          <p>© 2025 超觅 Ultraseek 科技有限公司. 保留所有权利.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white/70">隐私政策</a>
            <a href="#" className="transition-colors hover:text-white/70">服务条款</a>
            <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white/70">苏ICP备2026042752号</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
