import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { ThemeProvider } from '@/context/ThemeContext'
import Footer from '@/components/Footer'
import { AuthProvider } from '@/context/AuthContext'
import NewsletterHeader from '@/components/NewsLetterHeader'
import NewsHero from '@/components/NewsHero'
import Newses from '@/components/Newses'
import LatestNews from '@/components/LatestNews'
import { motion, AnimatePresence } from "framer-motion"

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <NewsletterHeader />  

      <ThemeProvider>
        <AnimatePresence mode="wait">
          <motion.div
            key={router.route} // triggers animation on page change
            initial={{ opacity: 0, y: 20 }} // start off-screen slightly
            animate={{ opacity: 1, y: 0 }} // fade and slide into place
            exit={{ opacity: 0, y: -20 }} // fade out on exit
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='bg-black min-h-screen'
          >
            <NewsHero />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>

        <AuthProvider>
          {/* <Navbar /> */}
          {/* <Footer/> */}
        </AuthProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
