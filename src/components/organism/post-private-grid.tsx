import type { Post } from "@/types/profile";
import { PostPrivateCard } from "../molecules/post-private-card";

interface PostsPrivateGridProps {
  posts: Post[];
  onClick: (params: Post) => void;
}

export function PostsPrivateGrid({ posts, onClick }: PostsPrivateGridProps) {
  return (
    <div className="grid grid-cols-2 gap-1 p-1">
      {posts?.map((post: Post) => (
        <PostPrivateCard
          onClick={() => onClick(post)}
          key={post.id}
          post={post}
        />
      ))}
    </div>
  );
}
