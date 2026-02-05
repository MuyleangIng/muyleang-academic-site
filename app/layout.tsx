import React from "react"
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Muyleang Ing | AI & Quantum Computing Researcher',
  description: 'Academic CV and portfolio of Muyleang Ing, a Cambodian AI Convergence researcher and Quantum Computing specialist from Pukyong National University',
  generator: 'v0.app',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    title: 'Muyleang Ing | AI & Quantum Computing Researcher',
    description: 'Academic CV and portfolio of a Cambodian AI researcher',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
