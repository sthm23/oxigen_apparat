import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { SaleSection } from "@/components/SaleSection";
import { RentalSection } from "@/components/RentalSection";
import { PricingSection } from "@/components/PricingSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";


export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-sky-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Header />

      <section className="relative overflow-hidden">
        <Hero />
        <Marquee />
      </section>

      <RentalSection />
      <SaleSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
}
