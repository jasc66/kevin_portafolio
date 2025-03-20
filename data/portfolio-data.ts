// Tipos para experiencia
export interface Responsibility {
  title: string
  description: string
}

export interface Experience {
  id: number
  title: string
  company: string
  period: string
  focus: string
  responsibilities: Responsibility[]
  bgColor: string
  icon: string
}

// Tipos para educación
export interface EducationItem {
  id: number
  title: string
  institution: string
  location?: string
  period?: string
}

// Tipos para certificaciones
export interface CertificationItem {
  id: number
  title: string
  issuer: string
  details?: string
}

// Tipos para habilidades
export interface Skill {
  id: number
  name: string
  percentage: number
}

// Tipos para proyectos
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

// Datos de experiencia
export const experiences: Experience[] = [
  {
    id: 1,
    title: "Data Engineer",
    company: "Financial institution Coopelianza",
    period: "08/2023 – Present",
    focus:
      "Electronic Channels Management (Payment Methods, Credit & Debit Cards, Electronic Channels, Supplementary Services)",
    responsibilities: [
      {
        title: "Power BI Development",
        description:
          "Engineered reporting solutions utilizing PL/SQL, Oracle, and Alteryx, incorporating subqueries, CTEs, and complex joins to meet organizational objectives.",
      },
      {
        title: "ETL Optimization",
        description:
          "Streamlined data extraction, transformation, and loading (ETL) processes with Azure Synapse, ensuring high data quality for Power BI visualization.",
      },
      {
        title: "Data Integration",
        description:
          "Migrated tables from Oracle PL SQL to Azure Synapse, converting data to Parquet format and creating views to enhance performance, focused on Data Lake star schema method, and bronze, landing and silver to manage data.",
      },
      {
        title: "Process Improvement",
        description:
          "Developed differential loading processes via pipelines and procedures, significantly boosting data integration efficiency.",
      },
    ],
    bgColor: "bg-gradient-to-br from-primary/80 to-primary/40",
    icon: "💼",
  },
  {
    id: 2,
    title: "Technical Consulting Engineer",
    company: "CCS Globaltech",
    period: "11/2021 – 07/2023",
    focus: "SQL Development & Reporting",
    responsibilities: [
      {
        title: "SQL Expertise",
        description:
          "Applied advanced SQL techniques, including CTEs, window functions, and procedures, to meet diverse reporting needs.",
      },
      {
        title: "SSRS Reporting",
        description: "Designed visually impactful report templates using SQL Server Reporting Services (SSRS).",
      },
      {
        title: "Database Design",
        description: "Created a staging database for data conversion, supporting smooth implementation in SQL Server.",
      },
      {
        title: "Data Mapping",
        description:
          "Conducted precise data mapping and loading into production databases, maintaining data accuracy and system integrity.",
      },
    ],
    bgColor: "bg-gradient-to-br from-blue-500/80 to-blue-400/40",
    icon: "🖥️",
  },
  {
    id: 3,
    title: "Seller Partner Support",
    company: "Amazon",
    period: "04/2021 – 10/2021",
    focus: "Customer Service for Vendors Support",
    responsibilities: [
      {
        title: "Vendor Assistance",
        description:
          "Provided high-level support to Amazon sellers, managing tasks such as spreadsheet uploads, chargeback disputes, and transportation coordination via phone and email.",
      },
      {
        title: "Process Enhancement",
        description: "Improved service procedures while maintaining exceptional customer service standards.",
      },
    ],
    bgColor: "bg-gradient-to-br from-amber-500/80 to-amber-400/40",
    icon: "🛒",
  },
]

// Datos de educación
export const educationItems: EducationItem[] = [
  {
    id: 1,
    title: "Bachelor's degree in Systems Engineering",
    institution: "Universidad Latina de Costa Rica",
    location: "Pérez Zeledón, San José",
    period: "Expected Graduation: April 24 2025",
  },
  {
    id: 2,
    title: "Talent Development Program",
    institution: "CCS Globaltech",
    location: "Pérez Zeledón, San José",
  },
]

// Datos de certificaciones
export const certificationItems: CertificationItem[] = [
  {
    id: 1,
    title: "Prolaw SQL Certification",
    issuer: "Issued by Thomson Reuters",
  },
  {
    id: 2,
    title: "Alteryx Designer Specialist Certification",
    issuer: "Issued by Panda Analytics",
  },
  {
    id: 3,
    title: "Power BI Participation Certificates",
    issuer: "Issued by Panda Analytics",
    details: "Power BI Service, Business Cubes, Data Exploration, Cubes with DAX",
  },
]

// Datos de habilidades técnicas
export const technicalSkills: Skill[][] = [
  [
    {
      id: 1,
      name: "Power BI",
      percentage: 95,
    },
    {
      id: 2,
      name: "SQL Server",
      percentage: 90,
    },
    {
      id: 3,
      name: "Synapse",
      percentage: 85,
    },
    {
      id: 4,
      name: "Alteryx",
      percentage: 90,
    },
    {
      id: 5,
      name: "SQL Server Reporting Services (SSRS)",
      percentage: 85,
    },
  ],
  [
    {
      id: 6,
      name: "PL/SQL Oracle",
      percentage: 80,
    },
    {
      id: 7,
      name: "Report Builder Oracle",
      percentage: 85,
    },
    {
      id: 8,
      name: "Data Warehouse and Data Lake Star Schema",
      percentage: 90,
    },
    {
      id: 9,
      name: "Integration Services (SSIS)",
      percentage: 80,
    },
  ],
]

// Datos de proyectos
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

// Constantes adicionales
export const CV_URL = "/Kevin_Ilama_Portuguez_CV.pdf"
export const PROFILE_IMAGE =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kevin.jpg-3FZmo8zITF2rYiuzWowplqrp7wcuHh.jpeg"

