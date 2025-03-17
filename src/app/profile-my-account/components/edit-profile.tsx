"use client";

import type React from "react";

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Image from "next/image";
import { X } from "lucide-react";
import Input from "@/components/molecules/custom-input";
import Textarea from "@/components/molecules/custom-textarea";
import { PrimaryButton } from "@/components/atoms/primary-button";

const profileSchema = z.object({
  username: z.string().min(3).max(30),
  fullName: z.string().min(2).max(50),
  bio: z.string().max(150).optional(),
  links: z.string().url().optional().or(z.literal("")),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

export default function EditProfile() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [profileImage, setProfileImage] = useState(
    "/placeholder.svg?height=100&width=100"
  );

  const { register, handleSubmit } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      username: "molly_j",
      fullName: "Molly J",
      bio: "Fashion stylist from Melbourne.",
      links: "www.mollyj.com",
    },
  });

  const onSubmit = (data: ProfileFormValues) => {
    console.log(data);
    // Handle form submission
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setProfileImage(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="bg-white relative rounded-t-2xl max-w-md mx-auto w-full pb-5">
      {/* Header */}
      <div className="flex items-center justify-between border-b pb-4 border-[#f0f0f0] mb-6">
        <h1 className="text-lg font-semibold text-black text-center flex-1 pt-4">
          Edit Profile
        </h1>
        <button className="p-1 absolute right-4 top-4">
          <X />
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
        <div className="flex justify-center">
          <div className="relative w-[111px] h-[111px] rounded-full mb-6">
            <Image
              src={
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
              }
              alt="Profile"
              fill
              className="object-cover rounded-full object-top"
            />
            <button
              type="button"
              onClick={handleImageClick}
              className="absolute bottom-0 z-20 right-0 bg-black rounded-full p-2 border-2 border-white"
            >
              <Image
                alt="icon-image"
                src="/icons/pencil-white.svg"
                width={20}
                height={20}
              />
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
              className="hidden"
              accept="image/*"
            />
          </div>
        </div>
        <div className="px-2">
          <Input
            label="Username"
            placeholder="Enter username"
            {...register("username")}
          />
          <Input
            containerClassName="mt-4"
            label="Full name"
            placeholder="Enter full name"
            {...register("fullName")}
          />
          <Textarea
            label="Bio"
            {...register("bio")}
            maxLength={150}
            placeholder="Write a short bio..."
            containerClassName="mt-4"
          />
          <Input
            containerClassName="mt-4"
            label="Links"
            placeholder="Enter full name"
            {...register("fullName")}
          />
          <PrimaryButton className="w-full mt-4 flex gap-2 items-center justify-center border-black py-3.5 border-[1.5px] font-medium text-sm">
            Save changes
          </PrimaryButton>
        </div>
      </form>
    </section>
  );
}
