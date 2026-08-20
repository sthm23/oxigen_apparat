'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
        <Sun className="w-5 h-5 text-slate-600" strokeWidth={2} />
      </button>
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 flex items-center justify-center transition-colors"
      aria-label="Переключить тему"
    >
      {theme === 'dark' ? (
        <Moon className="w-5 h-5 text-slate-300" strokeWidth={2} />
      ) : (
        <Sun className="w-5 h-5 text-slate-600" strokeWidth={2} />
      )}
    </button>
  )
}
