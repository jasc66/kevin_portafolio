"use client"

import { memo, useRef, useState } from "react"
import { Star } from "lucide-react"
import { motion, useInView } from "motion/react"

interface ProjectCardProps {
  title: string
  subtitle: string
  description: string
  rating: number
  tags: string[]
  bgColor: string
  icon: string
}

const ProjectCard = memo(function ProjectCard({
  title,
  subtitle,
  description,
  rating,
  tags,
  bgColor,
  icon,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isVisible = useInView(cardRef, { once: true, margin: "100px" })
  const [isHovered, setIsHovered] = useState(false)

  const stars = Array(5)
    .fill(0)
    .map((_, i) => (
      <Star key={i} size={15} className="text-yellow-300" fill={i < rating ? "currentColor" : "none"} />
    ))

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="card shadow-lg h-[400px] w-full group rounded-xl relative flex justify-end flex-col p-6 z-[1] overflow-hidden bg-slate-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background gradient */}
      <div className={`absolute top-0 left-0 h-full w-full ${bgColor} opacity-55 transition-opacity duration-500 group-hover:opacity-70`} aria-hidden="true" />
      {/* Dark overlay gradient - stronger at bottom for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" aria-hidden="true" />

      {/* Icon watermark */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl opacity-15 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500 select-none pointer-events-none"
        aria-hidden="true"
      >
        {icon}
      </div>

      {/* Content */}
      <div className="relative z-[2] flex flex-col gap-3">
        <div>
          <h3 className="text-xl font-bold text-white tracking-tight leading-tight">{title}</h3>
          <p className="text-sm text-white/80 mt-0.5">{subtitle}</p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5" aria-label={`Rating: ${rating} out of 5 stars`}>{stars}</div>
          <span className="text-xs text-white/60">{rating}/5</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-0.5 rounded-md text-white text-xs font-medium border border-white/30 bg-white/5 hover:bg-white/15 hover:border-white/60 transition-colors duration-200 cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description - appears on card hover */}
        <motion.div
          className="overflow-hidden"
          animate={{ height: isHovered ? "auto" : 0, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          <p className="text-sm text-white/80 font-light leading-relaxed pt-1">{description}</p>
        </motion.div>
      </div>
    </motion.div>
  )
})

export default ProjectCard
