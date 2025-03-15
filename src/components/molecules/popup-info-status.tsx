"use client";

import React from "react";
import { SecondaryButton } from "@/components/atoms/secondary-button";
import Image from "next/image";
import { parseHtml } from "@/helper/htmlParser";

export default function PopupInfoStatus({
  onClick,
  onClickSecondary,
  icon,
  title,
  description,
  descriptionSecondary,
  buttonText,
  buttonTextSecondary,
}: {
  onClick?: () => void;
  onClickSecondary?: () => void;
  icon: string;
  title: string;
  description: string | React.ReactNode;
  descriptionSecondary?: string;
  buttonText: string;
  buttonTextSecondary?: string;
}) {
  return (
    <section className="bg-white rounded-t-2xl pt-8 max-w-md mx-auto w-full shadow-lg">
      <div className="text-center">
        {icon && (
          <div className="flex justify-center">
            <Image alt="icon-success" src={icon} width={56} height={56} />
          </div>
        )}
        {title && (
          <p className="text-black text-xl font-semibold mt-3 mb-1">{title}</p>
        )}

        {description && (
          <p className="text-[13px] px-10 text-[#858585]">
            {parseHtml(String(description))}
          </p>
        )}

        {descriptionSecondary && (
          <p className="text-[13px] px-20 text-[#858585] mt-1">
            {descriptionSecondary}
          </p>
        )}
      </div>
      <div className="px-4 w-full pt-6 pb-8">
        {buttonText && (
          <SecondaryButton
            onClick={onClick}
            className="w-full border-black py-3.5 border-[1.5px] font-medium text-sm mt-4"
          >
            {buttonText}
          </SecondaryButton>
        )}
        {buttonTextSecondary && (
          <SecondaryButton
            onClick={onClickSecondary}
            className="w-full bg-[#D91818] text-white py-3.5 border-[1.5px] font-medium text-sm mt-2"
          >
            {buttonTextSecondary}
          </SecondaryButton>
        )}
      </div>
    </section>
  );
}
