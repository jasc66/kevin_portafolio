export interface Project {
  id: number
  title: string
  subtitle: string
  description: string
  rating: number
  tags: string[]
  bgColor: string
  icon: string
}

export const initialProjects: Project[] = [
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

export const additionalProjects: Project[] = [
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

