'use client'

import { useState } from 'react'
import { FAQ_DATA } from '@/lib/constants'
import { ChevronDown, HelpCircle } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section-padding bg-shinojima-gray-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-mincho mb-4">よくあるご質問</h2>
          <p className="text-lg text-shinojima-sumi">お客様からのお問い合わせ</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {FAQ_DATA.map((faq, index) => (
              <div key={index} className="card">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-shinojima-gray-light/50 transition-colors"
                >
                  <div className="flex items-start gap-3 flex-1">
                    <HelpCircle className="w-5 h-5 text-shinojima-ai mt-0.5 flex-shrink-0" />
                    <span className="font-medium text-shinojima-black">{faq.question}</span>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-shinojima-gray-dark transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 pb-4' : 'max-h-0'
                  }`}
                >
                  <div className="pl-8 pt-2">
                    <p className="text-shinojima-sumi leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}