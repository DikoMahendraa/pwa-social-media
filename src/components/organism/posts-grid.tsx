import type { Post } from "@/types/profile";
import { PostCard } from "../molecules/post-card";

interface PostsGridProps {
  posts: Post[];
  isMe?: boolean;
}

export function PostsGrid({ posts, isMe }: PostsGridProps) {
  return (
    <div className="grid grid-cols-2 gap-2 px-2 mt-4">
      {posts?.map((post: Post) => (
        <PostCard isMe={isMe} key={post.id} post={post} />
      ))}
    </div>
  );
}
