import { useState, FormEvent } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formDataToSend = new FormData(e.currentTarget)
      formDataToSend.append('access_key', '5a57de31-b2e2-4e8d-88d2-bc19f0f15c1e')
      formDataToSend.append('subject', `New message from ${formData.name} - Portfolio`)

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full h-12 px-4 text-sm bg-gray-50 border border-transparent rounded-xl focus:outline-none focus:border-primary transition-colors duration-200"
          placeholder="Full Name"
        />
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full h-12 px-4 text-sm bg-gray-50 border border-transparent rounded-xl focus:outline-none focus:border-primary transition-colors duration-200"
          placeholder="Email Address"
        />
      </div>

      <textarea
        name="message"
        required
        rows={6}
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className="w-full px-4 py-3 text-sm bg-gray-50 border border-transparent rounded-xl focus:outline-none focus:border-primary transition-colors duration-200 resize-y"
        placeholder="Write your Message"
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-12 bg-dark text-white text-sm rounded-xl hover:bg-dark/90 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      {submitStatus === 'success' && (
        <div className="p-4 bg-green-accent/10 border border-green-accent rounded-xl text-green-accent text-center text-sm">
          Thank you! Your message has been sent successfully.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-300 rounded-xl text-red-600 text-center text-sm">
          Something went wrong. Please try again or email me directly.
        </div>
      )}
    </form>
  )
}

export default ContactForm
