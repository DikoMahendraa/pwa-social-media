"use client";

import Image from "next/image";
import { PrimaryButton } from "../atoms/primary-button";
import { SecondaryButton } from "../atoms/secondary-button";

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
        onClick={onSubscribe}
        className="w-full flex gap-2 items-center justify-center border-black py-3.5 border-[1.5px] font-medium text-sm"
      >
        {isMe && (
          <Image
            alt="icon-image"
            src="/icons/pencil-white.svg"
            width={20}
            height={20}
          />
        )}
        {buttonText}
      </Button>
    </div>
  );
}
