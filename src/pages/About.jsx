import React from "react";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";

const SECTIONS = [
  {
    title: "Who we are",
    body: "Changaroth Chambers is a firm of Advocates & Solicitors based in Brunei Darussalam. Our lawyers are admitted to practise in the civil courts, and our Syarie Counsel appear before the Syariah courts. We also serve as Commissioners for Oaths. Grounded in Brunei's legal tradition and committed to the rule of law, we work with regional counterparts to support ethical practice, legal development and knowledge sharing.",
  },
  {
    title: "What this website does",
    body: "This website is the chambers' public home. Visitors can learn about our practice areas, meet our lawyers, read news, insights and publications written by our team, follow our social media updates, and send a consultation request straight to the chambers. It brings clear and reliable legal information together in one place for people who need guidance.",
  },
  {
    title: "Who we serve",
    body: "We act for individuals, families, businesses and institutions across Brunei Darussalam and the wider region. Our work covers civil litigation and dispute resolution, Syariah family matters, corporate and commercial advice, conveyancing and property, and appropriate dispute resolution such as mediation and negotiation. Whether you face a court dispute, a family matter under Syariah law, or a business transaction, our aim is to give you practical advice that respects your rights and resolves your dispute.",
  },
  {
    title: "Who builds it",
    body: "This website is built and maintained by Changaroth Chambers. Our lawyers write and review every article published here. The content is for general information only and is not legal advice. For advice on your own situation, please contact the chambers directly.",
  },
];

export default function About() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="About"
        title="About Changaroth Chambers"
        description="Advocates & Solicitors, Syarie Counsel and Commissioners for Oaths in Brunei Darussalam."
      />
      <div className="grid md:grid-cols-2 gap-x-16 gap-y-14 max-w-5xl">
        {SECTIONS.map((s) => (
          <section key={s.title}>
            <h2 className="font-display text-2xl md:text-3xl text-hero-cream mb-4">{s.title}</h2>
            <p className="text-mist leading-relaxed">{s.body}</p>
          </section>
        ))}
      </div>
    </PageShell>
  );
}