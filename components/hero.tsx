import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary via-primary to-primary/95 text-primary-foreground py-16 md:py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
        <div className="flex-1">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Muyleang Ing
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90 mb-4 md:mb-8 leading-relaxed">
            AI Convergence Researcher | Quantum Computing | Software & DevOps Engineer
          </p>
          <p className="text-sm md:text-base text-primary-foreground/75 max-w-2xl leading-relaxed">
            Master's student at Pukyong National University, Busan, South Korea. Researching quantum computing, machine learning, and advanced software systems.
          </p>
        </div>
        
        <div className="hidden md:flex flex-1 justify-end">
          <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
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
