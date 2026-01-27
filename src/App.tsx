import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Page container with left and right borders */}
      <div className="max-w-[900px] mx-auto border-l border-r border-gray-200">
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Services />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
