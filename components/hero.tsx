import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary via-primary to-primary/95 text-primary-foreground py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between gap-8">
        <div className="flex-1">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Muyleang Ing
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
            AI Convergence Researcher | Quantum Computing | Software & DevOps Engineer
          </p>
          <p className="text-lg text-primary-foreground/75 max-w-2xl leading-relaxed">
            Master's student at Pukyong National University, Busan, South Korea. Researching quantum computing, machine learning, and advanced software systems.
          </p>
        </div>
        
        <div className="flex-1 flex justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <Image
              src="/muyleanging.jpg"
              alt="Ing Muyleang"
              fill
              className="object-cover rounded-lg shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
