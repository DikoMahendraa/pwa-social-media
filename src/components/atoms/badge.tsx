import type React from "react";
interface BadgeProps {
  icon?: React.ReactNode;
  label: React.ReactNode;
  className?: string;
}

export function Badge({ icon, label, className = "" }: BadgeProps) {
  return (
    <div
      className={`bg-black/50 text-white rounded-full px-2 py-0.5 text-xs flex items-center ${className}`}
    >
      {icon && <span className="mr-1">{icon}</span>}
      <span>{label}</span>
    </div>
  );
}
