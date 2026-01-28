import { useScrollAnimation } from '../hooks/useScrollAnimation'
import ContactForm from './ContactForm'

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="contact" className="px-6 py-[70px] md:px-9">
      <div
        ref={ref}
        className={`duration-slower mx-auto max-w-2xl transition-all ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <h2 className="text-text-primary mb-4 text-2xl font-semibold md:text-3xl">Get in touch</h2>
        <p className="text-text-secondary mb-8 leading-relaxed">
          I'm always interested in exploring new opportunities, collaborating, or exchanging ideas
          with like-minded individuals. Feel free to email me if you'd like to discuss a potential
          project.
        </p>

        <ContactForm />
      </div>
    </section>
  )
}

export default Contact
