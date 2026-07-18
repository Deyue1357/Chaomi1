import { Hero } from '@/sections/home/Hero'
import { ProductCategories } from '@/sections/home/ProductCategories'
import { BrandCompatibility } from '@/sections/home/BrandCompatibility'
import { Advantages } from '@/sections/home/Advantages'
import { Process } from '@/sections/home/Process'
import { Stats } from '@/sections/home/Stats'
import { Shops } from '@/sections/home/Shops'
import { CTA } from '@/sections/home/CTA'

export function Home() {
  return (
    <>
      <Hero />
      <ProductCategories />
      <BrandCompatibility />
      <Advantages />
      <Process />
      <Stats />
      <Shops />
      <CTA />
    </>
  )
}
