"use client"

import { useState, useEffect, useRef } from "react"
import type { EducationItem } from "@/data/education"
import type { CertificationItem } from "@/data/certifications"

interface EducationCardProps {
  type: "education" | "certification"
  items: EducationItem[] | CertificationItem[]
  bgColor: string
  icon: string
}

export default function EducationCard({ type, items, bgColor, icon }: EducationCardProps) {
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
      {/* Dark overlay for better text contrast - INCREASED OPACITY */}
      <div className="absolute top-0 left-0 h-full w-full bg-black/70"></div>

      {/* Icon */}
      <div className="absolute top-12 right-8 text-6xl opacity-20">{icon}</div>

      {/* Content */}
      <div className="relative z-10 p-6">
        <h3 className="text-xl font-bold text-white mb-6">{type === "education" ? "Education" : "Certifications"}</h3>

        <div className="space-y-6">
          {type === "education"
            ? (items as EducationItem[]).map((item) => (
                <div key={item.id} className="border-l-2 border-white/70 pl-4 hover:border-white transition-colors">
                  <h4 className="font-medium text-lg text-white">{item.title}</h4>
                  <p className="text-white">{item.institution}</p>
                  {item.location && <p className="text-white/90 text-sm">{item.location}</p>}
                  {item.period && <p className="text-white/90 text-sm">{item.period}</p>}
                </div>
              ))
            : (items as CertificationItem[]).map((item) => (
                <div key={item.id} className="border-l-2 border-white/70 pl-4 hover:border-white transition-colors">
                  <h4 className="font-medium text-lg text-white">{item.title}</h4>
                  <p className="text-white">{item.issuer}</p>
                  {item.details && <p className="text-white/90 text-sm">{item.details}</p>}
                </div>
              ))}
        </div>
      </div>
    </div>
  )
}

