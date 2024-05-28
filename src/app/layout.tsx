'use client'
import { Roboto } from 'next/font/google'
import { QueryClient, QueryClientProvider } from 'react-query'
import ReactQueryProvider from '../providers/react-query';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
})
// import HeaderMenu from "@/Components/HeaderMenu";
// import PromotionSlider from "@/Components/Promo";
// import CategoryMenu from "@/Components/CategoryMenu";
// import Card from "@/Components/Catalog/Card";
// import Catalog from "@/Components/Catalog";
// import Footer from "@/Components/Footer";
// import Slide from "@/Components/Promo/Slide";
const queryClient = new QueryClient()
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <body className={roboto.className}>
        <ReactQueryProvider  client={queryClient}>
          <main>{children}</main>
        </ReactQueryProvider>
      </body>
    </html>
  )
}

function express() {
  throw new Error('Function not implemented.')
}
