"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Star, ShoppingCart, Eye, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BooksPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const [ebooks] = useState([
    {
      id: 1,
      title: "Jummai's A-Z Animal Alphabet Book",
      description:
        "A comprehensive alphabet learning book featuring animals from A to Z, perfect for early readers and language development.",
      price: 2500,
      rating: 4.9,
      reviews: 156,
      image: "/images/animal-alphabet-book.jpg",
      category: "Alphabet Learning",
      featured: true,
      ageGroup: "3-6 years",
      pages: 32,
    },
    {
      id: 2,
      title: "English to Arabic Animal Names",
      description:
        "Bilingual learning made easy! Learn animal names in both English and Arabic with beautiful illustrations.",
      price: 3000,
      rating: 4.8,
      reviews: 124,
      image: "/images/alphabet-book-english-arabic.jpg",
      category: "Multilingual",
      featured: true,
      ageGroup: "4-8 years",
      pages: 28,
    },
    {
      id: 3,
      title: "English to Hausa Alphabet Book",
      description: "Master the alphabet in both English and Hausa languages with engaging animal-themed learning.",
      price: 3000,
      rating: 4.7,
      reviews: 98,
      image: "/images/alphabet-book-hausa.jpg",
      category: "Multilingual",
      featured: false,
      ageGroup: "4-8 years",
      pages: 28,
    },
    {
      id: 4,
      title: "Handwriting Coordination Book",
      description: "Develop fine motor skills and handwriting coordination with fun tracing activities and exercises.",
      price: 2000,
      rating: 4.9,
      reviews: 203,
      image: "/images/handwriting-book.jpg",
      category: "Handwriting",
      featured: false,
      ageGroup: "4-7 years",
      pages: 40,
    },
    {
      id: 5,
      title: "Shapes & Colours Basic Education",
      description:
        "Learn basic shapes and colors through interactive and colorful educational content designed for young learners.",
      price: 1800,
      rating: 4.8,
      reviews: 167,
      image: "/images/shapes-colors-book.jpg",
      category: "Basic Education",
      featured: false,
      ageGroup: "2-5 years",
      pages: 24,
    },
    {
      id: 6,
      title: "Sight Words Activity Book",
      description:
        "Build reading fluency with essential sight words through engaging activities and colorful illustrations.",
      price: 2200,
      rating: 4.9,
      reviews: 189,
      image: "/images/sight-words-book.jpg",
      category: "Reading Skills",
      featured: true,
      ageGroup: "5-8 years",
      pages: 36,
    },
  ])

  const categories = ["All", "Alphabet Learning", "Multilingual", "Handwriting", "Basic Education", "Reading Skills"]

  const filteredBooks = ebooks.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || book.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handlePreview = (bookId: number, bookTitle: string) => {
    // Simulate preview functionality
    alert(`Opening preview for ${bookTitle}...`)
    // In a real app, this would open a preview modal or page
  }

  const handleBulkOrder = () => {
    // Redirect to contact page with bulk order inquiry
    window.location.href = "/contact"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">My Educational Books</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Discover my collection of educational books designed to make learning engaging and accessible for children
            of all ages.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
            <Input
              placeholder="Search books..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-blue-600 hover:bg-blue-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredBooks.map((ebook) => (
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
                    width={300}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-xs">
                    {ebook.category}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {ebook.ageGroup}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2 text-slate-900 dark:text-white line-clamp-2">
                  {ebook.title}
                </CardTitle>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-3 line-clamp-3">{ebook.description}</p>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium ml-1">{ebook.rating}</span>
                    </div>
                    <span className="text-sm text-slate-500">({ebook.reviews})</span>
                  </div>
                  <span className="text-sm text-slate-500">{ebook.pages} pages</span>
                </div>

                <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-4">
                  ₦{ebook.price.toLocaleString()}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 space-y-2">
                <Link href={`/purchase/${ebook.id}`} className="w-full">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Buy Now
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={() => handlePreview(ebook.id, ebook.title)}
                >
                  <Eye className="mr-2 h-4 w-4" />
                  Preview
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredBooks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-slate-600 dark:text-slate-300">No books found matching your criteria.</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("All")
              }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Need Books for Your School?</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            Contact me for bulk orders and special pricing for educational institutions.
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700" onClick={handleBulkOrder}>
            Contact for Bulk Orders
          </Button>
        </div>
      </div>
    </div>
  )
}
