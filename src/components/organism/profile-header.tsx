"use client";

import Link from "next/link";
import { Menu, MoreHorizontal } from "lucide-react";
import { IconButton } from "../atoms/icon-button";
import Image from "next/image";

interface ProfileHeaderProps {
  username: string;
  isMe?: boolean;
  onMoreClick: () => void;
}

export function ProfileHeader({
  isMe,
  username,
  onMoreClick,
}: ProfileHeaderProps) {
  return (
    <header className="flex items-center justify-between px-3 py-[14px]">
      <Link href="#" className="p-1">
        <Image
          alt="icon-arrow-left"
          src="/icons/arrow-left.svg"
          width={24}
          height={24}
        />
      </Link>
      <h1 className="text-center font-medium">{username}</h1>

      <IconButton icon={isMe ? Menu : MoreHorizontal} onClick={onMoreClick} />
    </header>
  );
}
