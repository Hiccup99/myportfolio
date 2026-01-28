import { useState, FormEvent } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getProjectById } from '../data/projects'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const project = id ? getProjectById(id) : undefined

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }, 1000)
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-dark mb-4">Project not found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-dark-light hover:text-dark transition-colors"
          >
            Go back home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="max-w-[900px] mx-auto border-l border-r border-gray-200">
        <main className="pt-32 pb-20">
          {/* Centered content container */}
          <div className="max-w-[550px] mx-auto px-6 md:px-9">
            {/* Go back link */}
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 text-dark-light hover:text-dark transition-colors mb-8"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
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
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-12">
              <h1 className="text-2xl md:text-1xl font-semibold text-dark leading-tight">
                {project.title}
              </h1>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-full text-sm font-medium text-dark hover:bg-gray-50 transition-colors whitespace-nowrap"
                >
                  Live Website
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
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
              <div className="bg-[#e8e8e8] rounded-[24px] p-6 shadow-sm">
                <div className="rounded-[16px] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-[16/10] object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Project Overview */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold text-dark mb-4">Project Overview</h2>
              <p className="text-dark-light leading-relaxed">{project.overview}</p>
            </section>

            {/* Solution */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold text-dark mb-4">Solution</h2>
              <p className="text-dark-light leading-relaxed mb-8">{project.solution}</p>

              {/* Solution Images */}
              {project.solutionImages && project.solutionImages.length > 0 && (
                <div>
                  {project.solutionImages.map((img, index) => (
                    <div
                      key={index}
                      className="rounded-[16px] overflow-hidden bg-gray-100"
                    >
                      <img
                        src={img}
                        alt={`Solution ${index + 1}`}
                        className="w-full aspect-square object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* Get in touch section */}
            <section className="pt-8">
              <h2 className="text-2xl font-semibold text-dark mb-4">Get in touch</h2>
              <p className="text-dark-light mb-8 leading-relaxed">
                I'm always interested in exploring new opportunities, collaborating, or
                exchanging ideas with like-minded individuals. Feel free to book a call
                or email me if you'd like to see my portfolio deck or to discuss a
                potential project.
              </p>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full h-12 px-4 text-sm bg-gray-50 border border-transparent rounded-xl focus:outline-none focus:border-primary transition-colors duration-200"
                    placeholder="Full Name"
                  />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-12 px-4 text-sm bg-gray-50 border border-transparent rounded-xl focus:outline-none focus:border-primary transition-colors duration-200"
                    placeholder="Email Address"
                  />
                </div>

                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 text-sm bg-gray-50 border border-transparent rounded-xl focus:outline-none focus:border-primary transition-colors duration-200 resize-y"
                  placeholder="Write your Message"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-dark text-white text-sm rounded-xl hover:bg-dark/90 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-accent/10 border border-green-accent rounded-xl text-green-accent text-center text-sm">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
              </form>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default ProjectDetail
