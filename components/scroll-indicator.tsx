"use client"

import { useEffect, useState } from "react"

export default function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      // Calculate how far down the page the user has scrolled
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight - windowHeight
      const scrollTop = window.scrollY

      // Calculate scroll percentage
      const scrollPercentage = (scrollTop / documentHeight) * 100
      setScrollProgress(scrollPercentage)
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Initial calculation
    handleScroll()

    // Clean up event listener
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50">
      <div
        className="h-full bg-gradient-to-r from-primary via-blue-400 to-teal-400 transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}

