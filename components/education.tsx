export default function Education() {
  const education = [
    {
      year: '2019–2023',
      degree: 'Bachelor of Computer Science',
      institution: 'Royal University of Phnom Penh',
      location: 'Cambodia',
    },
    {
      year: '2023–2024',
      degree: 'iSTAD IT Expert Training',
      institution: 'Generation 1',
      location: 'Cambodia',
    },
    {
      year: '2025–Present',
      degree: 'Master in AI Convergence',
      institution: 'Pukyong National University',
      location: 'Busan, South Korea',
    },
  ]

  return (
    <section id="education" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-accent mb-12">Education</h2>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-accent rounded-full mt-2"></div>
                {index < education.length - 1 && (
                  <div className="w-1 bg-accent/30 flex-1 my-2" style={{ minHeight: '120px' }}></div>
                )}
              </div>
              <div className="pb-8 flex-1">
                <span className="text-accent font-bold">{edu.year}</span>
                <h3 className="text-2xl font-bold text-foreground mt-1">{edu.degree}</h3>
                <p className="text-lg text-primary mb-1">{edu.institution}</p>
                <p className="text-muted-foreground">{edu.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
