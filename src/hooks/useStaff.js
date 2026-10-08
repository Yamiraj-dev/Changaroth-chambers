import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";

export default function useStaff() {
  return useQuery({
    queryKey: ["staff"],
    queryFn: () => base44.entities.StaffMember.list("order", 200),
  });
}