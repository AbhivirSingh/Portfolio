import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "A user-friendly e-commerce platform with seamless online shopping experience, featuring local storage for product management.",
      technologies: ["HTML/CSS", "JavaScript", "NodeJS", "MongoDB"],
      link: "#",
      github: "#",
    },
    {
      title: "Roostoo Trading Bot",
      description:
        "Python-based automated trading bot using RSI and MACD strategies with risk management (3% stop-loss, 6% take-profit). 2nd Runner-up at IEEE-RGIPT hackathon.",
      technologies: ["Python", "NextJS", "Trading APIs", "TA-Lib"],
      link: "#",
      github: "#",
    },
    {
      title: "QR Code Verification System",
      description:
        "Automated system using Google Apps Script and AutoCrat for generating and verifying QR codes for intern credentials with seamless Excel integration.",
      technologies: ["Google Apps Script", "Excel", "AutoCrat", "ChromeDriver"],
      link: "#",
      github: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <div className="h-1 w-16 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
