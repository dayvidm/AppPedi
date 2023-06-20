import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pedido Inteligente',
  description: 'Faça seu pedido de forma inteligente',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <footer className="bg-gray-200 py-4 text-center">
            <div className="container mx-auto">
              <Footer />
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
