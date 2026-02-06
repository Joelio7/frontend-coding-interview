"use client";

import { Star } from "lucide-react";
import { useState } from "react";

interface StarButtonProps {
  photoId: number;
}

export function StarButton({ photoId }: StarButtonProps) {
  const [liked, setIsLiked] = useState(false);
  return (
    <button
      onClick={() => setIsLiked((prev) => !prev)}
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
