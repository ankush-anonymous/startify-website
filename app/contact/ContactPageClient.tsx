"use client"

import Navbar from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import ScrollAnimation from "@/components/scroll-animation"
import {
  Phone,
  Mail,
  MessageSquare,
  MapPin,
  Clock,
  Calendar,
  CheckCircle,
  Users,
  Award,
  Zap,
  Globe,
  ArrowRight,
  Send,
} from "lucide-react"

const contactMethods = [
  {
    icon: Phone,
    title: "Phone Support",
    subtitle: "Available 24/7",
    description: "Call us anytime for immediate assistance with your IT needs",
    contact: "+1 (437) 777-1763",
    action: "tel:+14377771763",
    gradient: "from-blue-500 to-blue-600",
    available: "24/7 Emergency Support",
  },
  {
    icon: Mail,
    title: "Email Us",
    subtitle: "Response within 2 hours",
    description: "Send us detailed information about your project requirements",
    contact: "startifymedia1@gmail.com",
    action: "mailto:startifymedia1@gmail.com",
    gradient: "from-green-500 to-green-600",
    available: "Business Hours Response",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Chat",
    subtitle: "Quick & Direct",
    description: "Get instant responses for urgent inquiries and quick questions",
    contact: "+1 (437) 777-1763",
    action: "https://wa.me/14377771763",
    gradient: "from-emerald-500 to-emerald-600",
    available: "Instant Messaging",
  },
  {
    icon: MapPin,
    title: "Visit Our Office",
    subtitle: "In-Person Consultation",
    description: "Schedule a meeting at our Brampton office for detailed discussions",
    contact: "41 George St S, Brampton, ON L6Y 2E1",
    action: "https://maps.google.com/?q=41+George+St+S,+Brampton,+ON+L6Y+2E1",
    gradient: "from-purple-500 to-purple-600",
    available: "By Appointment",
  },
]

const businessHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 4:00 PM EST", status: "open" },
  { day: "Saturday", hours: "Closed", status: "closed" },
  { day: "Sunday", hours: "Closed", status: "closed" },
  { day: "Emergency Support", hours: "24/7 Available", status: "emergency" },
]

const whyChooseUs = [
  {
    icon: Zap,
    title: "Lightning Fast Response",
    description: "2-hour response time during business hours, 24/7 emergency support available",
  },
  {
    icon: Users,
    title: "Dedicated Account Manager",
    description: "Personal point of contact who understands your business and technical requirements",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "500+ successful projects with 98% client satisfaction rate across Canada",
  },
  {
    icon: Globe,
    title: "Local Expertise",
    description: "Based in Brampton, serving businesses across the Greater Toronto Area and Canada",
  },
]

const faqs = [
  {
    question: "How quickly can you start my project?",
    answer: "Most projects can begin within 48-72 hours after our initial consultation and agreement signing.",
  },
  {
    question: "Do you offer emergency IT support?",
    answer:
      "Yes! We provide 24/7 emergency support for critical business systems. Call us anytime at +1 (437) 777-1763.",
  },
  {
    question: "What's included in the free consultation?",
    answer:
      "A 30-minute strategy session, custom growth plan, technology assessment, and project timeline - all at no cost.",
  },
  {
    question: "Do you work with businesses outside the GTA?",
    answer: "While we're based in Brampton, we serve clients across Canada with remote and on-site services.",
  },
]

export default function ContactPageClient() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-20">
        {/* Hero Section */}
        <ScrollAnimation direction="up" className="py-16 bg-gradient-to-r from-blue-500/10 to-purple-600/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="secondary" className="mb-4 backlit-badge-strong">
              📞 Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Let's Build Something <span className="text-gradient">Amazing Together</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Ready to transform your business with cutting-edge technology? Our team of experts is here to help you
              every step of the way. Get your free consultation today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8 py-4"
                onClick={() => window.open("https://calendly.com/informeddaily1/30min", "_blank")}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Free Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 bg-transparent"
                onClick={() => window.open("tel:+14377771763")}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now: (437) 777-1763
              </Button>
            </div>
          </div>
        </ScrollAnimation>

        {/* Contact Methods */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation direction="up">
              <div className="text-center mb-16">
                <Badge variant="secondary" className="mb-4 backlit-badge">
                  💬 Multiple Ways to Reach Us
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Choose Your Preferred Contact Method</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  We're available through multiple channels to ensure you can reach us when you need us most.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" stagger={true} staggerDelay={0.1} delay={0.2}>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <CardContent className="p-0">
                      <div className={`bg-gradient-to-r ${method.gradient} p-6 text-white`}>
                        <div className="flex items-center justify-between mb-4">
                          <method.icon className="h-8 w-8" />
                          <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                            {method.subtitle}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                        <p className="text-white/90 text-sm">{method.description}</p>
                      </div>

                      <div className="p-6">
                        <div className="mb-4">
                          <p className="font-semibold text-foreground mb-1">{method.contact}</p>
                          <p className="text-sm text-muted-foreground">{method.available}</p>
                        </div>

                        <Button
                          className={`w-full bg-gradient-to-r ${method.gradient} hover:opacity-90 transition-opacity`}
                          onClick={() => {
                            if (method.action.startsWith("http")) {
                              window.open(method.action, "_blank")
                            } else {
                              window.location.href = method.action
                            }
                          }}
                        >
                          Contact Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Contact Form & Business Hours */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <ScrollAnimation direction="left" delay={0.2}>
                <Card className="p-8 shadow-xl">
                  <CardContent className="p-0">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold mb-2">Send Us a Message</h3>
                      <p className="text-muted-foreground">
                        Fill out the form below and we'll get back to you within 2 hours during business hours.
                      </p>
                    </div>

                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">First Name *</label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="John"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Last Name *</label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Doe"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Email Address *</label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="john@company.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Phone Number</label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="+1 (437) 777-1763"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Company Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Your Company Inc."
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Service Needed</label>
                        <select className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                          <option value="">Select a service</option>
                          <option value="website">Website Development</option>
                          <option value="crm">CRM Development</option>
                          <option value="app">Custom App Development</option>
                          <option value="social">Social Media Management</option>
                          <option value="ads">Paid Ads Management</option>
                          <option value="design">UI/UX Design</option>
                          <option value="strategy">Digital Strategy</option>
                          <option value="multiple">Multiple Services</option>
                          <option value="consultation">Free Consultation</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Project Details</label>
                        <textarea
                          rows={4}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                          placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                        ></textarea>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg py-3"
                      >
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </Button>
                    </form>

                    <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">What Happens Next?</h4>
                      <div className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-600" />
                          <span>We'll review your message within 2 hours</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-600" />
                          <span>Schedule a free 30-minute consultation</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-600" />
                          <span>Receive a custom project proposal</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              {/* Business Hours & Info */}
              <ScrollAnimation direction="right" delay={0.4}>
                <div className="space-y-8">
                  {/* Business Hours */}
                  <Card className="p-6">
                    <CardContent className="p-0">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <Clock className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">Business Hours</h3>
                          <p className="text-muted-foreground text-sm">When you can reach us</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {businessHours.map((schedule, index) => (
                          <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                            <span className="font-medium">{schedule.day}</span>
                            <div className="flex items-center gap-2">
                              <span
                                className={`text-sm ${
                                  schedule.status === "open"
                                    ? "text-green-600"
                                    : schedule.status === "emergency"
                                      ? "text-blue-600"
                                      : "text-muted-foreground"
                                }`}
                              >
                                {schedule.hours}
                              </span>
                              {schedule.status === "open" && <div className="w-2 h-2 bg-green-500 rounded-full"></div>}
                              {schedule.status === "emergency" && (
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                        <p className="text-sm text-green-800 dark:text-green-200 font-medium">
                          🟢 Emergency IT support available 24/7 by phone
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Why Choose Us */}
                  <Card className="p-6">
                    <CardContent className="p-0">
                      <h3 className="text-xl font-bold mb-4">Why Choose Startify?</h3>
                      <div className="space-y-4">
                        {whyChooseUs.map((reason, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                              <reason.icon className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <h4 className="font-semibold mb-1">{reason.title}</h4>
                              <p className="text-sm text-muted-foreground">{reason.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Quick Stats */}
                  <Card className="p-6 bg-gradient-to-r from-blue-500/10 to-purple-600/10">
                    <CardContent className="p-0">
                      <h3 className="text-xl font-bold mb-4">Our Track Record</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">500+</div>
                          <div className="text-sm text-muted-foreground">Projects Completed</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">98%</div>
                          <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-600">24/7</div>
                          <div className="text-sm text-muted-foreground">Emergency Support</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-orange-600">2hr</div>
                          <div className="text-sm text-muted-foreground">Response Time</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation direction="up">
              <div className="text-center mb-16">
                <Badge variant="secondary" className="mb-4 backlit-badge">
                  ❓ Frequently Asked Questions
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Got Questions? We Have Answers</h2>
                <p className="text-xl text-muted-foreground">
                  Here are some common questions our clients ask before starting their projects.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" stagger={true} staggerDelay={0.1} delay={0.2}>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <h3 className="text-lg font-semibold mb-3 text-foreground">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.4}>
              <div className="text-center mt-12">
                <p className="text-muted-foreground mb-4">Still have questions?</p>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => window.open("https://calendly.com/informeddaily1/30min", "_blank")}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule a Free Consultation
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <ScrollAnimation direction="scale">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Join 500+ successful businesses who trust Startify for their digital transformation needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 py-3"
                  onClick={() => window.open("https://calendly.com/informeddaily1/30min", "_blank")}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Free Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-3 border-white/20 text-white hover:bg-white/10 bg-transparent"
                  onClick={() => window.open("tel:+14377771763")}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: (437) 777-1763
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </div>
    </div>
  )
}
