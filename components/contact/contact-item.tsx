import type { LucideIcon } from "lucide-react"

interface ContactItemProps {
  icon: LucideIcon
  label: string
  value: string
  href?: string
  isExternal?: boolean
}

export function ContactItem({ icon: Icon, label, value, href, isExternal }: ContactItemProps) {
  return (
    <div className="border-b-2 border-primary/20 pb-4">
      <p className="text-sm font-medium text-slate-800 mb-1">{label}</p>
      <div className="flex items-center gap-2">
        <Icon size={16} className="text-primary" aria-hidden="true" />
        {href ? (
          <a
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="text-slate-900 hover:text-primary transition-colors"
          >
            {value}
          </a>
        ) : (
          <p className="text-slate-900">{value}</p>
        )}
      </div>
    </div>
  )
}

