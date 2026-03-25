declare module "web-vitals" {
    // Métrica básica que todos los tipos de métricas extienden
    export interface Metric {
      id: string
      name: string
      value: number
      delta?: number
      entries: PerformanceEntry[]
      navigationType?: NavigationType
    }
  
    // Tipos específicos de métricas
    export interface CLSMetric extends Metric {
      name: "CLS"
    }
  
    export interface FIDMetric extends Metric {
      name: "FID"
    }
  
    export interface LCPMetric extends Metric {
      name: "LCP"
    }
  
    export interface FCPMetric extends Metric {
      name: "FCP"
    }
  
    export interface TTFBMetric extends Metric {
      name: "TTFB"
    }
  
    // Tipo de reportador
    export type ReportHandler = (metric: Metric) => void
  
    // Funciones para obtener métricas
    export function getCLS(onReport: ReportHandler, reportAllChanges?: boolean): void
    export function getFID(onReport: ReportHandler): void
    export function getLCP(onReport: ReportHandler, reportAllChanges?: boolean): void
    export function getFCP(onReport: ReportHandler): void
    export function getTTFB(onReport: ReportHandler): void
  
    type NavigationType = "navigate" | "reload" | "back_forward" | "prerender"
  }
  
  