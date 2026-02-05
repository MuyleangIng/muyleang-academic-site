import { Github, Linkedin, Facebook } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground py-6 px-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Muyleang Ing</h1>
          <p className="text-primary-foreground/80 text-sm">AI Convergence Researcher | Quantum Computing | Software & DevOps Engineer</p>
        </div>
        
        <div className="flex gap-4">
          <Link href="https://github.com/MuyleangIng" target="_blank" rel="noopener noreferrer" 
                className="hover:opacity-75 transition-opacity">
            <Github size={24} />
          </Link>
          <Link href="https://www.linkedin.com/in/muyleang-ing-7977912a0/" target="_blank" rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity">
            <Linkedin size={24} />
          </Link>
          <Link href="https://www.facebook.com/muyleang.ing" target="_blank" rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity">
            <Facebook size={24} />
          </Link>
          <Link href="https://khmerstack.muyleanging.com/" target="_blank" rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity font-bold">
            KS
          </Link>
          <Link href="https://github.com/KhmerStack" target="_blank" rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity">
            <Github size={24} />
          </Link>
        </div>
      </div>
    </header>
  )
}
