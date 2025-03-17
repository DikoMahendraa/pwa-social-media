"use client";

import Image from "next/image";

interface BottomNavigationItemProps {
  icon?: string;
  profileImage?: string;
  onClick?: () => void;
}

export function BottomNavigationItem({
  icon,
  profileImage,
  onClick,
}: BottomNavigationItemProps) {
  return (
    <button className="cursor-pointer" onClick={onClick}>
      {icon && (
        <div className="w-6 h-6 relative overflow-hidden">
          <Image src={icon || "/placeholder.svg"} alt="Profile" fill />
        </div>
      )}
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
