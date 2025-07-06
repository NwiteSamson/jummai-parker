"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Lock, User, ArrowLeft, Eye, EyeOff, Mail, Phone, Facebook } from "lucide-react"
import Link from "next/link"

interface AdminLoginProps {
  onLogin: (success: boolean) => void
}

export function AdminLogin({ onLogin }: AdminLoginProps) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    email: "",
    phone: "",
    otp: "",
  })
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [otpSent, setOtpSent] = useState(false)
  const [activeTab, setActiveTab] = useState("username")

  // Demo credentials
  const DEMO_CREDENTIALS = {
    username: "admin",
    password: "jummai2024",
    email: "admin@jummaibooks.com",
    phone: "+2348123456789",
    otp: "123456",
  }

  const handleSubmit = async (e: React.FormEvent, loginType: string) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    let isValid = false

    switch (loginType) {
      case "username":
        isValid =
          credentials.username === DEMO_CREDENTIALS.username && credentials.password === DEMO_CREDENTIALS.password
        break
      case "email":
        isValid = credentials.email === DEMO_CREDENTIALS.email && credentials.password === DEMO_CREDENTIALS.password
        break
      case "phone":
        if (!otpSent) {
          if (credentials.phone === DEMO_CREDENTIALS.phone) {
            setOtpSent(true)
            setIsLoading(false)
            return
          } else {
            setError("Invalid phone number. Please try again.")
          }
        } else {
          isValid = credentials.otp === DEMO_CREDENTIALS.otp
        }
        break
      case "facebook":
        // Simulate Facebook login
        isValid = true
        break
    }

    if (isValid) {
      onLogin(true)
    } else {
      if (loginType === "phone" && otpSent) {
        setError("Invalid OTP. Please try again.")
      } else {
        setError("Invalid credentials. Please try again.")
      }
      onLogin(false)
    }

    setIsLoading(false)
  }

  const handleFacebookLogin = () => {
    setIsLoading(true)
    // Simulate Facebook OAuth flow
    setTimeout(() => {
      onLogin(true)
    }, 2000)
  }

  const resetForm = () => {
    setCredentials({
      username: "",
      password: "",
      email: "",
      phone: "",
      otp: "",
    })
    setError("")
    setOtpSent(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 pt-32 p-4 sm:p-6 lg:p-8">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
        </div>

        <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200 dark:border-slate-700">
          <CardHeader className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full w-16 h-16 mx-auto mb-4">
              <Lock className="h-8 w-8 text-blue-600 mx-auto" />
            </div>
            <CardTitle className="text-2xl text-slate-900 dark:text-white">Admin Login</CardTitle>
            <p className="text-slate-600 dark:text-slate-300">Choose your preferred login method</p>
          </CardHeader>
          <CardContent>
            <Tabs
              value={activeTab}
              onValueChange={(value) => {
                setActiveTab(value)
                resetForm()
              }}
            >
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="username" className="text-xs">
                  Username
                </TabsTrigger>
                <TabsTrigger value="email" className="text-xs">
                  Email
                </TabsTrigger>
                <TabsTrigger value="phone" className="text-xs">
                  Phone
                </TabsTrigger>
              </TabsList>

              {/* Username Login */}
              <TabsContent value="username" className="space-y-4">
                <form onSubmit={(e) => handleSubmit(e, "username")} className="space-y-4">
                  <div>
                    <Label htmlFor="username">Username</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                      <Input
                        id="username"
                        type="text"
                        placeholder="Enter your username"
                        value={credentials.username}
                        onChange={(e) => setCredentials((prev) => ({ ...prev, username: e.target.value }))}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={credentials.password}
                        onChange={(e) => setCredentials((prev) => ({ ...prev, password: e.target.value }))}
                        className="pl-10 pr-10"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-slate-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-slate-400" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Signing In...
                      </>
                    ) : (
                      "Sign In with Username"
                    )}
                  </Button>
                </form>
              </TabsContent>

              {/* Email Login */}
              <TabsContent value="email" className="space-y-4">
                <form onSubmit={(e) => handleSubmit(e, "email")} className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={credentials.email}
                        onChange={(e) => setCredentials((prev) => ({ ...prev, email: e.target.value }))}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                      <Input
                        id="email-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={credentials.password}
                        onChange={(e) => setCredentials((prev) => ({ ...prev, password: e.target.value }))}
                        className="pl-10 pr-10"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-slate-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-slate-400" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Signing In...
                      </>
                    ) : (
                      "Sign In with Email"
                    )}
                  </Button>
                </form>
              </TabsContent>

              {/* Phone Login */}
              <TabsContent value="phone" className="space-y-4">
                <form onSubmit={(e) => handleSubmit(e, "phone")} className="space-y-4">
                  {!otpSent ? (
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+234 812 345 6789"
                          value={credentials.phone}
                          onChange={(e) => setCredentials((prev) => ({ ...prev, phone: e.target.value }))}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                  ) : (
                    <div>
                      <Label htmlFor="otp">Enter OTP</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                        <Input
                          id="otp"
                          type="text"
                          placeholder="Enter 6-digit OTP"
                          value={credentials.otp}
                          onChange={(e) => setCredentials((prev) => ({ ...prev, otp: e.target.value }))}
                          className="pl-10"
                          maxLength={6}
                          required
                        />
                      </div>
                      <p className="text-sm text-slate-500 mt-1">OTP sent to {credentials.phone}</p>
                    </div>
                  )}

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        {otpSent ? "Verifying..." : "Sending OTP..."}
                      </>
                    ) : otpSent ? (
                      "Verify OTP"
                    ) : (
                      "Send OTP"
                    )}
                  </Button>

                  {otpSent && (
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full bg-transparent"
                      onClick={() => setOtpSent(false)}
                    >
                      Change Phone Number
                    </Button>
                  )}
                </form>
              </TabsContent>
            </Tabs>

            {/* Social Login */}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white dark:bg-slate-800 px-2 text-slate-500">Or continue with</span>
                </div>
              </div>

              <div className="mt-4">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full bg-[#1877F2] hover:bg-[#166FE5] text-white border-[#1877F2]"
                  onClick={handleFacebookLogin}
                  disabled={isLoading}
                >
                  {isLoading && activeTab === "facebook" ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Connecting...
                    </>
                  ) : (
                    <>
                      <Facebook className="h-4 w-4 mr-2" />
                      Continue with Facebook
                    </>
                  )}
                </Button>
              </div>
            </div>

            {error && (
              <Alert className="mt-4 border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20">
                <AlertDescription className="text-red-800 dark:text-red-200">{error}</AlertDescription>
              </Alert>
            )}

            {/* Demo Credentials Info */}
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">Demo Credentials:</h4>
              <div className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                <p>
                  <strong>Username:</strong> admin
                </p>
                <p>
                  <strong>Email:</strong> admin@jummaibooks.com
                </p>
                <p>
                  <strong>Phone:</strong> +2348123456789
                </p>
                <p>
                  <strong>Password:</strong> jummai2024
                </p>
                <p>
                  <strong>OTP:</strong> 123456
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
