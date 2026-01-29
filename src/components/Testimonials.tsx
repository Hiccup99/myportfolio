import { useEffect, useRef, useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation()
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const positionRef = useRef(0)
  const speedRef = useRef(0.8)
  const targetSpeedRef = useRef(0.8)

  const NORMAL_SPEED = 0.8
  const SLOW_SPEED = 0.2

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
      const gap = 20 // gap-5 = 1.25rem = 20px
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

  const testimonials = [
    {
      quote:
        "I've had the privilege of knowing Sidharth and can confidently say he is one of those rare leaders who combines deep product thinking with a true builder's mindset. As a founding-member-type leader, Sidharth consistently takes ownership beyond his mandate—whether it was launching entirely new product verticals, shaping strategy, or rolling up his sleeves to solve hard execution problems. He has an exceptional ability to connect customer insight, business outcomes, and technical feasibility, and then drive teams with clarity and conviction.",
      name: 'Siddharth Sachar',
      role: "Founder's Office",
      avatar: '/testimonial-faces/sachar.avif',
    },
    {
      quote:
        'Sidharth is one of the most diligent and focused product managers I have worked with. He is superb at execution and rallying the team. I had a wonderful time with him during his growth journey at Metadome.',
      name: 'Kanav Singla',
      role: 'CEO',
      avatar: '/testimonial-faces/kanav.avif',
    },
    {
      quote:
        "Sidharth is the ideal counterpart for any Engineering Manager. We worked together for four years, transitioning from individual contributors to leadership roles. We worked together on Autodome (Immersive Auto-sales experiences). His sense of ownership was unmatched; he fights for the product's success as if it were his own, ensuring execution no matter the obstacles. He had then seamlessly transitioned this intensity to his work on an AI-powered Virtual Sales Assistant. He is a leader who takes absolute accountability and delivers results.",
      name: 'Ashish Dasari',
      role: 'Engineer Manager',
      avatar: '/testimonial-faces/ashish.avif',
    },
    {
      quote:
        'Sidharth brings deep experience in building products from zero to one, with a strong focus on scale and long term impact. What stands out most is his analytical approach combined with a friendly, approachable nature and a strong sense of urgency. This balance helps the entire team stay motivated, aligned, and consistently operate at their highest capacity. On a personal level, his guidance played a key role in shaping my career direction. His natural instinct for problem identification, validation, and structured problem solving is exceptional',
      name: 'Ashwani Kottapalli',
      role: 'Building @ EF',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    },
  ]

  return (
    <section className="py-[70px]">
      <div
        ref={ref}
        className={`duration-slower transition-all ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        {/* Section Title */}
        <div className="mb-10 px-6 text-center md:px-9">
          <div className="text-border-strong mb-2 flex items-center justify-center gap-2">
            <span>•</span>
            <h2 className="text-text-primary text-2xl font-semibold md:text-3xl">Testimonials</h2>
            <span>•</span>
          </div>
        </div>

        {/* Testimonials Scroll - Breaks out of container */}
        <div
          className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div ref={scrollRef} className="flex gap-5">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="border-card-border bg-card-bg min-w-[320px] max-w-[350px] flex-shrink-0 snap-start rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-text-secondary mb-6 text-sm leading-relaxed">
                  {testimonial.quote}
                </p>

                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-10 w-10 rounded-full object-cover grayscale"
                  />
                  <div>
                    <p className="text-text-primary text-sm font-medium">{testimonial.name}</p>
                    <p className="text-text-muted text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
