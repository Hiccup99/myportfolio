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
        className={`mx-auto max-w-[500px] transition-all duration-slower ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        {/* Section Title */}
        <h2 className="mb-10 text-2xl font-semibold text-text-primary md:text-3xl">
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
              <p className="mb-2 text-sm text-text-muted">{exp.period}</p>

              {/* Role and Company */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-base text-text-primary">{exp.role} at</span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-card-border bg-card-bg px-3 py-1.5 text-sm font-medium transition-transform duration-200 hover:scale-105">
                  {exp.logo && <span>{exp.logo}</span>}
                  {exp.company}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
