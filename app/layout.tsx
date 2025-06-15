import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Iota Psi Omega (ΙΨΩ) - Where Builders Begin',
  description: 'A co-ed entrepreneurial business fraternity and incubator for ambitious students driven to learn, launch, and lead.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${dmSans.className} bg-primary text-white min-h-screen`}>
        {children}
      </body>
    </html>
  )
} 