import { lazy, Suspense } from 'react'
import { useTheme } from '../context/ThemeContext'

const BrushCanvas = lazy(() =>
  import('./scene/BrushCanvas').then((m) => ({ default: m.BrushCanvas })),
)

type Props = {
  scrollY: number
  progress: number
}

export function FloatingBrush({ scrollY, progress }: Props) {
  const { theme } = useTheme()

  return (
    <div className="floating-brush-layer" aria-hidden>
      <Suspense fallback={null}>
        <BrushCanvas scrollY={scrollY} progress={progress} theme={theme} />
      </Suspense>
    </div>
  )
}
