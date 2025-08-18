import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Trust from '@/components/Trust'
import Products from '@/components/Products'
import Testimonials from '@/components/Testimonials'
import PurchaseFlow from '@/components/PurchaseFlow'
import FAQ from '@/components/FAQ'
import KnowledgeSection from '@/components/KnowledgeSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Trust />
      <section id="products">
        <Products />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="flow">
        <PurchaseFlow />
      </section>
      <KnowledgeSection />
      <section id="faq">
        <FAQ />
      </section>
      <Footer />
    </>
  );
}
