import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">About</h3>
            <p className="text-sm text-primary-foreground/75">
              AI & Quantum Computing researcher from Cambodia.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="https://github.com/MuyleangIng" target="_blank" rel="noopener noreferrer"
                      className="hover:opacity-75 transition-opacity">
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/muyleang-ing-7977912a0/" target="_blank" rel="noopener noreferrer"
                      className="hover:opacity-75 transition-opacity">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="https://khmerstack.muyleanging.com/" target="_blank" rel="noopener noreferrer"
                      className="hover:opacity-75 transition-opacity">
                  KhmerStack
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="mailto:muyleang.ing@gmail.com"
                      className="hover:opacity-75 transition-opacity">
                  Email
                </Link>
              </li>
              <li>
                <Link href="https://www.facebook.com/muyleang.ing" target="_blank" rel="noopener noreferrer"
                      className="hover:opacity-75 transition-opacity">
                  Facebook
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Education</h3>
            <p className="text-sm text-primary-foreground/75">
              Master's in AI Convergence<br />
              Pukyong National University<br />
              Busan, South Korea
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/75">
            <p>&copy; 2025 Muyleang Ing. All rights reserved.</p>
            {/* <p>Built with Next.js and TailwindCSS</p> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
