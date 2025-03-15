"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Asterisk, User } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

interface SubscriptionOption {
  id: string;
  title: string;
  description: string;
  price: string;
  subPrice?: string;
  icon: React.ReactNode;
}

const subscriptionOptions: SubscriptionOption[] = [
  {
    id: "annually",
    title: "Subscribe (annually)",
    description: "Full access to all collections.",
    price: "$105 / year",
    subPrice: "$8.75 / month",
    icon: <Asterisk className="size-4" />,
  },
  {
    id: "monthly",
    title: "Subscribe (monthly)",
    description: "Full access to all collections.",
    price: "$12 / month",
    icon: <Asterisk className="size-4" />,
  },
  {
    id: "free",
    title: "Free subscription",
    description: "Limited access to free collections only.",
    price: "Free",
    icon: <User className="size-4" />,
  },
];

interface SubscriptionSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SubscriptionSheet({ isOpen, onClose }: SubscriptionSheetProps) {
  const [selectedPlan, setSelectedPlan] = React.useState("annually");

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black"
            onClick={onClose}
          />

          {/* Bottom Sheet */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-x-0 bottom-0 z-50 rounded-t-[32px] bg-white pb-8"
          >
            {/* Handle */}
            <div className="mx-auto mt-3 h-1.5 w-12 rounded-full bg-gray-300" />

            {/* Header */}
            <div className="flex items-center px-6 py-4">
              <button
                onClick={onClose}
                className="rounded-full p-2 hover:bg-gray-100"
              >
                <ArrowLeft className="size-6" />
              </button>
              <h2 className="ml-4 flex-1 text-xl font-semibold">
                Select subscription
              </h2>
            </div>

            {/* Subscription Options */}
            <RadioGroup
              value={selectedPlan}
              onValueChange={setSelectedPlan}
              className="space-y-1 px-4"
            >
              {subscriptionOptions.map((option) => (
                <label
                  key={option.id}
                  className="flex cursor-pointer items-center gap-4 rounded-lg p-4 hover:bg-gray-50"
                >
                  <RadioGroupItem
                    value={option.id}
                    id={option.id}
                    className="mt-0.5"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      {option.icon}
                      <span className="font-medium">{option.title}</span>
                    </div>
                    <p className="text-sm text-gray-500">
                      {option.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{option.price}</div>
                    {option.subPrice && (
                      <div className="text-sm text-gray-500">
                        {option.subPrice}
                      </div>
                    )}
                  </div>
                </label>
              ))}
            </RadioGroup>

            {/* Subscribe Button */}
            <div className="px-4 pt-6">
              <Button
                className="w-full rounded-full bg-black py-6 text-white hover:bg-black/90"
                onClick={() => {
                  console.log("Selected plan:", selectedPlan);
                  onClose();
                }}
              >
                Subscribe
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
