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
      />
    </div>
  );
}
