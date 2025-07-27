import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { ThemeProvider } from '@/context/ThemeContext'
import Footer from '@/components/Footer'
import { AuthProvider } from '@/context/AuthContext'

function MyApp({ Component, pageProps }) {

  
  return (
    <>
    
    <ThemeProvider>
      <AuthProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
      </AuthProvider>
    </ThemeProvider>
    </>
  )
}

export default MyApp
