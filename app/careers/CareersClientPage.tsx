"use client"

import Navbar from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, DollarSign, Heart, Zap, Trophy, Coffee, Laptop, GraduationCap } from "lucide-react"

const openPositions = [
  {
    title: "Senior CRM Developer",
    department: "Engineering",
    location: "Toronto, ON (Remote)",
    type: "Full-time",
    salary: "$90K - $120K",
    description: "Lead CRM implementation projects and mentor junior developers in our growing team.",
    requirements: ["5+ years Salesforce experience", "React/Node.js proficiency", "Team leadership skills"],
    featured: true,
  },
  {
    title: "Digital Transformation Consultant",
    department: "Consulting",
    location: "Vancouver, BC (Hybrid)",
    type: "Full-time",
    salary: "$80K - $110K",
    description: "Help Canadian businesses modernize their operations with cutting-edge digital solutions.",
    requirements: ["Business analysis experience", "Project management skills", "Client-facing experience"],
    featured: true,
  },
  {
    title: "Full-Stack Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: "$75K - $95K",
    description: "Build scalable web applications and contribute to our growing portfolio of client solutions.",
    requirements: ["React/Next.js expertise", "3+ years experience", "API development skills"],
    featured: false,
  },
  {
    title: "Cloud Solutions Architect",
    department: "Infrastructure",
    location: "Calgary, AB (Remote)",
    type: "Full-time",
    salary: "$100K - $130K",
    description: "Design and implement cloud infrastructure solutions for enterprise clients.",
    requirements: ["AWS/Azure certification", "DevOps experience", "Enterprise architecture knowledge"],
    featured: false,
  },
  {
    title: "Business Development Manager",
    department: "Sales",
    location: "Montreal, QC (Hybrid)",
    type: "Full-time",
    salary: "$70K - $90K + Commission",
    description: "Drive business growth by building relationships with potential clients across Canada.",
    requirements: ["B2B sales experience", "IT industry knowledge", "Bilingual (EN/FR) preferred"],
    featured: false,
  },
  {
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    salary: "$65K - $85K",
    description: "Create intuitive user experiences for our CRM and digital transformation projects.",
    requirements: ["Figma/Adobe Creative Suite", "User research experience", "Portfolio required"],
    featured: false,
  },
]

const benefits = [
  {
    icon: Laptop,
    title: "Remote-First Culture",
    description: "Work from anywhere in Canada with flexible hours and home office setup allowance.",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health benefits, mental health support, and wellness stipend.",
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description: "$3,000 annual learning budget for courses, conferences, and certifications.",
  },
  {
    icon: Trophy,
    title: "Performance Bonuses",
    description: "Quarterly performance bonuses and annual profit-sharing program.",
  },
  {
    icon: Coffee,
    title: "Team Events",
    description: "Regular team retreats, virtual coffee chats, and annual company conference.",
  },
  {
    icon: Zap,
    title: "Growth Opportunities",
    description: "Fast-track career advancement in Canada's fastest-growing IT agency.",
  },
]

const values = [
  "Innovation First - We embrace new technologies and creative solutions",
  "Client Success - Your growth directly impacts our clients' success",
  "Team Collaboration - We win together and support each other",
  "Continuous Learning - We invest in your professional development",
  "Work-Life Balance - We respect your time and personal commitments",
]

export default function CareersClientPage() {
  const featuredJobs = openPositions.filter((job) => job.featured)
  const regularJobs = openPositions.filter((job) => !job.featured)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-blue-500/10 to-purple-600/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="secondary" className="mb-4 backlit-badge-strong">
              🚀 Join Our Team
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Build Your Career with <span className="text-gradient">Canada's Fastest-Growing</span> IT Agency
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join a team of digital acceleration experts helping 100+ Canadian businesses scale smarter. Great
              benefits, remote work, and unlimited growth opportunities.
            </p>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4 backlit-badge">
                  🌟 Why Startify?
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Where Talent Meets Opportunity</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  At Startify, you're not just joining a company — you're joining a mission to transform how Canadian
                  businesses leverage technology for growth.
                </p>
                <div className="space-y-3">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Startify team working together"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4 backlit-badge">
                💎 Benefits & Perks
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">We Take Care of Our Team</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Competitive compensation, comprehensive benefits, and a culture that values your growth and well-being.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                      <benefit.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Positions */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4 backlit-badge">
                🔥 Hot Opportunities
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Open Positions</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {featuredJobs.map((job, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-xl transition-shadow duration-300 border-2 border-blue-500/20"
                >
                  <CardContent className="p-0">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <Badge variant="secondary" className="mb-2 bg-blue-500/10 text-blue-600">
                          Featured
                        </Badge>
                        <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                        <p className="text-muted-foreground font-medium">{job.department}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4 p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-blue-500" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-purple-500" />
                        {job.type}
                      </div>
                      <div className="flex items-center gap-2 text-sm col-span-2">
                        <DollarSign className="h-4 w-4 text-green-500" />
                        {job.salary}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{job.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Key Requirements:</h4>
                      <ul className="space-y-1">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* All Positions */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">All Open Positions</h2>
              <p className="text-xl text-muted-foreground">
                Explore all available opportunities to join our growing team.
              </p>
            </div>

            <div className="space-y-6">
              {regularJobs.map((job, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold">{job.title}</h3>
                          <Badge variant="outline">{job.department}</Badge>
                        </div>
                        <p className="text-muted-foreground mb-3">{job.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {job.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {job.type}
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign className="h-4 w-4" />
                            {job.salary}
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline">View Details</Button>
                        <Button>Apply Now</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Don't See the Perfect Role?</h2>
            <p className="text-xl text-blue-100 mb-8">
              We're always looking for exceptional talent. Send us your resume and let's talk about your future with
              Startify.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-3"
                onClick={() => window.open("https://calendly.com/informeddaily1/30min", "_blank")}
              >
                Schedule Interview
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 border-white/20 text-white hover:bg-white/10 bg-transparent"
              >
                Learn About Our Culture
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
