"use client"

import { useState, useEffect } from "react"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Calculate scroll progress
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight - windowHeight
      const scrollTop = window.scrollY
      const scrollPercentage = (scrollTop / documentHeight) * 100
      setScrollProgress(scrollPercentage)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (mobileMenuOpen && !target.closest("header")) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [mobileMenuOpen])

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [mobileMenuOpen])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg py-3"
          : "bg-slate-900/90 backdrop-blur-sm border-b border-slate-700/30 py-4"
      }`}
    >
      {/* Scroll Indicator */}
      <div className="absolute top-0 left-0 w-full h-1" aria-hidden="true">
        <div
          className="h-full bg-gradient-to-r from-primary via-blue-400 to-teal-400 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">Kevin Ilama</h1>

        {/* Desktop Navigation - Hidden on mobile */}
        <nav className="hidden md:block" aria-label="Main navigation">
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="text-slate-200 hover:text-primary transition-colors duration-300 font-medium">
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="text-slate-200 hover:text-primary transition-colors duration-300 font-medium"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-slate-200 hover:text-primary transition-colors duration-300 font-medium"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="text-slate-200 hover:text-primary transition-colors duration-300 font-medium"
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-slate-200 hover:text-primary transition-colors duration-300 font-medium"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation Button - Visible only on mobile */}
        <button
          className="md:hidden text-white focus:outline-none p-2 rounded-md hover:bg-slate-800/50"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu - Hidden by default */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed top-[57px] left-0 right-0 bg-slate-900/95 backdrop-blur-md shadow-lg transition-all duration-300 overflow-hidden z-50 ${
          mobileMenuOpen ? "max-h-[300px] border-t border-slate-700/30" : "max-h-0"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="container mx-auto px-4 py-3">
          <nav aria-label="Mobile navigation">
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="block text-slate-200 hover:text-primary transition-colors duration-300 py-2 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="block text-slate-200 hover:text-primary transition-colors duration-300 py-2 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="block text-slate-200 hover:text-primary transition-colors duration-300 py-2 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="block text-slate-200 hover:text-primary transition-colors duration-300 py-2 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block text-slate-200 hover:text-primary transition-colors duration-300 py-2 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

