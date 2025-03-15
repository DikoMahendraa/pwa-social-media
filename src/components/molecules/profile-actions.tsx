"use client";

import { PrimaryButton } from "../atoms/primary-button";
import { SecondaryButton } from "../atoms/secondary-button";
import { Pencil } from "lucide-react";

export function ProfileActions({
  onSubscribe,
  isSubscribed,
  isMe,
}: {
  onSubscribe: () => void;
  isSubscribed: boolean;
  isMe?: boolean;
}) {
  const Button = isSubscribed ? SecondaryButton : PrimaryButton;
  const buttonText = (() => {
    if (isMe) {
      return "Edit profile";
    } else if (isSubscribed) {
      return "Subscribed";
    } else {
      return "Subscribe";
    }
  })();

  return (
    <div className="flex gap-2">
      <Button
        fullWidth
        onClick={onSubscribe}
        className="w-full flex gap-2 items-center justify-center border-black py-3.5 border-[1.5px] font-medium text-sm mt-4"
      >
        {isMe && <Pencil size={18} />}
        {buttonText}
      </Button>
    </div>
  );
}
