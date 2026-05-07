import { motion } from 'framer-motion'
import makeup from '../assets/makeup.jpg'
import ready from '../assets/ready.jpg'
import vohti from '../assets/vohti.jpg'
import nailart from '../assets/nailart.jpg'


/** Placeholder gradients stand in for photography — swap for real assets. */
const tiles = [
  { id: 1, label: 'Gilded balayage', image: ready },

  { id: 2, label: 'Glass skin ritual', image: makeup},

  { id: 3, label: ' Silk press', image: 'https://plus.unsplash.com/premium_photo-1669675935927-0ed8935e6600?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },

  { id: 4, label: 'Midnight chrome eye', image: 'https://images.unsplash.com/photo-1677691257001-8bfd91e288ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnJpZGUlMjBtYWtldXB8ZW58MHx8MHx8fDA%3D' },

  { id: 5, label: ' Pearl veil bridal', image: vohti },

  { id: 6, label: ' Velvet rose lip', image: 'https://images.unsplash.com/photo-1651607230650-d8c4d67ef2a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXllJTIwbWFrZXVwfGVufDB8fDB8fHww' },
  
  { id: 7, label: 'Nail Art', image: nailart },
]

export function Gallery() {
  return (
    <section
      id="gallery"
      style={{
        padding: 'clamp(4rem, 10vw, 7rem) clamp(1.25rem, 4vw, 3rem)',
        background: `linear-gradient(180deg, transparent 0%, color-mix(in srgb, var(--color-gold) 6%, transparent) 50%, transparent 100%), var(--section-surface)`,
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '2.5rem' }}
        >
          <p className="section-label">Mood gallery</p>
          <h2
            className="display-xl"
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 3rem)',
              color: 'var(--color-ivory)',
              margin: '0.6rem 0 0',
            }}
          >
            Animated grid — textures in motion
          </h2>
        </motion.div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
            gap: '0.75rem',
          }}
          className="gallery-grid"
        >
          {tiles.map((t, i) => (
            <motion.figure
              key={t.id}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.55,
                delay: i * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
              }}
              style={{
                margin: 0,
                aspectRatio: '3 / 4',
                borderRadius: 2,
                overflow: 'hidden',
                border: '1px solid var(--border-subtle)',
                cursor: 'default',
                position: 'relative',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  background: t.image
                   ? `linear-gradient(to top, rgba(0,0,0,0.4), transparent), url(${t.image}) center/cover no-repeat`
                   : t.hue,
                  position: 'relative',
                }}
              >
                <motion.div
                  style={{
                    position: 'absolute',
                    inset: '-40%',
                    background:
                      'conic-gradient(from 180deg at 50% 50%, transparent 0deg, rgba(255,255,255,0.14) 60deg, transparent 120deg)',
                  }}
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 22 + i * 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </div>
              <figcaption
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: 0,
                  padding: '1rem 0.85rem',
                  background:
                    'linear-gradient(180deg, transparent, color-mix(in srgb, var(--color-page) 88%, transparent))',
                  fontSize: '0.72rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--color-ivory)',
                }}
              >
                {t.label}
              </figcaption>
            </motion.figure>
          ))}
        </div>
        <style>{`
          @media (min-width: 720px) {
            .gallery-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }
          @media (min-width: 1024px) {
            .gallery-grid {
              grid-template-columns: repeat(6, 1fr);
            }
          }
        `}</style>
      </div>
    </section>
  )
}
