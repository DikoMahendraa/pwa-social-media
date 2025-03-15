"use client";

import React from "react";
import { SecondaryButton } from "@/components/atoms/secondary-button";
import Image from "next/image";

export default function PopupInfoStatus({
  onClose,
  icon,
  title,
  description,
  buttonText,
}: {
  onClose?: () => void;
  icon: string;
  title: string;
  description: string;
  buttonText: string;
}) {
  return (
    <section className="bg-white rounded-t-2xl pt-8 max-w-md mx-auto w-full shadow-lg">
      <div className="text-center">
        <div className="flex justify-center">
          <Image
            alt="icon-success"
            src={`/icons/status/${icon}`}
            width={56}
            height={56}
          />
        </div>

        <p className="text-black text-xl font-semibold mt-3 mb-1">{title}</p>
        <p className="text-[13px] text-[#858585]">{description}</p>
      </div>
      <div className="px-4 w-full pt-6 pb-8">
        <SecondaryButton
          onClick={onClose}
          className="w-full border-black py-3.5 border-[1.5px] font-medium text-sm mt-4"
        >
          {buttonText}
        </SecondaryButton>
      </div>
    </section>
  );
}
