"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function TimelineAnimation() {
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!timelineRef.current) return

    const timeline = timelineRef.current
    const items = timeline.querySelectorAll(".timeline-item")
    const dots = timeline.querySelectorAll(".timeline-dot")
    const cards = timeline.querySelectorAll(".timeline-card")

    // Set initial states
    gsap.set(cards, {
      opacity: 0,
      scale: 0.8,
      x: (index) => (index % 2 === 0 ? -100 : 100),
    })
    gsap.set(dots, { opacity: 0, scale: 0 })

    // Create timeline animations for each item
    items.forEach((item, index) => {
      const card = item.querySelector(".timeline-card")
      const dot = item.querySelector(".timeline-dot")

      // Card animation
      gsap.to(card, {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
          onEnter: () => {
            // Animate dot when card enters
            gsap.to(dot, {
              opacity: 1,
              scale: 1,
              duration: 0.4,
              ease: "back.out(2)",
              delay: 0.3,
            })
          },
          onLeave: () => {
            // Reverse dot animation when scrolling past
            gsap.to(dot, {
              opacity: 0,
              scale: 0,
              duration: 0.3,
              ease: "power2.in",
            })
          },
          onEnterBack: () => {
            // Re-animate dot when scrolling back up
            gsap.to(dot, {
              opacity: 1,
              scale: 1,
              duration: 0.4,
              ease: "back.out(2)",
              delay: 0.2,
            })
          },
          onLeaveBack: () => {
            // Hide dot when scrolling back up past the trigger
            gsap.to(dot, {
              opacity: 0,
              scale: 0,
              duration: 0.3,
              ease: "power2.in",
            })
          },
        },
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return <div ref={timelineRef} className="timeline-container" />
}
