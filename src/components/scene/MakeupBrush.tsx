import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import type { Group, Mesh } from 'three'
import type { ThemeMode } from '../../context/ThemeContext'

export function MakeupBrush({ theme }: { theme: ThemeMode }) {
  const group = useRef<Group>(null)
  const bristle = useRef<Mesh>(null)
  const isLight = theme === 'light'

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (!group.current) return

    group.current.rotation.z = Math.sin(t * 0.38) * 0.11
    group.current.rotation.x = 0.12 + Math.sin(t * 0.22) * 0.05

    if (bristle.current) {
      bristle.current.scale.setScalar(1 + Math.sin(t * 1.15) * 0.02)
    }
  })

  const handleColor = isLight ? '#2c2420' : '#1a0f0c'
  const bristleColor = isLight ? '#5c4336' : '#4a3428'
  const tipColor = isLight ? '#7a5c4a' : '#6b4e3d'

  return (
    <group ref={group} scale={1.35} position={[0.05, -0.05, 0]}>
      <mesh position={[0, -1.35, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.065, 0.09, 1.35, 48]} />
        <meshStandardMaterial
          color={handleColor}
          metalness={isLight ? 0.35 : 0.45}
          roughness={0.38}
        />
      </mesh>
      <mesh position={[0, -0.58, 0]} castShadow>
        <torusGeometry args={[0.095, 0.012, 12, 48]} />
        <meshStandardMaterial
          color="#c9a962"
          metalness={0.95}
          roughness={0.18}
        />
      </mesh>
      <mesh position={[0, -0.42, 0]} castShadow>
        <cylinderGeometry args={[0.13, 0.11, 0.28, 48]} />
        <meshStandardMaterial
          color="#b8a06e"
          metalness={0.92}
          roughness={0.22}
        />
      </mesh>
      <mesh
        ref={bristle}
        position={[0, -0.22, 0]}
        rotation={[Math.PI, 0, 0]}
        castShadow
      >
        <coneGeometry args={[0.22, 0.42, 48]} />
        <meshStandardMaterial
          color={bristleColor}
          roughness={0.92}
          metalness={0.05}
        />
      </mesh>
      <mesh position={[0, -0.05, 0]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[0.12, 0.22, 32]} />
        <meshStandardMaterial
          color={tipColor}
          roughness={0.88}
          transparent
          opacity={0.72}
        />
      </mesh>
    </group>
  )
}
