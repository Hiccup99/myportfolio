import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Services = () => {
  const { ref, isVisible } = useScrollAnimation()

  const services = [
    {
      title: 'Product Strategy and Vision',
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=300&h=200&fit=crop',
    },
    {
      title: 'Problem Discovery and Validation',
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=300&h=200&fit=crop',
    },
    {
      title: 'Market  and Competitive Analysis',
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=300&h=200&fit=crop',
    },
    {
      title: '0->1 Product Ideation & Prototyping',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop',
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
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-2xl font-semibold text-text-primary md:text-3xl">
            How Can I Help?
          </h2>
          <p className="text-text-secondary">Let's turn your vision into something amazing.</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 gap-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group cursor-pointer rounded-2xl border border-card-border p-5 transition-all duration-300 hover:-translate-y-1 hover:border-card-border-hover hover:shadow-md"
            >
              {/* Stacked mockup images */}
              <div className="relative mb-4 h-[80px]">
                <div className="absolute left-0 top-2 h-[70px] w-[60px] -rotate-6 overflow-hidden rounded-lg bg-card-bg shadow-md transition-transform duration-300 group-hover:-rotate-12">
                  <img src={service.image} alt="" className="h-full w-full object-cover" />
                </div>
                <div className="absolute left-6 top-0 h-[70px] w-[60px] rotate-6 overflow-hidden rounded-lg bg-card-bg shadow-md transition-transform duration-300 group-hover:rotate-12">
                  <img src={service.image} alt="" className="h-full w-full object-cover" />
                </div>
              </div>
              <h3 className="text-base font-medium text-text-primary">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
