import { useScrollAnimation } from '../hooks/useScrollAnimation'
import ContactForm from './ContactForm'

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="contact" className="py-[70px] px-6 md:px-9">
      <div
        ref={ref}
        className={`max-w-2xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-dark mb-4">
          Get in touch
        </h2>
        <p className="text-dark-light mb-8 leading-relaxed">
          I'm always interested in exploring new opportunities, collaborating, or
          exchanging ideas with like-minded individuals. Feel free to book a call
          or email me if you'd like to see my portfolio deck or to discuss a
          potential project.
        </p>

        <ContactForm />
      </div>
    </section>
  )
}

export default Contact
