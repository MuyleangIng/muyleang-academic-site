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
      degree: 'ISTAD IT Expert Training',
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
    <section id="education" className="py-16 md:py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-accent mb-8 md:mb-12">Education</h2>
        
        <div className="space-y-6 md:space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="flex gap-4 md:gap-6">
              <div className="flex flex-col items-center">
                <div className="w-3 md:w-4 h-3 md:h-4 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                {index < education.length - 1 && (
                  <div className="w-0.5 md:w-1 bg-accent/30 flex-1 my-2" style={{ minHeight: '100px' }}></div>
                )}
              </div>
              <div className="pb-6 md:pb-8 flex-1">
                <span className="text-xs md:text-sm text-accent font-bold">{edu.year}</span>
                <h3 className="text-lg md:text-2xl font-bold text-foreground mt-1">{edu.degree}</h3>
                <p className="text-sm md:text-base text-primary mb-1">{edu.institution}</p>
                <p className="text-xs md:text-sm text-muted-foreground">{edu.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
