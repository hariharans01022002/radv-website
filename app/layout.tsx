import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from 'sonner'
import { ScrollProgress } from '@/components/scroll-progress'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: '#0052CC',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: 'Radiv Medical Coding Academy | CPC & CRC Training in Coimbatore',
  description: 'Learn Certified Professional Coder (CPC) and Certified Risk Adjustment Coder (CRC) certifications from Radiv Coding Academy. Expert medical coding training in Coimbatore.',
  keywords: 'CPC training, CRC training, medical coding course, AAPC certified, coding academy, Coimbatore, Radiv',
  openGraph: {
    title: 'Radiv Coding Academy | CPC & CRC Training',
    description: 'Professional CPC and CRC certification training with expert instructors',
    url: 'https://radivcodingacademy.com',
    siteName: 'Radiv Coding Academy',
    locale: 'en_IN',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        <ScrollProgress />
        {children}
        <Toaster position="bottom-right" />
        <Analytics />
      </body>
    </html>
  )
}
