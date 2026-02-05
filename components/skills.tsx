export default function Skills() {
  const skillCategories = [
    {
      category: 'Backend',
      skills: ['Spring Boot', 'Spring Microservices', 'OAuth2', 'Keycloak', 'Node.js', 'Next.js', 'TypeScript', 'React'],
    },
    {
      category: 'Mobile & Desktop',
      skills: ['Flutter', 'Swift', 'Electron'],
    },
    {
      category: 'Languages',
      skills: ['Go', 'C++', 'Python', 'Java'],
    },
    {
      category: 'DevOps',
      skills: ['Docker', 'Kubernetes', 'CI/CD', 'NPM', 'PIP', 'Gradle', 'Brew'],
    },
    {
      category: 'Database',
      skills: ['PostgreSQL', 'Oracle'],
    },
    {
      category: 'Research & ML',
      skills: ['Quantum Computing', 'Deep Learning', 'Quantum Machine Learning', 'Quantum Simulators'],
    },
  ]

  return (
    <section id="skills" className="py-16 md:py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-accent mb-8 md:mb-12">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {skillCategories.map((cat, index) => (
            <div key={index} className="bg-card rounded-lg p-4 md:p-6 shadow-sm border border-border">
              <h3 className="text-base md:text-lg font-bold text-accent mb-3 md:mb-4">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2 md:px-3 py-1 bg-background rounded-full text-xs md:text-sm text-foreground border border-border hover:border-accent transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
