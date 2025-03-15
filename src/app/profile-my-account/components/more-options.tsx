"use client";

import { SecondaryButton } from "@/components/atoms/secondary-button";
import Image from "next/image";
import React from "react";

export const MoreOptions = ({
  onClose,
  onClick,
}: {
  onClose: () => void;
  onClick: (type: string) => void;
}) => {
  return (
    <div className="bg-white rounded-t-2xl max-w-md mx-auto w-full p-2 shadow-lg">
      <div className="space-y-2">
        <button
          onClick={() => onClick("report")}
          className="flex items-center w-full p-4 gap-2 font-medium text-black text-sm border-[#f0f0f0] rounded-2xl border"
        >
          <Image alt="icon" width={24} height={24} src="/icons/flag.svg" />
          <span>Report user</span>
        </button>

        <button
          onClick={() => onClick("copy")}
          className="flex items-center gap-2 w-full p-4 font-medium text-black text-sm border-[#f0f0f0] rounded-2xl border"
        >
          <Image alt="icon" width={24} height={24} src="/icons/copy.svg" />
          <span>Copy profile link</span>
        </button>

        <button
          onClick={() => onClick("share")}
          className="flex items-center gap-2 w-full p-4 border font-medium text-black text-sm border-[#f0f0f0] rounded-2xl"
        >
          <Image alt="icon" width={24} height={24} src="/icons/share.svg" />
          <span>Share this profile</span>
        </button>

        <SecondaryButton
          onClick={onClose}
          className="w-full border-black py-3.5 border-[1.5px] font-medium text-sm mt-4"
        >
          Close
        </SecondaryButton>
      </div>
    </div>
  );
};
