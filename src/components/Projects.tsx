import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { projects } from '../data/projects'

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="projects" className="px-6 py-[70px] md:px-9">
      <div
        ref={ref}
        className={`mx-auto max-w-[500px] transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-semibold text-dark md:text-3xl">
            Here's What I've Been Up To.
          </h2>
        </div>

        {/* Projects List */}
        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-[28px] border border-gray-200 bg-white shadow-sm"
            >
              {/* Device Mockup Container */}
              <div className="p-5">
                <div className="rounded-[16px] bg-[#f5f5f5] p-4">
                  {/* Screen */}
                  <div className="overflow-hidden rounded-[12px]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`aspect-[16/10] w-full object-${project.imageFit}`}
                    />
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="px-5 pb-6">
                <h3 className="mb-2 text-xl font-semibold text-dark">{project.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-dark-light">
                  {project.description}
                </p>

                {/* View Project Button */}
                <Link
                  to={project.link}
                  className="group/btn inline-flex items-center gap-2 rounded-full bg-gray-100 px-6 py-3 text-sm font-medium text-dark transition-all duration-200 hover:bg-gray-200"
                >
                  View Project
                  <svg
                    className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
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
