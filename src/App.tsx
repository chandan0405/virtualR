import './App.css'
import Navbar from "../src/components/Navbar"
import Hero from './components/Hero'
import Features from './components/Features'
import WorkFLow from './components/WorkFLow'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <WorkFLow />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App
