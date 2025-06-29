"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import ParticlesBackground from "@/components/particles-background"
import ScrollAnimation from "@/components/scroll-animation"
import ServiceFlipCard from "@/components/service-flip-card"
import { motion } from "framer-motion"
import {
  CheckCircle,
  Star,
  Globe,
  Database,
  Palette,
  Smartphone,
  MessageSquare,
  Target,
  Lightbulb,
  Users,
  Calendar,
  Award,
  Eye,
  X,
  AlertTriangle,
  Zap,
  Clock,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Website Development",
    subtitle: "CMS + Custom Solutions",
    description: "Modern, responsive websites that convert visitors into customers with lightning-fast performance",
    features: [
      "Custom WordPress & Headless CMS",
      "E-commerce with Shopify/WooCommerce",
      "SEO Optimization & Analytics",
      "Mobile-First Responsive Design",
    ],
    gradientClass: "service-gradient-1",
    pricing: "$2,999",
    deliveryTime: "7-10 days",
  },
  {
    icon: Database,
    title: "CRM Development",
    subtitle: "Automation & Integration",
    description: "Streamline your business processes with intelligent automation and seamless data integration",
    features: [
      "Custom Salesforce Implementation",
      "Workflow Automation & AI",
      "Third-party API Integrations",
      "Data Migration & Cleanup",
    ],
    gradientClass: "service-gradient-2",
    pricing: "$4,999",
    deliveryTime: "10-14 days",
  },
  {
    icon: Smartphone,
    title: "Custom App Development",
    subtitle: "Mobile & Web Applications",
    description: "Tailored applications that solve your unique business challenges with cutting-edge technology",
    features: [
      "Native iOS & Android Apps",
      "Progressive Web Applications",
      "Enterprise Software Solutions",
      "Cloud Integration & Scaling",
    ],
    gradientClass: "service-gradient-3",
    pricing: "$7,999",
    deliveryTime: "14-21 days",
  },
  {
    icon: MessageSquare,
    title: "Social Media Management",
    subtitle: "Brand Building & Growth",
    description: "Build your brand presence across all social platforms with data-driven content strategies",
    features: [
      "Content Strategy & Creation",
      "Multi-platform Management",
      "Community Engagement",
      "Influencer Partnerships",
    ],
    gradientClass: "service-gradient-4",
    pricing: "$1,999/mo",
    deliveryTime: "3-5 days",
  },
  {
    icon: Target,
    title: "Paid Ads Management",
    subtitle: "ROI-Focused Campaigns",
    description: "Drive qualified leads with data-driven advertising campaigns across Google, Facebook, and LinkedIn",
    features: [
      "Google Ads & Shopping Campaigns",
      "Facebook & Instagram Advertising",
      "LinkedIn B2B Campaigns",
      "Conversion Tracking & Analytics",
    ],
    gradientClass: "service-gradient-5",
    pricing: "$2,499/mo",
    deliveryTime: "2-3 days",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    subtitle: "Brand Identity & Experience",
    description: "Create memorable brand experiences that resonate with users and drive conversions",
    features: [
      "Brand Identity & Logo Design",
      "User Experience Research",
      "Wireframing & Prototyping",
      "Design System Creation",
    ],
    gradientClass: "service-gradient-6",
    pricing: "$3,499",
    deliveryTime: "5-7 days",
  },
  {
    icon: Lightbulb,
    title: "Digital Strategy",
    subtitle: "Consulting & Planning",
    description: "Strategic guidance to accelerate your digital transformation with proven methodologies",
    features: [
      "Business Analysis & Audit",
      "Technology Roadmap Planning",
      "Growth Strategy Development",
      "Competitive Analysis",
    ],
    gradientClass: "service-gradient-7",
    pricing: "$1,999",
    deliveryTime: "3-5 days",
  },
]

const realTimeStats = [
  { label: "Projects Delivered", value: "30+", icon: Award },
  { label: "Websites Built", value: "450+", icon: Globe },
  { label: "Years in Business", value: "3+", icon: Calendar },
  { label: "Clients Served", value: "50+", icon: Users },
  { label: "Countries Reached", value: "5+", icon: MapPin },
  { label: "Tech Stack Tools", value: "10+", icon: Database },
  { label: "Avg. Site Load Time", value: "2.1s", icon: Zap },
  { label: "Monthly Leads", value: "2,500+", icon: Target },
]

const comparisonData = [
  {
    feature: "CRM Customization",
    startify: { status: "yes", text: "Yes" },
    freelancers: { status: "no", text: "Limited" },
    agencies: { status: "warning", text: "Basic" },
  },
  {
    feature: "Fast Turnaround",
    startify: { status: "yes", text: "7 Days Avg", icon: Zap },
    freelancers: { status: "no", text: "Variable", icon: Clock },
    agencies: { status: "no", text: "2–4 Weeks", icon: Clock },
  },
  {
    feature: "Dedicated Support",
    startify: { status: "yes", text: "24/7" },
    freelancers: { status: "no", text: "No" },
    agencies: { status: "yes", text: "Yes" },
  },
  {
    feature: "Strategy Included",
    startify: { status: "yes", text: "Yes" },
    freelancers: { status: "no", text: "No" },
    agencies: { status: "warning", text: "Add-on" },
  },
  {
    feature: "Tech Stack Versatility",
    startify: { status: "yes", text: "Full-stack" },
    freelancers: { status: "no", text: "Limited" },
    agencies: { status: "warning", text: "Limited" },
  },
  {
    feature: "Real-time Reporting",
    startify: { status: "yes", text: "Live Dashboards" },
    freelancers: { status: "no", text: "No" },
    agencies: { status: "warning", text: "Manual Reports" },
  },
  {
    feature: "Transparent Pricing",
    startify: { status: "yes", text: "No Hidden Fees" },
    freelancers: { status: "no", text: "Variable" },
    agencies: { status: "warning", text: "Starting from..." },
  },
]

const testimonials = [
  {
    name: "Sarah Mitchell",
    company: "TechFlow Solutions",
    role: "CEO",
    content: "Startify delivered our CRM system in just 5 days. Our productivity increased by 300% immediately!",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "David Chen",
    company: "GrowthLab Inc.",
    role: "Marketing Director",
    content: "Their paid ads management generated 450% ROI in the first month. Absolutely incredible results!",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Emily Rodriguez",
    company: "ScaleUp Ventures",
    role: "Operations Manager",
    content: "The website they built loads in under 2 seconds and converts 40% better than our old site.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Michael Thompson",
    company: "InnovateCorp",
    role: "CTO",
    content: "Best decision we made was choosing Startify. Their 24/7 support is genuinely responsive.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
]

const clientLogos = [
  { name: "TechFlow", logo: "https://www.pngplay.com/wp-content/uploads/3/Amazon-Logo-Background-PNG-Image.png" },
  { name: "GrowthLab", logo: "/placeholder.svg?height=40&width=120" },
  { name: "ScaleUp", logo: "/placeholder.svg?height=40&width=120" },
  { name: "InnovateCorp", logo: "/placeholder.svg?height=40&width=120" },
  { name: "NextGen", logo: "/placeholder.svg?height=40&width=120" },
  { name: "FutureTech", logo: "/placeholder.svg?height=40&width=120" },
]

const StatusIcon = ({ status, icon: Icon }: { status: string; icon?: any }) => {
  if (Icon) return <Icon className="h-4 w-4" />

  switch (status) {
    case "yes":
      return <CheckCircle className="h-4 w-4 text-green-500" />
    case "no":
      return <X className="h-4 w-4 text-red-500" />
    case "warning":
      return <AlertTriangle className="h-4 w-4 text-yellow-500" />
    default:
      return null
  }
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative min-h-screen hero-gradient overflow-hidden">
        {/* Particles layer — must be absolute and clickable */}
        <div className="absolute inset-0 z-0">
          <ParticlesBackground />
        </div>

        {/* Grid overlay — allow pointer passthrough */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] z-10 pointer-events-none" />

        {/* Main content container — centered using flex */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center min-h-screen pointer-events-none">
          <div className="text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20 backlit-badge-strong">
                🚀 Canada's Fastest-Growing Digital Agency
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block mb-2">We Build Digital</span>
              <span className="block text-gradient animate-pulse">Web. Systems. Growth.</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 text-gray-300">All in One.</span>
            </motion.h1>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="pointer-events-auto">
                <Button
                  size="lg"
                  className="z-30 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8 py-4"
                  onClick={() => window.open("https://calendly.com/informeddaily1/30min", "_blank")}
                >
                  Book Free Consultation
                  <Calendar className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="pointer-events-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="z-30 text-lg px-8 py-4 border-white/20 text-white hover:bg-white/10 bg-transparent"
                  onClick={() => console.log("View Our Work clicked")}
                >
                  View Our Work
                  <Eye className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Real-Time Stats Section */}
      <ScrollAnimation direction="up" className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation direction="fade" delay={0.2}>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Real-Time Performance</h2>
              <p className="text-blue-100">Live metrics that prove our results</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation direction="up" stagger={true} staggerDelay={0.1} delay={0.4}>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {realTimeStats.map((stat, index) => (
                <div key={index} className="text-center bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="h-6 w-6 text-white/80 mr-2" />
                    <div className="text-xl md:text-2xl font-bold text-white">{stat.value}</div>
                  </div>
                  <div className="text-blue-100 text-xs font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </ScrollAnimation>

      {/* Services Preview with Flip Cards */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation direction="up">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4 backlit-badge">
                🎯 Our Services
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Everything You Need to Grow</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From web development to digital strategy, we provide comprehensive solutions that drive real results.
                <span className="block mt-2 text-sm font-medium text-blue-600">
                  Hover over each card to see detailed information
                </span>
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation
            direction="up"
            stagger={true}
            staggerDelay={0.1}
            delay={0.2}
            magneticStrength={120}
            duration={0.8}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <ServiceFlipCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  subtitle={service.subtitle}
                  description={service.description}
                  features={service.features}
                  gradientClass={service.gradientClass}
                />
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Enhanced Compare Us Section */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimation direction="up">
            <div className="text-center mb-16">
              <Badge
                variant="secondary"
                className="mb-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20 backlit-badge-strong"
              >
                ⚡ Why Choose Us
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Startify vs. <span className="text-gradient">The Competition</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                See why businesses choose Startify over freelancers and traditional agencies.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={0.3}>
            <div className="relative">
              {/* Desktop Table View */}
              <div className="hidden lg:block">
                <div className="bg-white/50 dark:bg-card/50 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500/5 to-purple-500/5 p-6 border-b border-border/50">
                    <div className="grid grid-cols-4 gap-4">
                      <div className="font-semibold text-lg">Feature/Service</div>
                      <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold text-sm">
                          <span className="w-2 h-2 bg-white rounded-full"></span>
                          Startify Media
                        </div>
                      </div>
                      <div className="text-center font-semibold text-muted-foreground">Freelancers</div>
                      <div className="text-center font-semibold text-muted-foreground">Other Agencies</div>
                    </div>
                  </div>

                  <div className="divide-y divide-border/30">
                    {comparisonData.map((row, index) => (
                      <div
                        key={index}
                        className="grid grid-cols-4 gap-4 p-6 hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-purple-500/5 transition-all duration-300 group"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="font-medium text-foreground group-hover:text-blue-600 transition-colors">
                          {row.feature}
                        </div>
                        <div className="text-center">
                          <div className="inline-flex items-center justify-center gap-2 px-3 py-2 bg-green-50 dark:bg-green-950/20 rounded-full border border-green-200 dark:border-green-800 group-hover:scale-110 transition-transform duration-300">
                            <StatusIcon status={row.startify.status} icon={row.startify.icon} />
                            <span className="font-medium text-green-600 text-sm group-hover:font-bold transition-all duration-300">
                              {row.startify.text}
                            </span>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="inline-flex items-center justify-center gap-2 px-3 py-2 bg-red-50 dark:bg-red-950/20 rounded-full border border-red-200 dark:border-red-800 group-hover:scale-95 group-hover:opacity-70 transition-all duration-300">
                            <StatusIcon status={row.freelancers.status} icon={row.freelancers.icon} />
                            <span className="text-red-600 text-sm">{row.freelancers.text}</span>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="inline-flex items-center justify-center gap-2 px-3 py-2 bg-yellow-50 dark:bg-yellow-950/20 rounded-full border border-yellow-200 dark:border-yellow-800 group-hover:scale-95 group-hover:opacity-70 transition-all duration-300">
                            <StatusIcon status={row.agencies.status} icon={row.agencies.icon} />
                            <span className="text-yellow-600 text-sm">{row.agencies.text}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Card View */}
              <div className="lg:hidden space-y-6">
                {comparisonData.map((row, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50 group"
                  >
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-4 text-center">{row.feature}</h3>
                      <div className="space-y-4">
                        {/* Startify */}
                        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-200/50 group-hover:scale-105 transition-transform duration-300">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                            <span className="font-medium group-hover:font-bold transition-all duration-300">
                              Startify
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <StatusIcon status={row.startify.status} icon={row.startify.icon} />
                            <span className="font-medium text-green-600 group-hover:font-bold transition-all duration-300">
                              {row.startify.text}
                            </span>
                          </div>
                        </div>

                        {/* Freelancers */}
                        <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg group-hover:scale-95 group-hover:opacity-70 transition-all duration-300">
                          <span className="text-muted-foreground">Freelancers</span>
                          <div className="flex items-center gap-2">
                            <StatusIcon status={row.freelancers.status} icon={row.freelancers.icon} />
                            <span className="text-muted-foreground">{row.freelancers.text}</span>
                          </div>
                        </div>

                        {/* Other Agencies */}
                        <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg group-hover:scale-95 group-hover:opacity-70 transition-all duration-300">
                          <span className="text-muted-foreground">Other Agencies</span>
                          <div className="flex items-center gap-2">
                            <StatusIcon status={row.agencies.status} icon={row.agencies.icon} />
                            <span className="text-muted-foreground">{row.agencies.text}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Bottom CTA */}
          <ScrollAnimation direction="up" delay={0.6}>
            <div className="text-center mt-12">
              <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-200/50 backdrop-blur-sm">
                <div className="text-left">
                  <h3 className="font-semibold text-lg mb-1">Ready to Experience the Startify Difference?</h3>
                  <p className="text-muted-foreground text-sm">Join 200+ businesses who made the smart choice</p>
                </div>
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg">
                  <a
                    href="https://calendly.com/informeddaily1/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    Get Started Today
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Client Logos */}
      <ScrollAnimation direction="up" className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-muted-foreground font-medium">Trusted by leading companies worldwide</p>
          </div>
          <ScrollAnimation direction="scale" stagger={true} staggerDelay={0.1} delay={0.2}>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60 hover:opacity-100 transition-opacity">
              {clientLogos.map((client, index) => (
                <div key={index} className="flex items-center justify-center">
                  <img
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </ScrollAnimation>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation direction="up">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4 backlit-badge">
                ⭐ Client Success Stories
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="up" stagger={true} staggerDelay={0.15} delay={0.3}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 text-sm italic">"{testimonial.content}"</p>
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <div className="font-semibold text-sm">{testimonial.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {testimonial.role}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Enhanced CTA Section - Book Free Call */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation direction="up">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4 backlit-badge">
                📞 Let's Talk Business
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Book a free 30-minute consultation and get a custom growth strategy for your business.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form - Left Side with Floating Nav Background */}
            <ScrollAnimation direction="left" delay={0.2}>
              <div
                className="p-8 rounded-2xl shadow-2xl border border-white/10"
                style={{
                  background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
                  backdropFilter: "blur(20px)",
                }}
              >
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">Get Your Free Consultation</h3>
                  <p className="text-gray-300 mb-6">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>

                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="First Name"
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="" className="bg-gray-800">
                        Select Service Needed
                      </option>
                      <option value="website" className="bg-gray-800">
                        Website Development
                      </option>
                      <option value="crm" className="bg-gray-800">
                        CRM Development
                      </option>
                      <option value="app" className="bg-gray-800">
                        Custom App Development
                      </option>
                      <option value="social" className="bg-gray-800">
                        Social Media Management
                      </option>
                      <option value="ads" className="bg-gray-800">
                        Paid Ads Management
                      </option>
                      <option value="design" className="bg-gray-800">
                        UI/UX Design
                      </option>
                      <option value="strategy" className="bg-gray-800">
                        Digital Strategy
                      </option>
                      <option value="multiple" className="bg-gray-800">
                        Multiple Services
                      </option>
                    </select>
                    <textarea
                      placeholder="Tell us about your project (optional)"
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    ></textarea>
                    <button
                      type="button"
                      onClick={() => window.open("https://calendly.com/informeddaily1/30min", "_blank")}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Calendar className="h-4 w-4" />
                      Book Free Consultation
                    </button>
                  </form>

                  <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="font-semibold mb-3 text-white">What You'll Get:</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">30-minute strategy session</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">Custom growth plan</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">No commitment required</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">Same-day response</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Contact Information - Right Side with Sober Look */}
            <ScrollAnimation direction="right" delay={0.4}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-foreground">Get In Touch</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                        <p className="text-muted-foreground text-sm mb-2">Call us directly for immediate assistance</p>
                        <a
                          href="tel:+15551234567"
                          className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                        >
                          +1 (555) 123-4567
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Email</h4>
                        <p className="text-muted-foreground text-sm mb-2">Send us a detailed message</p>
                        <a
                          href="mailto:hello@startify.ca"
                          className="text-green-600 dark:text-green-400 font-medium hover:underline"
                        >
                          hello@startify.ca
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">WhatsApp</h4>
                        <p className="text-muted-foreground text-sm mb-2">Quick chat for urgent inquiries</p>
                        <a
                          href="https://wa.me/15551234567"
                          className="text-emerald-600 dark:text-emerald-400 font-medium hover:underline"
                        >
                          +1 (555) 123-4567
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Office</h4>
                        <p className="text-muted-foreground text-sm mb-2">Visit us or schedule a meeting</p>
                        <p className="text-purple-600 dark:text-purple-400 font-medium">Toronto, ON, Canada</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-lg border border-blue-200/50 dark:border-blue-800/50">
                  <h4 className="font-semibold text-foreground mb-3">Business Hours</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="font-medium text-foreground">9:00 AM - 6:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="font-medium text-foreground">10:00 AM - 4:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="font-medium text-foreground">Closed</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-blue-200/50 dark:border-blue-800/50">
                    <p className="text-xs text-muted-foreground">
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      We typically respond within 2 hours during business hours
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <ScrollAnimation direction="up" className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 backlit-text">Trusted by Industry Leaders</h2>
          </div>
          <ScrollAnimation direction="scale" stagger={true} staggerDelay={0.1} delay={0.2}>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60 hover:opacity-100 transition-opacity">
              {clientLogos.map((client, index) => (
                <div key={index} className="flex items-center justify-center">
                  <img
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </ScrollAnimation>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation direction="up">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4 backlit-badge">
                ⭐ Client Success Stories
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="up" stagger={true} staggerDelay={0.15} delay={0.3}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 text-sm italic">"{testimonial.content}"</p>
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <div className="font-semibold text-sm">{testimonial.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {testimonial.role}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Enhanced CTA Section - Book Free Call */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation direction="up">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4 backlit-badge">
                📞 Let's Talk Business
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Book a free 30-minute consultation and get a custom growth strategy for your business.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form - Left Side with Floating Nav Background */}
            <ScrollAnimation direction="left" delay={0.2}>
              <div
                className="p-8 rounded-2xl shadow-2xl border border-white/10"
                style={{
                  background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
                  backdropFilter: "blur(20px)",
                }}
              >
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">Get Your Free Consultation</h3>
                  <p className="text-gray-300 mb-6">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>

                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="First Name"
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="" className="bg-gray-800">
                        Select Service Needed
                      </option>
                      <option value="website" className="bg-gray-800">
                        Website Development
                      </option>
                      <option value="crm" className="bg-gray-800">
                        CRM Development
                      </option>
                      <option value="app" className="bg-gray-800">
                        Custom App Development
                      </option>
                      <option value="social" className="bg-gray-800">
                        Social Media Management
                      </option>
                      <option value="ads" className="bg-gray-800">
                        Paid Ads Management
                      </option>
                      <option value="design" className="bg-gray-800">
                        UI/UX Design
                      </option>
                      <option value="strategy" className="bg-gray-800">
                        Digital Strategy
                      </option>
                      <option value="multiple" className="bg-gray-800">
                        Multiple Services
                      </option>
                    </select>
                    <textarea
                      placeholder="Tell us about your project (optional)"
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    ></textarea>
                    <button
                      type="button"
                      onClick={() => window.open("https://calendly.com/informeddaily1/30min", "_blank")}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Calendar className="h-4 w-4" />
                      Book Free Consultation
                    </button>
                  </form>

                  <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="font-semibold mb-3 text-white">What You'll Get:</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">30-minute strategy session</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">Custom growth plan</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">No commitment required</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">Same-day response</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Contact Information - Right Side with Sober Look */}
            <ScrollAnimation direction="right" delay={0.4}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-foreground">Get In Touch</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                        <p className="text-muted-foreground text-sm mb-2">Call us directly for immediate assistance</p>
                        <a
                          href="tel:+15551234567"
                          className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                        >
                          +1 (555) 123-4567
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Email</h4>
                        <p className="text-muted-foreground text-sm mb-2">Send us a detailed message</p>
                        <a
                          href="mailto:hello@startify.ca"
                          className="text-green-600 dark:text-green-400 font-medium hover:underline"
                        >
                          hello@startify.ca
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">WhatsApp</h4>
                        <p className="text-muted-foreground text-sm mb-2">Quick chat for urgent inquiries</p>
                        <a
                          href="https://wa.me/15551234567"
                          className="text-emerald-600 dark:text-emerald-400 font-medium hover:underline"
                        >
                          +1 (555) 123-4567
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Office</h4>
                        <p className="text-muted-foreground text-sm mb-2">Visit us or schedule a meeting</p>
                        <p className="text-purple-600 dark:text-purple-400 font-medium">Toronto, ON, Canada</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-lg border border-blue-200/50 dark:border-blue-800/50">
                  <h4 className="font-semibold text-foreground mb-3">Business Hours</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="font-medium text-foreground">9:00 AM - 6:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="font-medium text-foreground">10:00 AM - 4:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="font-medium text-foreground">Closed</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-blue-200/50 dark:border-blue-800/50">
                    <p className="text-xs text-muted-foreground">
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      We typically respond within 2 hours during business hours
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  )
}
