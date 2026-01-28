const Footer = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sidharthsuresh/',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="bi bi-linkedin"
          viewBox="0 0 16 16"
        >
          <rect x="0.75" y="0.75" width="14.5" height="14.5" rx="1.5" ry="1.5" />
          <path d="M4.5 6.2V12.8" />
          <path d="M4.5 4.4h.01" />
          <path d="M7.1 12.8V9.1c0-.7.1-1.1.3-1.5.3-.6 1-1.2 2-1.2 1.5 0 2.1 1.1 2.1 2.7v3.7" />
        </svg>
      ),
    },
    {
      name: 'Email',
      url: 'mailto:sidharth037@gmail.com',
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
    },
  ]

  return (
    <footer className="px-6 py-10 md:px-9">
      <div className="mx-auto max-w-2xl text-center">
        {/* Copyright */}
        <p className="mb-6 text-sm text-dark-light">
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
              className="text-dark transition-colors hover:text-primary"
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
