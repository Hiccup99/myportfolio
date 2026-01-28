import { useScrollAnimation } from '../hooks/useScrollAnimation'
import ContactForm from './ContactForm'

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="contact" className="px-6 py-[70px] md:px-9">
      <div
        ref={ref}
        className={`mx-auto max-w-2xl transition-all duration-slower ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <h2 className="mb-4 text-2xl font-semibold text-text-primary md:text-3xl">Get in touch</h2>
        <p className="mb-8 leading-relaxed text-text-secondary">
          I'm always interested in exploring new opportunities, collaborating, or exchanging ideas
          with like-minded individuals. Feel free to book a call or email me if you'd like to see my
          portfolio deck or to discuss a potential project.
        </p>

        <ContactForm />
      </div>
    </section>
  )
}

export default Contact
