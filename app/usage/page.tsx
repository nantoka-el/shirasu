import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '利用規約',
}

export default function UsagePage() {
  return (
    <>
      <Header initialSolid />
      <main className="container-custom section-padding pt-24">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-3xl font-mincho mb-6">利用規約</h1>
        <div className="bg-yellow-50 text-yellow-800 text-sm rounded-lg p-4 mb-6">
          本ページはモックです。実運用前に内容を法務確認の上、実データへ更新してください。
        </div>

        <section className="space-y-4">
          <p>本規約は、本サイトの利用条件を定めるものです。ご利用にあたっては、本規約に同意いただいたものとみなします。</p>

          <h2 className="text-xl font-bold mt-6">1. 適用</h2>
          <p>本規約は、本サイトの提供するすべてのサービスに適用されます。</p>

          <h2 className="text-xl font-bold mt-6">2. 禁止事項</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>法令または公序良俗に反する行為</li>
            <li>不正アクセス、情報改ざん等の行為</li>
            <li>当社または第三者の権利侵害</li>
          </ul>

          <h2 className="text-xl font-bold mt-6">3. 免責事項</h2>
          <p>当社は、コンテンツの正確性・完全性・有用性について保証しません。利用により生じた損害について一切の責任を負いません。</p>

          <h2 className="text-xl font-bold mt-6">4. サービスの変更・停止</h2>
          <p>当社は、事前の予告なくサービス内容を変更または停止することがあります。</p>

          <h2 className="text-xl font-bold mt-6">5. 規約の変更</h2>
          <p>必要に応じて本規約を変更することがあり、変更後の規約は本サイトに掲載した時点で効力を生じます。</p>
        </section>
      </div>
      </main>
      <Footer />
    </>
  )
}
