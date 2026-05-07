import { createContext, useContext, type ReactNode } from 'react'

type ScrollCtx = { scrollY: number; progress: number }

const Ctx = createContext<ScrollCtx>({ scrollY: 0, progress: 0 })

export function ScrollProvider({
  value,
  children,
}: {
  value: ScrollCtx
  children: ReactNode
}) {
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useScrollContext() {
  return useContext(Ctx)
}
