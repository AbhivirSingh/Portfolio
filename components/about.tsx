export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="h-1 w-16 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Bio */}
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m a passionate full-stack developer and AI enthusiast currently pursuing an Integrated Dual Degree
              (B.Tech CSE + M.Tech AI) at Rajiv Gandhi Institute of Petroleum Technology. With a CGPA of 8.04, I combine
              strong academic performance with practical experience.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My journey includes internships at leading companies like TCS and Old Skool Labs, where I worked on
              impactful projects involving e-commerce, trading algorithms, and automation systems. I&apos;m particularly
              interested in building scalable web applications and exploring AI/ML applications in real-world scenarios.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Beyond coding, I enjoy solving complex problems, learning new technologies, and contributing to the tech
              community as a teaching assistant and mentor.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Education</h3>
            <div className="space-y-4">
              <div className="bg-card border border-border rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold text-foreground">Integrated Dual Degree</h4>
                    <p className="text-sm text-primary">B.Tech (CSE) + M.Tech (AI)</p>
                    <p className="text-sm text-muted-foreground mt-1">Rajiv Gandhi Institute of Petroleum Technology</p>
                  </div>
                  <span className="text-sm font-medium bg-primary/20 text-primary px-3 py-1 rounded-full">
                    8.04 CGPA
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-3">2022 - 2027</p>
              </div>

              <div className="bg-card border border-border rounded-lg p-4">
                <h4 className="font-semibold text-foreground">Senior Secondary</h4>
                <p className="text-sm text-primary">CBSE Board</p>
                <p className="text-sm text-muted-foreground mt-1">92.0%</p>
                <p className="text-xs text-muted-foreground mt-2">2022</p>
              </div>

              <div className="bg-card border border-border rounded-lg p-4">
                <h4 className="font-semibold text-foreground">Secondary</h4>
                <p className="text-sm text-primary">CBSE Board</p>
                <p className="text-sm text-muted-foreground mt-1">91.0%</p>
                <p className="text-xs text-muted-foreground mt-2">2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
