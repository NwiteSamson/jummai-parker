import { Button } from "@/components/ui/button"
import { ArrowDown, Mail, BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-green-600 to-orange-600 bg-clip-text text-transparent">
                  Fidelia Jummai Moore
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300">Educational Author & Publisher</p>
              <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl">
                I create engaging educational books and learning materials for children, specializing in multilingual
                education, alphabet learning, and early childhood development. Discover my collection of educational
                books designed to make learning fun and accessible.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </Button>
              </Link>
              <Link href="/books">
                <Button variant="outline" size="lg">
                  <BookOpen className="mr-2 h-5 w-5" />
                  View My Books
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20"></div>
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Profile"
                width={400}
                height={400}
                className="relative rounded-full border-4 border-white dark:border-slate-800 shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <ArrowDown className="h-6 w-6 text-slate-400 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
