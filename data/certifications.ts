export interface CertificationItem {
    id: number
    title: string
    issuer: string
    details?: string
  }
  
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
  
  