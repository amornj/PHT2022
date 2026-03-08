import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PHT2022 — Pulmonary Hypertension Clinical Guide',
  description: '2022 ESC/ERS guideline-based clinical decision support for pulmonary hypertension',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen">
          <Navigation />
          <main className="flex-1 md:ml-64">
            <div className="max-w-6xl mx-auto p-4 md:p-6 pb-24 md:pb-6">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}
