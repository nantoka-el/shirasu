'use client'

import { X } from 'lucide-react'
import LineButton from './LineButton'

interface FreshShirasuModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function FreshShirasuModal({ isOpen, onClose }: FreshShirasuModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-xl p-8 max-w-md w-full mx-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="text-center">
          <h3 className="text-2xl font-mincho mb-4">生しらすについて</h3>
          <div className="text-left space-y-4 mb-6">
            <p className="text-shinojima-sumi">
              生しらすは天候や海況により入荷が不安定なため、
              入荷ごとにLINEでご連絡差し上げる形となります。
            </p>
            <p className="text-shinojima-sumi">
              LINE友だち登録いただいたお客様に、入荷情報を優先的にお知らせし、
              ご注文を承っております。
            </p>
            <div className="bg-shinojima-gray-light rounded-lg p-4">
              <p className="text-sm text-shinojima-sumi">
                <strong>ご注文から配送まで</strong><br />
                平均3営業日でクール便（冷蔵）にてお届けいたします。
              </p>
            </div>
          </div>
          
          <LineButton text="LINEで入荷情報を受け取る" className="w-full justify-center" />
        </div>
      </div>
    </div>
  )
}