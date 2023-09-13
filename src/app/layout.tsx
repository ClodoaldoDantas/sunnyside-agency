import './globals.scss'
import type { Metadata } from 'next'
import { Barlow, Fraunces } from 'next/font/google'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-body',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-heading',
})

export const metadata: Metadata = {
  title: 'Sunnyside agency',
  description: 'Frontend Mentor Challenge',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} ${fraunces.variable}`}>
        {children}
      </body>
    </html>
  )
}
