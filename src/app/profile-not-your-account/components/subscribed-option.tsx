import { SecondaryButton } from "@/components/atoms/secondary-button";
import Image from "next/image";
import React from "react";

export default function SubscribedOption({
  onClose,
  onClick,
}: {
  onClose: () => void;
  onClick: (type: string) => void;
}) {
  return (
    <div className="bg-white rounded-t-2xl max-w-md mx-auto w-full p-2 shadow-lg">
      <div className="space-y-2">
        <button
          onClick={() => onClick("change-subscription")}
          className="flex items-center cursor-pointer w-full p-4 gap-2 font-medium text-black text-sm border-[#f0f0f0] rounded-2xl border"
        >
          <Image alt="icon" width={24} height={24} src="/icons/pencil.svg" />
          <span>Change subscription</span>
        </button>

        <button
          onClick={() => onClick("payment-method")}
          className="flex items-center cursor-pointer gap-2 w-full p-4 font-medium text-black text-sm border-[#f0f0f0] rounded-2xl border"
        >
          <Image alt="icon" width={24} height={24} src="/icons/debit.svg" />
          <span>Edit payment method</span>
        </button>

        <button
          onClick={() => onClick("unsubcribe")}
          className="flex items-center cursor-pointer gap-2 w-full p-4 border font-medium text-black text-sm border-[#f0f0f0] rounded-2xl"
        >
          <Image alt="icon" width={24} height={24} src="/icons/x.svg" />
          <span>Unsubscribe</span>
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
}
