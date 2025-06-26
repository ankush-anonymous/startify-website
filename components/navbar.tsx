"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const navigation = [
  { name: "HOME", href: "/" },
  { name: "PROJECTS", href: "/projects" },
  { name: "ABOUT US", href: "/about" },
  { name: "BLOG", href: "/blog" },
  { name: "CAREERS", href: "/careers" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showFloatingNav, setShowFloatingNav] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const heroHeight = window.innerHeight * 0.8 // Approximate hero section height

      setIsScrolled(scrollY > 10)
      setShowFloatingNav(scrollY > heroHeight)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Top Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          showFloatingNav
            ? "opacity-0 pointer-events-none -translate-y-full"
            : "opacity-100 pointer-events-auto translate-y-0"
        } ${isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold text-gradient">Startify</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative text-sm font-medium transition-colors hover:text-primary ${
                    pathname === item.href ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                  {pathname === item.href && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                asChild
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
              >
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="w-9 h-9">
                    <Menu className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col space-y-4 mt-8">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`text-lg font-medium transition-colors hover:text-primary ${
                          pathname === item.href ? "text-primary" : "text-muted-foreground"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <div className="pt-4 border-t border-border">
                      <Button asChild className="w-full bg-gradient-to-r from-blue-500 to-purple-600">
                        <Link href="/contact">Get Started</Link>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Floating Bottom Navigation */}
      <nav
        className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
          showFloatingNav
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none translate-y-full"
        }`}
      >
        <div
          className="px-6 py-3 rounded-full shadow-2xl border border-white/10"
          style={{
            background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
            backdropFilter: "blur(20px)",
          }}
        >
          <div className="flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition-all duration-300 hover:text-white ${
                  pathname === item.href ? "text-white" : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {item.name}
                {pathname === item.href && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Floating Navigation */}
      <nav
        className={`md:hidden fixed bottom-4 left-4 right-4 z-50 transition-all duration-500 ${
          showFloatingNav
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none translate-y-full"
        }`}
      >
        <div
          className="px-4 py-3 rounded-2xl shadow-2xl border border-white/10"
          style={{
            background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
            backdropFilter: "blur(20px)",
          }}
        >
          <div className="grid grid-cols-5 gap-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-xs font-medium text-center py-2 px-1 rounded-lg transition-all duration-300 ${
                  pathname === item.href
                    ? "text-white bg-white/10"
                    : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
                }`}
              >
                <span className="block">{item.name}</span>
                {pathname === item.href && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
}
