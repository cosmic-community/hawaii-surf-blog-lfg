import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CosmicBadge from '@/components/CosmicBadge'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hawaii Surf Blog - Authentic Hawaiian Surf Culture',
  description: 'Expert surf reports, gear reviews, and spot guides from Hawaii\'s legendary surf breaks. Written by local Hawaiian surfers.',
  keywords: 'Hawaii surf, Pipeline, surf reports, surf gear reviews, Hawaiian surfing, Oahu surf spots',
  authors: [{ name: 'Hawaii Surf Blog' }],
  openGraph: {
    title: 'Hawaii Surf Blog - Authentic Hawaiian Surf Culture',
    description: 'Expert surf reports, gear reviews, and spot guides from Hawaii\'s legendary surf breaks.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}