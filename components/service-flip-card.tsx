"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface ServiceFlipCardProps {
  icon: LucideIcon
  title: string
  subtitle: string
  description: string
  features: string[]
  gradientClass: string
}

export default function ServiceFlipCard({
  icon: Icon,
  title,
  subtitle,
  description,
  features,
  gradientClass,
}: ServiceFlipCardProps) {
  return (
    <div className="flip-card h-80">
      <div className="flip-card-inner h-full">
        {/* Front Side - Service Overview */}
        <Card className={`flip-card-front ${gradientClass} border-0 text-white shadow-xl h-full`}>
          <div className="text-center h-full flex flex-col justify-center p-6">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
              <Icon className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              {subtitle}
            </Badge>
            <p className="text-white/90 text-lg leading-relaxed">{description}</p>
            <div className="mt-6 text-white/80 text-sm font-medium">Hover to see details →</div>
          </div>
        </Card>

        {/* Back Side - Detailed Information */}
      <Card className="flip-card-back bg-white dark:bg-card border shadow-xl h-full overflow-hidden">
  <div className="h-full flex flex-col p-6 overflow-hidden">
    <div className="flex items-center gap-3 mb-4 flex-shrink-0">
      <div className={`w-10 h-10 ${gradientClass} rounded-lg flex items-center justify-center`}>
        <Icon className="h-5 w-5 text-white" />
      </div>
      <div>
        <h4 className="font-bold text-lg">{title}</h4>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
    </div>

    {/* Make this scrollable and capped in height */}
    <div className="flex-1 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-muted-foreground/50">
      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{description}</p>

      <h5 className="font-semibold mb-3 text-sm uppercase tracking-wide">What's Included:</h5>
      <ul className="space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start text-sm">
            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
</Card>

      </div>
    </div>
  )
}
