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
    <section className="py-[70px] px-6 md:px-9">
      <div
        ref={ref}
        className={`max-w-[500px] mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-dark mb-3">
            How Can I Help?
          </h2>
          <p className="text-dark-light">
            Let's turn your vision into something amazing.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 gap-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl p-5 hover:border-gray-300 transition-colors cursor-pointer"
            >
              {/* Stacked mockup images */}
              <div className="relative h-[80px] mb-4">
                <div className="absolute left-0 top-2 w-[60px] h-[70px] bg-white rounded-lg shadow-md -rotate-6 overflow-hidden">
                  <img
                    src={service.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute left-6 top-0 w-[60px] h-[70px] bg-white rounded-lg shadow-md rotate-6 overflow-hidden">
                  <img
                    src={service.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-base font-medium text-dark">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
