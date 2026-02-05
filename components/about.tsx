export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-accent mb-8 md:mb-12">About Me</h2>
        
        <div className="max-w-4xl text-muted-foreground space-y-4 md:space-y-6">
          <p className="text-sm md:text-base leading-relaxed">
             I received my Bachelor’s degree in Computer Science from the Royal
            University of Phnom Penh, Cambodia, in 2023. I am currently pursuing
            a Master’s degree in the Department of AI Convergence at Pukyong
            National University, Busan, South Korea.
          </p>
          
          <p className="text-sm md:text-base leading-relaxed">
My research interests include simulators, deep learning, quantum
            computing, and quantum machine learning. I am a member of the{" "}
            <a
              href="https://sites.google.com/view/qcl-pknu/members#h.46fdcba92cb6175c_0"
              target="_blank"
              rel="noreferrer"
              className="text-accent underline underline-offset-4"
            >
              Quantum Computing Laboratory
            </a>{" "}
            at PKNU, where I focus on quantum compiler design, quantum simulators,
            and hardware-aware quantum machine learning.          </p>
          
          <p className="text-sm md:text-base leading-relaxed">
I plan to complete my degree in 2027 and return to Cambodia to
            contribute to research and education. My goal is to bridge advanced
            AI and quantum computing research with practical applications for
            developing nations.          </p>
        </div>
      </div>
    </section>
  )
}
