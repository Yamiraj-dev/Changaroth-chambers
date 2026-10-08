import React from "react";

export default function LawyerDetails({ lawyer }) {
  return (
    <>
      {lawyer.practice && <p className="text-xs text-hero-cream"><span className="text-gold">Practice:</span> {lawyer.practice}</p>}
      {lawyer.education && <p className="mt-1 text-xs text-hero-cream"><span className="text-gold">Education:</span> {lawyer.education}</p>}
      {lawyer.qualifications && <p className="mt-1 text-xs text-hero-cream"><span className="text-gold">Qualifications:</span> {lawyer.qualifications}</p>}
    </>
  );
}