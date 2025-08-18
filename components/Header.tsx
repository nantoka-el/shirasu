'use client'

import { useState, useEffect } from 'react'
import { Fish, Menu, X, ChevronUp } from 'lucide-react'
import LineButton from './LineButton'

interface HeaderProps {
  initialSolid?: boolean
}

export default function Header({ initialSolid = false }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navItems = [
    { label: '商品', href: '/#products' },
    { label: 'お客様の声', href: '/#testimonials' },
    { label: '購入の流れ', href: '/#flow' },
    { label: 'よくある質問', href: '/#faq' },
  ]

  const solid = initialSolid || isScrolled

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}>
        <div className="container-custom">
          <nav className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <Fish className={`w-8 h-8 ${solid ? 'text-shinojima-ai' : 'text-white'}`} />
              <span className={`font-mincho text-xl ${solid ? 'text-shinojima-black' : 'text-white'}`}>
                篠島直送生しらす 虎丸水産
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`hover:opacity-80 transition-opacity ${
                    solid ? 'text-shinojima-sumi' : 'text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <LineButton size="small" />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden ${solid ? 'text-shinojima-black' : 'text-white'}`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container-custom py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-shinojima-sumi hover:text-shinojima-ai"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <LineButton size="small" className="w-full justify-center" />
            </div>
          </div>
        )}
      </header>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-shinojima-ai text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </>
  )
}
