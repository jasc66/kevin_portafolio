"use client"

import { memo, useRef } from "react"
import { motion, useInView } from "motion/react"

interface SkillBarProps {
  name: string
  percentage: number
}

const SkillBar = memo(function SkillBar({ name, percentage }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useInView(ref, { once: true, margin: "-40px" })

  return (
    <div ref={ref}>
      <div className="flex justify-between mb-2">
        <span className="font-medium text-slate-900 text-sm">{name}</span>
        <motion.span
          className="text-sm font-semibold text-primary"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          {percentage}%
        </motion.span>
      </div>
      <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden" role="progressbar" aria-valuenow={percentage} aria-valuemin={0} aria-valuemax={100} aria-label={`${name}: ${percentage}%`}>
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-blue-400"
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${percentage}%` } : {}}
          transition={{ duration: 1, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>
    </div>
  )
})

export default SkillBar
