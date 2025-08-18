'use client'

import Link from 'next/link'
import { COMPANY_INFO, LINE_CONFIG } from '@/lib/constants'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-shinojima-sumi text-shinojima-white">
      {/* Company Info */}
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Details */}
          <div>
            <h3 className="text-xl font-mincho mb-4">運営会社</h3>
            <p className="font-medium mb-2">{COMPANY_INFO.name}</p>
            <p className="text-sm text-shinojima-gray-dark mb-4">
              提携事業者: {COMPANY_INFO.partner}
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4" />
                <span>{COMPANY_INFO.tel}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4" />
                <span>{COMPANY_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4" />
                <span>{COMPANY_INFO.businessHours}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-mincho mb-4">お問い合わせ</h3>
            <div className="space-y-3">
              <a
                href={LINE_CONFIG.addUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm hover:text-shinojima-gold transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                LINE公式アカウント
              </a>
              <p className="text-sm text-shinojima-gray-dark">
                ご注文・お問い合わせはLINEが最速です
              </p>
            </div>
            
          </div>

          {/* Bank Info */}
          <div>
            <h3 className="text-xl font-mincho mb-4">お振込先</h3>
            <div className="bg-shinojima-black/30 rounded-lg p-4">
              <dl className="space-y-2 text-sm">
                <div className="flex">
                  <dt className="w-20">銀行名:</dt>
                  <dd>{COMPANY_INFO.bank.name}</dd>
                </div>
                <div className="flex">
                  <dt className="w-20">口座種別:</dt>
                  <dd>{COMPANY_INFO.bank.type}</dd>
                </div>
                <div className="flex">
                  <dt className="w-20">口座番号:</dt>
                  <dd>{COMPANY_INFO.bank.number}</dd>
                </div>
                <div className="flex">
                  <dt className="w-20">口座名義:</dt>
                  <dd>{COMPANY_INFO.bank.holder}</dd>
                </div>
              </dl>
            </div>
            <p className="text-xs text-shinojima-gray-dark mt-2">
              ※ 振込手数料はお客様負担となります
            </p>
          </div>
        </div>
      </div>

      {/* Legal Links */}
      <div className="border-t border-shinojima-black/30">
        <div className="container-custom py-6">
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <Link href="/terms" className="hover:text-shinojima-gold transition-colors">
              特定商取引法に基づく表記
            </Link>
            <span className="text-shinojima-gray-dark">|</span>
            <Link href="/privacy" className="hover:text-shinojima-gold transition-colors">
              プライバシーポリシー
            </Link>
            <span className="text-shinojima-gray-dark">|</span>
            <Link href="/usage" className="hover:text-shinojima-gold transition-colors">
              利用規約
            </Link>
            <span className="text-shinojima-gray-dark">|</span>
            <Link href="/returns" className="hover:text-shinojima-gold transition-colors">
              返品・キャンセル方針
            </Link>
          </div>
          
          <div className="text-center mt-6 text-xs text-shinojima-gray-dark">
            <p>&copy; 2024 虎丸水産 & フロント株式会社. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
