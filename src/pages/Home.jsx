import React, { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import CurtainNav from "@/components/CurtainNav";
import Hero from "@/components/Hero";
import ValuePillars from "@/components/ValuePillars";
import PracticeGrid from "@/components/PracticeGrid";
import OurApproach from "@/components/OurApproach";
import ClientSupport from "@/components/ClientSupport";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      window.scrollTo(0, 0);
    }
  }, [loading]);

  if (loading) {
    return <Loader onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="relative bg-forest-deep min-h-screen">
      <CurtainNav />
      <main>
        <Hero />
        {/* Gilded thread connecting sections */}
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/0 via-gold/20 to-gold/0 pointer-events-none" />
          <ValuePillars />
          <PracticeGrid />
          <OurApproach />
          <ClientSupport />
          <ContactSection />
        </div>
        <Footer />
      </main>
    </div>
  );
}