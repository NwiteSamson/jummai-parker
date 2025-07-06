import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Globe, Award, Users, Heart, Target } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const highlights = [
    {
      icon: BookOpen,
      title: "Educational Content",
      description: "Creating engaging learning materials for children",
    },
    {
      icon: Globe,
      title: "Multilingual Education",
      description: "Books in English, Hausa, and Arabic languages",
    },
    {
      icon: Users,
      title: "Child Development",
      description: "Focus on early childhood learning and development",
    },
    {
      icon: Award,
      title: "Quality Publishing",
      description: "Professional design and educational excellence",
    },
  ]

  const values = [
    {
      icon: Heart,
      title: "Passion for Learning",
      description:
        "I believe every child deserves access to quality educational materials that make learning enjoyable and effective.",
    },
    {
      icon: Target,
      title: "Cultural Preservation",
      description:
        "Through multilingual books, I help preserve and promote local languages while building global literacy skills.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">About Me</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Founder of Parker Inc. • Creating joyful, culturally-relevant learning experiences for early learners
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">My Story</h2>
            <div className="space-y-4 text-lg text-slate-600 dark:text-slate-300">
              <p>
                I'm Fidelia Jummai Parker, an educational author and founder of Parker Inc., where we create joyful,
                culturally-relevant learning experiences for early learners. With a background in Library Science and a
                lifelong passion for literacy, my mission is to make education both accessible and relatable—especially
                for children in multilingual communities. Each of my books is thoughtfully designed to merge English
                with native languages like Hausa and Arabic, helping children build strong literacy skills while staying
                connected to their cultural roots.
              </p>
              <p>
                Born and raised in Kano City and graduated from the University of Maiduguri, my journey has been shaped
                by a deep love for books, global experiences, and community service. From volunteering at the Arlington
                Public Library in Texas to being an active member of Rotary International and breast cancer awareness
                initiatives, I've always been driven by the power of knowledge to uplift and empower. My work reflects
                this passion, blending educational rigor with fun, creativity, and local relevance.
              </p>
              <p>
                At Parker Inc., we collaborate with educators, parents, and child development experts to ensure every
                book is not just a tool for learning but a spark for curiosity. Whether you're a parent, teacher, or
                school administrator, you'll find our books are more than just pages—they're bridges between languages,
                cultures, and bright futures. Welcome to a world where learning is joyful, meaningful, and made just for
                your little learners.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg blur-3xl opacity-20"></div>
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Fidelia Jummai Moore"
                width={400}
                height={500}
                className="relative rounded-lg border-4 border-white dark:border-slate-800 shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6 text-center">
                  <item.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">My Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200 dark:border-slate-700"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                      <value.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{value.title}</h3>
                      <p className="text-slate-600 dark:text-slate-300">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
            Expertise & Specializations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200 dark:border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Educational Specialties</h3>
                <div className="space-y-2">
                  {[
                    "Early Childhood Education",
                    "Multilingual Learning",
                    "Alphabet Teaching",
                    "Handwriting Development",
                    "Visual Learning",
                    "Child Psychology",
                  ].map((skill, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-slate-600 dark:text-slate-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200 dark:border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Languages & Content</h3>
                <div className="space-y-2">
                  {[
                    "English",
                    "Hausa",
                    "Arabic",
                    "Educational Content Writing",
                    "Curriculum Development",
                    "Learning Assessment",
                  ].map((skill, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-slate-600 dark:text-slate-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200 dark:border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Publishing & Design</h3>
                <div className="space-y-2">
                  {[
                    "Book Publishing",
                    "Educational Design",
                    "Child-Friendly Graphics",
                    "Print Production",
                    "Content Layout",
                    "Quality Assurance",
                  ].map((skill, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-slate-600 dark:text-slate-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
