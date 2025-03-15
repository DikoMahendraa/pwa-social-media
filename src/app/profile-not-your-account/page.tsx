"use client";

import { useState } from "react";
import type { UserProfile } from "@/types/profile";
import { ProfileHeader } from "@/components/organism/profile-header";
import { ProfileInfo } from "@/components/organism/profile-info";
import { TabNavigation } from "@/components/molecules/tab-navigation";
import { PostsGrid } from "@/components/organism/posts-grid";
import { BottomNavigation } from "@/components/organism/bottom-navigation";
import { BottomSheet } from "@/components/molecules/bottom-sheet";
import { profileData } from "@/data/profile-data";
import { SecondaryButton } from "@/components/atoms/secondary-button";
import Image from "next/image";

export default function Page() {
  const profile: UserProfile = profileData;
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const tabs = [
    { id: "collections", label: "Collections" },
    { id: "activity", label: "Activity" },
  ];

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">
      <ProfileHeader
        username={profile.username}
        onMoreClick={() => setIsBottomSheetOpen(true)}
      />

      <div className="flex-1 overflow-auto hide-scrollbar mb-24">
        <ProfileInfo profile={profile} />
        <TabNavigation tabs={tabs} defaultActiveTab="collections" />
        <PostsGrid posts={profile.posts} />
      </div>

      <BottomNavigation profileImage={profile.avatar} />

      <BottomSheet
        isOpen={isBottomSheetOpen}
        onClose={() => setIsBottomSheetOpen(false)}
      >
        <div className="bg-white rounded-t-2xl max-w-md mx-auto w-full p-2 shadow-lg">
          <div className="space-y-2">
            <button
              onClick={() => console.log("Report clicked")}
              className="flex items-center w-full p-4 gap-2 font-medium text-black text-sm border-[#f0f0f0] rounded-2xl border"
            >
              <Image alt="icon" width={24} height={24} src="/icons/flag.svg" />
              <span>Report user</span>
            </button>

            <button
              onClick={() => console.log("Archive clicked")}
              className="flex items-center gap-2 w-full p-4 font-medium text-black text-sm border-[#f0f0f0] rounded-2xl border"
            >
              <Image alt="icon" width={24} height={24} src="/icons/copy.svg" />
              <span>Copy profile link</span>
            </button>

            <button
              onClick={() => console.log("Share clicked")}
              className="flex items-center gap-2 w-full p-4 border font-medium text-black text-sm border-[#f0f0f0] rounded-2xl"
            >
              <Image alt="icon" width={24} height={24} src="/icons/share.svg" />
              <span>Share this profile</span>
            </button>

            <SecondaryButton
              onClick={() => setIsBottomSheetOpen(false)}
              className="w-full border-black py-3.5 border-[1.5px] font-medium text-sm mt-4"
            >
              Close
            </SecondaryButton>
          </div>
        </div>
      </BottomSheet>
    </div>
  );
}
