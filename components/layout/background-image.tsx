"use client"

import Image from "next/image"
import { SITE_CONFIG } from "@/constants/site-config"

export default function BackgroundImage() {
  return (
    <div className="fixed inset-0 -z-20 w-full h-full overflow-hidden">
      {/* Light overlay for better dark text contrast - INCREASED OPACITY */}
      <div className="absolute inset-0 bg-white/95 z-10"></div>

      {/* Background image with Next.js Image component */}
      <div className="absolute inset-0">
        <Image
          src={SITE_CONFIG.images.background || "/placeholder.svg"}
          alt="Background texture"
          fill
          sizes="100vw"
          priority={false} // No es necesario priorizar esta imagen ya que está detrás de un overlay
          quality={60} // Reducimos la calidad ya que está detrás de un overlay
          className="object-cover"
          style={{ objectPosition: "center" }}
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmOGY5ZmEiLz48L3N2Zz4="
          loading="lazy"
        />
      </div>

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-5 z-20"
        style={{
          backgroundImage:
            'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2MiPjwvcmVjdD4KPC9zdmc+")',
        }}
        aria-hidden="true"
      ></div>
    </div>
  )
}

