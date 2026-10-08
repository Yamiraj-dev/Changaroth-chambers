import React from "react";
import { Link } from "react-router-dom";
import { Loader2, Plus } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import AdminSwitch from "@/components/admin/AdminSwitch";
import StaffRow from "@/components/admin/StaffRow";
import useStaff from "@/hooks/useStaff";

const GROUPS = [{ key: "lawyer", label: "Lawyers" }, { key: "support", label: "Rest of the team" }];

export default function AdminTeam() {
  const { data: staff, isLoading } = useStaff();
  const qc = useQueryClient();
  const refresh = () => qc.invalidateQueries({ queryKey: ["staff"] });

  const move = async (list, i, dir) => {
    const reordered = [...list];
    [reordered[i], reordered[i + dir]] = [reordered[i + dir], reordered[i]];
    await base44.entities.StaffMember.bulkUpdate(reordered.map((m, idx) => ({ id: m.id, order: idx })));
    refresh();
  };
  const remove = async (m) => {
    if (!window.confirm(`Remove ${m.name}?`)) return;
    await base44.entities.StaffMember.delete(m.id);
    refresh();
  };

  return (
    <PageShell>
      <PageHeader eyebrow="Publishing" title="Team" description="Add, edit, reorder and remove staff members.">
        <div className="flex flex-wrap gap-6 items-center self-start">
          <AdminSwitch />
          <Link to="/admin/team/new" className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-forest text-[10px] tracking-micro uppercase hover:bg-gold-light transition-colors">
            <Plus className="w-3.5 h-3.5" /> New member
          </Link>
        </div>
      </PageHeader>
      {isLoading ? (
        <div className="flex justify-center py-20"><Loader2 className="w-6 h-6 text-gold animate-spin" /></div>
      ) : GROUPS.map((g) => {
        const list = staff.filter((s) => (s.group || "lawyer") === g.key);
        return (
          <div key={g.key} className="mb-12">
            <p className="text-[10px] tracking-micro uppercase text-gold mb-2">{g.label} ({list.length})</p>
            {list.length === 0 && <p className="py-6 text-mist text-sm">No members yet.</p>}
            {list.map((m, i) => (
              <StaffRow key={m.id} member={m} first={i === 0} last={i === list.length - 1} onMove={(d) => move(list, i, d)} onDelete={() => remove(m)} />
            ))}
          </div>
        );
      })}
    </PageShell>
  );
}