import type React from "react";
interface StatCounterProps {
  value: number | string;
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export function StatCounter({ value, label, icon, onClick }: StatCounterProps) {
  return (
    <div onClick={onClick} className="cursor-pointer w-[81px]">
      <div className="font-semibold text-base">{value}</div>
      <div className="text-xs text-[#858585] flex items-center gap-1">
        {icon}
        {label}
      </div>
    </div>
  );
}
