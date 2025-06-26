"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface GSAPScrollAnimationProps {
  children: React.ReactNode
  className?: string
  animation?: "fadeUp" | "fadeDown" | "fadeLeft" | "fadeRight" | "scale" | "rotate" | "slideUp"
  delay?: number
  duration?: number
  stagger?: number
  trigger?: string
}

export default function GSAPScrollAnimation({
  children,
  className = "",
  animation = "fadeUp",
  delay = 0,
  duration = 1,
  stagger = 0,
  trigger,
}: GSAPScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const element = elementRef.current
    const childElements = stagger > 0 ? element.children : [element]

    // Set initial state based on animation type
    const getInitialState = () => {
      switch (animation) {
        case "fadeUp":
          return { opacity: 0, y: 50 }
        case "fadeDown":
          return { opacity: 0, y: -50 }
        case "fadeLeft":
          return { opacity: 0, x: -50 }
        case "fadeRight":
          return { opacity: 0, x: 50 }
        case "scale":
          return { opacity: 0, scale: 0.8 }
        case "rotate":
          return { opacity: 0, rotation: 10 }
        case "slideUp":
          return { y: 100 }
        default:
          return { opacity: 0, y: 50 }
      }
    }

    const getFinalState = () => {
      switch (animation) {
        case "slideUp":
          return { y: 0, ease: "power2.out" }
        default:
          return { opacity: 1, x: 0, y: 0, scale: 1, rotation: 0, ease: "power2.out" }
      }
    }

    // Set initial state
    gsap.set(childElements, getInitialState())

    // Create animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger || element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    })

    if (stagger > 0) {
      tl.to(childElements, {
        ...getFinalState(),
        duration,
        delay,
        stagger,
      })
    } else {
      tl.to(element, {
        ...getFinalState(),
        duration,
        delay,
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [animation, delay, duration, stagger, trigger])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}
