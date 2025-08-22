"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CreditCard, Download, CheckCircle, Star, Shield, Clock, MessageCircle, Package } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PurchasePage() {
  const params = useParams()
  const bookId = params.id as string

  const [book, setBook] = useState<any>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isPurchased, setIsPurchased] = useState(false)
  const [paymentData, setPaymentData] = useState({
    email: "",
    fullName: "",
    phone: "",
  })

  const books = [
    {
      id: 1,
      title: "Jummai's A-Z Animal Alphabet Book",
      description:
        "A comprehensive alphabet learning book featuring animals from A to Z, perfect for early readers and language development.",
      price: 9000,
      rating: 4.9,
      reviews: 156,
      image: "/images/animal-alphabet-book.jpg",
      category: "Alphabet Learning",
      ageGroup: "3-6 years",
      pages: 32,
      pdfUrl: "/downloads/jummai-animal-alphabet-book.pdf",
      features: ["32 colorful pages", "A-Z animal illustrations", "Learning activities", "Printable format"],
    },
    {
      id: 2,
      title: "English to Arabic Animal Names",
      description:
        "Bilingual learning made easy! Learn animal names in both English and Arabic with beautiful illustrations.",
      price: 4000,
      rating: 4.8,
      reviews: 124,
      image: "/images/alphabet-book-english-arabic.jpg",
      category: "Multilingual",
      ageGroup: "4-8 years",
      pages: 28,
      pdfUrl: "/downloads/english-arabic-animal-names.pdf",
      features: ["Bilingual content", "Arabic script learning", "Animal illustrations", "Cultural education"],
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
      ageGroup: "4-8 years",
      pages: 28,
      pdfUrl: "/downloads/english-hausa-alphabet-book.pdf",
      features: ["English-Hausa bilingual", "Local language preservation", "Animal themes", "Cultural relevance"],
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
      ageGroup: "4-7 years",
      pages: 40,
      pdfUrl: "/downloads/handwriting-coordination-book.pdf",
      features: ["Tracing exercises", "Motor skill development", "Progressive difficulty", "Practice sheets"],
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
      ageGroup: "2-5 years",
      pages: 24,
      pdfUrl: "/downloads/shapes-colors-basic-education.pdf",
      features: ["Shape recognition", "Color learning", "Interactive activities", "Early learning foundation"],
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
      ageGroup: "5-8 years",
      pages: 36,
      pdfUrl: "/downloads/sight-words-activity-book.pdf",
      features: ["Essential sight words", "Reading fluency", "Activity-based learning", "Progress tracking"],
    },
  ]

  useEffect(() => {
    const foundBook = books.find((b) => b.id === Number.parseInt(bookId))
    setBook(foundBook)

    // Check if already purchased (simulate with localStorage)
    const purchased = localStorage.getItem(`purchased_${bookId}`)
    if (purchased) {
      setIsPurchased(true)
    }
  }, [bookId])

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 3000))

    // Mark as purchased
    localStorage.setItem(`purchased_${bookId}`, "true")
    setIsPurchased(true)
    setIsProcessing(false)
  }

  const handleDownload = () => {
    // Create a blob URL for the PDF (simulated)
    const pdfContent = `%PDF-1.4
1 0 obj
<<
/Type /Catalog
/Pages 2 0 R
>>
endobj

2 0 obj
<<
/Type /Pages
/Kids [3 0 R]
/Count 1
>>
endobj

3 0 obj
<<
/Type /Page
/Parent 2 0 R
/MediaBox [0 0 612 792]
/Contents 4 0 R
/Resources <<
/Font <<
/F1 5 0 R
>>
>>
>>
endobj

4 0 obj
<<
/Length 44
>>
stream
BT
/F1 24 Tf
100 700 Td
(${book?.title}) Tj
ET
endstream
endobj

5 0 obj
<<
/Type /Font
/Subtype /Type1
/BaseFont /Helvetica
>>
endobj

xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000274 00000 n 
0000000369 00000 n 
trailer
<<
/Size 6
/Root 1 0 R
>>
startxref
466
%%EOF`

    const blob = new Blob([pdfContent], { type: "application/pdf" })
    const url = URL.createObjectURL(blob)

    const link = document.createElement("a")
    link.href = url
    link.download = `${book?.title.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase()}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  if (!book) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 pt-32 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Book Not Found</h1>
          <Link href="/books">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Books
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 pt-32 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/books">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Books
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Book Details */}
          <div>
            <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="relative mb-6">
                  <Image
                    src={book.image || "/placeholder.svg"}
                    alt={book.title}
                    width={400}
                    height={500}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <Badge className="absolute top-2 left-2 bg-blue-600">{book.category}</Badge>
                </div>

                <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{book.title}</h1>

                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium ml-1">{book.rating}</span>
                  </div>
                  <span className="text-sm text-slate-500">({book.reviews} reviews)</span>
                  <Badge variant="secondary">{book.ageGroup}</Badge>
                </div>

                <p className="text-slate-600 dark:text-slate-300 mb-6">{book.description}</p>

                <div className="space-y-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white">What's Included:</h3>
                  <ul className="space-y-2">
                    {book.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Shield className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-800 dark:text-blue-200">Instant Download</span>
                  </div>
                  <p className="text-xs text-blue-700 dark:text-blue-300">
                    Get immediate access to your PDF after purchase. No waiting, no shipping fees.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Purchase/Download Section */}
          <div>
            {!isPurchased ? (
              <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CreditCard className="h-5 w-5" />
                    <span>Unlock Your Copy Today !</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {/* <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-slate-900 dark:text-white">
                      ₦{book.price.toLocaleString()}
                    </div>
                    <p className="text-slate-600 dark:text-slate-300">
                      One-time payment • Instant access • {book.pages} pages
                    </p>
                    <p >
                      Get in Touch with The Author Directly.
                    </p>
                  </div> */}



                  <div className="max-w-md mx-auto rounded-2xl shadow-lg bg-white dark:bg-slate-800 p-6 text-center">
                      {/* Header */}
                      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                        Get Instant Access
                      </h2>

                      {/* Book details */}
                      <p className="text-slate-600 dark:text-slate-300 mb-4">
                        📖 {book.pages} pages • One-Time Payment
                      </p>

                      {/* CTA text */}
                      <p className="text-lg font-medium text-slate-700 dark:text-slate-200 mb-6">
                          <span className="text-blue-600">Contact The Author Directly</span> to get your copy.
                      </p>

                      {/* Contact button */}
                      {/* <a
                        href="https://wa.me/yourwhatsapplink"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full px-5 py-3 bg-green-500 text-white font-semibold rounded-xl shadow hover:bg-green-600 transition"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 3.5A10.5 10.5 0 0 0 3.1 17.7L2 22l4.5-1.2A10.5 10.5 0 1 0 20 3.5zm-9.3 14c-1.5 0-2.9-.4-4.1-1.1l-.3-.2-2.4.6.6-2.3-.2-.3c-.8-1.2-1.2-2.6-1.2-4.1C3 7.1 7.1 3 12 3s9 4.1 9 9-4.1 9-9 9zm5-6.5c-.3-.1-1.6-.8-1.8-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.6-1.5-1.9-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.4.1-.1.2-.2.3-.4.1-.1 0-.2 0-.4s-.6-1.4-.8-1.9c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.4.1-.5.3-.2.3-.7.7-.7 1.7 0 1 .7 2 1 2.4.1.1 1.5 2.3 3.6 3.2 1.4.6 2 .6 2.4.5.4-.1 1.2-.5 1.3-1 .2-.5.2-.9.2-1 0-.1-.1-.1-.3-.2z" />
                        </svg>
                        Contact on WhatsApp
                      </a> */}

                      <Button
                        onClick={() => {
                          const message = `Hi! I'm interested in your book: "${book.title}". Please I will like to get the book.`
                          const whatsappUrl = `https://wa.me/2348132659017?text=${encodeURIComponent(message)}`
                          window.open(whatsappUrl, "_blank")
                        }}
                         rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full px-5 py-3 bg-green-500 text-white font-semibold rounded-xl shadow hover:bg-green-600 transition"
                      >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 3.5A10.5 10.5 0 0 0 3.1 17.7L2 22l4.5-1.2A10.5 10.5 0 1 0 20 3.5zm-9.3 14c-1.5 0-2.9-.4-4.1-1.1l-.3-.2-2.4.6.6-2.3-.2-.3c-.8-1.2-1.2-2.6-1.2-4.1C3 7.1 7.1 3 12 3s9 4.1 9 9-4.1 9-9 9zm5-6.5c-.3-.1-1.6-.8-1.8-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.6-1.5-1.9-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.4.1-.1.2-.2.3-.4.1-.1 0-.2 0-.4s-.6-1.4-.8-1.9c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.4.1-.5.3-.2.3-.7.7-.7 1.7 0 1 .7 2 1 2.4.1.1 1.5 2.3 3.6 3.2 1.4.6 2 .6 2.4.5.4-.1 1.2-.5 1.3-1 .2-.5.2-.9.2-1 0-.1-.1-.1-.3-.2z" />
                        </svg>
                        Contact on WhatsApp
                      </Button>
                  </div>
              
              
                  


                  <Tabs defaultValue="manual" className="w-full">
                    {/* <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="manual">Manual Payment</TabsTrigger>
                      <TabsTrigger value="direct">Direct Payment</TabsTrigger>
                    </TabsList> */}

                    {/* Manual Payment Tab */}
                    <TabsContent value="manual" className="space-y-4">
                      {/* <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                        <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Bank Transfer Details</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-blue-700 dark:text-blue-300">Bank Name:</span>
                            <span className="font-medium text-blue-900 dark:text-blue-100">First Bank Nigeria</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-blue-700 dark:text-blue-300">Account Name:</span>
                            <span className="font-medium text-blue-900 dark:text-blue-100">Fidelia Jummai Parker</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-blue-700 dark:text-blue-300">Account Number:</span>
                            <span className="font-medium text-blue-900 dark:text-blue-100">3012345678</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-blue-700 dark:text-blue-300">Amount:</span>
                            <span className="font-bold text-green-600">₦{book.price.toLocaleString()}</span>
                          </div>
                        </div>
                      </div> */}

                      {/* <Alert className="border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-900/20">
                        <AlertDescription className="text-orange-800 dark:text-orange-200">
                          <strong>Important:</strong> After making payment, contact me on WhatsApp with your payment
                          proof to get instant access to your book.
                        </AlertDescription>
                      </Alert> */}

                      {/* <Button
                        onClick={() => {
                          const message = `Hi! I'm interested in your book: "${book.title}". Please I will like to get the book.`
                          const whatsappUrl = `https://wa.me/2348132659017?text=${encodeURIComponent(message)}`
                          window.open(whatsappUrl, "_blank")
                        }}
                        className="w-full bg-green-600 hover:bg-green-700 text-white"
                        size="lg"
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Contact on WhatsApp to Place Your Order
                      </Button> */}

                      {/* <div className="text-center">
                        <p className="text-xs text-slate-500">
                          Click the button above after making your bank transfer to send payment proof via WhatsApp
                        </p>
                      </div> */}
                    </TabsContent>

                    {/* Direct Payment Tab */}
                    {/* <TabsContent value="direct" className="space-y-4">
                      <form onSubmit={handlePayment} className="space-y-4">
                        <div>
                          <Label htmlFor="fullName">Full Name</Label>
                          <Input
                            id="fullName"
                            type="text"
                            placeholder="Enter your full name"
                            value={paymentData.fullName}
                            onChange={(e) => setPaymentData((prev) => ({ ...prev, fullName: e.target.value }))}
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your.email@example.com"
                            value={paymentData.email}
                            onChange={(e) => setPaymentData((prev) => ({ ...prev, email: e.target.value }))}
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+234 812 345 6789"
                            value={paymentData.phone}
                            onChange={(e) => setPaymentData((prev) => ({ ...prev, phone: e.target.value }))}
                            required
                          />
                        </div>

                        <Button
                          type="submit"
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                          size="lg"
                          disabled={isProcessing}
                        >
                          {isProcessing ? (
                            <>
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                              Processing Payment...
                            </>
                          ) : (
                            <>
                              <CreditCard className="mr-2 h-4 w-4" />
                              Pay ₦{book.price.toLocaleString()} Now
                            </>
                          )}
                        </Button>
                      </form>

                      <div className="text-center">
                        <p className="text-xs text-slate-500">
                          Secure online payment processing • Instant access after payment
                        </p>
                      </div>
                    </TabsContent> */}
                  </Tabs>

                  {/* <div className="mt-6 flex items-center justify-center space-x-4 text-xs text-slate-500">
                    <div className="flex items-center">
                      <Shield className="h-3 w-3 mr-1" />
                      Secure Payment
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      Instant Access
                    </div>
                  </div> */}
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-green-600">
                    <CheckCircle className="h-5 w-5" />
                    <span>Purchase Complete!</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Alert className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <AlertDescription className="text-green-800 dark:text-green-200">
                      Thank you for your purchase! Choose how you'd like to receive your book.
                    </AlertDescription>
                  </Alert>

                  <div className="text-center space-y-4">
                    <div className="text-3xl font-bold text-green-600">₦{book.price.toLocaleString()}</div>
                    <p className="text-slate-600 dark:text-slate-300">
                      Payment successful • {book.pages} pages • Multiple format options
                    </p>
                  </div>

                  {/* Download Options */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-slate-900 dark:text-white text-center">
                      Choose Your Preferred Format:
                    </h3>

                    {/* PDF Download Option */}
                    <Card className="border-2 border-blue-200 dark:border-blue-800">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3 mb-3">
                          <Download className="h-5 w-5 text-blue-600" />
                          <div>
                            <h4 className="font-medium text-slate-900 dark:text-white">Digital PDF Download</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-300">
                              Instant download • Print at home • No extra cost
                            </p>
                          </div>
                        </div>
                        <Button onClick={handleDownload} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                          <Download className="mr-2 h-4 w-4" />
                          Download PDF Now
                        </Button>
                      </CardContent>
                    </Card>

                    {/* Hard Copy Option */}
                    <Card className="border-2 border-purple-200 dark:border-purple-800">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3 mb-3">
                          <Package className="h-5 w-5 text-purple-600" />
                          <div>
                            <h4 className="font-medium text-slate-900 dark:text-white">Physical Hard Copy</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-300">
                              Printed book delivered to your address • +₦1,500 delivery fee
                            </p>
                          </div>
                        </div>
                        <Button
                          onClick={() => {
                            const message = `Hi! I just purchased "${book.title}" and would like to request a physical hard copy. Please let me know the delivery details and total cost including the ₦1,500 delivery fee. My delivery address is: [Please provide your full address]`
                            const whatsappUrl = `https://wa.me/2348123456789?text=${encodeURIComponent(message)}`
                            window.open(whatsappUrl, "_blank")
                          }}
                          variant="outline"
                          className="w-full border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                        >
                          <MessageCircle className="mr-2 h-4 w-4" />
                          Request Hard Copy via WhatsApp
                        </Button>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">Delivery Information:</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                      <li>• PDF: Instant download available now</li>
                      <li>• Hard Copy: 3-7 business days delivery within Nigeria</li>
                      <li>• Delivery Fee: ₦1,500 (covers printing + shipping)</li>
                      <li>• You can order both formats if needed</li>
                    </ul>
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-slate-500 mb-2">Need help or have questions?</p>
                    <Link href="/contact">
                      <Button variant="outline" size="sm">
                        Contact Support
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
