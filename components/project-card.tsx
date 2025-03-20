"use client"

import { useState, useEffect, useRef, memo } from "react"
import { Star } from "lucide-react"

interface ProjectCardProps {
  title: string
  subtitle: string
  description: string
  rating: number
  tags: string[]
  bgColor: string
  icon: string
}

// Use memo to prevent unnecessary re-renders
const ProjectCard = memo(function ProjectCard({
  title,
  subtitle,
  description,
  rating,
  tags,
  bgColor,
  icon,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Use IntersectionObserver for better performance
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: "100px" },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  // Memoize the stars to avoid recreating them on each render
  const stars = Array(5)
    .fill(0)
    .map((_, i) => <Star key={i} size={16} className="text-white" fill={i < rating ? "white" : "none"} />)

  return (
    <div
      ref={cardRef}
      className={`card shadow-lg h-[400px] w-full group gap-[0.5em] rounded-xl relative flex justify-end flex-col p-6 z-[1] overflow-hidden transition-all duration-300 hover:shadow-xl`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.5s ease-out, transform 0.5s ease-out, box-shadow 0.3s ease",
      }}
    >
      {/* Background */}
      <div className={`absolute top-0 left-0 h-full w-full ${bgColor}`}></div>
      {/* Dark overlay for better text contrast */}
      <div className="absolute top-0 left-0 h-full w-full bg-black/50"></div>

      {/* Icon */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl opacity-20 group-hover:opacity-10 transition-opacity duration-300">
        {icon}
      </div>

      {/* Content Container */}
      <div className="container text-white z-[2] relative flex flex-col gap-3">
        <div className="h-fit w-full">
          <h3 className="text-2xl tracking-wider font-bold text-white">{title}</h3>
          <p className="text-lg text-white/90">{subtitle}</p>
        </div>

        {/* Rating */}
        <div className="flex justify-left items-center h-fit w-full gap-4">
          <div className="w-fit h-fit flex justify-left gap-1">{stars}</div>
          <div className="w-fit h-fit text-white text-sm font-light">
            <p>{rating}/5</p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap justify-start items-center h-fit w-fit gap-2">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="border border-white rounded-md text-white text-xs font-normal px-2 py-1 hover:bg-white hover:text-gray-900 transition-colors duration-300 cursor-pointer"
            >
              <p>{tag}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Description - appears on hover */}
      <div
        className="relative overflow-hidden transition-all duration-500"
        style={{
          height: isHovered ? "6rem" : "0",
          marginTop: isHovered ? "0.75rem" : "0",
        }}
      >
        <p className="text-white/90 font-light">{description}</p>
      </div>
    </div>
  )
})

export default ProjectCard

