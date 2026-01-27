import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation()

  const projects = [
    {
      id: 1,
      title: '3D Product Visualizers',
      description:
        'Discover is a 3D Product Visualisation suite that enables brands to offer highly engaging and reaslitc car buying experience to their customers',
      image: '/Project_1.png',
      link: '#',
    },
    {
      id: 2,
      title: 'AI Conversational Bot for Car Dealerships',
      description:
        'An AI assistant that provides customers with round the clock, real-time support. The assistant serves as a knowledgeable and responsive digital partner for both pre-sale and post-sale services ',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=500&fit=crop',
      link: '#',
    },
  ]

  return (
    <section id="projects" className="pt-[40px] pb-[70px] px-6 md:px-9">
      <div
        ref={ref}
        className={`max-w-[500px] mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Section Title with decorative elements */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-2 text-gray-300">
            <span>✦</span>
            <span>❋</span>
            <span>✳</span>
            <span>❋</span>
            <span>✦</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-dark">
            Here's What I've Been Up To.
          </h2>
        </div>

        {/* Projects List */}
        <div className="space-y-8">
          {projects.map((project) => (
            <div key={project.id} className="group border border-gray-200 rounded-2xl overflow-hidden">
              {/* Laptop Mockup */}
              <div className="bg-[#e8e8e8] p-3">
                <div className="bg-black rounded-lg overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-[16/10] object-contain"
                  />
                </div>
              </div>

              {/* Project Info - Inside the card */}
              <div className="p-5">
                <h3 className="text-xl font-semibold text-dark mb-2">
                  {project.title}
                </h3>
                <p className="text-dark-light text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* View Project Button */}
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 rounded-full text-sm font-medium text-dark hover:bg-gray-200 transition-colors"
                >
                  View Project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
