import './globals.css'
import { Inter, Roboto } from 'next/font/google' // Importing multiple fonts
import Header from './components/header'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({ subsets: ['latin'] })

export const metadata = {
  title: 'Luminari Labs | Web Development Agency',
  description: 'Luminari Labs is a cutting-edge web development agency specializing in creating stunning, high-performance websites and web applications.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${roboto.className}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
  
