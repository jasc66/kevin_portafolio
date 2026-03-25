// Tipo básico para eventos de analytics
export interface AnalyticsEvent {
    name: string
    params?: Record<string, any>
  }
  
  // Función para enviar eventos a Google Analytics
  export function sendAnalyticsEvent(event: AnalyticsEvent): void {
    if (typeof window !== "undefined" && "gtag" in window) {
      try {
        window.gtag("event", event.name, event.params || {})
        console.log("Analytics event sent:", event)
      } catch (error) {
        console.error("Error sending analytics event:", error)
      }
    }
  }
  
  // Función para registrar una vista de página
  export function trackPageView(url: string): void {
    sendAnalyticsEvent({
      name: "page_view",
      params: {
        page_path: url,
        page_title: document.title,
      },
    })
  }
  
  