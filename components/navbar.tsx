"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Home, FolderOpen, User, FileText, Phone } from "lucide-react"

const navigation = [
  { name: "HOME", href: "/", icon: Home },
  { name: "PROJECTS", href: "/projects", icon: FolderOpen },
  { name: "ABOUT US", href: "/about", icon: User },
  { name: "BLOG", href: "/blog", icon: FileText },
  { name: "CONTACT US", href: "/contact", icon: Phone },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showFloatingNav, setShowFloatingNav] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const heroHeight = window.innerHeight * 0.8

      setIsScrolled(scrollY > 10)
      setShowFloatingNav(scrollY > heroHeight)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      {/* Top Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          showFloatingNav
            ? "opacity-0 pointer-events-none -translate-y-full"
            : "opacity-100 pointer-events-auto translate-y-0"
        } ${
          isScrolled
            ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-black/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 shrink-0">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/25">
                <span className="text-white font-bold text-xs sm:text-sm">S</span>
              </div>
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Startify
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative text-sm font-medium transition-all duration-300 hover:text-primary group ${
                    pathname === item.href ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                  {pathname === item.href && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
                  )}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                asChild
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
              >
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-9 h-9 hover:bg-primary/10 transition-colors duration-200"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-full sm:w-[400px] bg-background/95 backdrop-blur-xl border-l border-border/50"
                >
                  <SheetHeader className="mb-8">
                    <SheetTitle className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/25">
                        <span className="text-white font-bold text-sm">S</span>
                      </div>
                      <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Startify Navigation
                      </span>
                    </SheetTitle>
                  </SheetHeader>

                  {/* Mobile Navigation Links */}
                  <div className="flex flex-col space-y-1">
                    {navigation.map((item, index) => {
                      const Icon = item.icon
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`group flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 ${
                            pathname === item.href
                              ? "bg-gradient-to-r from-blue-500/10 to-purple-600/10 text-primary border border-primary/20"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                          }`}
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          <Icon
                            className={`h-5 w-5 transition-colors duration-300 ${
                              pathname === item.href
                                ? "text-primary"
                                : "text-muted-foreground group-hover:text-foreground"
                            }`}
                          />
                          <span className="text-lg font-medium">{item.name}</span>
                          {pathname === item.href && (
                            <div className="ml-auto w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
                          )}
                        </Link>
                      )
                    })}
                  </div>

                  {/* Mobile CTA Section */}
                  <div className="mt-8 pt-6 border-t border-border/50">
                    <Button
                      asChild
                      className="w-full h-12 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 text-base font-medium"
                    >
                      <Link href="/contact">Get Started</Link>
                    </Button>

                    {/* Additional Mobile Menu Items */}
                    <div className="mt-6 pt-6 border-t border-border/50">
                      <div className="text-center text-sm text-muted-foreground">Ready to transform your business?</div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Floating Bottom Navigation for Desktop */}
      <nav
        className={`hidden md:block fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
          showFloatingNav
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none translate-y-full"
        }`}
      >
        <div className="px-2 py-3 rounded-2xl bg-background/95 backdrop-blur-xl shadow-2xl border border-border/50 shadow-black/10">
          <div className="flex items-center space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative flex flex-col items-center space-y-1 px-3 py-2 rounded-xl transition-all duration-300 min-w-0 ${
                    pathname === item.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  <span className="text-xs font-medium truncate w-full text-center leading-tight">
                    {item.name.split(" ")[0]}
                  </span>
                  {pathname === item.href && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
                  )}
                </Link>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Enhanced Mobile Floating Navigation */}
      <nav
        className={`md:hidden fixed bottom-4 left-4 right-4 z-50 transition-all duration-500 ${
          showFloatingNav
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none translate-y-full"
        }`}
      >
        <div className="px-2 py-3 rounded-2xl bg-background/95 backdrop-blur-xl shadow-2xl border border-border/50 shadow-black/10">
          <div className="flex items-center space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative flex flex-col items-center space-y-1 px-3 py-2 rounded-xl transition-all duration-300 min-w-0 ${
                    pathname === item.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  <span className="text-xs font-medium truncate w-full text-center leading-tight">
                    {item.name.split(" ")[0]}
                  </span>
                  {pathname === item.href && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
                  )}
                </Link>
              )
            })}
          </div>
        </div>
      </nav>
    </>
  )
}
