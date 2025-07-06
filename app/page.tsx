import { Hero } from "@/components/hero"
import { FeaturedBooks } from "@/components/featured-books"
import { CallToAction } from "@/components/call-to-action"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Hero />
      <FeaturedBooks />
      <CallToAction />
    </main>
  )
}
