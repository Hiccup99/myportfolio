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
    }
  ]

  return (
    <section className="py-[70px] px-6 md:px-9">
      <div
        ref={ref}
        className={`max-w-[500px] mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-dark mb-10">
          Work Experience
        </h2>

        {/* Experience List */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="flex items-center gap-6 md:gap-12">
              {/* Period */}
              <span className="text-sm text-secondary w-[120px] shrink-0">
                {exp.period}
              </span>

              {/* Role and Company */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-base text-dark">
                  {exp.role}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-gray-200 rounded-full text-sm font-medium">
                  {exp.logo && <span>{exp.logo}</span>}
                  {exp.company}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-16" />
      </div>
    </section>
  )
}

export default Experience
