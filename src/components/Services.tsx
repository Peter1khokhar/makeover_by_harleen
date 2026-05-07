import { motion } from 'framer-motion'

const services = [
  {
    title: 'Bespoke colour',
    desc: 'Hand-painted highlights, glossing toners, and seamless blends tailored to your skin and wardrobe.',
    detail: 'From 120 min',
    image : 'https://images.unsplash.com/photo-1709477542157-9c9249ca2cb6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Skin atelier',
    desc: 'Luminous facials, micro-current sculpting, and slow rituals using rare botanical actives.',
    detail: 'From 75 min',
    image : 'https://plus.unsplash.com/premium_photo-1703483854271-44b6a1de388a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZXllJTIwbGFzaGVzfGVufDB8fDB8fHww'
  },
  {
    title: 'Editorial makeup',
    desc: 'Soft-focus evening looks, bridal couture, and camera-ready finishing with airbrush depth.',
    detail: 'From 90 min',
    image: ' https://images.unsplash.com/photo-1611826585949-b0ccabd2c1a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1ha2V1cHxlbnwwfHwwfHx8MA%3D%3D '
    
  },
  {
    title: 'Hair couture',
    desc: 'Precision cuts, silk presses, and extension artistry with invisible integration.',
    detail: 'From 60 min',
    image: 'https://images.unsplash.com/photo-1717160675643-53a7a2ebaa9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhhaXIlMjBjYXJlfGVufDB8fDB8fHww'
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
}

export function Services() {
  return (
    <section
      id="services"
      style={{
        padding: 'clamp(4rem, 10vw, 7rem) clamp(1.25rem, 4vw, 3rem)',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '3rem', textAlign: 'center' }}
        >
          <p className="section-label">Signature rituals</p>
          <h2
            className="display-xl"
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
              color: 'var(--color-ivory)',
              margin: '0.75rem 0 0',
            }}
          >
            Services composed like fragrance notes
          </h2>
          <p
          style={{
            maxWidth: 560,
            margin: '1rem auto 0',
            color: 'var(--text-muted)',
            fontWeight: 300,
          }}
          >
            Each appointment begins with tea, a mood board, and a calm consultation — then we build
            your look layer by layer.
          </p>
        </motion.div>
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {services.map((s) => (
            <motion.li
  key={s.title}
  variants={item}
  initial="hidden"
  animate="show"
  whileHover="hover"
  style={{
    borderRadius: 10,
    overflow: 'hidden',
    background: 'var(--card-bg)',
    border: '1px solid var(--border-subtle)',
    position: 'relative',
  }}
>
  {/* IMAGE */}
  <motion.div
    variants={{
      hover: { scale: 1.1 }
    }}
    transition={{ duration: 0.5 }}
    style={{
      height: '200px',
      background: `url(${s.image}) center/cover no-repeat`,
    }}
  />

  {/* CONTENT */}
  <motion.div
    variants={{
      hover: { y: -10 }
    }}
    transition={{ duration: 0.4 }}
    style={{
      padding: '1.5rem',
      position: 'relative',
      zIndex: 2,
    }}
  >
    <h3
      style={{
        margin: '0 0 0.5rem',
        color: 'var(--color-ivory)',
        fontSize: '1.4rem',
      }}
    >
      {s.title}
    </h3>

    <p
      style={{
        fontSize: '0.9rem',
        color: 'var(--text-muted)',
        marginBottom: '1rem',
        lineHeight: 1.6,
      }}
    >
      {s.desc}
    </p>

    <span
      style={{
        fontSize: '0.7rem',
        color: 'var(--color-gold)',
        display: 'block',
        marginBottom: '1rem',
        letterSpacing: '0.15em',
      }}
    >
      {s.detail}
    </span>

    {/* BUTTON */}
    <motion.button
      whileHover={{
        backgroundColor: 'var(--color-gold)',
        color: '#000',
        scale: 1.05
      }}
      transition={{ duration: 0.3 }}
      style={{
        padding: '0.5rem 1.2rem',
        border: '1px solid var(--color-gold)',
        background: 'transparent',
        color: 'var(--color-gold)',
        fontSize: '0.7rem',
        letterSpacing: '0.15em',
        cursor: 'pointer',
      }}
    >
      Book Now
    </motion.button>
  </motion.div>

  {/* HOVER OVERLAY */}
  <motion.div
    variants={{
      hover: { opacity: 1 }
    }}
    initial={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
    style={{
      position: 'absolute',
      inset: 0,
      background:
        'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
      pointerEvents: 'none',
    }}
  />
</motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
