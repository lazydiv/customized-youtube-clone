import '../styles/globals.css'
import { motion, AnimatePresence } from 'framer-motion'
import Header from '../components/Header'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

function MyApp({ Component, pageProps, router }) {
  const variants = {
    hidden: { opacity: 0, x: 0, y: 100 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  }
  return (
    <>
    <ThemeProvider attribute="class">
    <Head>
      <title>
        Youtube Clone
      </title>
    </Head>
    <Header />
    <AnimatePresence>
      <motion.main
        key={router.route}
        variants={variants} // Pass the variant object into Framer Motion 
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit
        transition={{ type: 'spring', default: { duration: 0.2 } }} // Set the transition to linear
        className=""
      >
        <Component {...pageProps} />
      </motion.main>
    </AnimatePresence>
    </ThemeProvider>
    </>
  ) 
  }

export default MyApp
