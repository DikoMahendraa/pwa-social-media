"use client";

import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { PrimaryButton } from "@/components/atoms/primary-button";
import Checkbox from "@/components/atoms/checkbox";

export default function ReportUser({
  onClose,
  onReport,
}: {
  onClose?: () => void;
  onReport?: () => void;
}) {
  const [selectedReason, setSelectedReason] = useState("impersonation");
  const [comments, setComments] = useState("");

  const reasons = [
    { id: "impersonation", label: "Impersonation" },
    { id: "misleading", label: "Misleading content" },
    { id: "inappropriate", label: "Inappropriate content" },
    { id: "copying", label: "Copying content from others" },
    { id: "other", label: "Other" },
  ];

  return (
    <section className="bg-white rounded-t-2xl relative pt-2 max-w-md mx-auto w-full shadow-lg">
      <div className="flex items-center py-2 mb-3">
        <button
          onClick={onClose}
          className="absolute left-2 rounded-full p-2 hover:bg-gray-100"
        >
          <ArrowLeft className="size-6" />
        </button>
        <h2 className="ml-4 flex-1 text-center text-xl font-semibold">
          Report user
        </h2>
      </div>
      <div className="px-2">
        <p className="text-[#858585] text-sm mb-2 px-2">Reason</p>
        <div className="">
          {reasons.map((reason, index) => (
            <label
              key={reason.id}
              className={`flex items-center gap-2 px-4 py-[14px] border-[#f0f0f0] cursor-pointer group ${
                index === 0
                  ? "border boder-t rounded-t-2xl"
                  : "border border-t-0"
              } ${index + 1 === reasons.length && "rounded-b-2xl"}
                
                `}
              onClick={() => setSelectedReason(reason.id)}
            >
              <Checkbox
                className="!w-5 !h-5"
                checked={Boolean(selectedReason === reason.id)}
              />
              <span className="text-sm text-black font-medium">
                {reason.label}
              </span>
            </label>
          ))}
        </div>

        <div className="mt-3">
          <p className="text-[#858585] text-sm mb-2">Additional comments</p>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="Lorem ipsum dolor sit amet consectetur. Odio cursus arcu tempor lorem nec purus."
            className="w-full min-h-[120px] px-4 py-3 rounded-2xl border border-[#e0e0e0] focus:outline-none focus:ring-1 focus:ring-[#e0e0e0] focus:border-transparent active:border-[#e0e0e0] resize-none text-sm text-black font-medium"
          />
        </div>
      </div>
      <div className="px-4 w-full pt-6 pb-8">
        <PrimaryButton fullWidth className="w-full" onClick={onReport}>
          Report
        </PrimaryButton>
      </div>
    </section>
  );
}
