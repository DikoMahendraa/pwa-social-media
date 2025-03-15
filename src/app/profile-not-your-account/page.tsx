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
import { MoreOptions } from "./components/more-options";
import { SubscriptionContent } from "./components/subscribe";
import ReportUser from "./components/report-user";
import PopupInfoStatus from "@/components/molecules/popup-info-status";

export default function Page() {
  const profile: UserProfile = profileData;
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState({
    archive: false,
    copy: false,
    report: false,
    option: false,
    reportSuccess: false,
  });
  const [isBottomSheetSubscribe, setIsBottomSheetSubscribe] = useState(false);

  const tabs = [
    { id: "collections", label: "Collections" },
    { id: "activity", label: "Activity" },
  ];

  const onMoreOptionMenu = (type: string) => {
    if (type === "report") {
      setIsBottomSheetOpen((prev) => ({
        ...prev,
        report: true,
        option: false,
      }));
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">
      <ProfileHeader
        username={profile.username}
        onMoreClick={() =>
          setIsBottomSheetOpen((prev) => ({ ...prev, option: true }))
        }
      />

      <div className="flex-1 overflow-auto hide-scrollbar mb-24">
        <ProfileInfo
          onSubscribe={() => setIsBottomSheetSubscribe(true)}
          profile={profile}
        />
        <TabNavigation tabs={tabs} defaultActiveTab="collections" />
        <PostsGrid posts={profile.posts} />
      </div>

      <BottomNavigation profileImage={profile.avatar} />

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

      <BottomSheet
        isOpen={isBottomSheetSubscribe}
        onClose={() => setIsBottomSheetSubscribe(false)}
      >
        <SubscriptionContent onClose={() => setIsBottomSheetSubscribe(false)} />
      </BottomSheet>

      <BottomSheet
        isOpen={isBottomSheetOpen.report}
        onClose={() =>
          setIsBottomSheetOpen((prev) => ({ ...prev, report: false }))
        }
      >
        <ReportUser
          onReport={() =>
            setIsBottomSheetOpen((prev) => ({
              ...prev,
              report: false,
              reportSuccess: true,
            }))
          }
          onClose={() =>
            setIsBottomSheetOpen((prev) => ({ ...prev, report: false }))
          }
        />
      </BottomSheet>

      <BottomSheet
        isOpen={isBottomSheetOpen.reportSuccess}
        onClose={() =>
          setIsBottomSheetOpen((prev) => ({ ...prev, reportSuccess: false }))
        }
      >
        <PopupInfoStatus
          buttonText="Close"
          icon="success-blue.svg"
          title="Your report has been sent"
          description="Thank you!"
          onClose={() =>
            setIsBottomSheetOpen((prev) => ({ ...prev, reportSuccess: false }))
          }
        />
      </BottomSheet>
    </div>
  );
}
