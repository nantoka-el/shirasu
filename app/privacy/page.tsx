import type { Metadata } from 'next'
import { COMPANY_INFO } from '@/lib/constants'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
}

export default function PrivacyPage() {
  return (
    <>
      <Header initialSolid />
      <main className="container-custom section-padding pt-24">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-3xl font-mincho mb-6">プライバシーポリシー</h1>
        <div className="bg-yellow-50 text-yellow-800 text-sm rounded-lg p-4 mb-6">
          本ページはモックです。実運用前に内容を法務確認の上、実データへ更新してください。
        </div>

        <p className="text-sm text-shinojima-gray-dark mb-6">最終更新日: （記入）</p>

        <section className="space-y-4">
          <p>
            {COMPANY_INFO.name}（以下「当社」）は、当社が提供するサービスにおけるお客様の個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」）を定めます。
          </p>

          <h2 className="text-xl font-bold mt-6">1. 取得する情報</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>氏名、住所、電話番号、メールアドレス 等</li>
            <li>注文内容、配送情報、お問い合わせ内容 等</li>
            <li>アクセスログ、Cookie 等（計測導入時）</li>
          </ul>

          <h2 className="text-xl font-bold mt-6">2. 利用目的</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>商品の受注、配送、代金決済</li>
            <li>お問い合わせ対応、サポート提供</li>
            <li>サービス改善、品質向上のための分析</li>
          </ul>

          <h2 className="text-xl font-bold mt-6">3. 第三者提供</h2>
          <p>法令に基づく場合等を除き、本人の同意なく第三者に提供しません。</p>

          <h2 className="text-xl font-bold mt-6">4. 安全管理</h2>
          <p>個人情報の漏えい、滅失または毀損の防止その他の安全管理のために必要かつ適切な措置を講じます。</p>

          <h2 className="text-xl font-bold mt-6">5. 開示・訂正・利用停止</h2>
          <p>本人からの請求に応じ、法令の定めに従い適切に対応します。</p>

          <h2 className="text-xl font-bold mt-6">6. お問い合わせ窓口</h2>
          <p>
            連絡先: {COMPANY_INFO.email} / {COMPANY_INFO.tel}
          </p>

          <h2 className="text-xl font-bold mt-6">7. 改定</h2>
          <p>本ポリシーの内容は、必要に応じて予告なく改定することがあります。</p>
        </section>
      </div>
      </main>
      <Footer />
    </>
  )
}
