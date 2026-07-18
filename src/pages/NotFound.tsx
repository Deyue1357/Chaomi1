import { Link } from 'react-router-dom'
import { Home as HomeIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden navy-bg pt-24">
      <div className="absolute inset-0 grid-pattern-dark opacity-40" />
      <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="relative mx-auto max-w-2xl px-4 text-center">
        <div className="tech-gradient-text text-8xl font-extrabold">404</div>
        <h1 className="mt-4 text-2xl font-bold text-white sm:text-3xl">页面走丢了</h1>
        <p className="mt-3 text-white/60">你访问的页面不存在或已被移动。</p>
        <Button asChild className="mt-8 tech-gradient border-0 text-white">
          <Link to="/">
            <HomeIcon className="mr-2 h-4 w-4" />
            返回首页
          </Link>
        </Button>
      </div>
    </section>
  )
}
