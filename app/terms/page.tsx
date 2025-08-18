import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { COMPANY_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: '特定商取引法に基づく表記',
}

export default function TermsPage() {
  return (
    <>
      <Header initialSolid />
      <main className="container-custom section-padding pt-24">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-3xl font-mincho mb-6">特定商取引法に基づく表記</h1>

        <div className="bg-yellow-50 text-yellow-800 text-sm rounded-lg p-4 mb-6">
          本ページはモックです。実運用前に内容を法務確認の上、実データへ更新してください。
        </div>

        <dl className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-start gap-2">
            <dt className="md:w-40 text-shinojima-sumi">販売事業者</dt>
            <dd className="flex-1">{COMPANY_INFO.name}</dd>
          </div>
          <div className="flex flex-col md:flex-row md:items-start gap-2">
            <dt className="md:w-40 text-shinojima-sumi">運営責任者</dt>
            <dd className="flex-1">（記入）</dd>
          </div>
          <div className="flex flex-col md:flex-row md:items-start gap-2">
            <dt className="md:w-40 text-shinojima-sumi">所在地</dt>
            <dd className="flex-1">{COMPANY_INFO.address}</dd>
          </div>
          <div className="flex flex-col md:flex-row md:items-start gap-2">
            <dt className="md:w-40 text-shinojima-sumi">電話番号</dt>
            <dd className="flex-1">{COMPANY_INFO.tel}</dd>
          </div>
          <div className="flex flex-col md:flex-row md:items-start gap-2">
            <dt className="md:w-40 text-shinojima-sumi">メールアドレス</dt>
            <dd className="flex-1">{COMPANY_INFO.email}</dd>
          </div>
          <div className="flex flex-col md:flex-row md:items-start gap-2">
            <dt className="md:w-40 text-shinojima-sumi">営業時間</dt>
            <dd className="flex-1">{COMPANY_INFO.businessHours}</dd>
          </div>
          <div className="flex flex-col md:flex-row md:items-start gap-2">
            <dt className="md:w-40 text-shinojima-sumi">販売価格</dt>
            <dd className="flex-1">各商品ページに表示（時期により変動）。</dd>
          </div>
          <div className="flex flex-col md:flex-row md:items-start gap-2">
            <dt className="md:w-40 text-shinojima-sumi">商品代金以外の必要料金</dt>
            <dd className="flex-1">送料・振込手数料（お客様負担）。</dd>
          </div>
          <div className="flex flex-col md:flex-row md:items-start gap-2">
            <dt className="md:w-40 text-shinojima-sumi">お支払い方法</dt>
            <dd className="flex-1">銀行振込（入金確認後に出荷）。</dd>
          </div>
          <div className="flex flex-col md:flex-row md:items-start gap-2">
            <dt className="md:w-40 text-shinojima-sumi">引き渡し時期</dt>
            <dd className="flex-1">ご入金確認後、在庫状況に応じて発送。</dd>
          </div>
          <div className="flex flex-col md:flex-row md:items-start gap-2">
            <dt className="md:w-40 text-shinojima-sumi">返品・キャンセル</dt>
            <dd className="flex-1">生鮮品につき原則不可。詳細は「返品・キャンセル方針」をご確認ください。</dd>
          </div>
        </dl>
      </div>
      </main>
      <Footer />
    </>
  )
}
