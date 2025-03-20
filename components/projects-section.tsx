"use client"

import { useState } from "react"
import ProjectCard from "./project-card"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

// Project data
const initialProjects = [
  {
    id: 1,
    title: "FINANCIAL REPORTING DASHBOARD",
    subtitle: "Power BI & Oracle PL/SQL",
    description:
      "Developed comprehensive financial reporting dashboards for electronic payment channels, integrating data from multiple sources and providing real-time insights for decision makers.",
    rating: 5,
    tags: ["Power BI", "PL/SQL", "Data Visualization"],
    bgColor: "bg-gradient-to-br from-primary/80 to-primary/40",
    icon: "📊",
  },
  {
    id: 2,
    title: "ETL PIPELINE OPTIMIZATION",
    subtitle: "Alteryx & Synapse",
    description:
      "Redesigned ETL processes to improve performance by 60%, reducing data processing time and enhancing data quality for business intelligence applications.",
    rating: 4.5,
    tags: ["ETL", "Alteryx", "Performance"],
    bgColor: "bg-gradient-to-br from-blue-500/80 to-blue-400/40",
    icon: "🔄",
  },
  {
    id: 3,
    title: "DATA MIGRATION & INTEGRATION",
    subtitle: "Oracle to Synapse",
    description:
      "Successfully migrated critical business data from Oracle to Synapse, implementing a star schema design that improved query performance and data accessibility.",
    rating: 4.5,
    tags: ["Migration", "Star Schema", "Synapse"],
    bgColor: "bg-gradient-to-br from-teal-500/80 to-teal-400/40",
    icon: "🗄️",
  },
]

const additionalProjects = [
  {
    id: 4,
    title: "CREDIT CARD ANALYTICS PLATFORM",
    subtitle: "SQL Server & SSRS",
    description:
      "Built an analytics platform for credit card transactions that identified spending patterns and potential fraud, saving the company over $100,000 annually.",
    rating: 5,
    tags: ["Analytics", "SQL Server", "SSRS"],
    bgColor: "bg-gradient-to-br from-purple-500/80 to-purple-400/40",
    icon: "💳",
  },
  {
    id: 5,
    title: "DATA QUALITY FRAMEWORK",
    subtitle: "PL/SQL & Power BI",
    description:
      "Developed a comprehensive data quality framework that automatically identified and flagged data inconsistencies, improving overall data reliability by 40%.",
    rating: 4,
    tags: ["Data Quality", "Automation", "PL/SQL"],
    bgColor: "bg-gradient-to-br from-amber-500/80 to-amber-400/40",
    icon: "✅",
  },
  {
    id: 6,
    title: "REAL-TIME MONITORING SYSTEM",
    subtitle: "Synapse & Alteryx",
    description:
      "Created a real-time monitoring system for electronic payment channels that alerted stakeholders to potential issues before they affected customers.",
    rating: 4.5,
    tags: ["Real-time", "Monitoring", "Alerts"],
    bgColor: "bg-gradient-to-br from-emerald-500/80 to-emerald-400/40",
    icon: "📡",
  },
]

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false)
  const projects = showAll ? [...initialProjects, ...additionalProjects] : initialProjects

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            subtitle={project.subtitle}
            description={project.description}
            rating={project.rating}
            tags={project.tags}
            bgColor={project.bgColor}
            icon={project.icon}
          />
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Button
          variant="outline"
          size="lg"
          className="group border-primary text-primary hover:bg-primary/10"
          onClick={() => setShowAll(!showAll)}
        >
          <span>{showAll ? "Show Less" : "View More Projects"}</span>
          <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} />
        </Button>
      </div>
    </div>
  )
}

