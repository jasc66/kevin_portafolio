"use client"

import type React from "react"

import dynamic from "next/dynamic"
import { Suspense } from "react"

// Lazy load components that aren't needed on initial render
export const LazyProjectsSection = dynamic(() => import("./projects-section"), {
  loading: () => <div className="h-96 w-full flex items-center justify-center">Loading projects...</div>,
  ssr: false,
})

export const LazyContactForm = dynamic(() => import("./contact-form"), {
  loading: () => <div className="h-96 w-full flex items-center justify-center">Loading form...</div>,
  ssr: false,
})

// Wrapper component with Suspense
export function LazyLoadComponent({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div className="h-96 w-full flex items-center justify-center">Loading...</div>}>
      {children}
    </Suspense>
  )
}

