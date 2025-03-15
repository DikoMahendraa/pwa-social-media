import type { Post } from "@/types/profile";
import { PostCard } from "../molecules/post-card";

interface PostsGridProps {
  posts: Post[];
}

export function PostsGrid({ posts }: PostsGridProps) {
  return (
    <div className="grid grid-cols-2 gap-1 p-1">
      {posts?.map((post: Post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
