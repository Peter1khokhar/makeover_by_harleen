import { motion } from 'framer-motion'
import {
  SALON_ADDRESS,
  SALON_EMAIL,
  SALON_PHONE,
  whatsappBookingUrl,
} from '../config'

export function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: 'clamp(4rem, 10vw, 7rem) clamp(1.25rem, 4vw, 3rem)',
      }}
    >
      <div
        id="book"
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          display: 'grid',
          gap: '2.5rem',
          alignItems: 'stretch',
        }}
        className="contact-grid"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">Visit & book</p>
          <h2
            className="display-xl"
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 3rem)',
              color: 'var(--color-ivory)',
              margin: '0.65rem 0 1rem',
            }}
          >
            Concierge hours & suite access
          </h2>
          <p
            style={{
              color: 'var(--text-muted)',
              fontWeight: 300,
              maxWidth: 460,
              lineHeight: 1.75,
            }}
          >
            Tuesday — Saturday, 10:00 to 19:00. Private evening appointments available on
            request. Valet and quiet entrance for public figures.
          </p>
          <ul
            style={{
              listStyle: 'none',
              margin: '2rem 0 0',
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <li style={{ fontSize: '0.95rem' }}>
              <span style={{ color: 'var(--color-gold)', fontSize: '0.7rem', letterSpacing: '0.2em' }}>
                ADDRESS
              </span>
              <br />
              {SALON_ADDRESS}
            </li>
            <li style={{ fontSize: '0.95rem' }}>
              <span style={{ color: 'var(--color-gold)', fontSize: '0.7rem', letterSpacing: '0.2em' }}>
                PHONE
              </span>
              <br />
              <a href={`tel:${SALON_PHONE.replace(/\s/g, '')}`}>{SALON_PHONE}</a>
            </li>
            <li style={{ fontSize: '0.95rem' }}>
              <span style={{ color: 'var(--color-gold)', fontSize: '0.7rem', letterSpacing: '0.2em' }}>
                EMAIL
              </span>
              <br />
              <a href={`mailto:${SALON_EMAIL}`}>{SALON_EMAIL}</a>
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            padding: '2.25rem',
            border: '1px solid var(--border-strong)',
            borderRadius: 2,
            background: 'var(--contact-panel-bg)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '1.25rem',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.35rem',
              color: 'var(--color-ivory)',
              margin: 0,
            }}
          >
            Prefer instant booking?
          </p>
          <p style={{ margin: 0, color: 'var(--text-muted)', fontWeight: 300, lineHeight: 1.65 }}>
            Message our WhatsApp concierge with your preferred services and dates — we reply within the
            hour during studio hours.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <a href={whatsappBookingUrl()} className="btn-primary" target="_blank" rel="noreferrer">
              WhatsApp booking
            </a>
            <a href={`mailto:${SALON_EMAIL}?subject=Appointment%20request`} className="btn-ghost">
              Email request
            </a>
          </div>
        </motion.div>
        <style>{`
          @media (min-width: 900px) {
            .contact-grid {
              grid-template-columns: 1fr 1fr;
            }
          }
        `}</style>
      </div>
    </section>
  )
}
