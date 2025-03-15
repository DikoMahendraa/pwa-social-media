import type { UserProfile } from "@/types/profile";

export const profileDataPrivate: UserProfile = {
  id: "user123",
  username: "molly_j",
  name: "Molly J",
  avatar:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
  bio: "Fashion stylist from Melbourne.",
  website: "www.mollyj.com",
  postCount: 47,
  followerCount: 15800,
  followingCount: 342,
  posts: [
    {
      id: "post1",
      title: "Minimalist workspace",
      photos: [
        {
          id: "photo1",
          url: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        },
      ],
      userTags: [
        { id: "user1", username: "minimaldesign" },
        { id: "user2", username: "workspacesetup" },
      ],
      price: 149,
    },
    {
      id: "post2",
      title: "Ceramic collection",
      photos: [
        {
          id: "photo2",
          url: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        },
      ],
      userTags: [
        { id: "user3", username: "ceramics" },
        { id: "user4", username: "handmade" },
      ],
      price: 89,
    },
    {
      id: "post3",
      title: "Morning coffee ritual",
      photos: [
        {
          id: "photo3",
          url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        },
      ],
      userTags: [{ id: "user5", username: "coffeelovers" }],
      price: 0,
    },
    {
      id: "post4",
      title: "Sustainable kitchen",
      photos: [
        {
          id: "photo4",
          url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        },
      ],
      userTags: [
        { id: "user6", username: "sustainable" },
        { id: "user7", username: "ecofriendly" },
      ],
      price: 199,
    },
    {
      id: "post5",
      title: "Weekend getaway",
      photos: [
        {
          id: "photo5",
          url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1421&q=80",
        },
      ],
      userTags: [
        { id: "user8", username: "travel" },
        { id: "user9", username: "weekendvibes" },
      ],
      price: 0,
    },
    {
      id: "post6",
      title: "Home office redesign",
      photos: [
        {
          id: "photo6",
          url: "https://images.unsplash.com/photo-1486946255434-2466348c2166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        },
      ],
      userTags: [
        { id: "user10", username: "homeoffice" },
        { id: "user11", username: "productivity" },
      ],
      price: 299,
    },
  ],
};
