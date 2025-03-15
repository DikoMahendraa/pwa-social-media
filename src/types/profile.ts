export interface Photo {
  id: string;
  url: string;
}

export interface UserTag {
  id: string;
  username: string;
}

export interface Post {
  id: string;
  title: string;
  logo?: string;
  visible?: boolean;
  description?: string;
  logoAlias?: string;
  photos: Photo[];
  userTags: UserTag[];
  price?: number;
}

export interface UserProfile {
  id: string;
  username: string;
  name: string;
  avatar: string;
  bio: string;
  website?: string;
  postCount: number;
  followerCount: number;
  followingCount: number;
  posts: Post[];
}
