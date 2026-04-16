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
    <div className="group flex items-center gap-4 p-3 rounded-xl hover:bg-primary/5 transition-colors duration-200">
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
        <Icon size={18} className="text-primary" aria-hidden="true" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">{label}</p>
        {href ? (
          <a
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="text-sm font-medium text-slate-800 hover:text-primary transition-colors duration-200 truncate block"
          >
            {value}
          </a>
        ) : (
          <p className="text-sm font-medium text-slate-800 truncate">{value}</p>
        )}
      </div>
    </div>
  )
}
