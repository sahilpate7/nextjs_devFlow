import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/context/Theme'
import { Toaster } from '@/components/ui/sonner'
import { SessionProvider } from 'next-auth/react'
import { auth } from '@/auth'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
})

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'DevFlow',
  description:
        'A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.',
  icons: {
    icon: '/images/site-logo.svg'
  }
}

export default async function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth()

  return (
    <html lang="en" suppressHydrationWarning={true}>
        <SessionProvider session={session}>
          <body
            className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
          >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true} disableTransitionOnChange={true}>
            {children}
          </ThemeProvider>
          <Toaster />
          </body>
        </SessionProvider>
    </html>
  )
}
