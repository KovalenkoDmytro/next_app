import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import TanstackProvider from './Hooks/providers/TanstackProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <TanstackProvider>
          {children}
        </TanstackProvider>
      </body>
    </html>
  )
}
