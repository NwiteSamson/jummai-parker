import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Mail } from "lucide-react"
import Link from "next/link"

export function CallToAction() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30 dark:bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Join thousands of children who are already learning with my educational books. Perfect for home learning or
            classroom use.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200 dark:border-slate-700 text-center">
            <CardContent className="p-8">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-blue-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Browse Books</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Explore my complete collection of educational books for different age groups and subjects.
              </p>
              <Link href="/books">
                <Button variant="outline" className="bg-transparent">
                  View Books
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200 dark:border-slate-700 text-center">
            <CardContent className="p-8">
              <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Bulk Orders</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Special pricing available for schools, libraries, and educational institutions.
              </p>
              <Link href="/contact">
                <Button variant="outline" className="bg-transparent">
                  Get Quote
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200 dark:border-slate-700 text-center">
            <CardContent className="p-8">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Mail className="h-8 w-8 text-purple-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Get in Touch</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Have questions or need custom educational content? I'd love to help.
              </p>
              <Link href="/contact">
                <Button variant="outline" className="bg-transparent">
                  Contact Me
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Link href="/books">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              Start Shopping Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
