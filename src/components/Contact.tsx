import { useState, FormEvent } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })

      // Reset success message after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }, 1000)
  }

  return (
    <section id="contact" className="py-[70px] px-6 md:px-9">
      <div
        ref={ref}
        className={`max-w-2xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-dark mb-4">
          Get in touch
        </h2>
        <p className="text-dark-light mb-8 leading-relaxed">
          I'm always interested in exploring new opportunities, collaborating, or
          exchanging ideas with like-minded individuals. Feel free to book a call
          or email me if you'd like to see my portfolio deck or to discuss a
          potential project.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name and Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full h-12 px-4 text-sm bg-gray-50 border border-transparent rounded-xl focus:outline-none focus:border-primary transition-colors duration-200"
              placeholder="Full Name"
            />
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full h-12 px-4 text-sm bg-gray-50 border border-transparent rounded-xl focus:outline-none focus:border-primary transition-colors duration-200"
              placeholder="Email Address"
            />
          </div>

          {/* Message Textarea */}
          <textarea
            required
            rows={6}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 text-sm bg-gray-50 border border-transparent rounded-xl focus:outline-none focus:border-primary transition-colors duration-200 resize-y"
            placeholder="Write your Message"
          />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 bg-dark text-white text-sm rounded-xl hover:bg-dark/90 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {/* Success Message */}
          {submitStatus === 'success' && (
            <div className="p-4 bg-green-accent/10 border border-green-accent rounded-xl text-green-accent text-center text-sm">
              Thank you! Your message has been sent successfully.
            </div>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
