"use client"

import { useEffect } from "react"

export default function ScrollToSection() {
  useEffect(() => {
    // Function to handle smooth scrolling with offset
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      // Check if the clicked element is an anchor tag with a hash
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        const href = target.getAttribute("href") as string

        // Skip if it's just '#'
        if (href === "#") return

        e.preventDefault()

        const targetId = href.replace("#", "")
        const targetElement = document.getElementById(targetId)

        if (targetElement) {
          // Get the height of the fixed header
          const headerHeight = document.querySelector("header")?.offsetHeight || 0

          // Calculate the position to scroll to (with offset for the header)
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight - 20

          // Scroll to the target position
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          })

          // Update URL without scrolling
          history.pushState(null, "", href)
        }
      }
    }

    // Add event listener to document
    document.addEventListener("click", handleSmoothScroll)

    // Clean up event listener
    return () => {
      document.removeEventListener("click", handleSmoothScroll)
    }
  }, [])

  return null
}

