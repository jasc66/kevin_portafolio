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

