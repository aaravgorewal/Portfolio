import React from "react";

export function Card({ children, className }: any) {
  return (
    <div className={`rounded-2xl border border-[#1E293B] bg-[#020617]/80 backdrop-blur-md shadow-2xl ${className}`}>
      {children}
    </div>
  );
}
