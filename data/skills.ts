export interface Skill {
    id: number
    name: string
    percentage: number
  }
  
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
  
  