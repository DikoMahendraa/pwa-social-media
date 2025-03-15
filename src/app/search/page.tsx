"use client";

import { TabNavigation } from "@/components/molecules/tab-navigation";
import { BottomNavigation } from "@/components/organism/bottom-navigation";
import { PostsPrivateGrid } from "@/components/organism/post-private-grid";
import { collectionData } from "@/data/collection-data";
import { profileData } from "@/data/profile-data";
import { Search } from "lucide-react";
import React from "react";

const TabPeople = () => {
  return (
    <section className="p-2 space-y-2">
      {Array.from({ length: 20 }).map((_, index) => (
        <div
          key={index}
          className="border border-[#f0f0f0] rounded-2xl p-2 flex items-center"
        >
          <div className="relative h-12 w-12 rounded-full bg-red-500" />
          <div className="ml-3">
            <p className="font-semibold text-sm text-black">Emerson Workman</p>
            <p className="text-[13px] text-[#858585] font-normal">
              Fashion stylist from Melbourne.
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

const TabCollection = () => {
  return (
    <PostsPrivateGrid onClick={() => ({})} posts={collectionData.collection} />
  );
};

const tabs = [
  { id: "people", label: "People", content: <TabPeople /> },
  { id: "collections", label: "Collections", content: <TabCollection /> },
];

export default function page() {
  return (
    <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">
      <div className="mt-6 px-3">
        <h4 className="font-semibold text-xl mb-4">Search</h4>
        <div className="border border-[#f0f0f0] flex rounded-xl py-[14px] px-4">
          <Search color="#858585" />
          <input
            placeholder="Search"
            className="text-[#858585] ml-2 placeholder:text-[#858585] focus:outline-none text-sm focus:border-none border-none active:ring-0 w-full"
          />
        </div>
      </div>

      <div className="mt-2 mb-16">
        <TabNavigation tabs={tabs} defaultActiveTab="people" />
      </div>

      <BottomNavigation profileImage={profileData.avatar} />
    </div>
  );
}
