import {
  Wind, Brush, Filter, RotateCw, Droplets, Boxes,
  ShieldCheck, Sparkles, Factory, Truck,
  Target, Eye, Heart,
  type LucideIcon,
} from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  bag: Wind,
  brush: Brush,
  filter: Filter,
  roller: RotateCw,
  mop: Droplets,
  parts: Boxes,
  shield: ShieldCheck,
  sparkles: Sparkles,
  factory: Factory,
  truck: Truck,
  target: Target,
  eye: Eye,
  heart: Heart,
}

interface IconProps {
  name: string
  className?: string
}

export function Icon({ name, className }: IconProps) {
  const Cmp = iconMap[name] ?? Boxes
  return <Cmp className={className} />
}
