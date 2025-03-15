"use client";

import Link from "next/link";
import { ArrowLeft, MoreHorizontal } from "lucide-react";
import { IconButton } from "../atoms/icon-button";

interface ProfileHeaderProps {
  username: string;
  onMoreClick: () => void;
}

export function ProfileHeader({ username, onMoreClick }: ProfileHeaderProps) {
  return (
    <header className="flex items-center justify-between p-4">
      <Link href="#" className="p-1">
        <ArrowLeft size={24} />
      </Link>
      <h1 className="text-center font-medium">{username}</h1>
      <IconButton icon={MoreHorizontal} onClick={onMoreClick} />
    </header>
  );
}
