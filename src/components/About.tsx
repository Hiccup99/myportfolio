import { useScrollAnimation } from '../hooks/useScrollAnimation'

const About = () => {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="about" className="px-6 pb-[30px] pt-[50px] md:px-9">
      <div
        ref={ref}
        className={`mx-auto max-w-xl transition-all duration-slower md:mx-0 md:ml-[15%] ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        {/* Section Title */}
        <h2 className="mb-10 text-2xl font-semibold text-text-primary md:text-3xl">About</h2>

        {/* Text Content */}
        <p className="mb-4 text-base leading-relaxed text-text-secondary">
          I'm Sidharth, a product leader with a deep engineering background, currently building and
          scaling AI-powered B2B platforms. I'm drawn to problems where data, AI, and trust meet—and
          where product decisions meaningfully shape how teams work and grow.
        </p>
        <p className="mb-10 text-base leading-relaxed text-text-secondary">
          I love building from first principles, working closely with customers, and turning
          ambitious ideas into products that deliver real-world impact.
        </p>

        {/* Polaroid Photos - Overlapping */}
        <div className="relative mt-6 flex h-[280px] items-center justify-center">
          {/* Photo 1 - Behind, tilted left */}
          <div className="absolute z-10 -translate-x-8 -rotate-6 bg-polaroid-bg p-2 shadow-lg">
            <img
              src="about/interstellar.avif"
              alt="Travel photo"
              className="h-[150px] w-[180px] object-cover"
            />
            <p className="mt-2 text-[10px] italic text-text-secondary">Le me among stars !</p>
          </div>

          {/* Photo 2 - Front, tilted right */}
          <div className="z-9 absolute translate-x-20 translate-y-20 rotate-6 bg-polaroid-bg p-2 shadow-lg">
            <img
              src="about/paint.avif"
              alt="Japan photo"
              className="h-[180px] w-[180px] object-cover"
            />
            <p className="mt-2 text-[10px] italic text-text-secondary">I can paint?</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
