// Centralizamos todos los tipos en un solo archivo para evitar importaciones circulares

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
  
  