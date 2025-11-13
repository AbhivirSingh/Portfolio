export default function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Python", "Java", "C++", "JavaScript", "SQL", "Assembly"],
    },
    {
      category: "Frontend",
      skills: ["React", "Next.js", "HTML/CSS", "Tailwind CSS", "JavaScript"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "MongoDB", "Flask", "REST APIs", "Google Apps Script"],
    },
    {
      category: "AI/ML",
      skills: ["TensorFlow", "NumPy", "OpenCV", "Pandas", "Data Analysis"],
    },
    {
      category: "Tools & Platforms",
      skills: ["Git/GitHub", "VS Code", "Anaconda", "Excel", "Selenium"],
    },
    {
      category: "Soft Skills",
      skills: ["Leadership", "Problem Solving", "Communication", "Teamwork", "Teaching"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-secondary/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Skills & Expertise</h2>
          <div className="h-1 w-16 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((skillGroup, idx) => (
            <div key={idx} className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-primary/10 text-primary px-3 py-2 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="mt-16 bg-card border border-border rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-foreground mb-6">Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🏆</span>
              <div>
                <p className="font-semibold text-foreground">Winner of HackAGeeek 2024</p>
                <p className="text-sm text-muted-foreground">Organized by GeeksforGeeks</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🥈</span>
              <div>
                <p className="font-semibold text-foreground">Runner-up DPBH 2023</p>
                <p className="text-sm text-muted-foreground">Dark Pattern Buster Hackathon</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">👨‍🏫</span>
              <div>
                <p className="font-semibold text-foreground">Computer Programming TA</p>
                <p className="text-sm text-muted-foreground">Rajiv Gandhi Institute of Petroleum Technology</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">📚</span>
              <div>
                <p className="font-semibold text-foreground">Differential Equations Tutor</p>
                <p className="text-sm text-muted-foreground">Rajiv Gandhi Institute of Petroleum Technology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
