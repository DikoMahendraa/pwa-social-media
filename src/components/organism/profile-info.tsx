import type { UserProfile } from "@/types/profile";
import { ProfileAvatar } from "../atoms/profile-avatar";
import { ProfileStats } from "../molecules/profile-stats";
import { ProfileBio } from "../molecules/profile-bio";
import { ProfileActions } from "../molecules/profile-actions";
import { useSubscriptionStore } from "@/store/subscription";

interface ProfileInfoProps {
  profile: UserProfile;
  isMe?: boolean;
  onSubscribe: () => void;
  onViewFollowers?: () => void;
}

export function ProfileInfo({
  isMe,
  profile,
  onSubscribe,
  onViewFollowers,
}: ProfileInfoProps) {
  const { isSubscribed } = useSubscriptionStore();
  return (
    <div className="py-2">
      <div className="flex mb-4 px-3 items-center">
        <div className="mr-6">
          <div className="relative w-[68px] h-[68px] rounded-full overflow-hidden">
            <ProfileAvatar
              src={profile.avatar}
              alt="Profile picture"
              grayscale
              className="w-[68px] h-[68px] rounded-full overflow-hidden object-top"
            />
          </div>
        </div>
        <ProfileStats
          onViewFollowers={onViewFollowers}
          postCount={profile.postCount ?? 0}
          followerCount={profile.followerCount}
          followingCount={profile.followingCount}
        />
      </div>

      <div className="px-3">
        <ProfileBio
          name={profile.name}
          bio={profile.bio}
          website={profile.website}
          postFrequency="Posts weekly on average"
        />
      </div>

      <div className="px-2 mt-4">
        <ProfileActions
          isMe={isMe}
          isSubscribed={isSubscribed}
          onSubscribe={onSubscribe}
        />
      </div>
    </div>
  );
}
