import { useState } from 'react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    {
      href: '#home',
      label: 'Home',
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
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      ),
    },
    {
      href: 'https://www.linkedin.com/in/sidharthsuresh/',
      label: 'LinkedIn',
      external: true,
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
      href: 'mailto:hello@example.com',
      label: 'Mail',
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
    {
      href: 'https://drive.google.com/file/d/1XtIJRHrolPf7c8zANag-vVwOvLQFkziW/view?usp=sharing',
      label: 'Resume',
      external: true,
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
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
          />
        </svg>
      ),
    },
  ]

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed left-1/2 top-6 z-50 hidden -translate-x-1/2 md:block">
        <div className="flex items-center gap-1 rounded-full border border-gray-200 bg-white px-1.5 py-1.5 shadow-sm">
          <div className="group relative">
            <a
              href="#home"
              className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-gray-100"
              aria-label="Home"
            >
              <svg
                className="h-[18px] w-[18px]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </a>
            <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-dark px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
              Home
            </span>
          </div>

          <div className="mx-0.5 h-5 w-px bg-gray-200" />
          <div className="group relative">
            <a
              href="https://www.linkedin.com/in/sidharthsuresh/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-gray-100"
              aria-label="LinkedIn"
            >
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
            </a>
            <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-dark px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
              LinkedIn
            </span>
          </div>

          <div className="group relative">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-gray-100"
              aria-label="Mail"
            >
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
            </a>
            <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-dark px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
              Mail
            </span>
          </div>

          <div className="group relative">
            <a
              href="https://drive.google.com/file/d/1XtIJRHrolPf7c8zANag-vVwOvLQFkziW/view?usp=sharing"
              target="_blank"
              className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-gray-100"
              aria-label="Resume"
            >
              <svg
                className="h-[18px] w-[18px]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
            </a>
            <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-dark px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
              Resume
            </span>
          </div>

          <div className="mx-0.5 h-5 w-px bg-gray-200" />

          <a
            href="#contact"
            className="group flex items-center gap-0 rounded-full bg-dark px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:pr-3"
          >
            <span>Get in Touch</span>
            <svg
              className="h-4 w-0 opacity-0 transition-all duration-200 group-hover:ml-1 group-hover:w-4 group-hover:opacity-100"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed right-4 top-4 z-50 md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
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
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="animate-in fade-in slide-in-from-top-2 absolute right-0 top-14 w-48 rounded-2xl border border-gray-200 bg-white py-2 shadow-lg duration-200">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-sm text-dark transition-colors hover:bg-gray-50"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                  {link.icon}
                </span>
                {link.label}
              </a>
            ))}
            <div className="mx-3 my-2 border-t border-gray-100" />
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mx-3 flex items-center justify-center gap-3 rounded-full bg-dark px-4 py-2.5 text-sm font-medium text-white"
            >
              Get in Touch
            </a>
          </div>
        )}
      </nav>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 z-40 md:hidden" onClick={() => setIsOpen(false)} />}
    </>
  )
}

export default Navigation
