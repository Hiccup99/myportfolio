import { useScrollAnimation } from '../hooks/useScrollAnimation'

const About = () => {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="about" className="px-6 pb-[30px] pt-[50px] md:px-9">
      <div
        ref={ref}
        className={`duration-slower mx-auto max-w-xl transition-all md:mx-0 md:ml-[15%] ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        {/* Section Title */}
        <h2 className="text-text-primary mb-10 text-2xl font-semibold md:text-3xl">About</h2>

        {/* Text Content */}
        <p className="text-text-secondary mb-4 text-base leading-relaxed">
          I'm Sidharth, a product leader with a deep engineering background, currently building and
          scaling AI-powered B2B platforms. I'm drawn to problems where data, AI, and trust meet—and
          where product decisions meaningfully shape how teams work and grow.
        </p>
        <p className="text-text-secondary mb-10 text-base leading-relaxed">
          I love building from first principles, working closely with customers, and turning
          ambitious ideas into products that deliver real-world impact.
        </p>

        {/* Polaroid Photos - Overlapping */}
        <div className="relative mt-6 flex h-[280px] items-center justify-center">
          {/* Photo 1 - Behind, tilted left */}
          <div
            className={`bg-polaroid-bg absolute z-10 -translate-x-8 -rotate-6 p-2 shadow-lg transition-all duration-700 hover:scale-105 hover:shadow-xl ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <img
                          src="about/jet.avif"
              alt="Japan photo"
    
              className="h-[150px] w-[180px] object-cover"
            />
            <p className="text-text-secondary mt-2 text-[10px] italic">
              The body listens when the mind commits.
            </p>
          </div>

          {/* Photo 2 - Front, tilted right */}
          <div
            className={`z-9 bg-polaroid-bg absolute translate-x-20 rotate-6 p-2 shadow-lg transition-all duration-700 hover:scale-105 hover:shadow-xl ${
              isVisible ? 'translate-y-20 opacity-100' : 'translate-y-32 opacity-0'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <img
           src="about/marathon.avif"
              alt="Travel photo"
              className="h-[180px] w-[180px] object-cover"
            />
            <p className="text-text-secondary mt-2 text-[10px] italic">
              Chasing Waves, Not Worries.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
