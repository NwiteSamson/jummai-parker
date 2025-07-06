import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Skills() {
  const skillCategories = [
    {
      title: "Educational Specialties",
      skills: [
        "Early Childhood Education",
        "Multilingual Learning",
        "Alphabet Teaching",
        "Handwriting Development",
        "Visual Learning",
        "Child Psychology",
      ],
    },
    {
      title: "Languages & Content",
      skills: [
        "English",
        "Hausa",
        "Arabic",
        "Educational Content Writing",
        "Curriculum Development",
        "Learning Assessment",
      ],
    },
    {
      title: "Publishing & Design",
      skills: [
        "Book Publishing",
        "Educational Design",
        "Child-Friendly Graphics",
        "Print Production",
        "Content Layout",
        "Quality Assurance",
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30 dark:bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Expertise & Specializations
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Here are my areas of expertise in educational content creation and children's book publishing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200 dark:border-slate-700"
            >
              <CardHeader>
                <CardTitle className="text-xl text-slate-900 dark:text-white">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-900/50"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
