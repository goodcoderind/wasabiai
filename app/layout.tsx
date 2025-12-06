import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'
import LoadingScreen from '@/components/LoadingScreen'

export const metadata: Metadata = {
  title: 'WasabiAI Winter Camp - Build Your AI Future',
  description: 'India\'s most exciting AI learning experience for students in Grades 6 to 12. Start building real AI projects in just 4 days.',
  keywords: 'AI camp, AI education, student AI, winter camp, AI learning, Gen-Z AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <LoadingScreen />
        <CustomCursor />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
