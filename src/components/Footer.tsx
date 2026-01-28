const Footer = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sidharthsuresh/',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.2" className="bi bi-linkedin" viewBox="0 0 16 16">
          <path d="M1.2.5h13.6c.39 0 .7.32.7.72v13.56c0 .4-.31.72-.7.72H1.2a.71.71 0 0 1-.7-.72V1.22c0-.4.31-.72.7-.72zM4.8 13V6.2M4.8 4.1h.01M7.2 13V9.3c0-.3.03-.6.13-.82.28-.6.9-1.22 1.95-1.22 1.38 0 1.94 1.05 1.94 2.58V13"/>
        </svg>
      ),
    },
    {
      name: 'Email',
      url: 'mailto:sidharth037@gmail.com',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
    },
  ]

  return (
    <footer className="py-10 px-6 md:px-9">
      <div className="max-w-2xl mx-auto text-center">
        {/* Copyright */}
        <p className="text-dark-light text-sm mb-6">
          Copyright &copy; {new Date().getFullYear()} Sidharth Suresh. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark hover:text-primary transition-colors"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
