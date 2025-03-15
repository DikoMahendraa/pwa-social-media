"use client";

import Checkbox from "@/components/atoms/checkbox";
import { PrimaryButton } from "@/components/atoms/primary-button";
import { useSubscriptionStore } from "@/store/subscription";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import React from "react";

interface SubscriptionOption {
  id: string;
  title: string;
  description: string;
  price: string;
  subPrice?: string;
  icon: React.ReactNode;
}

interface SubscriptionSheetProps {
  onClose: () => void;
}

const subscriptionOptions: SubscriptionOption[] = [
  {
    id: "annually",
    title: "Subscribe (annually)",
    description: "Full access to all collections.",
    price: "$105 / year",
    subPrice: "$8.75 / month",
    icon: (
      <Image alt="sticker" src="/icons/subscribe.svg" width={24} height={24} />
    ),
  },
  {
    id: "monthly",
    title: "Subscribe (monthly)",
    description: "Full access to all collections.",
    price: "$12 / month",
    icon: (
      <Image
        alt="subscribe"
        src="/icons/subscribe.svg"
        width={24}
        height={24}
      />
    ),
  },
  {
    id: "free",
    title: "Free subscription",
    description: "Limited access to free collections only.",
    price: "Free",
    icon: (
      <Image alt="sticker" src="/icons/sticker.svg" width={24} height={24} />
    ),
  },
];

export const SubscriptionContent = ({ onClose }: SubscriptionSheetProps) => {
  const { setSubscription, selectPlan, selectedPlan } = useSubscriptionStore();

  const onSelectPlan = (option: SubscriptionOption) => {
    selectPlan(option.id);
  };

  return (
    <section className="bg-white rounded-t-2xl relative pt-2 max-w-md mx-auto w-full shadow-lg">
      <div className="flex items-center py-2 mb-3">
        <button
          onClick={() => {
            onClose();
            selectPlan("");
          }}
          className="absolute rounded-full p-2 hover:bg-gray-100"
        >
          <ArrowLeft className="size-6" />
        </button>
        <h2 className="ml-4 flex-1 text-center text-xl font-semibold">
          Select subscription
        </h2>
      </div>

      <div className="space-y-2 px-2">
        {subscriptionOptions.map((option) => (
          <div
            key={option.id}
            onClick={() => onSelectPlan(option)}
            className="cursor-pointer border rounded-2xl border-[#f0f0f0] items-center gap-4 p-4 hover:bg-gray-50"
          >
            <div className="flex items-center justify-between mb-3">
              {option.icon}
              <Checkbox checked={Boolean(selectedPlan === option.id)} />
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm text-black">
                {option.title}
              </span>
              <div className="font-semibold text-sm text-black">
                {option.price}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#858585] text-[13px]">{option.description}</p>
              {option.subPrice && (
                <div className="text-sm text-[#858585]">{option.subPrice}</div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="px-4 w-full pt-6 pb-8">
        <PrimaryButton
          fullWidth
          className="w-full"
          onClick={() => {
            setSubscription(true);
            onClose();
          }}
        >
          Subscribe
        </PrimaryButton>
      </div>
    </section>
  );
};
