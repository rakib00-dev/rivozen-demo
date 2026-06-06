import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Inter, Instrument_Serif } from 'next/font/google'
import '../globals.css'

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
})

const instrumentSerif = Instrument_Serif({
  variable: '--font-serif',
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "RivoZen - Digital Strategy Agency for Small Businesses",
  description: "Scale your business with RivoZen a Digital Strategy Agency for Small Businesses . We deliver Website Solutions, Branding, Digital Marketing & SEO for growth",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}