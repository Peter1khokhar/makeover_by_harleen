import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import type { ThemeMode } from '../../context/ThemeContext'
import { useScrollContext } from './ScrollContext'

const COUNT = 1200

const POWDER: Record<ThemeMode, { color: string; opacity: number; size: number }> = {
  dark: { color: '#f0e6d2', opacity: 0.85, size: 0.035 },
  light: { color: '#c9a962', opacity: 0.55, size: 0.032 },
}

export function MagicPowder({ theme }: { theme: ThemeMode }) {
  const points = useRef<THREE.Points>(null)
  const { scrollY, progress } = useScrollContext()
  const powder = POWDER[theme]

  const { positions, baseY, phases } = useMemo(() => {
    const pos = new Float32Array(COUNT * 3)
    const by = new Float32Array(COUNT)
    const ph = new Float32Array(COUNT)
    for (let i = 0; i < COUNT; i++) {
      const r = 2.2 + Math.random() * 2.8
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      const y = r * Math.sin(phi) * Math.sin(theta) * 0.6 + 0.4
      pos[i * 3 + 1] = y
      pos[i * 3 + 2] = r * Math.cos(phi) * 0.5
      by[i] = y
      ph[i] = Math.random() * Math.PI * 2
    }
    return { positions: pos, baseY: by, phases: ph }
  }, [])

  useFrame((state) => {
    if (!points.current) return
    const t = state.clock.elapsedTime
    const scrollBoost = scrollY * 0.00035

    points.current.rotation.y = t * 0.04 + progress * 0.8
    points.current.rotation.x =
      Math.sin(t * 0.12 + progress * 2) * 0.08 + scrollBoost * 0.15
    points.current.position.y =
      Math.sin(t * 0.2) * 0.05 - scrollY * 0.00012

    const geo = points.current.geometry
    const arr = geo.attributes.position.array as Float32Array
    for (let i = 0; i < COUNT; i++) {
      const ix = i * 3
      const phase = phases[i]!
      const wobble =
        Math.sin(t * 0.8 + phase) * 0.012 +
        Math.cos(t * 0.5 + scrollY * 0.003 + phase) * 0.018
      arr[ix + 1] = baseY[i]! + wobble + progress * 0.35
    }
    geo.attributes.position.needsUpdate = true
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={COUNT}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        key={theme}
        size={powder.size}
        color={powder.color}
        transparent
        opacity={powder.opacity}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  )
}
