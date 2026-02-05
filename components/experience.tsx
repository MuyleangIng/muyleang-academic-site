export default function Experience() {
  const experiences = [
    {
      year: "2024–2025",
      title: "Instructor and DevOps Engineer",
      organization: "ISTAD",
      link: "https://www.facebook.com/istad.co",
      description:
        "I worked on DevOps engineering, teaching, and research. I am sincerely grateful to ISTAD and all my teachers for their support and for giving me the opportunity and scholarship to continue my studies abroad at PKNU.",
    },
    {
      year: "2025–Present",
      title: "Master Student & Researcher",
      organization: "Pukyong National University",
      description:
        "I am a researcher in the Quantum Computing Laboratory working on quantum compiler and simulator design, as well as hardware-aware quantum machine learning optimization.",
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-accent mb-12">Experience</h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div key={index} className="flex gap-6">
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-accent rounded-full mt-2"></div>
                {index < experiences.length - 1 && (
                  <div className="w-1 bg-accent/30 flex-1 my-2 min-h-[120px]"></div>
                )}
              </div>

              {/* Content */}
              <div className="pb-8 flex-1">
                <span className="text-accent font-bold">{exp.year}</span>
                <h3 className="text-2xl font-bold text-foreground mt-1">
                  {exp.title}
                </h3>

                {exp.link ? (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg text-accent underline underline-offset-4"
                  >
                    {exp.organization}
                  </a>
                ) : (
                  <p className="text-lg text-accent">{exp.organization}</p>
                )}

                <p className="text-muted-foreground leading-relaxed mt-2">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
