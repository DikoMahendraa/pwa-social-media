"use client";

import Image from "next/image";
import { CircleIcon as CircleSmall } from "lucide-react";
import type { Post } from "@/types/profile";
import { Badge } from "../atoms/badge";

interface PostCardProps {
  post: Post;
  onClick: () => void;
}

export function PostPrivateCard({ post, onClick }: PostCardProps) {
  return (
    <div
      onClick={onClick}
      className="relative max-h-[173px] h-full cursor-pointer rounded-2xl overflow-hidden bg-gray-100"
    >
      <Image
        src={post?.photos?.[0]?.url || "/placeholder.svg"}
        alt="Post image"
        width={1000}
        height={1000}
        className={`w-full h-[173px] object-cover`}
      />
      <div className="absolute top-2 right-2 left-2 gap-2 flex justify-between">
        <div className="flex gap-2 items-center">
          <Badge
            className="py-1"
            icon={
              <Image
                alt="circle-three"
                src="/icons/circle-three.svg"
                width={16}
                height={16}
              />
            }
            label={post?.userTags?.length ?? 0}
          />
          <Badge
            className="py-1"
            icon={<CircleSmall className="fill-white" size={14} />}
            label={post?.userTags?.length ?? 0}
          />
        </div>

        <div className="h-7 w-7 overflow-hidden p-1 bg-black text-white rounded-full">
          <Image
            alt="circle-three"
            src={post?.logo ?? "/"}
            width={80}
            height={80}
          />
        </div>
      </div>

      <p
        className="absolute bottom-2 left-2 text-white bg-transparent text-[13px] font-medium"
        style={{ textShadow: "0px 0px 20px #000000" }}
      >
        {post.title}
      </p>
    </div>
  );
}
