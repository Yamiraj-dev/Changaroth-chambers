import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Loader2 } from "lucide-react";
import useCurrentUser from "@/hooks/useCurrentUser";
import PageShell from "@/components/PageShell";

export default function AdminGate() {
  const { checked, isAdmin } = useCurrentUser();
  if (!checked) return <div className="fixed inset-0 bg-forest-deep flex items-center justify-center"><Loader2 className="w-6 h-6 text-gold animate-spin" /></div>;
  if (!isAdmin) {
    return (
      <PageShell>
        <div className="text-center py-24">
          <h1 className="font-display text-4xl text-hero-cream">Restricted area</h1>
          <p className="mt-4 text-mist">Only firm administrators can access the publishing area.</p>
          <Link to="/" className="inline-block mt-8 text-[10px] tracking-micro uppercase text-gold">Return home</Link>
        </div>
      </PageShell>
    );
  }
  return <Outlet />;
}