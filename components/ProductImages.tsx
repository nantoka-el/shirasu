'use client'

import Image from 'next/image'

export function ShirasuDonImage() {
  return (
    <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
      <img
        src="/images/生しらす.jpg"
        alt="生しらす"
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
        <p className="text-white text-sm">新鮮な生しらすをたっぷりと</p>
      </div>
    </div>
  )
}

export function FrozenPackImage() {
  return (
    <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
      <img
        src="/images/冷凍生しらす.jpg"
        alt="冷凍生しらす"
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
        <p className="text-white text-sm">100g個包装で使いやすい</p>
      </div>
    </div>
  )
}