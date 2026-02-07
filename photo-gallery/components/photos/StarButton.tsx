"use client";

import { Star } from "lucide-react";
import { useLikes } from "@/contexts/LikesContext";

interface StarButtonProps {
  photoId: number;
}

export function StarButton({ photoId }: StarButtonProps) {
  const { isLiked, toggleLike } = useLikes();
  const liked = isLiked(photoId);

  return (
    <button
      onClick={() => toggleLike(photoId)}
      className="hover:scale-110 transition-transform"
    >
      <Star
        size={20}
        className={liked ? "text-[#FFD600]" : "text-[#9CA3AF]"}
        fill={liked ? "currentColor" : "none"}
      />
    </button>
  );
}
