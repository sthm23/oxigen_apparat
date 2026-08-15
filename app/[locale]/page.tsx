import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { EquipmentSection } from "@/components/EquipmentSection";
import { PricingSection } from "@/components/PricingSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Header />

      <section className="relative overflow-hidden">
        <Hero />
        <Marquee />
      </section>

      <EquipmentSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
}
