'use client'

import { useState } from 'react'
import { LINE_CONFIG } from '@/lib/constants'
import QRModal from './QRModal'
import { MessageCircle } from 'lucide-react'

interface LineButtonProps {
  text?: string
  className?: string
  size?: 'small' | 'medium' | 'large'
}

export default function LineButton({ 
  text = 'LINEで注文・お問い合わせ', 
  className = '',
  size = 'medium'
}: LineButtonProps) {
  const [showQR, setShowQR] = useState(false)
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-8 py-4',
    large: 'px-10 py-5 text-lg'
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    // PCの場合はQRモーダルを表示
    if (!('ontouchstart' in window)) {
      setShowQR(true)
    } else {
      // スマホの場合はLINEアプリを開く
      window.open(LINE_CONFIG.addUrl, '_blank')
    }
  }

  return (
    <>
      <button
        onClick={handleClick}
        className={`line-btn ${sizeClasses[size]} ${className}`}
      >
        <MessageCircle className="w-6 h-6" />
        <span>{text}</span>
      </button>
      <QRModal isOpen={showQR} onClose={() => setShowQR(false)} />
    </>
  )
}
