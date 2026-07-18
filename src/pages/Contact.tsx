import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageCircle, Globe } from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { Reveal } from '@/components/Reveal'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { brands } from '@/data/site'

const contactCards = [
  {
    icon: Phone,
    title: '客服热线',
    lines: ['4000751369', '周一至周日 9:00-21:00'],
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    icon: Mail,
    title: '电子邮箱',
    lines: ['3838991320@qq.com'],
    gradient: 'from-cyan-500 to-sky-400',
  },
  {
    icon: MapPin,
    title: '总部地址',
    lines: ['江苏省常州市武进牛塘曹溪村', '新兴路35号'],
    gradient: 'from-sky-500 to-blue-400',
  },
  {
    icon: Clock,
    title: '服务时间',
    lines: ['客服 9:00-21:00 全年无休', '工厂 8:30-17:30 周一至五'],
    gradient: 'from-indigo-500 to-blue-400',
  },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    brand: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    // 模拟提交
    setTimeout(() => {
      setSubmitted(false)
      setForm({ name: '', email: '', phone: '', brand: '', message: '' })
    }, 4000)
  }

  return (
    <>
      <PageHero
        eyebrow="CONTACT US"
        title={<>联系<span className="tech-gradient-text">超觅</span></>}
        description="无论是产品咨询、批量采购还是合作洽谈，我们的专业团队随时为你服务。"
      />

      {/* 联系卡片 */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card, i) => (
              <Reveal key={card.title} delay={i * 90}>
                <div className="tech-card tech-card-hover group h-full p-7">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${card.gradient} shadow-tech`}>
                    <card.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-foreground">{card.title}</h3>
                  <div className="mt-2 space-y-1">
                    {card.lines.map((line) => (
                      <p key={line} className="text-sm text-muted-foreground">{line}</p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 表单 + 地图 */}
      <section className="relative overflow-hidden pb-24 sm:pb-28">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="absolute left-10 top-20 h-64 w-64 rounded-full bg-blue-200/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
            {/* 表单 */}
            <Reveal className="lg:col-span-3">
              <div className="tech-card overflow-hidden">
                <div className="tech-gradient px-7 py-6">
                  <h2 className="text-xl font-bold text-white">在线留言</h2>
                  <p className="mt-1 text-sm text-white/80">填写以下信息，我们将在 1 个工作日内回复你。</p>
                </div>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center px-7 py-16 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                      <CheckCircle2 className="h-9 w-9 text-green-600" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-foreground">提交成功！</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      感谢你的留言，我们的顾问会尽快与你联系。
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 px-7 py-7">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">姓名 <span className="text-destructive">*</span></Label>
                        <Input
                          id="name"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="请输入你的姓名"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">手机号 <span className="text-destructive">*</span></Label>
                        <Input
                          id="phone"
                          required
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="请输入手机号码"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="email">邮箱</Label>
                        <Input
                          id="email"
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="请输入电子邮箱"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="brand">扫地机品牌</Label>
                        <Select value={form.brand} onValueChange={(v) => setForm({ ...form, brand: v })}>
                          <SelectTrigger id="brand">
                            <SelectValue placeholder="选择你的品牌" />
                          </SelectTrigger>
                          <SelectContent>
                            {brands.map((b) => (
                              <SelectItem key={b} value={b}>{b}</SelectItem>
                            ))}
                            <SelectItem value="other">其他 / 不确定</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">留言内容 <span className="text-destructive">*</span></Label>
                      <Textarea
                        id="message"
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="请描述你的需求，例如机型、所需配件、采购数量等..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full tech-gradient border-0 text-white shadow-tech hover:opacity-90">
                      <Send className="mr-2 h-4 w-4" />
                      提交留言
                    </Button>
                    <p className="text-center text-xs text-muted-foreground">
                      提交即表示你同意我们的隐私政策，我们承诺保护你的信息。
                    </p>
                  </form>
                )}
              </div>
            </Reveal>

            {/* 侧边信息 */}
            <Reveal delay={150} className="lg:col-span-2">
              <div className="space-y-5">
                {/* 快速入口 */}
                <div className="tech-card p-7">
                  <h3 className="text-lg font-bold text-foreground">快速联系</h3>
                  <div className="mt-4 space-y-3">
                    <a href="tel:4000751369" className="flex items-center gap-3 rounded-xl border border-border p-3.5 transition-all hover:border-primary/40 hover:bg-primary/5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10 text-green-600">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground">电话咨询</div>
                        <div className="text-xs text-muted-foreground">4000751369</div>
                      </div>
                    </a>
                    <a href="#" className="flex items-center gap-3 rounded-xl border border-border p-3.5 transition-all hover:border-primary/40 hover:bg-primary/5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10 text-green-600">
                        <MessageCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground">微信客服</div>
                        <div className="text-xs text-muted-foreground">扫码添加专属顾问</div>
                      </div>
                    </a>
                    <a href="mailto:3838991320@qq.com" className="flex items-center gap-3 rounded-xl border border-border p-3.5 transition-all hover:border-primary/40 hover:bg-primary/5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600">
                        <Globe className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground">商务合作</div>
                        <div className="text-xs text-muted-foreground">business@ultraseek.com</div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* 官方店铺 */}
                <div className="tech-card p-7">
                  <h3 className="text-lg font-bold text-foreground">官方店铺</h3>
                  <div className="mt-4 space-y-3">
                    <a href="#" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-border p-3.5 transition-all hover:border-[#00F2EA]/40 hover:bg-[#00F2EA]/5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: '#1F1F1F' }}>
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                          <path d="M16 4C16 4 15 7 12 7V7V14C12 15.1 11.1 16 10 16C8.9 16 8 15.1 8 14C8 12.9 8.9 12 10 12V9C7.3 9 5 11.3 5 14C5 16.8 7.3 19 10 19C12.8 19 15 16.8 15 14V10C16.5 10.8 17.5 11 19 11V8C17.5 8 16.5 7 16 4Z" fill="#00F2EA" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground">抖音店铺</div>
                        <div className="text-xs text-muted-foreground">超觅官方旗舰店</div>
                      </div>
                    </a>
                    <a href="#" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-border p-3.5 transition-all hover:border-[#FF0036]/40 hover:bg-[#FF0036]/5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: '#FF0036' }}>
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="white">
                          <path d="M4 9L6 4L9 8L7 10Z" />
                          <path d="M20 9L18 4L15 8L17 10Z" />
                          <path d="M5 9C5 9 7 17 12 17C17 17 19 9 19 9H5Z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground">天猫店铺</div>
                        <div className="text-xs text-muted-foreground">超觅旗舰店</div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* 地图占位 */}
                <div className="tech-card overflow-hidden">
                  <div className="relative h-56 overflow-hidden bg-navy-900">
                    <div className="absolute inset-0 grid-pattern-dark opacity-60" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <div className="relative">
                        <div className="absolute inset-0 animate-glow-pulse rounded-full bg-blue-500/40 blur-xl" />
                        <div className="relative flex h-14 w-14 items-center justify-center rounded-full tech-gradient shadow-tech-lg">
                          <MapPin className="h-7 w-7 text-white" />
                        </div>
                      </div>
                      <p className="mt-4 text-sm font-medium text-white">深圳市南山区科技园南区</p>
                      <p className="mt-1 text-xs text-white/50">超觅科技大厦 8-12 层</p>
                    </div>
                  </div>
                  <div className="border-t border-border p-4">
                    <Button variant="outline" className="w-full" asChild>
                      <a href="https://map.qq.com/" target="_blank" rel="noreferrer">
                        <MapPin className="mr-2 h-4 w-4" />
                        查看地图导航
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
