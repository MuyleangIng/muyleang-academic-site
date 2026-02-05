import { Download, Mail, Linkedin, Github } from 'lucide-react'
import Link from 'next/link'

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-accent mb-8 md:mb-12">Contact & CV</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* CV Download */}
          <div className="bg-card rounded-lg p-6 md:p-8 shadow-sm border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Download className="text-accent flex-shrink-0" size={20} />
              <h3 className="text-xl md:text-2xl font-bold text-foreground">Download CV</h3>
            </div>
            <p className="text-sm md:text-base text-muted-foreground mb-6">
              Download my detailed academic CV and professional resume.
            </p>
            Comming soon.....
            {/* <Link
              href="/cv.pdf"
              download
              className="inline-block bg-accent text-accent-foreground px-4 md:px-6 py-2 md:py-3 rounded font-semibold hover:opacity-90 transition-opacity text-sm md:text-base"
            >
              Download CV (PDF)
            </Link> */}
          </div>

          {/* Contact Info */}
          <div className="bg-card rounded-lg p-6 md:p-8 shadow-sm border border-border">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
            <div className="space-y-3 md:space-y-4">
              <Link
                href="mailto:muyleang.ing@gmail.com"
                className="flex items-center gap-3 text-xs md:text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail size={18} className="flex-shrink-0" />
                <span className="break-all">muyleanging@gmail.com</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/muyleang-ing-7977912a0/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-xs md:text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                <Linkedin size={18} className="flex-shrink-0" />
                <span>LinkedIn Profile</span>
              </Link>
              <Link
                href="https://github.com/MuyleangIng"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-xs md:text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                <Github size={18} className="flex-shrink-0" />
                <span>GitHub Profile</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
