const Hero = () => {
  const projectPreviews = [
    {
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      title: 'Dashboard Design',
    },
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      title: 'Analytics Platform',
    },
    {
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop',
      title: 'Mobile App',
    },
    {
      image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400&h=300&fit=crop',
      title: 'Landing Page',
    },
  ]

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-24 pb-8">
      {/* Centered content */}
      <div className="w-full px-6 md:px-9 text-center">
        {/* Profile Image */}
        <div className="mb-6 flex justify-center">
          <div className="w-[120px] h-[120px] rounded-full overflow-hidden">
            <img
              src="/Sid_DP.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold text-dark mb-5 leading-[1.15]">
          Hey, I'm Sidharth Suresh.
          <br />
          Innovator & Product Manager
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg text-dark-light mb-8 leading-relaxed max-w-[500px] mx-auto">
          Engineer by training. Product leader by practice.
          Building AI platforms that scale, earn trust, and move the needle.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#projects"
            className="px-6 py-3.5 bg-dark text-white rounded-xl hover:bg-dark/90 transition-all duration-200 font-medium text-sm"
          >
           Contact Me
          </a>
          <a
            href="#contact"
            className="px-6 py-3.5 bg-[#e8f5e9] text-[#2e7d32] rounded-xl hover:bg-[#c8e6c9] transition-all duration-200 font-medium text-sm flex items-center gap-2"
          >
            <span className="w-2 h-2 bg-[#4caf50] rounded-full" />
            Available for new opportunities
          </a>
        </div>
      </div>

      {/* Project Previews Carousel - Auto-scrolling, breaks out of container */}
      <div className="mt-16 overflow-hidden w-screen relative left-1/2 -translate-x-1/2">
        <div className="flex gap-6 animate-scroll">
          {/* Duplicate items for infinite scroll effect */}
          {[...projectPreviews, ...projectPreviews].map((project, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[340px] md:w-[420px]"
            >
              {/* Laptop Mockup - Light gray outer, darker gray inner */}
              <div className="bg-[#f0f0f0] rounded-[24px] p-4 shadow-sm">
                {/* Inner darker gray bezel */}
                <div className="bg-[#d9d9d9] rounded-[16px] p-3 relative">
                  {/* Corner pinholes */}
                  <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 bg-[#c0c0c0] rounded-full" />
                  <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-[#c0c0c0] rounded-full" />
                  <div className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 bg-[#c0c0c0] rounded-full" />
                  <div className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 bg-[#c0c0c0] rounded-full" />
                  {/* Screen */}
                  <div className="bg-white rounded-[10px] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[200px] md:h-[260px] object-cover"
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
