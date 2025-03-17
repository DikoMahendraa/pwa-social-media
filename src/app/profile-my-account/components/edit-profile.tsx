"use client";

import type React from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Image from "next/image";
import { X } from "lucide-react";
import Input from "@/components/molecules/custom-input";
import Textarea from "@/components/molecules/custom-textarea";
import { PrimaryButton } from "@/components/atoms/primary-button";

const profileSchema = z.object({
  username: z.string().min(1, { message: "*Username is required" }).max(30),
  fullName: z.string().min(1, { message: "*Full name is required" }).max(50),
  bio: z.string().max(150).optional(),
  links: z.string().url().optional().or(z.literal("")),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

export default function EditProfile({
  onChooseFile,
  onSave,
  onClose,
}: {
  onChooseFile: () => void;
  onSave: () => void;
  onClose: () => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      username: "molly_j",
      fullName: "Molly J",
      bio: "Fashion stylist from Melbourne.",
      links: "https://www.mollyj.com",
    },
  });

  const onSubmit = (data: ProfileFormValues) => {
    console.log(data);
    onSave();
  };

  const onEditPhoto = () => {
    onChooseFile();
  };

  return (
    <section className="bg-white relative rounded-t-2xl max-w-md mx-auto w-full pb-5">
      {/* Header */}
      <div className="flex items-center justify-between border-b pb-4 border-[#f0f0f0] mb-6">
        <h1 className="text-lg font-semibold text-black text-center flex-1 pt-4">
          Edit Profile
        </h1>
        <button onClick={onClose} className="p-1 absolute right-4 top-4">
          <X />
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
        <div className="flex justify-center">
          <section
            onClick={onEditPhoto}
            className="relative w-[111px] h-[111px] rounded-full mb-6"
          >
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
              className="absolute bottom-0 z-20 right-0 bg-black rounded-full p-2 border-2 border-white"
            >
              <Image
                alt="icon-image"
                src="/icons/pencil-white.svg"
                width={20}
                height={20}
              />
            </button>
          </section>
        </div>
        <div className="px-2">
          <Input
            label="Username"
            placeholder="Enter username"
            error={errors["username"]?.message}
            suffix={
              <Image
                alt="x-icon"
                src={
                  errors["username"]?.message
                    ? "/icons/x-red.svg"
                    : "/icons/check-green.svg"
                }
                width={20}
                height={20}
              />
            }
            {...register("username")}
          />
          <Input
            containerClassName="mt-4"
            label="Full name"
            placeholder="Enter full name"
            error={errors["fullName"]?.message}
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
            {...register("links")}
          />
          <PrimaryButton className="w-full mt-4 flex gap-2 items-center justify-center border-black py-3.5 border-[1.5px] font-medium text-sm">
            Save changes
          </PrimaryButton>
        </div>
      </form>
    </section>
  );
}
