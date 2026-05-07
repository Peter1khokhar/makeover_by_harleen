import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SALON_NAME } from '../config'
import logo from '../assets/logo.png'
import { useTheme } from '../context/ThemeContext'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#works', label: 'Recent work' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Visit' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)

    onScroll()

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isMobile = window.innerWidth < 768

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: isMobile
          ? '0.7rem 0.7rem'
          : '1rem clamp(1rem, 5vw, 3rem)',
        background: scrolled ? 'var(--nav-bg-scrolled)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px) saturate(140%)' : 'none',
        WebkitBackdropFilter: scrolled
          ? 'blur(16px) saturate(140%)'
          : 'none',
        borderBottom: scrolled
          ? '1px solid var(--nav-border)'
          : '1px solid transparent',
        transition: 'all 0.4s ease',
        boxSizing: 'border-box',
        overflow: 'hidden',
        width: '100%',
      }}
    >
      <nav
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'nowrap',
          gap: '10px',
          width: '100%',
          overflow: 'hidden',
          boxSizing: 'border-box',
        }}
      >
        {/* LOGO */}
        <a
          href="#top"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontFamily: 'var(--font-display)',
            fontSize: isMobile ? '0.95rem' : '1.2rem',
            fontWeight: 600,
            color: 'var(--color-ivory)',
            textDecoration: 'none',
            minWidth: 0,
            overflow: 'hidden',
          }}
        >
          <img
            src={logo}
            alt="logo"
            style={{
              width: isMobile ? '30px' : '35px',
              height: isMobile ? '30px' : '35px',
              objectFit: 'contain',
              flexShrink: 0,
            }}
          />

          <span
            style={{
              display: 'inline-block',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxWidth: isMobile ? '120px' : 'unset',
            }}
          >
            {SALON_NAME}
          </span>
        </a>

        {/* DESKTOP MENU */}
        <ul
          className="nav-desktop"
          style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            gap: '1.5rem',
            alignItems: 'center',
          }}
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                style={{
                  fontSize: '0.7rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--color-champagne)',
                  textDecoration: 'none',
                  opacity: 0.8,
                }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ACTIONS */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            flexShrink: 0,
            marginLeft: 'auto',
          }}
        >
          {/* THEME BUTTON */}
          <button
            onClick={toggleTheme}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--color-ivory)',
              padding: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          {/* BOOK BUTTON */}
          <a
            href="#book"
            className="btn-primary"
            style={{
              fontSize: isMobile ? '0.58rem' : '0.65rem',
              padding: isMobile
                ? '0.55rem 0.9rem'
                : '0.6rem 1.2rem',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            Book
          </a>

          {/* HAMBURGER */}
          <button
            className="menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--color-ivory)',
              display: 'none',
              padding: '4px',
              minWidth: '40px',
              height: '40px',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              flexShrink: 0,
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d={
                  isOpen
                    ? 'M18 6L6 18M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              overflow: 'hidden',
              background: 'var(--nav-bg-scrolled)',
              marginTop: '10px',
              borderRadius: '8px',
              border: '1px solid var(--nav-border)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
            }}
          >
            <ul
              style={{
                listStyle: 'none',
                padding: '1.5rem',
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '1.2rem',
              }}
            >
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setIsOpen(false)}
                    style={{
                      color: 'var(--color-champagne)',
                      textDecoration: 'none',
                      fontSize: '0.8rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        html,
        body {
          overflow-x: hidden;
        }

        @media (max-width: 899px) {
          .nav-desktop {
            display: none !important;
          }

          .menu-toggle {
            display: flex !important;
          }
        }

        @media (min-width: 900px) {
          .nav-desktop {
            display: flex !important;
          }

          .menu-toggle {
            display: none !important;
          }
        }
      `}</style>
    </motion.header>
  )
}