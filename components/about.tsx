import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Globe, Award, Users } from "lucide-react"

export function About() {
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

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            I'm a passionate educational author and publisher with extensive experience creating learning materials for
            children. I specialize in multilingual education, helping children learn through engaging books that combine
            English, Hausa, and Arabic languages. My mission is to make quality education accessible and enjoyable for
            every child.
          </p>
        </div>

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
    </section>
  )
}
