import { memo } from "react"
import { Progress } from "@/components/ui/progress"

interface SkillBarProps {
  name: string
  percentage: number
}

const SkillBar = memo(function SkillBar({ name, percentage }: SkillBarProps) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="font-medium text-slate-900">{name}</span>
        <span className="text-sm text-slate-800">{percentage}%</span>
      </div>
      <Progress value={percentage} className="h-2 progress-value" aria-label={`${name} skill level: ${percentage}%`} />
    </div>
  )
})

export default SkillBar

