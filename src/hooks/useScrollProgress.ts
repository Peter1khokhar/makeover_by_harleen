import { useEffect, useState } from 'react'

export function useScrollProgress() {
  const [y, setY] = useState(0)
  const [maxY, setMaxY] = useState(1)

  useEffect(() => {
    const onScroll = () => {
      setY(window.scrollY)
      setMaxY(
        Math.max(1, document.documentElement.scrollHeight - window.innerHeight),
      )
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const progress = maxY > 0 ? y / maxY : 0
  return { scrollY: y, progress, maxScroll: maxY }
}
