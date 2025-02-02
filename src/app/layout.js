import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'navin portfolio',
  description: 'navin-portfolio with personal details',
  icons: {
    icon: '/favicon.ico', 
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true" className={inter.className}>{children}</body>
    </html>
  )
}
