export default function Conference() {
  const conferences = [
    {
      title: 'Resource-Efficient Simulation of Large Quantum Circuits Using Circuit Partitioning and Qubit Reuse',
      authors: 'Leanghok Hour, Muyleang Ing, Youngsun Han',
      event: 'ICCE Asia 2025',
      location: 'Busan, South Korea',
    },
    {
      title: 'A Resource-Efficient Quantum-Classical Model for Protein–Ligand Binding Affinity Prediction',
      authors: 'Tara Kit, Leanghok Hour, Muyleang Ing, Youngsun Han',
      event: 'Submitted',
      location: 'Under Review',
    },
  ]

  return (
    <section id="conference" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-accent mb-12">Conference & Publications</h2>
        
        <div className="space-y-6">
          {conferences.map((conf, index) => (
            <div key={index} className="bg-card rounded-lg p-8 shadow-sm border border-border hover:border-accent/50 transition-colors">
              <h3 className="text-xl font-bold text-foreground mb-3">
                {conf.title}
              </h3>
              <p className="text-muted-foreground mb-3">
                {conf.authors}
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="text-accent font-medium">{conf.event}</span>
                <span className="text-muted-foreground">{conf.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
