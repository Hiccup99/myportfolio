import { useEffect, useRef, useState } from 'react'

const Hero = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const positionRef = useRef(0)
  const speedRef = useRef(1) // pixels per frame
  const targetSpeedRef = useRef(1)

  const NORMAL_SPEED = 1.5
  const SLOW_SPEED = 0.5

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
          <div className="mb-6">
            <div className="h-[100px] w-[100px] overflow-hidden rounded-full">
              <img src="/dp.avif" alt="Profile" className="h-full w-full object-cover" />
            </div>
          </div>

          {/* Headline */}
          <h1 className="mb-5 text-[28px] font-semibold leading-[1.15] text-dark md:text-[36px] lg:text-[42px]">
            Hey, I'm Sidharth 👋
            <br />
            Innovator & Product Manager
          </h1>

          {/* Description */}
          <p className="mb-8 text-base leading-relaxed text-dark-light md:text-lg">
            Engineer by training. Product leader by practice. Building AI platforms that scale, earn
            trust, and move the needle.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="rounded-xl bg-dark px-6 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:bg-dark/90"
            >
              Contact Me
            </a>
            <a className="flex items-center gap-2 rounded-2xl bg-[#e8f5e9] px-6 py-3.5 text-sm font-medium text-[#2e7d32]">
              <span className="h-2 w-2 rounded-full bg-[#4caf50]" />
              Available for new opportunities
            </a>
          </div>
        </div>
      </div>

      {/* Project Previews Carousel - Auto-scrolling, breaks out of container */}
      <div
        className="relative left-1/2 mt-16 w-screen -translate-x-1/2 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div ref={scrollRef} className="flex gap-6">
          {/* Duplicate items for infinite scroll effect */}
          {[...projectPreviews, ...projectPreviews].map((project, index) => (
            <div key={index} className="w-[340px] flex-shrink-0 md:w-[480px]">
              {/* Tablet Mockup - Outer frame with pinholes */}
              <div className="relative rounded-[20px] bg-[#e8e8e8] p-5 shadow-sm">
                {/* Corner pinholes on outer frame */}
                <div className="absolute left-2.5 top-2.5 h-[6px] w-[6px] rounded-full bg-[#c8c8c8]" />
                <div className="absolute right-2.5 top-2.5 h-[6px] w-[6px] rounded-full bg-[#c8c8c8]" />
                <div className="absolute bottom-2.5 left-2.5 h-[6px] w-[6px] rounded-full bg-[#c8c8c8]" />
                <div className="absolute bottom-2.5 right-2.5 h-[6px] w-[6px] rounded-full bg-[#c8c8c8]" />
                {/* Inner bezel */}
                <div className="rounded-[14px] bg-[#d4d4d4] p-2">
                  {/* Screen */}
                  <div className="overflow-hidden rounded-[10px]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-[220px] w-full object-cover md:h-[280px]"
                    />
                  </div>
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
