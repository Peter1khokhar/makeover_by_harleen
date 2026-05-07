import { SALON_NAME, SALON_ADDRESS } from '../config'

export function Footer() {
  return (
    <footer
      style={{
        position: 'relative',
        zIndex: 2,
        padding: 'clamp(3rem, 8vw, 5rem) clamp(1.25rem, 4vw, 3rem) 2rem',
        overflow: 'hidden',
        color: 'var(--text-muted)',
        borderTop: '1px solid var(--border-subtle)',
        background: 'var(--section-surface-strong)',
      }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(180deg, color-mix(in srgb, var(--color-page) 92%, transparent) 0%, color-mix(in srgb, var(--color-page) 78%, transparent) 100%),
            url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E")
          `,
          backgroundSize: 'auto, 180px 180px',
          mixBlendMode: 'normal',
          opacity: 1,
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: `repeating-linear-gradient(90deg, transparent, transparent 2px, color-mix(in srgb, var(--color-gold) 8%, transparent) 2px, color-mix(in srgb, var(--color-gold) 8%, transparent) 4px), repeating-linear-gradient(0deg, transparent, transparent 2px, color-mix(in srgb, var(--color-gold) 5%, transparent) 2px, color-mix(in srgb, var(--color-gold) 5%, transparent) 4px)`,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gap: '2rem',
          gridTemplateColumns: '1fr',
        }}
        className="footer-grid"
      >
        <div>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem',
              color: 'var(--color-ivory)',
              margin: '0 0 0.5rem',
            }}
          >
            {SALON_NAME}
          </p>
          <p style={{ margin: 0, fontSize: '0.88rem', maxWidth: 320 }}>{SALON_ADDRESS}</p>
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.25rem 2rem',
            fontSize: '0.72rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
          }}
        >
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#works">Work</a>
          <a href="#contact">Contact</a>
          <a href="#book">Book</a>
        </div>
        <p
          style={{
            margin: 0,
            fontSize: '0.78rem',
            opacity: 0.55,
            letterSpacing: '0.06em',
          }}
        >
          © {new Date().getFullYear()} {SALON_NAME}. Crafted for demonstration — replace copy and imagery with your brand.
        </p>
        <style>{`
          @media (min-width: 720px) {
            .footer-grid {
              grid-template-columns: 1fr 1fr;
              align-items: start;
            }
            .footer-grid > p:last-child {
              grid-column: 1 / -1;
            }
          }
        `}</style>
      </div>
    </footer>
  )
}
