import type React from "react";
import type { ButtonHTMLAttributes } from "react";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  fullWidth?: boolean;
}

export function PrimaryButton({
  children,
  fullWidth = false,
  className = "",
  ...props
}: PrimaryButtonProps) {
  return (
    <button
      className={`bg-black text-white text-sm rounded-[12px] py-3 px-4 font-medium ${
        fullWidth ? "flex-1" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
