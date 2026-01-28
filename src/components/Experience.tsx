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
        className={`mx-auto max-w-[500px] transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        {/* Section Title */}
        <h2 className="mb-10 text-2xl font-semibold text-dark md:text-3xl">Work Experience</h2>

        {/* Experience List */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index}>
              {/* Period */}
              <p className="mb-2 text-sm text-secondary">{exp.period}</p>

              {/* Role and Company */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-base text-dark">{exp.role} at</span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium">
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
