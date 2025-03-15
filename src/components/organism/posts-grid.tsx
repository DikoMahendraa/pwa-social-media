import type { Post } from "@/types/profile";
import { PostCard } from "../molecules/post-card";

interface PostsGridProps {
  posts: Post[];
  isMe?: boolean;
}

export function PostsGrid({ posts, isMe }: PostsGridProps) {
  return (
    <div className="grid grid-cols-2 gap-1 p-1">
      {posts?.map((post: Post) => (
        <PostCard isMe={isMe} key={post.id} post={post} />
      ))}
    </div>
  );
}
