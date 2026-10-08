import React from "react";
import CurtainNav from "@/components/CurtainNav";
import Footer from "@/components/Footer";
import BackHome from "@/components/BackHome";

export default function PageShell({ children }) {
  return (
    <div className="relative bg-forest-deep min-h-screen">
      <CurtainNav />
      <main className="pt-36 md:pt-44 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto pb-24 md:pb-32"><BackHome />{children}</div>
      </main>
      <Footer />
    </div>
  );
}