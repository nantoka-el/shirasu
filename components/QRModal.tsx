'use client'

import { X, QrCode } from 'lucide-react'

interface QRModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function QRModal({ isOpen, onClose }: QRModalProps) {
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
          <h3 className="text-2xl font-mincho mb-4">LINE友だち追加</h3>
          <p className="text-shinojima-sumi mb-6">
            QRコードを読み取って、LINE友だち追加してください
          </p>
          
          <div className="bg-gray-100 p-8 rounded-lg mb-6">
            <div className="w-48 h-48 mx-auto bg-white rounded-lg flex items-center justify-center">
              <QrCode className="w-32 h-32 text-shinojima-black" />
            </div>
          </div>
          
          <p className="text-sm text-shinojima-gray-dark">
            スマートフォンのLINEアプリから
            <br />
            「友だち追加」→「QRコード」で読み取り
          </p>
        </div>
      </div>
    </div>
  )
}