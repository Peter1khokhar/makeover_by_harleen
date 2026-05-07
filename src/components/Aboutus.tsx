import { motion } from 'framer-motion'
import bride from '../assets/bride.jpg'
import facemask from '../assets/facemask.jpg'
import tools from '../assets/tools.jpg'

export function About() {
  return (
    <section
      id="about"
      style={{
        padding: 'clamp(1rem, 10vw, 7rem) 1.5rem',
        fontFamily:'Cormorant Garamond, Georgia, serif'
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '10.5rem',
          alignItems: 'center',
        }}
      >

        {/* LEFT IMAGES */}
        <div style={{ position: 'relative', minHeight: '400px' }}>

          {/* IMAGE 1 */}
          <motion.img
            src={facemask}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            style={imgStyle}
          />

          {/* IMAGE 2 */}
          <motion.img
            src={bride}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            style={{
              ...imgStyle,
              position: 'absolute',
              top: '20%',
              left: '55%',
              width: '60%',
              zIndex: 2,
            }}
          />

          {/* IMAGE 3 */}
          <motion.img
            src={tools}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={{
              ...imgStyle,
              position: 'absolute',
              bottom: '-15%',
              left: '10%',
              width: '55%',
              zIndex: 3,
            }}
          />
        </div>

        {/* RIGHT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">About us</p>

          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: 'var(--color-ivory)',
              margin: '0.5rem 0 1rem',
            }}
          >
            Crafting beauty with passion & precision
          </h2>

          <p
            style={{
              color: 'var(--text-muted)',
              lineHeight: 1.7,
              fontSize: '0.95rem',
              marginBottom: '1rem',
            }}
          >
            At our salon, beauty is not just a service — it's an experience.
            From personalized consultations to premium treatments, we focus
            on enhancing your natural elegance.
          </p>

          <p
            style={{
              color: 'var(--text-muted)',
              lineHeight: 1.7,
              fontSize: '0.95rem',
            }}
          >
            Our expert team blends creativity with modern techniques to
            deliver flawless results. Whether it's a simple makeover or a
            luxurious transformation, we ensure every detail is perfect.
          </p>

          {/* BUTTON */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            style={{
              marginTop: '1.5rem',
              padding: '0.8rem 1.5rem',
              background: 'var(--color-gold)',
              border: 'none',
              cursor: 'pointer',
              color: '#000',
              letterSpacing: '0.1em',
              fontWeight: 600,
            }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

const imgStyle = {
  width: '70%',
  borderRadius: 5,
  border: '1px solid var(--color-gold)', // 👈 theme border
  objectFit: 'cover' as const,
}