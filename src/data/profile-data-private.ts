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
      title: "sporty and rich",
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
      visible: false,
      description: "This collection was created by @username.",
      logo: "/icons/status/sporty.svg",
      logoAlias: "/icons/status/sporty.svg",
    },
    {
      id: "post2",
      title: "secret things",
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
      visible: true,
      description: "This collection is only visible to you.",
      logo: "/icons/status/close-eyes.svg",
      logoAlias: "/icons/status/secret.svg",
    },
    {
      id: "post3",
      title: "secret things",
      photos: [
        {
          id: "photo3",
          url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        },
      ],
      userTags: [{ id: "user5", username: "coffeelovers" }],
      visible: true,
      description: "This collection is only visible to you.",
      logo: "/icons/status/close-eyes.svg",
      logoAlias: "/icons/status/secret.svg",
    },
    {
      id: "post4",
      title: "sporty and rich",
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
      visible: false,
      description: "This collection was created by @username.",
      logo: "/icons/status/sporty.svg",
      logoAlias: "/icons/status/sporty.svg",
    },
    {
      id: "post5",
      title: "sporty and rich",
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
      visible: false,
      description: "This collection was created by @username.",
      logo: "/icons/status/sporty.svg",
      logoAlias: "/icons/status/sporty.svg",
    },
    {
      id: "post6",
      title: "my complete wardrobe",
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
      visible: false,
      description:
        "This collection is only available to your paid subscribers.",
      logo: "/icons/status/dollar.svg",
      logoAlias: "/icons/status/wardrobe.svg",
    },
  ],
};
