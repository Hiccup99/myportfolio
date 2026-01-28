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
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="h-12 w-full rounded-xl border border-transparent bg-gray-50 px-4 text-sm transition-colors duration-200 focus:border-primary focus:outline-none"
          placeholder="Full Name"
        />
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="h-12 w-full rounded-xl border border-transparent bg-gray-50 px-4 text-sm transition-colors duration-200 focus:border-primary focus:outline-none"
          placeholder="Email Address"
        />
      </div>

      <textarea
        name="message"
        required
        rows={6}
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className="w-full resize-y rounded-xl border border-transparent bg-gray-50 px-4 py-3 text-sm transition-colors duration-200 focus:border-primary focus:outline-none"
        placeholder="Write your Message"
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="h-12 w-full rounded-xl bg-dark text-sm font-medium text-white transition-all duration-200 hover:bg-dark/90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      {submitStatus === 'success' && (
        <div className="rounded-xl border border-green-accent bg-green-accent/10 p-4 text-center text-sm text-green-accent">
          Thank you! Your message has been sent successfully.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="rounded-xl border border-red-300 bg-red-50 p-4 text-center text-sm text-red-600">
          Something went wrong. Please try again or email me directly.
        </div>
      )}
    </form>
  )
}

export default ContactForm
