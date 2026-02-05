import { Download, Mail, Linkedin, Github } from 'lucide-react'
import Link from 'next/link'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-accent mb-12">Contact & CV</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* CV Download */}
          <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Download className="text-accent" size={24} />
              <h3 className="text-2xl font-bold text-foreground">Download CV</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Download my detailed academic CV and professional resume.
            </p>
            {/* <Link
              href="/cv.pdf"
              download
              className="inline-block bg-accent text-accent-foreground px-6 py-3 rounded font-semibold hover:opacity-90 transition-opacity"
            > */}
              Comming Soon.
            {/* </Link> */}
          </div>

          {/* Contact Info */}
          <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <Link
                href="mailto:muyleang.ing@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail size={20} />
                <span>muyleanging@gmail.com</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/muyleang-ing-7977912a0/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
              >
                <Linkedin size={20} />
                <span>LinkedIn Profile</span>
              </Link>
              <Link
                href="https://github.com/MuyleangIng"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
              >
                <Github size={20} />
                <span>GitHub Profile</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
