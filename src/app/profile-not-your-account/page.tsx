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
import { useToast } from "@/components/molecules/toast";
import SubscribedOption from "./components/subscribed-option";
import { useSubscriptionStore } from "@/store/subscription";

export default function Page() {
  const profile: UserProfile = profileData;
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState({
    archive: false,
    copy: false,
    report: false,
    option: false,
    reportSuccess: false,
    subcribed: false,
    confirmationUnsubscribed: false,
    unsubcribedSuccess: false,
    changePlanSubscription: false,
    changePlanSuccess: false,
    viewFollowers: false,
  });
  const [isBottomSheetSubscribe, setIsBottomSheetSubscribe] = useState(false);
  const { addToast } = useToast();
  const { isSubscribed, setSubscription } = useSubscriptionStore();

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
    } else if (type === "copy") {
      setIsBottomSheetOpen((prev) => ({
        ...prev,
        option: false,
      }));
      addToast("Link copied!", "success", 3000, "top-full");
    }
  };

  const onSubcribed = () => {
    if (isSubscribed) {
      setIsBottomSheetOpen((prev) => ({ ...prev, subcribed: true }));
      setIsBottomSheetSubscribe(false);
    } else {
      setIsBottomSheetOpen((prev) => ({ ...prev, subcribed: false }));
      setIsBottomSheetSubscribe(true);
    }
  };

  const onSubscribedMenuOption = (type: string) => {
    if (type === "change-subscription") {
      setIsBottomSheetSubscribe(true);
      setIsBottomSheetOpen((prev) => ({ ...prev, subcribed: false }));
    } else if (type === "unsubcribe") {
      setIsBottomSheetOpen((prev) => ({
        ...prev,
        confirmationUnsubscribed: true,
        subcribed: false,
      }));
    }
  };

  const onUpgradePlan = () => {
    if (isSubscribed) {
      setIsBottomSheetSubscribe(false);
      setIsBottomSheetOpen((prev) => ({
        ...prev,
        changePlanSubscription: true,
      }));
    } else {
      setSubscription(true);
      setIsBottomSheetSubscribe(false);
    }
  };

  const onViewFollowers = () => {
    setIsBottomSheetOpen((prev) => ({
      ...prev,
      viewFollowers: true,
    }));
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
          onViewFollowers={!isSubscribed ? onViewFollowers : () => ({})}
          onSubscribe={onSubcribed}
          profile={profile}
        />
        <TabNavigation tabs={tabs} defaultActiveTab="collections" />
        <PostsGrid posts={profile.posts} />
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

      {/* Section - Subscribe Menu | Change Subscription */}
      <BottomSheet
        isOpen={isBottomSheetSubscribe}
        onClose={() => setIsBottomSheetSubscribe(false)}
      >
        <SubscriptionContent
          isSubscribed={isSubscribed}
          onClick={onUpgradePlan}
          btnText={isSubscribed ? "Update" : "Subscribe"}
          title="Select subscription"
          onClose={() => setIsBottomSheetSubscribe(false)}
        />
      </BottomSheet>

      {/* Section - Report */}
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

      {/* Section - Report Success */}
      <BottomSheet
        isOpen={isBottomSheetOpen.reportSuccess}
        onClose={() =>
          setIsBottomSheetOpen((prev) => ({ ...prev, reportSuccess: false }))
        }
      >
        <PopupInfoStatus
          buttonText="Close"
          icon="/icons/status/success-blue.svg"
          title="Your report has been sent"
          description="Thank you!"
          onClick={() =>
            setIsBottomSheetOpen((prev) => ({ ...prev, reportSuccess: false }))
          }
        />
      </BottomSheet>

      {/* Section - Subcribed */}
      <BottomSheet
        isOpen={isBottomSheetOpen.subcribed}
        onClose={() =>
          setIsBottomSheetOpen((prev) => ({ ...prev, subcribed: false }))
        }
      >
        <SubscribedOption
          onClick={(type: string) => onSubscribedMenuOption(type)}
          onClose={() => ({})}
        />
      </BottomSheet>

      {/* Section - Confirmation Unsubscribed */}
      <BottomSheet
        isOpen={isBottomSheetOpen.confirmationUnsubscribed}
        onClose={() =>
          setIsBottomSheetOpen((prev) => ({
            ...prev,
            confirmationUnsubscribed: false,
          }))
        }
      >
        <PopupInfoStatus
          buttonText="Close"
          buttonTextSecondary="Confirm cancellation"
          icon="/icons/status/warning-red.svg"
          title="Confirm cancellation?"
          description="If you cancel, you’ll no longer have full access to molly_j’s profile"
          descriptionSecondary="Any saved collections from this user will be removed from your profile"
          onClickSecondary={() => {
            setSubscription(false);
            setIsBottomSheetOpen((prev) => ({
              ...prev,
              confirmationUnsubscribed: false,
              unsubcribedSuccess: true,
            }));
          }}
          onClick={() =>
            setIsBottomSheetOpen((prev) => ({
              ...prev,
              confirmationUnsubscribed: false,
            }))
          }
        />
      </BottomSheet>

      {/* Section - Unsubscribed Success*/}
      <BottomSheet
        isOpen={isBottomSheetOpen.unsubcribedSuccess}
        onClose={() =>
          setIsBottomSheetOpen((prev) => ({
            ...prev,
            unsubcribedSuccess: false,
          }))
        }
      >
        <PopupInfoStatus
          buttonText="Close"
          icon="/icons/status/success-blue.svg"
          title="Your subscription has been cancelled"
          description={`Your full access to molly_j will expire on <strong>19 October 2025</strong>.`}
          onClick={() => {
            setIsBottomSheetOpen((prev) => ({
              ...prev,
              unsubcribedSuccess: false,
            }));
          }}
        />
      </BottomSheet>

      {/* Section - Confirmation Change Unsubscribed */}
      <BottomSheet
        isOpen={isBottomSheetOpen.changePlanSubscription}
        onClose={() =>
          setIsBottomSheetOpen((prev) => ({
            ...prev,
            changePlanSubscription: false,
          }))
        }
      >
        <PopupInfoStatus
          buttonText="Close"
          title="Confirm update?"
          buttonTextSecondary="Confirm update"
          icon="/icons/status/warning-red.svg"
          description="If you update your subscription, you’ll no longer have full access to molly_j’s profile"
          descriptionSecondary="Any saved collections from this user will be removed from your profile"
          onClickSecondary={() => {
            setSubscription(false);
            setIsBottomSheetOpen((prev) => ({
              ...prev,
              changePlanSuccess: true,
              changePlanSubscription: false,
            }));
          }}
          onClick={() =>
            setIsBottomSheetOpen((prev) => ({
              ...prev,
              changePlanSubscription: false,
            }))
          }
        />
      </BottomSheet>

      {/* Section - Change Plan Subscription Success*/}
      <BottomSheet
        isOpen={isBottomSheetOpen.changePlanSuccess}
        onClose={() =>
          setIsBottomSheetOpen((prev) => ({
            ...prev,
            changePlanSuccess: false,
          }))
        }
      >
        <PopupInfoStatus
          buttonText="Close"
          icon="/icons/status/success-blue.svg"
          title="Your subscription has been updated"
          description={`You have changed to a free subscription. Your full access to molly_j will expire on <strong>19 October 2025</strong>.`}
          onClick={() => {
            setIsBottomSheetOpen((prev) => ({
              ...prev,
              changePlanSuccess: false,
            }));
          }}
        />
      </BottomSheet>

      {/* Section - View Followers*/}
      <BottomSheet
        isOpen={isBottomSheetOpen.viewFollowers}
        onClose={() =>
          setIsBottomSheetOpen((prev) => ({
            ...prev,
            viewFollowers: false,
          }))
        }
      >
        <PopupInfoStatus
          buttonText="Close"
          buttonTextThird="Subscribe"
          icon="/icons/status/subscribe-blue.svg"
          title="Upgrade subscription"
          description="Upgrade to a paid subscription to see who they follow."
          onClick={() => {
            setIsBottomSheetOpen((prev) => ({
              ...prev,
              viewFollowers: false,
            }));
          }}
          onClickThird={() => {
            setIsBottomSheetSubscribe(true);
            setIsBottomSheetOpen((prev) => ({
              ...prev,
              viewFollowers: false,
            }));
          }}
        />
      </BottomSheet>
    </div>
  );
}
