"use client"

import GSAPScrollAnimation from "@/components/gsap-scroll-animation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, Lightbulb, Shield, TrendingUp, Award, Users, Globe, Zap } from "lucide-react"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"

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
    name: "Alex Thompson",
    role: "CEO & Founder",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Former Microsoft Senior Architect with 15+ years building enterprise solutions for Fortune 500 companies.",
    credentials: "Microsoft Certified Solutions Expert, AWS Solutions Architect",
  },
  {
    name: "Sarah Chen",
    role: "Chief Technology Officer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Ex-Google Cloud architect specializing in scalable infrastructure serving millions of users globally.",
    credentials: "Google Cloud Professional, Kubernetes Certified Administrator",
  },
  {
    name: "Michael Rodriguez",
    role: "Head of CRM Solutions",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Salesforce MVP with 300+ successful CRM implementations across North America's leading enterprises.",
    credentials: "Salesforce Certified Technical Architect, 5x Trailhead Ranger",
  },
  {
    name: "Emily Johnson",
    role: "Director of Digital Innovation",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Digital transformation strategist who led modernization initiatives for Canada's top 100 companies.",
    credentials: "PMP Certified, Agile Transformation Expert",
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

export default function AboutClientWrapper() {
  return (
    <>
      {/* Hero Section */}
      <GSAPScrollAnimation animation="fadeUp" className="py-16 bg-gradient-to-r from-blue-500/10 to-purple-600/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4">
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
      <GSAPScrollAnimation animation="slideUp" className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GSAPScrollAnimation animation="fadeUp" delay={0.2}>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Trusted by Industry Leaders</h2>
              <p className="text-blue-100">Proven track record of delivering exceptional results</p>
            </div>
          </GSAPScrollAnimation>
          <GSAPScrollAnimation animation="fadeUp" stagger={0.1} delay={0.4}>
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
                <Badge variant="secondary" className="mb-4">
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
            <Badge variant="secondary" className="mb-4">
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
            <Badge variant="secondary" className="mb-4">
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
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-3">{member.bio}</p>
                    <div className="text-xs text-blue-600 font-medium bg-blue-50 dark:bg-blue-950/20 p-2 rounded">
                      {member.credentials}
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
            <Badge variant="secondary" className="mb-4">
              📈 Timeline of Excellence
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">From Startup to Industry Leader</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our journey of consistent growth, innovation, and client success milestones.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
            <GSAPScrollAnimation animation="fadeUp" stagger={0.2} delay={0.2}>
              <div className="space-y-12">
                {companyMilestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                      <Card className="p-6 hover:shadow-lg transition-shadow">
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
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-background"></div>
                  </div>
                ))}
              </div>
            </GSAPScrollAnimation>
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
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Schedule Strategic Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 border-white/20 text-white hover:bg-white/10"
            >
              View Success Stories
            </Button>
          </div>
        </div>
      </GSAPScrollAnimation>
    </>
  )
}
