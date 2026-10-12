import React from "react";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/ContactSection";
import InternApplication from "@/components/InternApplication";

export default function Contact() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Contact"
        title="Contact Changaroth Chambers"
        description="Email us at resolve@changarothchambersbn.com or send a consultation request using the form below."
      />
      <div className="-mx-6 md:-mx-12">
        <ContactSection />
        <InternApplication />
      </div>
    </PageShell>
  );
}