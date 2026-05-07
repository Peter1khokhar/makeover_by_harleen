import { motion } from 'framer-motion'

const quotes = [
  {
    text: 'They painted my colour like light through silk — I have never been asked so many thoughtful questions before a single foil.',
    name: 'Elena V.',
    role: 'Editor',
  },
  {
    text: 'The suite felt like a private hotel floor. My skin was glass-clear for weeks after the ritual.',
    name: 'Amira K.',
    role: 'Founder',
  },
]

export function Testimonials() {
  return (
    <section
      id="experience"
      style={{
        padding: 'clamp(4rem, 10vw, 7rem) clamp(1.25rem, 4vw, 3rem)',
        background: `radial-gradient(ellipse 70% 50% at 50% 50%, color-mix(in srgb, var(--color-gold) 12%, transparent), transparent 70%), var(--section-surface)`,
      }}
    >
      <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Client whispers
        </motion.p>
        <motion.h2
          className="display-xl"
          style={{
            fontSize: 'clamp(1.85rem, 4vw, 2.75rem)',
            color: 'var(--color-ivory)',
            margin: '0.75rem 0 2.5rem',
          }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
        >
          The experience people remember
        </motion.h2>
        <div
          style={{
            display: 'grid',
            gap: '1.5rem',
            gridTemplateColumns: '1fr',
          }}
          className="testimonial-grid"
        >
          {quotes.map((q, i) => (
            <motion.blockquote
              key={q.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, delay: i * 0.12 }}
              style={{
                margin: 0,
                padding: '2rem 1.75rem',
                border: '1px solid var(--border-subtle)',
                borderRadius: 2,
                background: 'var(--section-surface-strong)',
                textAlign: 'left',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.1rem, 2.2vw, 1.35rem)',
                  fontStyle: 'italic',
                  lineHeight: 1.55,
                  color: 'var(--color-champagne)',
                  margin: '0 0 1.25rem',
                }}
              >
                “{q.text}”
              </p>
              <footer>
                <cite
                  style={{
                    fontStyle: 'normal',
                    fontSize: '0.85rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--color-gold)',
                  }}
                >
                  {q.name}
                  <span
                    style={{
                      color: 'var(--text-muted-soft)',
                      fontWeight: 300,
                      textTransform: 'none',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {' '}
                    — {q.role}
                  </span>
                </cite>
              </footer>
            </motion.blockquote>
          ))}
        </div>
        <style>{`
          @media (min-width: 768px) {
            .testimonial-grid {
              grid-template-columns: 1fr 1fr;
            }
          }
        `}</style>
      </div>
    </section>
  )
}
