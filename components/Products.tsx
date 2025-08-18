'use client'

import { useState } from 'react'
import { PRODUCTS } from '@/lib/constants'
import LineButton from './LineButton'
import { AlertCircle, Snowflake, Fish } from 'lucide-react'
import { ShirasuDonImage, FrozenPackImage } from './ProductImages'
import FreshShirasuModal from './FreshShirasuModal'

export default function Products() {
  const [showFreshModal, setShowFreshModal] = useState(false)
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-mincho mb-4">商品ラインナップ</h2>
          <p className="text-lg text-shinojima-sumi">用途に合わせてお選びください</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* 生しらす */}
          <div className="card">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Fish className="w-8 h-8 text-shinojima-ai" />
                <h3 className="text-2xl font-mincho">{PRODUCTS.fresh.name}</h3>
              </div>
            </div>
            <ShirasuDonImage />
            <div className="p-6">
              <div className="mb-6">
                <div className="flex items-start gap-2 mb-4">
                  <AlertCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-orange-700 bg-orange-50 rounded-lg p-3">
                    生しらすは天候により入荷が不安定です。入荷情報はLINEでお知らせしています。
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-shinojima-sumi">最小注文量</span>
                    <span className="font-medium">{PRODUCTS.fresh.minOrder}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-shinojima-sumi">参考価格</span>
                    <span className="font-medium">{PRODUCTS.fresh.pricePerUnit}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-shinojima-sumi">価格例</span>
                    <span className="font-medium">{PRODUCTS.fresh.priceExample}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-shinojima-sumi">消費期限</span>
                    <span className="font-medium text-red-600">{PRODUCTS.fresh.shelfLife}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-shinojima-sumi mb-6 text-sm leading-relaxed">
                {PRODUCTS.fresh.note}
              </p>
              
              <button
                onClick={() => setShowFreshModal(true)}
                className="line-btn w-full justify-center"
              >
                生しらすについて
              </button>
            </div>
          </div>

          {/* 冷凍しらす */}
          <div className="card">
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Snowflake className="w-8 h-8 text-shinojima-ai" />
                <h3 className="text-2xl font-mincho">{PRODUCTS.frozen.name}</h3>
                <span className="bg-shinojima-gold text-white text-xs px-2 py-1 rounded">飲食店推奨</span>
              </div>
            </div>
            <FrozenPackImage />
            <div className="p-6">
              <div className="mb-6">
                <div className="bg-blue-50 rounded-lg p-3 mb-4">
                  <p className="text-sm text-blue-700">
                    安定供給可能。定期購入で割引あり。
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-shinojima-sumi">最小注文量</span>
                    <span className="font-medium">{PRODUCTS.frozen.minOrder}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-shinojima-sumi">参考価格</span>
                    <span className="font-medium">{PRODUCTS.frozen.pricePerUnit}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-shinojima-sumi">包装</span>
                    <span className="font-medium">{PRODUCTS.frozen.packaging}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-shinojima-sumi">賞味期限</span>
                    <span className="font-medium">{PRODUCTS.frozen.shelfLife}</span>
                  </div>
                </div>

                {/* 定期購入割引 */}
                <div className="mt-4 bg-shinojima-gold/10 rounded-lg p-4">
                  <p className="text-sm font-medium text-shinojima-gold mb-2">定期購入特典</p>
                  <div className="space-y-1">
                    <p className="text-sm">月2kg以上: {PRODUCTS.frozen.discount.monthly2kg}</p>
                    <p className="text-sm">月5kg以上: {PRODUCTS.frozen.discount.monthly5kg}</p>
                  </div>
                </div>
              </div>
              
              <p className="text-shinojima-sumi mb-6 text-sm leading-relaxed">
                {PRODUCTS.frozen.note}
              </p>
              
              <LineButton text="冷凍しらすを注文する" className="w-full justify-center" />
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-shinojima-sumi">
            ※ 価格は季節や漁獲量により変動します。正確な価格は注文時にご確認ください。
          </p>
        </div>
      </div>
      <FreshShirasuModal isOpen={showFreshModal} onClose={() => setShowFreshModal(false)} />
    </section>
  )
}