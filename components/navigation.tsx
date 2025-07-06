"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, BookOpen, Settings } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/books", label: "Books" },
    { href: "/contact", label: "Contact" },
  ]

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-green-600" />
            <span className="text-xl font-bold text-slate-900 dark:text-white">Jummai's Books</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  isActive(item.href)
                    ? "text-green-600 font-medium"
                    : "text-slate-700 dark:text-slate-300 hover:text-green-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/admin">
              <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-transparent">
                <Settings className="h-4 w-4" />
                <span>Admin</span>
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 transition-colors ${
                    isActive(item.href)
                      ? "text-green-600 font-medium"
                      : "text-slate-700 dark:text-slate-300 hover:text-green-600"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/admin"
                className="block px-3 py-2 text-slate-700 dark:text-slate-300 hover:text-green-600"
                onClick={() => setIsOpen(false)}
              >
                Admin Panel
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
