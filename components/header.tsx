import { Github, Linkedin, Facebook } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground py-4 md:py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Muyleang Ing</h1>
          <p className="text-primary-foreground/80 text-xs md:text-sm leading-tight">            AI Convergence Researcher | Quantum Computing | Software & DevOps Engineer
</p>
        </div>
        
        <div className="flex gap-3 md:gap-4">
          <Link href="https://github.com/MuyleangIng" target="_blank" rel="noopener noreferrer" 
                className="hover:opacity-75 transition-opacity">
            <Github size={20} className="md:w-6 md:h-6" />
          </Link>
          <Link href="https://www.linkedin.com/in/muyleang-ing-7977912a0/" target="_blank" rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity">
            <Linkedin size={20} className="md:w-6 md:h-6" />
          </Link>
          <Link href="https://www.facebook.com/muyleang.ing" target="_blank" rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity">
            <Facebook size={20} className="md:w-6 md:h-6" />
          </Link>
          <Link href="https://khmerstack.muyleanging.com/" target="_blank" rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity font-bold text-sm md:text-base">
            KS
          </Link>
          <Link href="https://github.com/KhmerStack" target="_blank" rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity">
            <Github size={20} className="md:w-6 md:h-6" />
          </Link>
        </div>
      </div>
    </header>
  )
}
