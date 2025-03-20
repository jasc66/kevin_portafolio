"use client"

import { useEffect, useCallback } from "react"

export default function SectionTransition() {
  // Memoize the isInViewport function to avoid recreating it on each render
  const isInViewport = useCallback((element: Element) => {
    const rect = element.getBoundingClientRect()
    return rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75 && rect.bottom >= 0
  }, [])

  // Optimize the handleScroll function
  const handleScroll = useCallback(() => {
    const sections = document.querySelectorAll("section")

    requestAnimationFrame(() => {
      sections.forEach((section) => {
        if (isInViewport(section) && !section.classList.contains("section-visible")) {
          // Add visible class
          section.classList.add("section-visible")
        }
      })
    })
  }, [isInViewport])

  useEffect(() => {
    // Add initial classes to all sections
    const sections = document.querySelectorAll("section")
    sections.forEach((section) => {
      section.classList.add("section-hidden")
    })

    // Use passive event listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true })

    // Trigger once on load for elements already in viewport
    setTimeout(handleScroll, 100)

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  return null
}

