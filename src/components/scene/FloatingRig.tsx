import { useRef, type ReactNode } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useScrollContext } from './ScrollContext'

export function FloatingRig({ children }: { children: ReactNode }) {
  const group = useRef<THREE.Group>(null)
  const { progress, scrollY } = useScrollContext()

  useFrame((state) => {
    if (!group.current) return
    const t = state.clock.elapsedTime
    const p = progress

    const arcX = Math.sin(p * Math.PI * 2 + t * 0.06) * 0.62
    const liftY = -0.28 + p * 0.72 + Math.sin(t * 0.28) * 0.1
    const driftZ = Math.cos(p * Math.PI * 1.25) * 0.22
    const parallax = scrollY * 0.00018

    group.current.position.set(arcX, liftY - parallax, driftZ)
    group.current.rotation.z = p * 0.42 - 0.18 + Math.sin(t * 0.2) * 0.04
    group.current.rotation.y = t * 0.06 + p * 0.85

    const bob = 1.05 + Math.sin(p * Math.PI * 2) * 0.12 + Math.sin(t * 0.5) * 0.03
    group.current.scale.setScalar(bob)
  })

  return <group ref={group}>{children}</group>
}
