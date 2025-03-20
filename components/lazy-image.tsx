"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface LazyImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  priority?: boolean
  sizes?: string
}

export default function LazyImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className = "",
  priority = false,
  sizes = "100vw",
}: LazyImageProps) {
  const [isInView, setIsInView] = useState(false)
  const uniqueId = src.replace(/[^a-zA-Z0-9]/g, "")

  useEffect(() => {
    if (priority) {
      setIsInView(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: "200px" },
    )

    const element = document.getElementById(`lazy-img-${uniqueId}`)
    if (element) {
      observer.observe(element)
    }

    return () => {
      observer.disconnect()
    }
  }, [priority, uniqueId])

  return (
    <div
      id={`lazy-img-${uniqueId}`}
      className={`${className} relative`}
      style={fill ? { width: "100%", height: "100%" } : { width, height }}
    >
      {(isInView || priority) && (
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill={fill}
          width={!fill ? width : undefined}
          height={!fill ? height : undefined}
          loading={priority ? "eager" : "lazy"}
          sizes={sizes}
          className={className}
        />
      )}
    </div>
  )
}

