import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"

export const metadata: Metadata = {
  title: "Startify Blog - IT Insights, CRM Tips & Digital Transformation Guides",
  description:
    "Stay updated with the latest IT trends, CRM best practices, and digital transformation insights from Canada's fastest-growing IT agency. Expert advice for Canadian businesses.",
}

const blogPosts = [
  {
    title: "How to Choose the Right CRM System for Your Growing Business in 2024",
    excerpt:
      "Discover the essential features every Canadian business needs in a CRM system. Learn how to evaluate options, avoid costly mistakes, and boost your sales by 300%.",
    category: "CRM Solutions",
    author: "Michael Rodriguez",
    date: "2024-01-15",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    featured: true,
  },
  {
    title: "10 Digital Marketing Trends That Will Dominate Canadian Businesses in 2024",
    excerpt:
      "Stay ahead of the competition with these game-changing digital marketing strategies. From AI-powered campaigns to social commerce - everything you need to know.",
    category: "Digital Marketing",
    author: "Emily Johnson",
    date: "2024-01-12",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=500&h=300&fit=crop",
    featured: true,
  },
  {
    title: "The Complete Guide to Website Speed Optimization: Boost Your Sales by 40%",
    excerpt:
      "Learn proven techniques to make your website load in under 2 seconds. Discover how faster websites directly impact your bottom line and customer satisfaction.",
    category: "Web Development",
    author: "Sarah Chen",
    date: "2024-01-10",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    featured: false,
  },
  {
    title: "Small Business Automation: 7 Processes You Should Automate Today",
    excerpt:
      "Stop wasting time on repetitive tasks. Discover which business processes to automate first and how automation can save you 20+ hours per week.",
    category: "Business Automation",
    author: "Alex Thompson",
    date: "2024-01-08",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop",
    featured: false,
  },
  {
    title: "ROI Calculator: How Much Should You Invest in Digital Transformation?",
    excerpt:
      "Use our proven framework to calculate the exact ROI of your digital transformation investment. Real case studies showing 200-400% returns.",
    category: "Business Strategy",
    author: "Michael Rodriguez",
    date: "2024-01-05",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    featured: false,
  },
]

const categories = [
  "All Posts",
  "CRM Solutions",
  "Digital Marketing",
  "Web Development",
  "Business Automation",
  "Business Strategy",
]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-blue-500/10 to-purple-600/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="secondary" className="mb-4">
              📚 Startify Blog
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              IT Insights & <span className="text-gradient">Digital Wisdom</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay ahead with expert insights on CRM solutions, digital transformation, and IT best practices from
              Canada's fastest-growing IT agency.
            </p>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <Badge variant="secondary" className="mb-4">
                ⭐ Featured Articles
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Latest Insights</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {featuredPosts.map((post, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary">{post.category}</Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>

                    <Button variant="ghost" className="p-0 h-auto font-semibold text-blue-600 hover:text-blue-700">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className={index === 0 ? "bg-gradient-to-r from-blue-500 to-purple-600" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* All Posts */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">All Articles</h2>
              <p className="text-xl text-muted-foreground">
                Explore our complete collection of IT insights and business guides.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-0 h-auto font-semibold text-blue-600 hover:text-blue-700"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Stay Updated with IT Insights</h2>
            <p className="text-xl text-blue-100 mb-8">
              Get the latest CRM tips, digital transformation guides, and IT best practices delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 text-gray-900"
              />
              <Button size="lg" variant="secondary" className="px-8 py-3">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
