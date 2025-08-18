import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '返品・キャンセル方針',
}

export default function ReturnsPage() {
  return (
    <>
      <Header initialSolid />
      <main className="container-custom section-padding pt-24">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-3xl font-mincho mb-6">返品・キャンセル方針</h1>
        <div className="bg-yellow-50 text-yellow-800 text-sm rounded-lg p-4 mb-6">
          本ページはモックです。実運用前に内容を法務確認の上、実データへ更新してください。
        </div>

        <section className="space-y-4">
          <h2 className="text-xl font-bold">1. 生鮮品の返品・交換</h2>
          <p>
            品質には万全を期しておりますが、商品に不良・破損等がある場合は、商品到着後<strong>当日中</strong>にご連絡ください。状況を確認の上、代替品の手配または返金にて対応いたします。
          </p>

          <h2 className="text-xl font-bold mt-6">2. お客様都合のキャンセル</h2>
          <p>
            生鮮品の性質上、出荷手配後のキャンセルはお受けできません。ご注文内容・受取日時のご確認をお願いいたします。
          </p>

          <h2 className="text-xl font-bold mt-6">3. 連絡方法</h2>
          <p>
            LINEまたはお問い合わせフォーム（準備中）にてご連絡ください。確認のため、<strong>外箱・ラベル・商品の状態がわかる写真</strong>のご提供をお願いする場合があります。
          </p>

          <h2 className="text-xl font-bold mt-6">4. 返金について</h2>
          <p>
            返金は原則、銀行振込にて行います。振込先情報の確認後、所定の手続きに従い対応いたします。
          </p>
        </section>
      </div>
      </main>
      <Footer />
    </>
  )
}
