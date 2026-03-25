import { memo } from "react"
import { Progress } from "@/components/ui/progress"

interface SkillBarProps {
  name: string
  percentage: number
}

// ===== ACCESSIBILITY_TEST_ERRORS_START =====
// ERROR #6: se eliminó aria-label del <Progress> (criterio 4.1.2 / 1.3.1)
//           La barra de progreso ya no tiene nombre accesible para lectores de pantalla
// ===== ACCESSIBILITY_TEST_ERRORS_START =====
const SkillBar = memo(function SkillBar({ name, percentage }: SkillBarProps) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="font-medium text-slate-900">{name}</span>
        <span className="text-sm text-slate-800">{percentage}%</span>
      </div>
      {/* ERROR #6: sin aria-label */}
      <Progress value={percentage} className="h-2 progress-value" />
    </div>
  )
})
// ===== ACCESSIBILITY_TEST_ERRORS_END =====

export default SkillBar

