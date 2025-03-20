"use client"

import { useState, useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"

interface ExperienceCardProps {
  title: string
  company: string
  period: string
  focus: string
  responsibilities: Array<{
    title: string
    description: string
  }>
  bgColor: string
  icon: string
}

export default function ExperienceCard({
  title,
  company,
  period,
  focus,
  responsibilities,
  bgColor,
  icon,
}: ExperienceCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.disconnect()
      }
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className={`card shadow-lg rounded-xl relative overflow-hidden transition-all duration-300 hover:shadow-xl`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.5s ease-out, transform 0.5s ease-out, box-shadow 0.3s ease",
        willChange: "transform, opacity",
      }}
    >
      {/* Background */}
      <div className={`absolute top-0 left-0 h-full w-full ${bgColor}`}></div>
      {/* Dark overlay for better text contrast - increased opacity */}
      <div className="absolute top-0 left-0 h-full w-full bg-black/40"></div>

      {/* Icon */}
      <div className="absolute top-12 right-8 text-6xl opacity-20">{icon}</div>

      {/* Content */}
      <div className="relative z-10 p-6">
        <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
          <div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-lg text-white/90">{company}</p>
          </div>
          <Badge className="bg-white/20 hover:bg-white/30 text-white">{period}</Badge>
        </div>

        <p className="text-sm text-white/90 mb-4 border-l-2 border-white/50 pl-3">Focus: {focus}</p>

        <ul className="space-y-3 list-none">
          {responsibilities.map((item, index) => (
            <li
              key={index}
              className="text-white pl-3 border-l-2 border-white/30 hover:border-white/80 transition-colors"
            >
              <span className="font-medium text-white">{item.title}:</span> {item.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

