'use client'

import Image from 'next/image'
import { Award, Fish, Snowflake } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function Trust() {
  const { ref: sectionRef, isVisible } = useScrollAnimation()
  
  return (
    <section ref={sectionRef as any} className="section-padding bg-shinojima-gray-light">
      <div className={`container-custom transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-mincho mb-4">篠島ブランドの信頼</h2>
          <p className="text-lg text-shinojima-sumi">朝獲れの生しらすを、鮮度そのままに</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 篠島の紹介 */}
          <div>
            <div className="card p-8">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-shinojima-ai" />
                <h3 className="text-2xl font-mincho">愛知県 篠島</h3>
              </div>
              <p className="text-shinojima-sumi mb-6 leading-relaxed">
                三河湾に浮かぶ篠島は、古くから「東海の松島」と呼ばれる美しい島です。
                三河湾と伊勢湾の潮流が交じり合う豊かな漁場に恵まれ、特にしらす漁は島の主要産業として代々受け継がれています。
              </p>
              <div className="bg-shinojima-gray-light rounded-lg p-4">
                <p className="text-sm text-shinojima-sumi">
                  日の昇る前に出港し、獲れたてのしらすを即長年の技術力で生しらすとして扱える物を選別し、
                  その日のうちに瞬間冷凍。もしくは皆様の元へ。
                  この鮮度と技術が、篠島生しらすの最大の価値です。
                </p>
              </div>
            </div>
          </div>

          {/* 虎丸水産の紹介 */}
          <div>
            <div className="card p-8">
              <div className="flex items-center gap-3 mb-4">
                <Fish className="w-8 h-8 text-shinojima-ai" />
                <h3 className="text-2xl font-mincho">虎丸水産</h3>
              </div>
              <div className="mb-6">
                <img 
                  src="/images/大二郎くん.jpg"
                  alt="代表 新美 大二郎"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="text-center text-shinojima-sumi font-medium">代表 新美 大二郎</p>
              </div>
              <p className="text-shinojima-sumi leading-relaxed">
                三代続く漁師の家系で、漁業一筋25年。
                伝統的な漁法を守りながら、最新の冷凍技術を導入し、
                獲れたての味をそのままお届けします。
              </p>
            </div>
          </div>
        </div>

        {/* 加工工程 */}
        <div className="mt-12">
          <div className="card p-8">
            <div className="flex items-center gap-3 mb-4">
              <Snowflake className="w-8 h-8 text-shinojima-ai" />
              <h3 className="text-2xl font-mincho">朝獲れ即時冷凍の工程</h3>
            </div>
            <p className="text-sm text-shinojima-gray-dark mb-6">（一例です）</p>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { time: '2:30', title: '出港', desc: '夜明け前に出港' },
                { time: '5:00', title: '漁を開始', desc: '新鮮なしらすを水揚げ' },
                { time: '7:00', title: '選別・冷凍', desc: '厳選後、即座に急速冷凍' },
                { time: '8:00', title: '出荷準備', desc: '当日発送の準備完了' },
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-shinojima-ai mb-2">{step.time}</div>
                  <div className="font-mincho text-lg mb-1">{step.title}</div>
                  <div className="text-sm text-shinojima-sumi">{step.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}