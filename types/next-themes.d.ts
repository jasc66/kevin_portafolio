"use client"

declare module "next-themes" {
  import type { ReactNode } from "react"

  export interface ThemeProviderProps {
    attribute?: string
    defaultTheme?: string
    enableSystem?: boolean
    disableTransitionOnChange?: boolean
    value?: {
      dark: string
      light: string
      system: string
    }
    children?: ReactNode
    themes?: string[]
    forcedTheme?: string
    enableColorScheme?: boolean
    storageKey?: string
  }

  export function ThemeProvider(props: ThemeProviderProps): JSX.Element

  export function useTheme(): {
    theme: string | undefined
    setTheme: (theme: string) => void
    resolvedTheme: string | undefined
    themes: string[]
    systemTheme: "dark" | "light" | undefined
  }
}

