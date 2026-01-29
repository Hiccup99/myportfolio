import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation()

  const experiences = [
    {
      period: 'Since 2026',
      role: 'Consultant',
      company: 'Stealth Startups',
      logo: '✦',
    },
    {
      period: '2021 - 2025',
      role: 'Product Manager',
      company: 'Metadome.ai',
      logo: '✦',
    },
    {
      period: '2019 - 2021',
      role: 'Software Developer',
      company: 'Metadome.ai, HP Inc',
      logo: '✦',
    },
  ]

  return (
    <section className="px-6 py-[70px] md:px-9">
      <div
        ref={ref}
        className={`duration-slower mx-auto max-w-[500px] transition-all ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        {/* Section Title */}
        <h2 className="text-text-primary mb-10 text-2xl font-semibold md:text-3xl">
          Work Experience
        </h2>

        {/* Experience List */}
        <div className="space-y-5">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
            >
              {/* Period */}
              <p className="text-text-muted mb-2 text-sm">{exp.period}</p>

              {/* Role and Company */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-text-primary text-base">{exp.role} at</span>
                <span className="border-card-border bg-card-bg inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium transition-transform duration-200 hover:scale-105">
                  {exp.logo && <span>{exp.logo}</span>}
                  {exp.company}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Download Resume CTA */}
        <div
          className={`mt-10 flex justify-center transition-all duration-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
          style={{ transitionDelay: isVisible ? `${experiences.length * 100}ms` : '0ms' }}
        >
          <a
            href="/misc/sidharth_resume.pdf"
            download
            className="border-card-border bg-card-bg text-text-primary duration-normal inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default Experience
