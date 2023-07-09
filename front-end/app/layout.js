import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Roboto } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ['latin']
});

export const metadata = {
  title: 'Entrebyte Jobs',
  description: 'Easy way to find your new position',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <div className='container'>
          {children}
        </div>
      </body>
    </html>
  )
}