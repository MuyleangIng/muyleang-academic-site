export default function Experience() {
  const experiences = [
    {
      year: '2024–2025',
      title: 'Instructor and DevOps Engineer',
      organization: 'ISTAD',
      description: 'Worked on DevOps engineering, teaching, and research. Scholarship to PKNU supported by Teacher Chen Phirum and Teacher Tara Kit.',
    },
    {
      year: '2025–Present',
      title: 'Master Student & Researcher',
      organization: 'Pukyong National University',
      description: 'Researcher in Quantum Computing Lab working on compiler and simulator design. Researching Quantum Machine Learning and hardware-aware optimization.',
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-accent mb-12">Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-accent rounded-full mt-2"></div>
                {index < experiences.length - 1 && (
                  <div className="w-1 bg-accent/30 flex-1 my-2" style={{ minHeight: '120px' }}></div>
                )}
              </div>
              <div className="pb-8 flex-1">
                <span className="text-accent font-bold">{exp.year}</span>
                <h3 className="text-2xl font-bold text-foreground mt-1">{exp.title}</h3>
                <p className="text-lg text-accent mb-2">{exp.organization}</p>
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
