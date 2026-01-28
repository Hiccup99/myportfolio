import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { projects } from '../data/projects'

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="projects" className="px-6 py-[70px] md:px-9">
      <div
        ref={ref}
        className={`mx-auto max-w-[500px] transition-all duration-slower ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-semibold text-text-primary md:text-3xl">
            Here's What I've Been Up To.
          </h2>
        </div>

        {/* Projects List */}
        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-[28px] border border-card-border bg-card-bg shadow-sm"
            >
              {/* Device Mockup Container */}
              <div className="p-5">
                <div className="rounded-[16px] bg-bg-secondary p-4">
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
                <h3 className="mb-2 text-xl font-semibold text-text-primary">{project.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-text-secondary">
                  {project.description}
                </p>

                {/* My Role */}
                {project.role && project.role.length > 0 && (
                  <div className="mb-4">
                    <span className="mb-2 block text-[10px] font-semibold uppercase tracking-wide text-text-muted">
                      My Role
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.role.map((role, index) => (
                        <span
                          key={index}
                          className="rounded-md border border-border bg-bg-secondary px-2 py-0.5 text-[12px] text-text-secondary"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Icons */}
                <div className="mb-5 flex items-center gap-2">
                  {/* Case Study / Document */}
                  <a
                    href={project.caseStudyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-card-border text-text-secondary transition-colors hover:bg-bg-secondary hover:text-text-primary"
                    title="Case study Website"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      />
                    </svg>
                  </a>

                  {/* Live Link */}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-card-border text-text-secondary transition-colors hover:bg-bg-secondary hover:text-text-primary"
                      title="Live Website"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                        />
                      </svg>
                    </a>
                  )}

                  {/* Impact */}

                  {project.impactUrl && (
                    <a
                      href={project.impactUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-card-border text-text-secondary transition-colors hover:bg-bg-secondary hover:text-text-primary"
                      title="Impact"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
                        />
                      </svg>
                    </a>
                  )}
                </div>

                {/* View Project Button */}
                <Link
                  to={project.link}
                  className="group/btn inline-flex items-center gap-2 rounded-full bg-btn-secondary-bg px-6 py-3 text-sm font-medium text-btn-secondary-text transition-all duration-normal hover:bg-btn-secondary-bg-hover"
                >
                  View Project
                  <svg
                    className="h-4 w-4 transition-transform duration-normal group-hover/btn:translate-x-1"
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
