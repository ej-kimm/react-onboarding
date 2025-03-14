import { Footer } from '@/components/common'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Providers from './providers'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Onboarding',
  description: 'React Onboarding 10기 과제',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <main className="bg-gradient accent-accent flex h-screen w-screen flex-col items-center justify-center px-6">
            {children}
          </main>
        </Providers>
        <Footer />
      </body>
    </html>
  )
}
