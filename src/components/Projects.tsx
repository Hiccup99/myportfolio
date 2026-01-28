import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { projects } from '../data/projects'

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation()

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
            <div key={project.id} className="group rounded-[28px] border border-gray-200 bg-white shadow-sm">
              {/* Device Mockup Container */}
              <div className="p-5">
                <div className="bg-[#f5f5f5] rounded-[16px] p-4">
                  {/* Screen */}
                  <div className="rounded-[12px] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full aspect-[16/10] object-${project.imageFit}`}
                    />
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="px-5 pb-6">
                <h3 className="text-xl font-semibold text-dark mb-2">
                  {project.title}
                </h3>
                <p className="text-dark-light text-sm mb-5 leading-relaxed">
                  {project.description}
                </p>

                {/* View Project Button */}
                <Link
                  to={project.link}
                  className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-gray-100 rounded-full text-sm font-medium text-dark hover:bg-gray-200 transition-all duration-200"
                >
                  View Project
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
