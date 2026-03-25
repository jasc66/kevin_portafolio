interface Window {
    gtag: (
      command: "event" | "config" | "set" | "js",
      targetId: string,
      params?: {
        [key: string]: any
      },
    ) => void
    dataLayer: any[]
  }
  
  