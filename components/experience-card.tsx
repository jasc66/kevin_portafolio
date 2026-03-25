"use client"

import { useState, useEffect, useRef } from "react"

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
      className={`card shadow-lg rounded-xl relative overflow-hidden transition-all duration-300 hover:shadow-xl bg-slate-900`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.5s ease-out, transform 0.5s ease-out, box-shadow 0.3s ease",
        willChange: "transform, opacity",
      }}
    >
      {/* Background gradient overlay */}
      <div className={`absolute top-0 left-0 h-full w-full ${bgColor} opacity-60`} aria-hidden="true"></div>

      {/* Icon */}
      <div className="absolute top-12 right-8 text-6xl opacity-20" aria-hidden="true">{icon}</div>

      {/* Content */}
      <div className="relative z-10 p-6">
        <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
          <div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-lg text-white">{company}</p>
          </div>
          <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-slate-700 text-white">
            {period}
          </span>
        </div>

        <p className="text-sm text-white mb-4 border-l-2 border-white/50 pl-3">Focus: {focus}</p>

        <ul className="space-y-3 list-none">
          {responsibilities.map((item, index) => (
            <li
              key={index}
              className="text-white pl-3 border-l-2 border-slate-400 hover:border-white transition-colors"
            >
              <span className="font-medium text-white">{item.title}:</span> {item.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

