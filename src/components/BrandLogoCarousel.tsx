import { useEffect, useRef, useState } from 'react'
import { Brand } from '../data/projects'

interface BrandLogoCarouselProps {
  brands: Brand[]
}

const BrandLogoCarousel = ({ brands }: BrandLogoCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const positionRef = useRef(0)
  const speedRef = useRef(0.5)
  const targetSpeedRef = useRef(0.5)

  const NORMAL_SPEED = 0.5
  const SLOW_SPEED = 0.15

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

      // Calculate the loop point
      const items = scrollRef.current.children
      const itemCount = items.length / 2
      const firstItem = items[0] as HTMLElement
      const itemWidth = firstItem.offsetWidth
      const gap = 16 // gap-4 = 1rem = 16px
      const loopPoint = itemCount * (itemWidth + gap)

      // Reset position for seamless loop
      if (positionRef.current >= loopPoint) {
        positionRef.current -= loopPoint
      }

      scrollRef.current.style.transform = `translateX(-${positionRef.current}px)`

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Edge fade gradients - subtle */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12"
        style={{ background: 'linear-gradient(to right, var(--color-card-bg) 0%, var(--color-card-bg) 20%, transparent 100%)' }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12"
        style={{ background: 'linear-gradient(to left, var(--color-card-bg) 0%, var(--color-card-bg) 20%, transparent 100%)' }}
      />

      <div ref={scrollRef} className="flex gap-4">
        {/* Duplicate brands for infinite scroll */}
        {[...brands, ...brands].map((brand, index) => (
          <div
            key={index}
            className="flex h-8 w-16 flex-shrink-0 items-center justify-center"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-full w-auto max-w-full object-contain grayscale transition-all duration-300 hover:grayscale-0"
              title={brand.name}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default BrandLogoCarousel
