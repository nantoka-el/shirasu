'use client'

import { TESTIMONIALS } from '@/lib/constants'
import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  return (
    <section className="section-padding bg-shinojima-gray-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-mincho mb-4">お客様の声</h2>
          <p className="text-lg text-shinojima-sumi">飲食店オーナー様からの評価</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              {/* Restaurant background image */}
              <div className="absolute inset-0">
                <img 
                  src={testimonial.id === 1 
                    ? `${process.env.NODE_ENV === 'production' ? '/shirasu' : ''}/images/MC_2640_77854_1.jpg` 
                    : testimonial.id === 2 
                    ? `${process.env.NODE_ENV === 'production' ? '/shirasu' : ''}/images/bebe_02.jpg`
                    : `${process.env.NODE_ENV === 'production' ? '/shirasu' : ''}/images/7321_7339_ph1.webp`
                  }
                  alt="店内の様子"
                  className="w-full h-full object-cover opacity-60"
                />
              </div>
              <div className="relative p-6 bg-white/70 backdrop-blur-sm">
              <div className="flex items-start gap-1 mb-4">
                <Quote className="w-8 h-8 text-shinojima-ai/20 transform scale-x-[-1]" />
              </div>
              
              <p className="text-shinojima-sumi mb-6 leading-relaxed min-h-[80px]">
                {testimonial.comment}
              </p>
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-shinojima-gold text-shinojima-gold" />
                ))}
              </div>
              
              <div className="flex items-center gap-4">
                {/* Avatar placeholder - Using random person images */}
                <img 
                  src={`https://i.pravatar.cc/150?img=${testimonial.id + 10}`}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-shinojima-black">{testimonial.name}</p>
                  <p className="text-sm text-shinojima-sumi">{testimonial.restaurant}</p>
                  <p className="text-xs text-shinojima-gray-dark">{testimonial.location}</p>
                </div>
              </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-shinojima-sumi">
            ※ お客様の声は個人の感想です。効果を保証するものではありません。
          </p>
        </div>
      </div>
    </section>
  )
}