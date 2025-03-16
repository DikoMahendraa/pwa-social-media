"use client";

import { useState } from "react";
import type { Post, UserProfile } from "@/types/profile";
import { ProfileHeader } from "@/components/organism/profile-header";
import { ProfileInfo } from "@/components/organism/profile-info";
import { TabNavigation } from "@/components/molecules/tab-navigation";
import { PostsGrid } from "@/components/organism/posts-grid";
import { BottomNavigation } from "@/components/organism/bottom-navigation";
import { BottomSheet } from "@/components/molecules/bottom-sheet";
import { profileData } from "@/data/profile-data";
import { MoreOptions } from "./components/more-options";
import { useToast } from "@/components/molecules/toast";
import { PostsPrivateGrid } from "@/components/organism/post-private-grid";
import PopupInfoStatus from "@/components/molecules/popup-info-status";
import { profileDataPrivate } from "@/data/profile-data-private";

const tabs = [
  { id: "collections", label: "Collections" },
  { id: "activity", label: "Activity" },
];

export default function Page() {
  const profile: UserProfile = profileData;
  const [detail, setDetail] = useState<Post | null>(null);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState({
    report: false,
    option: false,
    subcribed: false,
    detail: false,
  });
  const { addToast } = useToast();

  const onMoreOptionMenu = (type: string) => {
    if (type === "report") {
      setIsBottomSheetOpen((prev) => ({
        ...prev,
        report: true,
        option: false,
      }));
    } else if (type === "copy") {
      setIsBottomSheetOpen((prev) => ({
        ...prev,
        option: false,
      }));
      addToast("Link copied!", "success", 3000, "top-full");
    }
  };

  const onEdit = () => {
    setIsBottomSheetOpen((prev) => ({ ...prev, subcribed: false }));
  };

  const onViewDetail = (items: Post) => {
    setDetail({
      ...items,
      logo: items.logoAlias,
    });
    setIsBottomSheetOpen((prev) => ({ ...prev, detail: true }));
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">
      <ProfileHeader
        isMe
        username={profile.username}
        onMoreClick={() =>
          setIsBottomSheetOpen((prev) => ({ ...prev, option: true }))
        }
      />

      <div className="flex-1 overflow-auto hide-scrollbar mb-24">
        <ProfileInfo isMe onSubscribe={onEdit} profile={profile} />
        <TabNavigation tabs={tabs} defaultActiveTab="collections" />
        <PostsGrid isMe posts={profile.posts} />
        <div className="my-3 mb px-2">
          <p className="text-black text-base font-semibold">
            Private and saved collections
          </p>
          <p className="text-[13px] text-[#858585]">
            These do not appear on your public profile.
          </p>
        </div>
        <PostsPrivateGrid
          onClick={onViewDetail}
          posts={profileDataPrivate.posts}
        />
      </div>

      <BottomNavigation profileImage={profile.avatar} />

      {/* Section - Option Menu */}
      <BottomSheet
        isOpen={isBottomSheetOpen.option}
        onClose={() =>
          setIsBottomSheetOpen((prev) => ({ ...prev, option: false }))
        }
      >
        <MoreOptions
          onClick={(type: string) => onMoreOptionMenu(type)}
          onClose={() =>
            setIsBottomSheetOpen((prev) => ({ ...prev, option: false }))
          }
        />
      </BottomSheet>

      {/* Section - Preview Collection */}
      <BottomSheet
        isOpen={isBottomSheetOpen.detail}
        onClose={() =>
          setIsBottomSheetOpen((prev) => ({ ...prev, detail: false }))
        }
      >
        <PopupInfoStatus
          buttonText="Close"
          icon={detail?.logo ?? ""}
          title={`“${detail?.title}“`}
          description={detail?.description}
          onClick={() =>
            setIsBottomSheetOpen((prev) => ({ ...prev, detail: false }))
          }
        />
      </BottomSheet>
    </div>
  );
}
