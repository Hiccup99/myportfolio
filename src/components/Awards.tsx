import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Awards = () => {
  const { ref, isVisible } = useScrollAnimation()

  const awards = [
    {
      title: 'Intrapreneur',
      org: 'Metadome.ai',
      date: 'Jul 2024',
      description:
        'Honoured to receive the "Intrapreneur" award at Metadome, highlighting my proactive approach as a problem solver and innovator. This recognition emphasizes my dedication to driving meaningful change and delivering innovative solutions that foster growth.',
    },
    {
      title: 'All-Star',
      org: 'Metadome.ai',
      date: 'Apr 2023',
      description:
        'Received the "All-Star" award at Metadome in recognition of my hard work, dedication, creativity, and actions. This award not only acknowledges my successful work execution but also inspires me to continue delivering exceptional results.',
    },
    {
      title: 'Semester Abroad Scholarship',
      org: 'UC Berkeley',
      date: 'Jan 2018',
      description:
        'Received a scholarship of $19,900 to study at the University Of California Berkeley in the spring of 2018.',
    },
    {
      title: 'National Winner, Smart India Hackathon',
      org: 'Ministry of Tourism & AICTE',
      date: '2017',
      description:
        "Won the first prize in Smart India Hackathon, the World's Biggest Hackathon organized by Ministry of HRD and AICTE. Our Team 'Pausch Lab at Next Tech' won out of 56 finalists and 10,000+ applicants.",
    },
  ]

  return (
    <section className="px-6 py-[70px] md:px-9">
      <div
        ref={ref}
        className={`duration-slower mx-auto max-w-xl transition-all md:mx-0 md:ml-[15%] ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        {/* Section Title */}
        <h2 className="text-text-primary mb-10 text-2xl font-semibold md:text-3xl">
          Awards & Recognition
        </h2>

        {/* Awards Grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {awards.map((award, index) => (
            <div
              key={index}
              className={`border-card-border bg-card-bg rounded-2xl border p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-md ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
            >
              {/* Trophy Icon */}
              <div className="bg-bg-secondary mb-3 flex h-10 w-10 items-center justify-center rounded-full">
                <svg
                  className="text-text-secondary h-5 w-5"
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
              </div>

              {/* Award Title */}
              <h3 className="text-text-primary mb-1 text-base font-semibold">{award.title}</h3>

              {/* Org and Date */}
              <p className="text-text-muted mb-3 text-xs">
                {award.org} • {award.date}
              </p>

              {/* Description */}
              <p className="text-text-secondary text-sm leading-relaxed">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Awards
