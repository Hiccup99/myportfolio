import { useState, useEffect } from 'react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState<'default' | 'premium'>('default')

  // Initialize theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'default' | 'premium' | null
    if (savedTheme) {
      setTheme(savedTheme)
      if (savedTheme === 'premium') {
        document.documentElement.classList.add('premium')
      }
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'default' ? 'premium' : 'default'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)

    if (newTheme === 'premium') {
      document.documentElement.classList.add('premium')
    } else {
      document.documentElement.classList.remove('premium')
    }
  }

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
      href: 'https://drive.google.com/file/d/1CfltjEtf1xieA4ukeClY21Shc-zs8R6j/view?usp=drive_link',
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
        <div className="border-nav-border bg-nav-bg flex items-center gap-1 rounded-full border px-1.5 py-1.5 shadow-sm">
          <div className="group relative">
            <a
              href="#home"
              className="hover:bg-nav-hover flex h-9 w-9 items-center justify-center rounded-full transition-colors"
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
            <span className="bg-tooltip-bg text-tooltip-text pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded px-2 py-1 text-xs opacity-0 transition-opacity group-hover:opacity-100">
              Home
            </span>
          </div>

          <div className="bg-border mx-0.5 h-5 w-px" />
          <div className="group relative">
            <a
              href="https://www.linkedin.com/in/sidharthsuresh/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-nav-hover flex h-9 w-9 items-center justify-center rounded-full transition-colors"
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
            <span className="bg-tooltip-bg text-tooltip-text pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded px-2 py-1 text-xs opacity-0 transition-opacity group-hover:opacity-100">
              LinkedIn
            </span>
          </div>

          <div className="group relative">
            <a
              href="https://drive.google.com/file/d/1CfltjEtf1xieA4ukeClY21Shc-zs8R6j/view?usp=drive_link"
              target="_blank"
              className="hover:bg-nav-hover flex h-9 w-9 items-center justify-center rounded-full transition-colors"
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
            <span className="bg-tooltip-bg text-tooltip-text pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded px-2 py-1 text-xs opacity-0 transition-opacity group-hover:opacity-100">
              Resume
            </span>
          </div>

          <div className="bg-border mx-0.5 h-5 w-px" />

          <a
            href="#contact"
            className="bg-btn-primary-bg text-btn-primary-text duration-normal hover:bg-btn-primary-bg-hover group flex items-center gap-0 rounded-full px-4 py-2 text-sm font-medium transition-all hover:pr-3"
          >
            <span>Get in Touch</span>
            <svg
              className="duration-normal h-4 w-0 opacity-0 transition-all group-hover:ml-1 group-hover:w-4 group-hover:opacity-100"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </nav>

      {/* Theme Toggle - Desktop */}
      {/* <button
        onClick={toggleTheme}
        className="border-nav-border bg-nav-bg text-text-secondary hover:bg-nav-hover fixed right-6 top-6 z-50 hidden items-center gap-2 rounded-full border px-3 py-2 text-xs font-medium shadow-sm transition-colors md:flex"
        aria-label="Toggle theme"
      >
        <span className={theme === 'premium' ? 'text-text-primary' : ''}>Premium</span>
        <div className="bg-bg-tertiary relative h-5 w-9 rounded-full">
          <div
            className={`bg-btn-primary-bg duration-normal absolute top-0.5 h-4 w-4 rounded-full transition-transform ${
              theme === 'premium' ? 'translate-x-4' : 'translate-x-0.5'
            }`}
          />
        </div>
      </button> */}

      {/* Mobile Navigation */}
      <nav className="fixed right-4 top-4 z-50 md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="border-nav-border bg-nav-bg flex h-11 w-11 items-center justify-center rounded-full border shadow-sm"
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
          <div className="animate-in fade-in slide-in-from-top-2 border-nav-border bg-nav-bg duration-normal absolute right-0 top-14 w-48 rounded-2xl border py-2 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                onClick={() => setIsOpen(false)}
                className="text-text-primary hover:bg-bg-secondary flex items-center gap-3 px-4 py-3 text-sm transition-colors"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                  {link.icon}
                </span>
                {link.label}
              </a>
            ))}
            <div className="border-border-subtle mx-3 my-2 border-t" />
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-btn-primary-bg text-btn-primary-text mx-3 flex items-center justify-center gap-3 rounded-full px-4 py-2.5 text-sm font-medium"
            >
              Get in Touch
            </a>
            <div className="border-border-subtle mx-3 my-2 border-t" />
            {/* Theme Toggle - Mobile */}
            <button
              onClick={toggleTheme}
              className="mx-3 flex items-center justify-between rounded-lg px-1 py-2 text-sm"
            >
              <span className={theme === 'premium' ? 'text-text-primary' : 'text-text-secondary'}>
                Premium
              </span>
              <div className="bg-bg-tertiary relative h-5 w-9 rounded-full">
                <div
                  className={`bg-btn-primary-bg duration-normal absolute top-0.5 h-4 w-4 rounded-full transition-transform ${
                    theme === 'premium' ? 'translate-x-4' : 'translate-x-0.5'
                  }`}
                />
              </div>
            </button>
          </div>
        )}
      </nav>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 z-40 md:hidden" onClick={() => setIsOpen(false)} />}
    </>
  )
}

export default Navigation
