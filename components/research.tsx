export default function Research() {
  return (
    <section id="research" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-accent mb-12">Research</h2>
        
        <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Quantum Software Stack Development
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Quantum Compiler, Quantum Simulator, and Quantum Machine Learning research in PKNU Quantum Lab.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-accent/20 text-accent rounded text-sm font-medium">
              Quantum Computing
            </span>
            <span className="px-3 py-1 bg-accent/20 text-accent rounded text-sm font-medium">
              Quantum Machine Learning
            </span>
            <span className="px-3 py-1 bg-accent/20 text-accent rounded text-sm font-medium">
              Compiler Design
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
