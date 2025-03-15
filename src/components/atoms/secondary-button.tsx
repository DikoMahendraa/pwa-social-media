import type React from "react";
import type { ButtonHTMLAttributes } from "react";

interface SecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function SecondaryButton({
  children,
  className = "",
  ...props
}: SecondaryButtonProps) {
  return (
    <button
      className={`border rounded-[12px] flex items-center justify-center ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
