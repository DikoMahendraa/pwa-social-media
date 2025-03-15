"use client";

import { PrimaryButton } from "../atoms/primary-button";
import { SecondaryButton } from "../atoms/secondary-button";

export function ProfileActions({
  onSubscribe,
  isSubscribed,
}: {
  onSubscribe: () => void;
  isSubscribed: boolean;
}) {
  const Button = isSubscribed ? SecondaryButton : PrimaryButton;

  return (
    <div className="flex gap-2">
      <Button
        fullWidth
        onClick={onSubscribe}
        className="w-full border-black py-3.5 border-[1.5px] font-medium text-sm mt-4"
      >
        {isSubscribed ? "Subscribed" : "Subscribe"}
      </Button>
    </div>
  );
}
