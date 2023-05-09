import './globals.css'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export const metadata = {
  title: 'Lovyka Services',
  description: 'Lovyka Services by Dev Supreme',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="h-full ">
      <body className="h-full">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
