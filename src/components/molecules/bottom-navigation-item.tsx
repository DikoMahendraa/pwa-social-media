"use client";

import type { LucideIcon } from "lucide-react";
import Image from "next/image";

interface BottomNavigationItemProps {
  icon?: LucideIcon;
  profileImage?: string;
  onClick?: () => void;
}

export function BottomNavigationItem({
  icon: Icon,
  profileImage,
  onClick,
}: BottomNavigationItemProps) {
  return (
    <button className="cursor-pointer" onClick={onClick}>
      {Icon && <Icon size={24} />}
      {profileImage && (
        <div className="w-7 h-7 relative border rounded-full overflow-hidden">
          <Image
            src={profileImage || "/placeholder.svg"}
            alt="Profile"
            fill
            className="object-cover object-top"
          />
        </div>
      )}
    </button>
  );
}
