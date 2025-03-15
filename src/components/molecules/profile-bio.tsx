import Link from "next/link";
import { Globe } from "lucide-react";

interface ProfileBioProps {
  name: string;
  bio: string;
  website?: string;
  postFrequency?: string;
}

export function ProfileBio({
  name,
  bio,
  website,
  postFrequency,
}: ProfileBioProps) {
  return (
    <div>
      <h2 className="font-semibold">
        {name}{" "}
        {postFrequency && (
          <span className="font-normal text-[#adadad] text-sm">
            / {postFrequency}
          </span>
        )}
      </h2>
      <p className="text-sm">{bio}</p>
      {website && (
        <div className="flex items-center mt-1 text-sm">
          <Globe size={16} className="mr-1" />
          <Link href={`http://${website}`} className="underline font-semibold">
            {website}
          </Link>
        </div>
      )}
    </div>
  );
}
