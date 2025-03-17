"use client";

import { BottomNavigationItem } from "../molecules/bottom-navigation-item";

interface BottomNavigationProps {
  profileImage: string;
}

export function BottomNavigation({ profileImage }: BottomNavigationProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white flex justify-between p-4">
      <BottomNavigationItem icon="/icons/magnifying.svg" />
      <BottomNavigationItem icon="/icons/plus.svg" />
      <BottomNavigationItem profileImage={profileImage} />
    </div>
  );
}
