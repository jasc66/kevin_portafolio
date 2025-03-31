export interface EducationItem {
    id: number
    title: string
    institution: string
    location?: string
    period?: string
  }
  
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
  
  