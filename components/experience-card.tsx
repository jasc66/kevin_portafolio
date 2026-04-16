"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { Briefcase, Calendar } from "lucide-react"

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
  const cardRef = useRef<HTMLDivElement>(null)
  const isVisible = useInView(cardRef, { once: true, margin: "-60px" })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative group"
    >
      {/* Timeline accent - left bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full overflow-hidden" aria-hidden="true">
        <motion.div
          className={`h-full w-full ${bgColor} opacity-90`}
          initial={{ scaleY: 0 }}
          animate={isVisible ? { scaleY: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
        />
      </div>

      <div className="pl-5 card shadow-md rounded-xl overflow-hidden bg-slate-900 hover:shadow-xl transition-shadow duration-300">
        {/* Background gradient overlay */}
        <div className={`absolute top-0 left-0 h-full w-full ${bgColor} opacity-50`} aria-hidden="true" />
        {/* Large icon watermark */}
        <div className="absolute top-8 right-6 text-7xl opacity-10 select-none pointer-events-none transition-all duration-300 group-hover:opacity-15 group-hover:scale-110 group-hover:-rotate-6" aria-hidden="true">
          {icon}
        </div>

        <div className="relative z-10 p-6">
          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
            <div>
              <h3 className="text-xl font-bold text-white leading-tight">{title}</h3>
              <div className="flex items-center gap-1.5 mt-1">
                <Briefcase size={13} className="text-white/60" aria-hidden="true" />
                <p className="text-sm text-white/80 font-medium">{company}</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 shrink-0 self-start sm:self-center px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
              <Calendar size={12} className="text-white/70" aria-hidden="true" />
              <span className="text-xs font-semibold text-white/90 whitespace-nowrap">{period}</span>
            </div>
          </div>

          {/* Focus */}
          <div className="flex items-start gap-2 mb-5 p-3 rounded-lg bg-white/5 border border-white/10">
            <span className="text-white/50 text-xs font-semibold uppercase tracking-wider mt-0.5 shrink-0">Focus</span>
            <p className="text-sm text-white/85 leading-relaxed">{focus}</p>
          </div>

          {/* Responsibilities */}
          <ul className="space-y-3">
            {responsibilities.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.35, delay: 0.25 + index * 0.07, ease: "easeOut" }}
                className="flex items-start gap-3 group/item"
              >
                <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-white/40 group-hover/item:bg-white/80 transition-colors duration-200" aria-hidden="true" />
                <p className="text-sm text-white/85 leading-relaxed">
                  <span className="font-semibold text-white">{item.title}:</span>{" "}
                  {item.description}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}
