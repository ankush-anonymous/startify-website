"use client"

import Navbar from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar, Users, TrendingUp } from "lucide-react"

const projects = [
  {
    title: "Complete Business Transformation",
    client: "TechCorp Solutions",
    category: "Digital Transformation",
    description:
      "Revolutionized their entire business operations, resulting in 300% productivity boost and $2M in annual cost savings through intelligent automation.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    results: ["300% productivity increase", "$2M annual savings", "99% employee satisfaction"],
    technologies: ["Custom CRM", "Automation Tools", "Analytics Dashboard", "Mobile App"],
    timeline: "6 months",
    teamSize: "8 specialists",
  },
  {
    title: "E-Commerce Empire Launch",
    client: "RetailMax Inc.",
    category: "E-commerce Platform",
    description:
      "Built a powerful online store that handles thousands of customers daily, generating 250% more revenue with lightning-fast checkout experience.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
    results: ["10K+ daily transactions", "99.9% uptime", "250% revenue growth"],
    technologies: ["E-commerce Platform", "Payment Gateway", "Inventory Management", "Customer Portal"],
    timeline: "4 months",
    teamSize: "6 specialists",
  },
  {
    title: "Cloud Infrastructure Modernization",
    client: "GrowthLab",
    category: "Cloud Solutions",
    description:
      "Migrated their entire business to the cloud, cutting operational costs by 60% while ensuring 24/7 availability and unlimited scalability.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop",
    results: ["60% cost reduction", "99.99% availability", "Unlimited scaling capability"],
    technologies: ["Cloud Infrastructure", "Data Security", "Backup Systems", "Performance Monitoring"],
    timeline: "3 months",
    teamSize: "5 specialists",
  },
  {
    title: "Smart Business Automation",
    client: "EfficiencyFirst Corp",
    category: "Process Automation",
    description:
      "Automated 80% of their manual work, saving 40 hours per week and eliminating 95% of human errors through intelligent workflow systems.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop",
    results: ["80% process automation", "40 hours saved weekly", "95% error reduction"],
    technologies: ["Workflow Automation", "Smart Integrations", "Business Intelligence", "Reporting Tools"],
    timeline: "2 months",
    teamSize: "4 specialists",
  },
  {
    title: "Mobile App Success Story",
    client: "ConnectNow",
    category: "Mobile Application",
    description:
      "Created a user-friendly mobile app that attracted 50,000+ downloads in the first month with outstanding 4.8-star customer ratings.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop",
    results: ["50K+ downloads", "4.8-star rating", "85% user retention"],
    technologies: ["Mobile App", "User Experience Design", "Push Notifications", "Analytics"],
    timeline: "5 months",
    teamSize: "7 specialists",
  },
  {
    title: "Real-Time Business Intelligence",
    client: "InsightPro",
    category: "Data Analytics",
    description:
      "Developed a comprehensive dashboard that provides instant business insights, making reporting 200% faster and enabling data-driven decisions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    results: ["Real-time insights", "200% faster reporting", "Automated decision alerts"],
    technologies: ["Business Dashboard", "Data Analytics", "Automated Reports", "Performance Metrics"],
    timeline: "3 months",
    teamSize: "5 specialists",
  },
  {
    title: "Digital Marketing Revolution",
    client: "BrandBoost Agency",
    category: "Digital Marketing",
    description:
      "Transformed their marketing approach with integrated campaigns across all platforms, achieving 400% increase in qualified leads and 180% ROI.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    results: ["400% lead increase", "180% ROI improvement", "Multi-platform integration"],
    technologies: ["Marketing Automation", "Social Media Tools", "Analytics Platform", "Lead Management"],
    timeline: "4 months",
    teamSize: "6 specialists",
  },
]

export default function ProjectsClientPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-blue-500/10 to-purple-600/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="secondary" className="mb-4 backlit-badge-strong">
              🏆 Success Stories
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-gradient">Project Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how we've helped 100+ Canadian businesses transform their operations with cutting-edge CRM
              solutions and digital innovations.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {projects.map((project, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                        <p className="text-muted-foreground font-medium">{project.client}</p>
                      </div>
                      <Button variant="ghost" size="icon">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>

                    <p className="text-muted-foreground mb-6">{project.description}</p>

                    {/* Project Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-blue-500" />
                        <span className="text-sm">{project.timeline}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-purple-500" />
                        <span className="text-sm">{project.teamSize}</span>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        Key Results
                      </h4>
                      <div className="grid gap-2">
                        {project.results.map((result, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <div className="w-2 h-2 bg-green-500 rounded-full" />
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Success Story?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how we can help transform your business with our proven solutions.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-3"
              onClick={() => window.open("https://calendly.com/informeddaily1/30min", "_blank")}
            >
              Start Your Project
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
