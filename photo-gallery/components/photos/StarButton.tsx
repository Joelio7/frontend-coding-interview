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
      className="p-1 hover:scale-110 transition-transform"
    >
      <Star
        size={24}
        className={liked ? "text-yellow-400" : "text-gray-400"}
        fill={liked ? "currentColor" : "none"}
      />
    </button>
  );
}
