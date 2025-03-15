import { formatNumber } from "@/helper/formatNumber";
import { StatCounter } from "../atoms/stat-counter";
import Image from "next/image";

interface ProfileStatsProps {
  postCount: number;
  followerCount: number;
  followingCount: number;
}

export function ProfileStats({
  postCount,
  followerCount,
  followingCount,
}: ProfileStatsProps) {
  return (
    <div className="flex flex-1 justify-between">
      <StatCounter value={postCount} label="Collections" />
      <StatCounter
        value={formatNumber(followerCount)}
        label="Followers"
        icon={
          <Image
            src="/icons/instagram.svg"
            width={12}
            height={12}
            alt="icon-instagram"
          />
        }
      />
      <StatCounter value={formatNumber(followingCount)} label="Following" />
    </div>
  );
}
