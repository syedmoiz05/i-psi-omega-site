import React, { useState, useEffect } from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <nav className="fixed w-full bg-primary/80 backdrop-blur-sm z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-heading font-bold text-accent">
            ΙΨΩ
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-white hover:text-accent transition-colors">
              About
            </Link>
            <Link href="#programs" className="text-white hover:text-accent transition-colors">
              Programs
            </Link>
            <Link href="#rush" className="text-white hover:text-accent transition-colors">
              Rush
            </Link>
            <Link href="#values" className="text-white hover:text-accent transition-colors">
              Values
            </Link>
            <Link href="#contact" className="text-white hover:text-accent transition-colors">
              Contact
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-primary-light transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <SunIcon className="h-5 w-5 text-accent" />
              ) : (
                <MoonIcon className="h-5 w-5 text-accent" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-around">
              <span className={`block w-full h-0.5 bg-accent transform transition-transform ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
              <span className={`block w-full h-0.5 bg-accent transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-full h-0.5 bg-accent transform transition-transform ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="py-4 space-y-4">
            <Link
              href="#about"
              className="block text-white hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="#programs"
              className="block text-white hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Programs
            </Link>
            <Link
              href="#rush"
              className="block text-white hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Rush
            </Link>
            <Link
              href="#values"
              className="block text-white hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Values
            </Link>
            <Link
              href="#contact"
              className="block text-white hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 