export default function Research() {
  return (
    <section id="research" className="py-16 md:py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-accent mb-8 md:mb-12">Research</h2>
        
        <div className="bg-card rounded-lg p-4 md:p-8 shadow-sm border border-border">
          <h3 className="text-lg md:text-2xl font-bold text-foreground mb-3">
            Quantum Software Stack Development
          </h3>
          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-4">
            Quantum Compiler, Quantum Simulator, and Quantum Machine Learning research in PKNU Quantum Lab.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 md:px-3 py-1 bg-accent/20 text-accent rounded text-xs md:text-sm font-medium">
              Quantum Computing
            </span>
            <span className="px-2 md:px-3 py-1 bg-accent/20 text-accent rounded text-xs md:text-sm font-medium">
              Quantum Machine Learning
            </span>
            <span className="px-2 md:px-3 py-1 bg-accent/20 text-accent rounded text-xs md:text-sm font-medium">
              Compiler Design
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
