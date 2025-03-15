import type { UserProfile } from "@/types/profile";
import { ProfileAvatar } from "../atoms/profile-avatar";
import { ProfileStats } from "../molecules/profile-stats";
import { ProfileBio } from "../molecules/profile-bio";
import { ProfileActions } from "../molecules/profile-actions";
import { useSubscriptionStore } from "@/store/subscription";

interface ProfileInfoProps {
  profile: UserProfile;
  onSubscribe: () => void;
}

export function ProfileInfo({ profile, onSubscribe }: ProfileInfoProps) {
  const { isSubscribed } = useSubscriptionStore();
  return (
    <div className="p-4">
      <div className="flex mb-4">
        <div className="mr-8">
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
          postCount={profile.postCount ?? 0}
          followerCount={profile.followerCount}
          followingCount={profile.followingCount}
        />
      </div>

      <div className="mb-4">
        <ProfileBio
          name={profile.name}
          bio={profile.bio}
          website={profile.website}
          postFrequency="Posts weekly on average"
        />
      </div>

      <ProfileActions isSubscribed={isSubscribed} onSubscribe={onSubscribe} />
    </div>
  );
}
