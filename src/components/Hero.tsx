import { useEffect, useRef, useState } from 'react'

const Hero = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const positionRef = useRef(0)
  const speedRef = useRef(1) // pixels per frame
  const targetSpeedRef = useRef(1)

  const NORMAL_SPEED = 1.5
  const SLOW_SPEED = 0.5

  // Trigger load animation after mount
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    targetSpeedRef.current = isHovered ? SLOW_SPEED : NORMAL_SPEED
  }, [isHovered])

  useEffect(() => {
    let animationId: number

    const animate = () => {
      if (!scrollRef.current) return

      // Smoothly interpolate current speed towards target speed
      speedRef.current += (targetSpeedRef.current - speedRef.current) * 0.05

      positionRef.current += speedRef.current

      // Calculate the exact loop point: (itemWidth + gap) * number of original items
      const items = scrollRef.current.children
      const itemCount = items.length / 2
      const firstItem = items[0] as HTMLElement
      const itemWidth = firstItem.offsetWidth
      const gap = 24 // gap-6 = 1.5rem = 24px
      const loopPoint = itemCount * (itemWidth + gap)

      // Reset position for seamless loop (subtract instead of reset to preserve momentum)
      if (positionRef.current >= loopPoint) {
        positionRef.current -= loopPoint
      }

      scrollRef.current.style.transform = `translateX(-${positionRef.current}px)`

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [])

  const projectPreviews = [
    {
      image: 'hero_carousel/magnite.avif',
      title: 'Magnite Configurator',
    },
    {
      image: 'hero_carousel/mgverse.avif',
      title: 'MG Metaverse',
    },
    {
      image: 'hero_carousel/xtrail.avif',
      title: 'Xtrail Configurator',
    },
  ]

  return (
    <section id="home" className="flex min-h-screen flex-col justify-center pb-8 pt-24">
      {/* Left-aligned content in centered container */}
      <div className="w-full px-6 md:px-9">
        <div className="mx-auto max-w-[510px]">
          {/* Profile Image */}
          <div
            className={`mb-6 transition-all duration-700 ${
              isLoaded ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-4 scale-95 opacity-0'
            }`}
          >
            <div className="h-[100px] w-[100px] overflow-hidden rounded-full transition-transform duration-300 hover:scale-105">
              <img
                src="/misc/dp.avif"
                alt="Profile"
                className="h-full w-full object-cover grayscale"
              />
            </div>
          </div>

          {/* Headline */}
          <h1
            className={`text-text-primary mb-5 text-[28px] font-semibold leading-tight transition-all duration-700 md:text-[36px] lg:text-[42px] ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: '150ms' }}
          >
            Hey, I'm Sidharth 👋
            <br />
            Innovator & Product Manager
          </h1>

          {/* Description */}
          <p
            className={`text-text-secondary mb-8 text-base leading-relaxed transition-all duration-700 md:text-lg ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            Engineer by training. Product leader by practice. Building AI platforms that scale, earn
            trust, and move the needle.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col items-start gap-3 transition-all duration-700 sm:flex-row sm:items-center ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: '450ms' }}
          >
            <a
              href="#contact"
              className="bg-btn-primary-bg text-btn-primary-text duration-normal hover:bg-btn-primary-bg-hover rounded-xl px-6 py-3.5 text-sm font-medium transition-all"
            >
              Contact Me
            </a>
            <a className="bg-badge-available-bg text-badge-available-text flex items-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-medium">
              <span className="bg-badge-available-dot h-2 w-2 rounded-full" />
              Available for new opportunities
            </a>
          </div>
        </div>
      </div>

      {/* Project Previews Carousel - Auto-scrolling, breaks out of container */}
      <div
        className={`relative left-1/2 mt-16 w-screen -translate-x-1/2 overflow-hidden transition-all duration-700 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
        style={{ transitionDelay: '600ms' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div ref={scrollRef} className="flex gap-6">
          {/* Duplicate items for infinite scroll effect */}
          {[...projectPreviews, ...projectPreviews].map((project, index) => (
            <div key={index} className="group w-[340px] flex-shrink-0 md:w-[480px]">
              {/* Clean card design */}
              <div className="overflow-hidden rounded-2xl bg-gradient-to-b from-white/5 to-transparent p-[1px] transition-all duration-300 group-hover:-translate-y-1">
                <div className="bg-card-bg overflow-hidden rounded-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-[220px] w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-[280px]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
