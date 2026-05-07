import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

export type ThemeMode = 'dark' | 'light'

const STORAGE_KEY = 'lumiere-theme'

type Ctx = {
  theme: ThemeMode
  toggleTheme: () => void
  setTheme: (t: ThemeMode) => void
}

const ThemeContext = createContext<Ctx | null>(null)

function readInitialTheme(): ThemeMode {
  if (typeof window === 'undefined') return 'dark'
  const saved = localStorage.getItem(STORAGE_KEY) as ThemeMode | null
  if (saved === 'light' || saved === 'dark') return saved
  return window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark'
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>(readInitialTheme)

  const setTheme = useCallback((t: ThemeMode) => {
    setThemeState(t)
  }, [])

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
