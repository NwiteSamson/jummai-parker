"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { AdminLogin } from "@/components/admin-login"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Upload, Plus, Edit, Trash2, Eye, ArrowLeft, LogOut, User } from "lucide-react"
import Link from "next/link"

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [ebooks, setEbooks] = useState([
    {
      id: 1,
      title: "Jummai's A-Z Animal Alphabet Book",
      price: 2500,
      status: "Published",
      sales: 156,
      revenue: 390000,
    },
    {
      id: 2,
      title: "English to Arabic Animal Names",
      price: 3000,
      status: "Published",
      sales: 124,
      revenue: 372000,
    },
    {
      id: 3,
      title: "Handwriting Coordination Book",
      price: 2000,
      status: "Published",
      sales: 203,
      revenue: 406000,
    },
  ])

  const [showUploadForm, setShowUploadForm] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    file: null as File | null,
    cover: null as File | null,
  })

  useEffect(() => {
    // Check if user is already authenticated
    const authStatus = localStorage.getItem("admin_authenticated")
    if (authStatus === "true") {
      setIsAuthenticated(true)
    }
    setIsLoading(false)
  }, [])

  const handleLogin = (success: boolean) => {
    if (success) {
      setIsAuthenticated(true)
      localStorage.setItem("admin_authenticated", "true")
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem("admin_authenticated")
  }

  const handleFileUpload = (type: "file" | "cover", event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setFormData((prev) => ({ ...prev, [type]: file }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    setShowUploadForm(false)
    setFormData({
      title: "",
      description: "",
      price: "",
      category: "",
      file: null,
      cover: null,
    })
  }

  const totalRevenue = ebooks.reduce((sum, ebook) => sum + ebook.revenue, 0)
  const totalSales = ebooks.reduce((sum, ebook) => sum + ebook.sales, 0)

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 pt-32 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto  pt-16">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Portfolio
              </Button>
            </Link>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Book Management Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-300">
              <User className="h-4 w-4" />
              <span className="text-sm">Welcome, Admin</span>
            </div>
            <Button onClick={() => setShowUploadForm(true)} className="bg-green-600 hover:bg-green-700">
              <Plus className="h-4 w-4 mr-2" />
              Add New Book
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setIsAuthenticated(false)
                localStorage.removeItem("admin_authenticated")
              }}
              className="bg-transparent"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-600 dark:text-slate-400">Total Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">₦{totalRevenue.toLocaleString()}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-600 dark:text-slate-400">Total Sales</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{totalSales}</div>
            </CardContent>
          </Card>

          <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-600 dark:text-slate-400">Published Ebooks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">
                {ebooks.filter((e) => e.status === "Published").length}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Upload Form */}
        {showUploadForm && (
          <Card className="mb-8 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Upload className="h-5 w-5" />
                <span>Upload New Ebook</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="title">Title</Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                        placeholder="Enter ebook title"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="price">Price (₦)</Label>
                      <Input
                        id="price"
                        type="number"
                        step="100"
                        value={formData.price}
                        onChange={(e) => setFormData((prev) => ({ ...prev, price: e.target.value }))}
                        placeholder="2500"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="category">Category</Label>
                      <Input
                        id="category"
                        value={formData.category}
                        onChange={(e) => setFormData((prev) => ({ ...prev, category: e.target.value }))}
                        placeholder="React, Next.js, etc."
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                        placeholder="Enter ebook description"
                        rows={4}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="ebook-file">Book File (PDF)</Label>
                    <Input
                      id="ebook-file"
                      type="file"
                      accept=".pdf"
                      onChange={(e) => handleFileUpload("file", e)}
                      required
                    />
                    {formData.file && <p className="text-sm text-green-600 mt-1">✓ {formData.file.name}</p>}
                  </div>

                  <div>
                    <Label htmlFor="cover-image">Book Cover Image</Label>
                    <Input
                      id="cover-image"
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload("cover", e)}
                      required
                    />
                    {formData.cover && <p className="text-sm text-green-600 mt-1">✓ {formData.cover.name}</p>}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Ebook
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setShowUploadForm(false)}>
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Ebooks Table */}
        <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Manage Ebooks</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Sales</TableHead>
                  <TableHead>Revenue</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {ebooks.map((ebook) => (
                  <TableRow key={ebook.id}>
                    <TableCell className="font-medium">{ebook.title}</TableCell>
                    <TableCell>₦{ebook.price.toLocaleString()}</TableCell>
                    <TableCell>
                      <Badge variant={ebook.status === "Published" ? "default" : "secondary"}>{ebook.status}</Badge>
                    </TableCell>
                    <TableCell>{ebook.sales}</TableCell>
                    <TableCell>₦{ebook.revenue.toLocaleString()}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 bg-transparent">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
