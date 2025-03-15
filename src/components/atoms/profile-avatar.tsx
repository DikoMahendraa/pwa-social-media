import Image from "next/image";

interface ProfileAvatarProps {
  src: string;
  alt: string;
  size?: number;
  className?: string;
  grayscale?: boolean;
}

export function ProfileAvatar({
  src,
  alt,
  className = "",
  grayscale = false,
}: ProfileAvatarProps) {
  return (
    <Image
      src={src || "/placeholder.svg"}
      alt={alt}
      fill
      className={`rounded-ful object-cover ${
        grayscale ? "grayscale" : ""
      } ${className}`}
    />
  );
}
