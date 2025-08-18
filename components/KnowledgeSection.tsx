'use client'

import { useState } from 'react'
import { BookOpen, Heart, Utensils, Snowflake, ChefHat } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function KnowledgeSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation()
  const [activeTab, setActiveTab] = useState('nutrition')

  const tabs = [
    { id: 'nutrition', label: '栄養価', icon: Heart },
    { id: 'recipe', label: 'レシピ', icon: ChefHat },
    { id: 'storage', label: '保存方法', icon: Snowflake },
  ]

  const content = {
    nutrition: (
      <div className="space-y-4">
        <h3 className="text-xl font-mincho mb-4">生しらすの栄養価</h3>
        <div className="mb-6 h-48 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg flex items-center justify-center">
          <p className="text-shinojima-gray-dark">栄養価画像プレースホルダー</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-shinojima-gray-light rounded-lg p-4">
            <h4 className="font-bold text-shinojima-ai mb-2">カルシウム</h4>
            <p className="text-sm text-shinojima-sumi">
              牛乳の約5倍！100gあたり520mgのカルシウムが含まれています。
              骨や歯の健康維持に最適です。
            </p>
          </div>
          <div className="bg-shinojima-gray-light rounded-lg p-4">
            <h4 className="font-bold text-shinojima-ai mb-2">DHA・EPA</h4>
            <p className="text-sm text-shinojima-sumi">
              オメガ3脂肪酸が豊富。血液をサラサラにし、
              脳の活性化にも効果的です。
            </p>
          </div>
          <div className="bg-shinojima-gray-light rounded-lg p-4">
            <h4 className="font-bold text-shinojima-ai mb-2">ビタミンD</h4>
            <p className="text-sm text-shinojima-sumi">
              カルシウムの吸収を助けるビタミンDも豊富。
              免疫力向上にも貢献します。
            </p>
          </div>
          <div className="bg-shinojima-gray-light rounded-lg p-4">
            <h4 className="font-bold text-shinojima-ai mb-2">低カロリー</h4>
            <p className="text-sm text-shinojima-sumi">
              100gあたり約110kcalと低カロリー。
              ダイエット中の方にもおすすめです。
            </p>
          </div>
        </div>
      </div>
    ),
    recipe: (
      <div className="space-y-4">
        <h3 className="text-xl font-mincho mb-4">おすすめレシピ</h3>
        <div className="mb-6 h-48 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg flex items-center justify-center">
          <p className="text-shinojima-gray-dark">レシピ画像プレースホルダー</p>
        </div>
        <div className="space-y-4">
          <div className="border-l-4 border-shinojima-gold pl-4">
            <h4 className="font-bold mb-2">しらす丼</h4>
            <p className="text-sm text-shinojima-sumi mb-2">
              温かいご飯の上に生しらすをたっぷりのせ、大葉、生姜、卵黄をトッピング。
              醤油またはポン酢でさっぱりと。
            </p>
          </div>
          <div className="border-l-4 border-shinojima-gold pl-4">
            <h4 className="font-bold mb-2">しらすパスタ</h4>
            <p className="text-sm text-shinojima-sumi mb-2">
              オリーブオイルにニンニクと唐辛子、しらすを加えて炒め、
              茹でたパスタと和えるだけ。仕上げに大葉を散らして。
            </p>
          </div>
          <div className="border-l-4 border-shinojima-gold pl-4">
            <h4 className="font-bold mb-2">しらすトースト</h4>
            <p className="text-sm text-shinojima-sumi mb-2">
              トーストにバターを塗り、しらすとチーズをのせてトースターで焼くだけ。
              朝食にぴったりの一品。
            </p>
          </div>
          <div className="border-l-4 border-shinojima-gold pl-4">
            <h4 className="font-bold mb-2">しらすおろし</h4>
            <p className="text-sm text-shinojima-sumi mb-2">
              大根おろしにしらすを混ぜ、ポン酢をかけるだけ。
              さっぱりとした副菜として最適です。
            </p>
          </div>
        </div>
      </div>
    ),
    storage: (
      <div className="space-y-4">
        <h3 className="text-xl font-mincho mb-4">保存・解凍方法</h3>
        <div className="mb-6 h-48 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg flex items-center justify-center">
          <p className="text-shinojima-gray-dark">保存方法画像プレースホルダー</p>
        </div>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-shinojima-ai mb-3">生しらすの保存</h4>
            <ul className="space-y-2 text-sm text-shinojima-sumi">
              <li className="flex items-start gap-2">
                <span className="text-shinojima-gold">●</span>
                到着後すぐに冷蔵庫（0-4℃）で保存
              </li>
              <li className="flex items-start gap-2">
                <span className="text-shinojima-gold">●</span>
                消費期限は到着後2日以内を推奨
              </li>
              <li className="flex items-start gap-2">
                <span className="text-shinojima-gold">●</span>
                食べきれない場合は小分けして冷凍保存も可能
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-shinojima-ai mb-3">冷凍しらすの解凍</h4>
            <ul className="space-y-2 text-sm text-shinojima-sumi">
              <li className="flex items-start gap-2">
                <span className="text-shinojima-gold">●</span>
                冷蔵庫でゆっくり解凍（3-4時間）が最もおすすめ
              </li>
              <li className="flex items-start gap-2">
                <span className="text-shinojima-gold">●</span>
                急ぐ場合は流水解凍（密封して10-15分）
              </li>
              <li className="flex items-start gap-2">
                <span className="text-shinojima-gold">●</span>
                電子レンジの解凍モードも使用可（様子を見ながら）
              </li>
              <li className="flex items-start gap-2">
                <span className="text-shinojima-gold">●</span>
                一度解凍したものは再冷凍せず、お早めにお召し上がりください
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
  }

  return (
    <section ref={sectionRef as any} className="section-padding bg-shinojima-gray-light">
      <div className={`container-custom transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="w-8 h-8 text-shinojima-ai" />
            <h2 className="text-3xl md:text-4xl font-mincho">生しらす豆知識</h2>
          </div>
          <p className="text-lg text-shinojima-sumi">知って得する、しらすの魅力</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-shinojima-ai text-white shadow-lg'
                      : 'bg-white text-shinojima-sumi hover:shadow-md'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                </button>
              )
            })}
          </div>

          {/* Content */}
          <div className="bg-white rounded-xl p-8 shadow-md">
            {content[activeTab as keyof typeof content]}
          </div>
        </div>
      </div>
    </section>
  )
}