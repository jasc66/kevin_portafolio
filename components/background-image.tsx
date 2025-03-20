"use client"

import Image from "next/image"

export default function BackgroundImage() {
  return (
    <div className="fixed inset-0 -z-20 w-full h-full overflow-hidden">
      {/* Light overlay for better dark text contrast */}
      <div className="absolute inset-0 bg-white/90 z-10"></div>

      {/* Background image with Next.js Image component */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1518655048521-f130df041f66?q=80&w=2000&auto=format&fit=crop"
          alt="Background texture"
          fill
          sizes="100vw"
          priority={true}
          quality={75}
          className="object-cover"
          style={{ objectPosition: "center" }}
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmOGY5ZmEiLz48L3N2Zz4="
          loading="eager"
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

