import { useScrollAnimation } from '../hooks/useScrollAnimation'

const About = () => {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="about" className="pt-[50px] pb-[30px] px-6 md:px-9">
      <div
        ref={ref}
        className={`max-w-xl mx-auto md:mx-0 md:ml-[15%] transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-dark mb-6">
          About
        </h2>

        {/* Text Content */}
        <p className="text-base text-dark-light mb-4 leading-relaxed">
        I’m Sidharth, a product leader with a deep engineering background, currently building and 
        scaling AI-powered B2B platforms. I’m drawn to problems where data, AI, and trust meet—and 
        where product decisions meaningfully shape how teams work and grow.
        </p>
        <p className="text-base text-dark-light mb-10 leading-relaxed">
         I love building from first principles, working closely with customers, 
         and turning ambitious ideas into products that deliver real-world impact.
        </p>

        {/* Polaroid Photos - Overlapping */}
        <div className="relative h-[280px] flex items-center justify-center mt-6">
          {/* Photo 1 - Behind, tilted left */}
          <div className="absolute -rotate-6 bg-white p-2 shadow-lg z-10 -translate-x-8">
            <img
              src="/Interstellar.jpg"
              alt="Travel photo"
              className="w-[180px] h-[150px] object-cover"
            />
            <p className="text-[10px] text-dark-light mt-2 italic">Le me among stars !</p>
          </div>

          {/* Photo 2 - Front, tilted right */}
          <div className="absolute rotate-6 bg-white p-2 shadow-lg z-9 translate-x-20 translate-y-20">
            <img
              src="/Paint.jpg"
              alt="Japan photo"
              className="w-[180px] h-[180px] object-cover"
            />
            <p className="text-[10px] text-dark-light mt-2 italic">I can paint?</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
