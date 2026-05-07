import { motion } from 'framer-motion'

const works = [
  {
    title: 'Candlelit editorial',
    client: 'Lunar magazine',
    year: '2026',
    tone: '#c9a962',
  },
  {
    title: 'Private bridal suite',
    client: 'Mayfair residence',
    year: '2026',
    tone: '#c4a4a4',
  },
  {
    title: 'Week of couture colour',
    client: 'Fashion week backstage',
    year: '2025',
    tone: '#8b7355',
  },
]

export function RecentWorks() {
  return (
    <section
      id="works"
      style={{
        padding: 'clamp(1rem, 10vw, 2rem) clamp(1.25rem, 4vw, 1rem)',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '2.25rem' }}
        >
          <p className="section-label">Recent works</p>
          <h2
            className="display-xl"
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 3rem)',
              color: 'var(--color-ivory)',
              margin: '0.6rem 0 0',
            }}
          >
            Commissions & collaborations
          </h2>
        </motion.div>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {works.map((w, i) => (
            <motion.li
              key={w.title}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr auto',
                gap: '1rem',
                alignItems: 'baseline',
                padding: '1.75rem 0',
                borderBottom: '1px solid var(--border-subtle)',
              }}
            >
              <span
                aria-hidden
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  background: w.tone,
                  boxShadow: `0 0 24px ${w.tone}66`,
                }}
              />
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.35rem',
                    fontWeight: 600,
                    margin: 0,
                    color: 'var(--color-ivory)',
                  }}
                >
                  {w.title}
                </h3>
                <p
                  style={{
                    margin: '0.35rem 0 0',
                    fontSize: '0.88rem',
                    color: 'var(--text-muted-soft)',
                  }}
                >
                  {w.client}
                </p>
              </div>
              <span
                style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.2em',
                  color: 'var(--color-gold)',
                }}
              >
                {w.year}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
