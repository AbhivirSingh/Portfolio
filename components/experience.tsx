import { BriefcaseIcon } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Research Internship",
      company: "Tata Consultancy and Services",
      location: "Remote",
      duration: "Jun 2023 - Aug 2023",
      description: [
        "Served as a research intern in the Telecom Industry with a focus on AI/ML applications",
        "Elevated proficiency in statistical analysis and refined communication skills",
        "Gained valuable insights into the dynamic landscape of the Telecom sector",
      ],
    },
    {
      title: "Full Stack Intern",
      company: "Old Skool Labs",
      location: "Remote",
      duration: "May 2024 - Aug 2024",
      description: [
        "Worked on creating many E-Commerce Websites for company clients",
        "Generated QR code verification system for Interns",
        "Collaborated with cross-functional teams to deliver scalable solutions",
      ],
    },
    {
      title: "Member of Technical Staff Intern",
      company: "GeeksforGeeks",
      location: "Noida",
      duration: "Jun 2025 - Aug 2025",
      description: [
        "Troubleshot and resolved technical issues on the platform",
        "Enhanced platform functionality and user experience",
        "Collaborated with teammates for creating industry-driven courses",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-secondary/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Experience</h2>
          <div className="h-1 w-16 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <BriefcaseIcon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">{exp.duration}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{exp.location}</p>
                  <ul className="space-y-2">
                    {exp.description.map((point, i) => (
                      <li key={i} className="text-muted-foreground flex gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
