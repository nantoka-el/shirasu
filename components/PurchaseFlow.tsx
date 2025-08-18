'use client'

import { PURCHASE_FLOW, DELIVERY_AREAS } from '@/lib/constants'
import { MessageCircle, CreditCard, Truck, MapPin } from 'lucide-react'
import LineButton from './LineButton'

const iconMap = {
  MessageCircle,
  CreditCard,
  Truck,
}

export default function PurchaseFlow() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-mincho mb-4">ご購入の流れ</h2>
          <p className="text-lg text-shinojima-sumi">かんたん3ステップ</p>
        </div>

        {/* 3 Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {PURCHASE_FLOW.map((flow, index) => {
            const Icon = iconMap[flow.icon as keyof typeof iconMap]
            return (
              <div key={flow.step} className="text-center">
                <div className="relative">
                  <div className="w-20 h-20 bg-shinojima-ai rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  {index < PURCHASE_FLOW.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 bg-shinojima-gray-dark/30"></div>
                  )}
                </div>
                <div className="text-shinojima-ai font-bold text-lg mb-2">STEP {flow.step}</div>
                <h3 className="text-xl font-mincho mb-2">{flow.title}</h3>
                <p className="text-sm text-shinojima-sumi">{flow.description}</p>
              </div>
            )
          })}
        </div>

        {/* Delivery Areas */}
        <div className="card p-8">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-8 h-8 text-shinojima-ai" />
            <h3 className="text-2xl font-mincho">配送エリアについて</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <h4 className="font-medium">翌日午前配送可能</h4>
              </div>
              <ul className="space-y-1">
                {DELIVERY_AREAS.recommended.map((area) => (
                  <li key={area} className="text-sm text-shinojima-sumi pl-6">• {area}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <h4 className="font-medium">要相談エリア</h4>
              </div>
              <ul className="space-y-1">
                {DELIVERY_AREAS.consultation.map((area) => (
                  <li key={area} className="text-sm text-shinojima-sumi pl-6">• {area}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <h4 className="font-medium">生しらす非推奨</h4>
              </div>
              <ul className="space-y-1">
                {DELIVERY_AREAS.notRecommended.map((area) => (
                  <li key={area} className="text-sm text-shinojima-sumi pl-6">• {area}</li>
                ))}
              </ul>
              <p className="text-xs text-shinojima-gray-dark mt-2 pl-6">
                ※ 冷凍しらすは全国配送可能
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-700">
              <strong>愛知県南部エリア：</strong>順番配送（自社便）も可能です。詳しくはLINEでお問い合わせください。
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-green-50 rounded-lg">
            <p className="text-sm text-green-700">
              <strong>配送について：</strong>ご注文から平均3営業日でクール便にてお届けいたします。
            </p>
          </div>
          
          <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
            <p className="text-sm text-yellow-700">
              <strong>決済方法：</strong>現在は銀行振込のみ。PayPay・クレジットカードは準備中です。
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <LineButton size="large" />
        </div>
      </div>
    </section>
  )
}