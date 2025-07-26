"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function FeaturedBooks() {
  const featuredBooks = [
    {
      id: 1,
      title: "Jummai's A-Z Animal Alphabet Book",
      description: "A comprehensive alphabet learning book featuring animals from A to Z.",
      // price: 2500,
      rating: 4.9,
      reviews: 156,
      image: "/images/animal-alphabet-book.jpg",
      category: "Alphabet Learning",
    },
    {
      id: 2,
      title: "English to Arabic Animal Names",
      description: "Bilingual learning made easy! Learn animal names in both English and Arabic.",
      // price: 4000,
      rating: 4.8,
      reviews: 124,
      image: "/images/alphabet-book-english-arabic.jpg",
      category: "Multilingual",
    },
    {
      id: 6,
      title: "Sight Words Activity Book",
      description: "Build reading fluency with essential sight words through engaging activities.",
      // price: 2200,
      rating: 4.9,
      reviews: 189,
      image: "/images/sight-words-book.jpg",
      category: "Reading Skills",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Books</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Discover some of my most popular educational books that are helping children learn and grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredBooks.map((book) => (
            <Card
              key={book.id}
              className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 group"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Badge className="absolute top-2 left-2 z-10 bg-orange-500 hover:bg-orange-600">Featured</Badge>
                  <Image
                    src={book.image || "/placeholder.svg"}
                    alt={book.title}
                    width={300}
                    height={400}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <Badge variant="outline" className="text-xs mb-2">
                  {book.category}
                </Badge>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 line-clamp-2">{book.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-3 line-clamp-2">{book.description}</p>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium ml-1">{book.rating}</span>
                  </div>
                  <span className="text-sm text-slate-500">({book.reviews} reviews)</span>
                </div>
                <div className="text-xl font-bold text-green-600 dark:text-green-400">
                  {/* ₦{book.price.toLocaleString()} */}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link href={`/purchase/${book.id}`} className="w-full">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Buy Now
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/books">
            <Button variant="outline" size="lg" className="bg-transparent">
              View All Books
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
