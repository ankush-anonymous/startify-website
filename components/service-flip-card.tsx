"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceFlipCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  gradientClass: string;
}

export default function ServiceFlipCard({
  icon: Icon,
  title,
  subtitle,
  description,
  features,
  gradientClass,
}: ServiceFlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className="group h-80 [perspective:1000px] cursor-pointer md:cursor-default"
      onClick={handleClick}
    >
      <div 
        className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] 
          ${isFlipped ? '[transform:rotateY(180deg)]' : ''} 
          md:group-hover:[transform:rotateY(180deg)] md:[transform:none]`}
      >
        {/* Front Side - Service Overview */}
        <Card
          className={`absolute inset-0 ${gradientClass} border-0 text-white shadow-xl h-full [backface-visibility:hidden]`}
        >
          <div className="text-center h-full flex flex-col justify-center p-6">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
              <Icon className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <Badge
              variant="secondary"
              className="mb-4 bg-white/20 text-white border-white/30 mx-auto"
            >
              {subtitle}
            </Badge>
            <p className="text-white/90 text-sm leading-relaxed">
              {description}
            </p>
            <div className="mt-6 text-white/80 text-sm font-medium">
              <span className="md:hidden">Tap to see details →</span>
              <span className="hidden md:inline">Hover to see details →</span>
            </div>
          </div>
        </Card>

        {/* Back Side - Detailed Information */}
        <Card className="absolute inset-0 bg-white dark:bg-card border shadow-xl h-full overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="h-full flex flex-col p-6 overflow-hidden">
            {/* Header with back button for mobile */}
            <div className="flex items-center justify-between mb-4 md:hidden">
              <h4 className="font-semibold text-lg">{title}</h4>
              <button 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(false);
                }}
              >
                ← Back
              </button>
            </div>

            <div className="flex-1 pr-1">
              <h5 className="font-semibold mb-3 text-sm uppercase tracking-wide">
                What's Included:
              </h5>
              <ul className="space-y-2">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile-specific footer */}
            <div className="mt-4 pt-4 border-t border-border/50 md:hidden">
              <p className="text-xs text-muted-foreground text-center">
                Tap anywhere to flip back
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
