import { motion } from 'framer-motion'
import { SALON_NAME, SALON_TAGLINE, whatsappBookingUrl } from '../config'

export function Hero() {
  return (
    <section
      id="top"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'grid',
        alignItems: 'center',
        padding: 'clamp(5.5rem, 12vw, 8rem) clamp(1.25rem, 4vw, 3rem) 4rem',
        overflow: 'hidden',
      }}
    >
      <div className="hero-animated-bg" aria-hidden>
        <div className="hero-animated-bg__orb hero-animated-bg__orb--a" />
        <div className="hero-animated-bg__orb hero-animated-bg__orb--b" />
        <div className="hero-animated-bg__orb hero-animated-bg__orb--c" />
        <div className="hero-animated-bg__shimmer" />
      </div>
      <div
        style={{
          maxWidth: 720,
          margin: '0 auto',
          width: '100%',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Private beauty atelier
        </motion.p>
        <motion.h1
          className="display-xl"
          style={{
            fontSize: 'clamp(2.75rem, 7vw, 4.75rem)',
            margin: '0.75rem 0 1rem',
            color: 'var(--color-ivory)',
          }}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          {SALON_NAME}
        </motion.h1>
        <motion.p
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.15rem, 2.2vw, 1.45rem)',
            fontStyle: 'italic',
            color: 'var(--color-champagne)',
            opacity: 0.92,
            margin: '0 0 1.75rem',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.35 }}
        >
          {SALON_TAGLINE}
        </motion.p>
        <motion.p
          style={{
            fontSize: '0.95rem',
            fontWeight: 300,
            maxWidth: 520,
            lineHeight: 1.75,
            color: 'var(--text-muted)',
            marginBottom: '2rem',
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          Couture colour, restorative skin rituals, and editorial hair — composed for you in a calm,
          candlelit suite. The brush follows you as you scroll — watch the powder drift through the
          entire story.
        </motion.p>
        <motion.div
          style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.55 }}
        >
          <a href="#book" className="btn-primary">
            Book a suite
          </a>
          <a href={whatsappBookingUrl()} className="btn-ghost" target="_blank" rel="noreferrer">
            WhatsApp concierge
          </a>
        </motion.div>
      </div>
    </section>
  )
}
