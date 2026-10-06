import React, { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { base44 } from "@/api/base44Client";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import SocialCard from "@/components/social/SocialCard";
import useCurrentUser from "@/hooks/useCurrentUser";

export default function Social() {
  const { isAdmin } = useCurrentUser();
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    base44.entities.SocialPost.list("-posted_date", 60).then(setPosts);
  }, [isAdmin]);

  const toggleHidden = async (post) => {
    await base44.entities.SocialPost.update(post.id, { hidden: !post.hidden });
    setPosts((ps) => ps.map((p) => (p.id === post.id ? { ...p, hidden: !p.hidden } : p)));
  };

  return (
    <PageShell>
      <PageHeader
        eyebrow="Social"
        title="Latest from our channels"
        description="Recent updates from Changaroth Chambers on LinkedIn and Instagram."
      />
      {posts === null && <div className="flex justify-center py-24"><Loader2 className="w-6 h-6 text-gold animate-spin" /></div>}
      {posts?.length === 0 && <p className="text-mist text-center py-24 font-display text-xl">No posts to show yet.</p>}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        {posts?.map((p, i) => <SocialCard key={p.id} post={p} index={i} isAdmin={isAdmin} onToggleHidden={toggleHidden} />)}
      </div>
    </PageShell>
  );
}