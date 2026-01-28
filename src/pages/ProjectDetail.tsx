import { useParams, useNavigate } from 'react-router-dom'
import { getProjectById } from '../data/projects'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const project = id ? getProjectById(id) : undefined

  if (!project) {
    return (
      <div className="bg-bg-primary flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-text-primary mb-4 text-2xl font-semibold">Project not found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-text-secondary hover:text-text-primary transition-colors"
          >
            Go back home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-bg-primary min-h-screen">
      <Navigation />
      <div className="border-border mx-auto max-w-[900px] border-l border-r">
        <main className="pb-20 pt-32">
          <div className="mx-auto max-w-[550px] px-6 md:px-9">
            {/* Go back link */}
            <button
              onClick={() => navigate('/')}
              className="text-text-secondary hover:text-text-primary mb-8 inline-flex items-center gap-2 transition-colors"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Go back
            </button>

            {/* Header - Title and Live Website button */}
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <h1 className="md:text-1xl text-text-primary text-2xl font-semibold leading-tight">
                {project.title}
              </h1>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-border text-text-primary hover:bg-bg-secondary inline-flex items-center gap-2 whitespace-nowrap rounded-full border px-6 py-3 text-sm font-medium transition-colors"
                >
                  Live Website
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                </a>
              )}
            </div>

            {/* Hero Image - Device Mockup */}
            <div className="mb-16">
              <div className="bg-mockup-frame rounded-[24px] p-6 shadow-sm">
                <div className="overflow-hidden rounded-[16px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="aspect-[16/10] w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Project Overview */}
            <section className="mb-16">
              <h2 className="text-text-primary mb-4 text-2xl font-semibold">Project Overview</h2>
              <p className="text-text-secondary leading-relaxed">{project.overview}</p>
            </section>

            {/* Solution */}
            <section className="mb-16">
              <h2 className="text-text-primary mb-4 text-2xl font-semibold">Solution</h2>
              <p className="text-text-secondary mb-8 leading-relaxed">{project.solution}</p>

              {/* Solution Images */}
              {project.solutionImages && project.solutionImages.length > 0 && (
                <div>
                  {project.solutionImages.map((img, index) => (
                    <div key={index} className="overflow-hidden rounded-[16px] bg-black">
                      <img
                        src={img}
                        alt={`Solution ${index + 1}`}
                        className="aspect-square w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* Get in touch section */}
            <section className="pt-8">
              <h2 className="text-text-primary mb-4 text-2xl font-semibold">Get in touch</h2>
              <p className="text-text-secondary mb-8 leading-relaxed">
                I'm always interested in exploring new opportunities, collaborating, or exchanging
                ideas with like-minded individuals. Feel free to email me if you'd like to discuss a
                potential project.
              </p>

              <ContactForm />
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default ProjectDetail
