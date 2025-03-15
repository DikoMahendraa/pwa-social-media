import type React from "react";
import type { ButtonHTMLAttributes } from "react";

interface TabButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  active?: boolean;
}

export function TabButton({
  children,
  active = false,
  className = "",
  ...props
}: TabButtonProps) {
  return (
    <button
      className={`flex-1 cursor-pointer py-3 text-sm ${
        active ? "font-medium border-b-2 border-black" : "text-[#858585]"
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
