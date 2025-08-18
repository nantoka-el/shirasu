'use client'

import { useEffect, useState } from 'react'
import LineButton from './LineButton'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://videos.pexels.com/video-files/1409899/1409899-hd_1920_1080_25fps.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div className="absolute inset-0 bg-gradient-to-br from-shinojima-ai via-blue-600 to-cyan-500"></div>
        </video>
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center text-white px-4 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-mincho mb-6 leading-tight">
          篠島直送生しらす<br />
          虎丸水産
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-2 font-light">
          — 注文・お問い合わせはLINEで —
        </p>
        <p className="text-xl md:text-2xl lg:text-3xl mb-12 font-mincho">
          篠島の漁師の手から 直送でお届け
        </p>
        
        <div className="flex justify-center">
          <LineButton size="large" className="animate-float" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  )
}