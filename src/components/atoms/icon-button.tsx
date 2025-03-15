"use client";

import type { LucideIcon } from "lucide-react";
import type { ButtonHTMLAttributes } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: LucideIcon;
  size?: number;
}

export function IconButton({
  icon: Icon,
  size = 24,
  className = "",
  ...props
}: IconButtonProps) {
  return (
    <button className={`p-1 ${className}`} {...props}>
      <Icon size={size} />
    </button>
  );
}
