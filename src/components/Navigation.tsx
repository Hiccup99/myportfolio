const Navigation = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-full px-1.5 py-1.5 shadow-sm">
        {/* Nav Icons */}
        <div className="relative group">
          <a
            href="#home"
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Home"
          >
            <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          </a>
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-dark text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Home
          </span>
        </div>

        <div className="w-px h-5 bg-gray-200 mx-0.5" />
        <div className="relative group">
          <a
            href="https://x.com/Sid_0597"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            aria-label="LinkedIn"
          >
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.2" className="bi bi-linkedin" viewBox="0 0 16 16">
          <path d="M1.2.5h13.6c.39 0 .7.32.7.72v13.56c0 .4-.31.72-.7.72H1.2a.71.71 0 0 1-.7-.72V1.22c0-.4.31-.72.7-.72zM4.8 13V6.2M4.8 4.1h.01M7.2 13V9.3c0-.3.03-.6.13-.82.28-.6.9-1.22 1.95-1.22 1.38 0 1.94 1.05 1.94 2.58V13"/>
        </svg>
          </a>
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-dark text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            LinkedIn
          </span>
        </div>

        <div className="relative group">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Mail"
          >
           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
          </a>
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-dark text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Mail
          </span>
        </div>

        <div className="relative group">
          <a
            href="https://drive.google.com/file/d/1XtIJRHrolPf7c8zANag-vVwOvLQFkziW/view?usp=sharing"
            target="_blank"
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Resume"
          >
            <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
          </a>
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-dark text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Resume
          </span>
        </div>

        <div className="w-px h-5 bg-gray-200 mx-0.5" />

        {/* Get in Touch Button */}
        <a
          href="#contact"
          className="group flex items-center gap-0 px-4 py-2 bg-dark text-white text-sm font-medium rounded-full hover:pr-3 transition-all duration-200"
        >
          <span>Get in Touch</span>
          <svg
            className="w-0 h-4 opacity-0 group-hover:w-4 group-hover:opacity-100 group-hover:ml-1 transition-all duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </nav>
  )
}

export default Navigation
