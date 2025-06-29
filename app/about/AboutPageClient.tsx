"use client"

import Navbar from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import GSAPScrollAnimation from "@/components/gsap-scroll-animation"
import { Heart, Lightbulb, Shield, TrendingUp, Award, Users, Globe, Zap } from "lucide-react"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import { useEffect } from "react"

const coreValues = [
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description:
      "Bank-level security protocols protecting your business data with 99.99% uptime guarantee and SOC 2 compliance.",
  },
  {
    icon: TrendingUp,
    title: "Proven Scalability",
    description:
      "Future-proof solutions that grow seamlessly from startup to enterprise, handling 10x traffic increases effortlessly.",
  },
  {
    icon: Heart,
    title: "Client Success Obsession",
    description:
      "98% client satisfaction rate with dedicated account managers ensuring your success is our primary mission.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Leadership",
    description: "Cutting-edge technology adoption with AI-powered solutions and industry-first implementations.",
  },
]

const leadershipTeam = [
  {
    name: "Burhan Kureshi",
    role: "CEO",
    image: "/placeholder.svg?height=300&width=300",
    linkedinUrl: "#", // Add actual LinkedIn URL
  },
  {
    name: "Vidhi Donda",
    role: "Team Lead/UI/UX Developer",
    image: "/placeholder.svg?height=300&width=300",
    linkedinUrl: "#", // Add actual LinkedIn URL
  },
  {
    name: "Ravjot Sidhu",
    role: "Business Development Manager",
    image: "/placeholder.svg?height=300&width=300",
    linkedinUrl: "#", // Add actual LinkedIn URL
  },
  {
    name: "Ankush",
    role: "Software Developer",
    image: "/placeholder.svg?height=300&width=300",
    linkedinUrl: "#", // Add actual LinkedIn URL
    githubUrl: "#", // Add actual GitHub URL
  },
]

const companyMilestones = [
  {
    year: "2023",
    quarter: "Q1",
    event: "Startify Founded",
    description: "Launched with a mission to democratize enterprise-grade technology for Canadian businesses",
    achievement: "Secured first 10 enterprise clients",
  },
  {
    year: "2023",
    quarter: "Q3",
    event: "Rapid Market Expansion",
    description: "Achieved 100+ successful project deliveries with zero security incidents",
    achievement: "98% client retention rate established",
  },
  {
    year: "2024",
    quarter: "Q1",
    event: "Industry Recognition",
    description: "Named 'Most Trusted IT Partner' by Canadian Business Excellence Awards",
    achievement: "SOC 2 Type II compliance achieved",
  },
  {
    year: "2024",
    quarter: "Q3",
    event: "Technology Leadership",
    description: "Pioneered AI-powered CRM solutions with proprietary machine learning algorithms",
    achievement: "500+ projects completed successfully",
  },
  {
    year: "2025",
    quarter: "Q1",
    event: "CRM Innovation Hub Launch",
    description: "Established Canada's first AI-driven CRM development center with advanced automation capabilities",
    achievement: "Patent pending for intelligent workflow optimization",
  },
  {
    year: "2025",
    quarter: "Q2",
    event: "National Excellence Standard",
    description: "Set new industry benchmarks for digital transformation with 99.9% project success rate",
    achievement: "Recognized as Canada's fastest-growing IT solutions provider",
  },
]

const trustIndicators = [
  { label: "Enterprise Clients Served", value: "200+", icon: Users },
  { label: "Projects Delivered Successfully", value: "500+", icon: Award },
  { label: "Client Satisfaction Rate", value: "98%", icon: Heart },
  { label: "Security Incidents", value: "0", icon: Shield },
  { label: "Average Project ROI", value: "340%", icon: TrendingUp },
  { label: "Countries Served", value: "12", icon: Globe },
  { label: "Uptime Guarantee", value: "99.99%", icon: Zap },
  { label: "Years of Combined Experience", value: "150+", icon: Lightbulb },
]

export default function AboutPageClient() {
  useEffect(() => {
    const handleTimelineScroll = () => {
      const timelineItems = document.querySelectorAll(".timeline-item")

      timelineItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const card = item.querySelector(".timeline-card")
        const dot = item.querySelector(".timeline-dot")

        // Check if item is in viewport
        const isInViewport = rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2

        if (isInViewport) {
          // Animate in
          setTimeout(() => {
            if (card) card.classList.add("animate-in")
            if (card) card.classList.remove("animate-out")
          }, index * 100)

          setTimeout(
            () => {
              if (dot) dot.classList.add("animate-in")
              if (dot) dot.classList.remove("animate-out")
            },
            index * 100 + 200,
          )
        } else {
          // Animate out
          if (card) {
            card.classList.remove("animate-in")
            card.classList.add("animate-out")
          }
          if (dot) {
            dot.classList.remove("animate-in")
            dot.classList.add("animate-out")
          }
        }
      })
    }

    // Add scroll listener
    window.addEventListener("scroll", handleTimelineScroll)

    // Initial check
    handleTimelineScroll()

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleTimelineScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-20">
        {/* Hero Section */}
        <GSAPScrollAnimation animation="fadeUp" className="py-16 bg-gradient-to-r from-blue-500/10 to-purple-600/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="secondary" className="mb-4 backlit-badge-strong">
              🏆 Canada's Most Trusted IT Partner
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Proven Excellence in <span className="text-gradient">Digital Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Since 2023, we've delivered 500+ successful projects with zero security incidents. Trusted by Canada's
              leading enterprises for mission-critical digital transformation initiatives.
            </p>
          </div>
        </GSAPScrollAnimation>

        {/* Trust Indicators */}
        <GSAPScrollAnimation
          animation="slideUp"
          delay={0.2}
         className="py-16 bg-gradient-to-r from-yellow-600 to-orange-400"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <GSAPScrollAnimation animation="fadeUp" delay={0.1}>
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 backlit-text">
                  Trusted by Industry Leaders
                </h2>
                <p className="text-blue-100">Proven track record of delivering exceptional results</p>
              </div>
            </GSAPScrollAnimation>
            <GSAPScrollAnimation animation="fadeUp" stagger={0.1} delay={0.3}>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                {trustIndicators.map((indicator, index) => (
                  <div key={index} className="text-center bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="flex items-center justify-center mb-2">
                      <indicator.icon className="h-6 w-6 text-white/80 mr-2" />
                      <div className="text-xl md:text-2xl font-bold text-white">{indicator.value}</div>
                    </div>
                    <div className="text-blue-100 text-xs font-medium">{indicator.label}</div>
                  </div>
                ))}
              </div>
            </GSAPScrollAnimation>
          </div>
        </GSAPScrollAnimation>

        {/* Mission & Vision with Responsive Lottie */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <GSAPScrollAnimation animation="fadeLeft">
                <div>
                  <Badge variant="secondary" className="mb-4 backlit-badge">
                    🎯 Our Mission
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Empowering Canadian Businesses with Enterprise-Grade Technology
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Our mission is to democratize access to enterprise-grade technology solutions, enabling Canadian
                    businesses of all sizes to compete globally. We believe in building lasting partnerships through
                    transparent communication, proven methodologies, and unwavering commitment to your success.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span>Enterprise-grade solutions accessible to all business sizes</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full" />
                      <span>Transparent pricing with no hidden fees or surprises</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span>Proven methodologies ensuring 98% project success rate</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full" />
                      <span>24/7 Canadian-based support with guaranteed response times</span>
                    </div>
                  </div>
                </div>
              </GSAPScrollAnimation>

              {/* Responsive Lottie Animation */}
              <GSAPScrollAnimation animation="fadeRight" delay={0.3}>
                <div className="relative order-first lg:order-last">
                  {/* Desktop/Tablet: Side by side */}
                  <div className="hidden md:block">
                    <DotLottieReact
                      src="https://lottie.host/106ebcf5-43cd-4379-bcfc-b7ea34326d6e/FfvWmfZ7C4.lottie"
                      loop
                      autoplay
                      className="w-full max-w-lg mx-auto"
                    />
                  </div>
                  {/* Mobile: Below text, smaller size */}
                  <div className="block md:hidden mt-8">
                    <DotLottieReact
                      src="https://lottie.host/106ebcf5-43cd-4379-bcfc-b7ea34326d6e/FfvWmfZ7C4.lottie"
                      loop
                      autoplay
                      className="w-full max-w-sm mx-auto"
                    />
                  </div>
                </div>
              </GSAPScrollAnimation>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <GSAPScrollAnimation animation="fadeUp" className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4 backlit-badge">
                💎 Our Core Values
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What Sets Us Apart</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our unwavering commitment to excellence drives every decision, from initial consultation to ongoing
                support.
              </p>
            </div>

            <GSAPScrollAnimation animation="fadeUp" stagger={0.2} delay={0.3}>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {coreValues.map((value, index) => (
                  <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <value.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground text-sm">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </GSAPScrollAnimation>
          </div>
        </GSAPScrollAnimation>

        {/* Leadership Team */}
        <GSAPScrollAnimation animation="fadeUp" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4 backlit-badge">
                👥 Expert Leadership Team
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Industry Veterans Leading Innovation</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our leadership team brings over 150 years of combined experience from top-tier technology companies.
              </p>
            </div>

            <GSAPScrollAnimation animation="scale" stagger={0.15} delay={0.2}>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {leadershipTeam.map((member, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-square relative overflow-hidden">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                      <p className="text-blue-600 font-medium mb-4">{member.role}</p>

                      <div className="flex items-center gap-3">
                        <a
                          href={member.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                        >
                          <svg
                            className="w-5 h-5 text-blue-600 dark:text-blue-400"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </a>

                        {member.githubUrl && (
                          <a
                            href={member.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                          >
                            <svg
                              className="w-5 h-5 text-gray-600 dark:text-gray-400"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </GSAPScrollAnimation>
          </div>
        </GSAPScrollAnimation>

        {/* Enhanced Timeline */}
        <GSAPScrollAnimation animation="fadeUp" className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4 backlit-badge">
                📈 Timeline of Excellence
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">From Startup to Industry Leader</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our journey of consistent growth, innovation, and client success milestones.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 timeline-line"></div>
              <div className="space-y-12">
                {companyMilestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`timeline-item relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                    data-index={index}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                      <Card className="p-6 hover:shadow-lg transition-shadow timeline-card opacity-0 transform translate-y-8">
                        <CardContent className="p-0">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="text-2xl font-bold text-blue-600">{milestone.year}</div>
                            <Badge variant="outline" className="text-xs">
                              {milestone.quarter}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-semibold mb-2">{milestone.event}</h3>
                          <p className="text-muted-foreground mb-3">{milestone.description}</p>
                          <div className="text-sm font-medium text-green-600 bg-green-50 dark:bg-green-950/20 p-2 rounded">
                            ✓ {milestone.achievement}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-background timeline-dot opacity-0 scale-0"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </GSAPScrollAnimation>

        {/* CTA */}
        <GSAPScrollAnimation animation="scale" className="py-20 bg-gradient-to-r from-blue-500 to-purple-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Partner with Canada's Most Trusted IT Experts?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join 200+ successful enterprises who trust Startify for their mission-critical digital transformation
              initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-3"
                onClick={() => window.open("https://calendly.com/informeddaily1/30min", "_blank")}
              >
                Schedule Strategic Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 border-white/20 text-white hover:bg-white/10 bg-transparent"
              >
                View Success Stories
              </Button>
            </div>
          </div>
        </GSAPScrollAnimation>
      </div>
      <style jsx>{`
        .timeline-item {
          transition: all 0.6s ease;
        }
        
        .timeline-card {
          transition: all 0.8s cubic-bezier(0.25, 0.25, 0, 1);
        }
        
        .timeline-dot {
          transition: all 0.6s cubic-bezier(0.25, 0.25, 0, 1);
        }
        
        .timeline-card.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .timeline-dot.animate-in {
          opacity: 1;
          transform: translateX(-50%) scale(1);
        }
        
        .timeline-card.animate-out {
          opacity: 0;
          transform: translateY(32px);
        }
        
        .timeline-dot.animate-out {
          opacity: 0;
          transform: translateX(-50%) scale(0);
        }
      `}</style>
    </div>
  )
}
