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
      image: 'hero_carousel/project_h_1.avif',
      title: 'Dashboard Design',
    },
    {
      image: 'hero_carousel/project_h_2.avif',
      title: 'Analytics Platform',
    },
    {
      image: 'hero_carousel/project_h_3.avif',
      title: 'Mobile App',
    },
    {
      image: 'hero_carousel/project_h_4.avif',
      title: 'Landing Page',
    },
  ]

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-24 pb-8">
      {/* Left-aligned content in centered container */}
      <div className="w-full px-6 md:px-9">
        <div className="max-w-[510px] mx-auto">
          {/* Profile Image */}
          <div className="mb-6">
            <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
              <img
                src="/dp.avif"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-[28px] md:text-[36px] lg:text-[42px] font-semibold text-dark mb-5 leading-[1.15]">
            Hey, I'm Sidharth Suresh.
            <br />
            Innovator & Product Manager
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-dark-light mb-8 leading-relaxed">
            Engineer by training. Product leader by practice.
            Building AI platforms that scale, earn trust, and move the needle.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <a
              href="#contact"
              className="px-6 py-3.5 bg-dark text-white rounded-xl hover:bg-dark/90 transition-all duration-200 font-medium text-sm"
            >
             Contact Me
            </a>
            <a
              className="px-6 py-3.5 bg-[#e8f5e9] text-[#2e7d32] rounded-2xl font-medium text-sm flex items-center gap-2"
            >
              <span className="w-2 h-2 bg-[#4caf50] rounded-full" />
              Available for new opportunities
            </a>
          </div>
        </div>
      </div>

      {/* Project Previews Carousel - Auto-scrolling, breaks out of container */}
      <div
        className="mt-16 overflow-hidden w-screen relative left-1/2 -translate-x-1/2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div ref={scrollRef} className="flex gap-6">
          {/* Duplicate items for infinite scroll effect */}
          {[...projectPreviews, ...projectPreviews].map((project, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[340px] md:w-[480px]"
            >
              {/* Tablet Mockup - Outer frame with pinholes */}
              <div className="bg-[#e8e8e8] rounded-[20px] p-5 shadow-sm relative">
                {/* Corner pinholes on outer frame */}
                <div className="absolute top-2.5 left-2.5 w-[6px] h-[6px] bg-[#c8c8c8] rounded-full" />
                <div className="absolute top-2.5 right-2.5 w-[6px] h-[6px] bg-[#c8c8c8] rounded-full" />
                <div className="absolute bottom-2.5 left-2.5 w-[6px] h-[6px] bg-[#c8c8c8] rounded-full" />
                <div className="absolute bottom-2.5 right-2.5 w-[6px] h-[6px] bg-[#c8c8c8] rounded-full" />
                {/* Inner bezel */}
                <div className="bg-[#d4d4d4] rounded-[14px] p-2">
                  {/* Screen */}
                  <div className="rounded-[10px] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[220px] md:h-[280px] object-cover"
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
