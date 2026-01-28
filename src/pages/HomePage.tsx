import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navigation />
      {/* Page container with left and right borders */}
      <div className="mx-auto max-w-[900px] border-l border-r border-border">
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default HomePage
