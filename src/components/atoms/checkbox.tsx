"use client";

import { Check } from "lucide-react";

export default function Checkbox({
  checked,
  setChecked,
}: {
  checked?: boolean;
  setChecked?: (value: boolean) => void;
}) {
  return (
    <button
      onClick={() => setChecked?.(!checked)}
      className={`w-6 h-6 flex border border-2 items-center rounded-sm justify-center border-black 
        ${checked ? "bg-black text-white" : "bg-white text-black"} transition`}
    >
      {checked && <Check size={16} />}
    </button>
  );
}
