"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Eye } from "lucide-react"
import Image from "next/image"

export function EbookShowcase() {
  const [ebooks] = useState([
    {
      id: 1,
      title: "Jummai's A-Z Animal Alphabet Book",
      description:
        "A comprehensive alphabet learning book featuring animals from A to Z, perfect for early readers and language development.",
      // price: 2500,
      rating: 4.9,
      reviews: 156,
      image: "/images/animal-alphabet-book.jpg",
      category: "Alphabet Learning",
      featured: true,
    },
    {
      id: 2,
      title: "English to Arabic Animal Names",
      description:
        "Bilingual learning made easy! Learn animal names in both English and Arabic with beautiful illustrations.",
      // price: 3000,
      rating: 4.8,
      reviews: 124,
      image: "/images/alphabet-book-english-arabic.jpg",
      category: "Multilingual",
      featured: true,
    },
    {
      id: 3,
      title: "English to Hausa Alphabet Book",
      description: "Master the alphabet in both English and Hausa languages with engaging animal-themed learning.",
      // price: 3000,
      rating: 4.7,
      reviews: 98,
      image: "/images/alphabet-book-hausa.jpg",
      category: "Multilingual",
      featured: false,
    },
    {
      id: 4,
      title: "Handwriting Coordination Book",
      description: "Develop fine motor skills and handwriting coordination with fun tracing activities and exercises.",
      // price: 2000,
      rating: 4.9,
      reviews: 203,
      image: "/images/handwriting-book.jpg",
      category: "Handwriting",
      featured: false,
    },
    {
      id: 5,
      title: "Shapes & Colours Basic Education",
      description:
        "Learn basic shapes and colors through interactive and colorful educational content designed for young learners.",
      // price: 1800,
      rating: 4.8,
      reviews: 167,
      image: "/images/shapes-colors-book.jpg",
      category: "Basic Education",
      featured: false,
    },
    {
      id: 6,
      title: "Sight Words Activity Book",
      description:
        "Build reading fluency with essential sight words through engaging activities and colorful illustrations.",
      // price: 2200,
      rating: 4.9,
      reviews: 189,
      image: "/images/sight-words-book.jpg",
      category: "Reading Skills",
      featured: true,
    },
  ])

  return (
    <section id="ebooks" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">My Educational Books</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Discover my collection of educational books designed to make learning engaging and accessible for children
            of all ages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ebooks.map((ebook) => (
            <Card
              key={ebook.id}
              className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 group"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  {ebook.featured && (
                    <Badge className="absolute top-2 left-2 z-10 bg-orange-500 hover:bg-orange-600">Featured</Badge>
                  )}
                  <Image
                    src={ebook.image || "/placeholder.svg"}
                    alt={ebook.title}
                    width={200}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-xs">
                    {ebook.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg mb-2 text-slate-900 dark:text-white line-clamp-2">
                  {ebook.title}
                </CardTitle>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-3 line-clamp-3">{ebook.description}</p>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium ml-1">{ebook.rating}</span>
                  </div>
                  <span className="text-sm text-slate-500">({ebook.reviews} reviews)</span>
                </div>
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {/* ₦{ebook.price.toLocaleString()} */}
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 space-y-2">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Buy Now
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  <Eye className="mr-2 h-4 w-4" />
                  Preview
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Ebooks
          </Button>
        </div>
      </div>
    </section>
  )
}
