"use client"

import { useEffect, useRef } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { trackPageView } from "@/lib/analytics"

export default function PageViewTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const previousPathRef = useRef<string | null>(null)

  useEffect(() => {
    // Construir la URL completa
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "")

    // Evitar duplicados si la URL no ha cambiado
    if (url !== previousPathRef.current) {
      trackPageView(url)
      previousPathRef.current = url
    }
  }, [pathname, searchParams])

  return null
}

