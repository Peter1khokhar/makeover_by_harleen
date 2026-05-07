import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, ContactShadows } from '@react-three/drei'
import type { ThemeMode } from '../../context/ThemeContext'
import { MakeupBrush } from './MakeupBrush'
import { MagicPowder } from './MagicPowder'
import { ScrollProvider } from './ScrollContext'
import { FloatingRig } from './FloatingRig'

type Props = {
  scrollY: number
  progress: number
  theme: ThemeMode
}

function Scene({ theme }: { theme: ThemeMode }) {
  const isLight = theme === 'light'

  return (
    <>
      <ambientLight intensity={isLight ? 0.55 : 0.32} />
      <spotLight
        position={[4, 6, 4]}
        angle={0.45}
        penumbra={0.9}
        intensity={isLight ? 1.85 : 2.35}
        color={isLight ? '#fff5e6' : '#ffe8c8'}
        castShadow
      />
      <spotLight
        position={[-3, 2, -2]}
        angle={0.5}
        penumbra={1}
        intensity={isLight ? 0.55 : 0.85}
        color={isLight ? '#c9a962' : '#c9a962'}
      />
      <directionalLight
        position={[-2, 4, 2]}
        intensity={isLight ? 0.65 : 0.4}
        color={isLight ? '#ffffff' : '#e8dcc4'}
      />
      <hemisphereLight
        args={[isLight ? '#f5efe6' : '#e8dcc4', isLight ? '#8a7a6a' : '#1a1410', isLight ? 0.35 : 0.2]}
      />
      <FloatingRig>
        <MakeupBrush theme={theme} />
        <MagicPowder theme={theme} />
        <ContactShadows
          position={[0, -1.85, 0]}
          opacity={isLight ? 0.28 : 0.45}
          scale={12}
          blur={2.8}
          far={5}
          color={isLight ? '#5c4a3a' : '#000000'}
        />
      </FloatingRig>
      <Environment preset={isLight ? 'apartment' : 'city'} />
    </>
  )
}

export function BrushCanvas({ scrollY, progress, theme }: Props) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        minHeight: '100vh',
      }}
    >
      <Canvas
        shadows
        camera={{ position: [0, 0.15, 4.35], fov: 36 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ScrollProvider value={{ scrollY, progress }}>
          <Suspense fallback={null}>
            <Scene theme={theme} />
          </Suspense>
        </ScrollProvider>
      </Canvas>
    </div>
  )
}
