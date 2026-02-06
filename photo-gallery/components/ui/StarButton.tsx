import { Star } from "lucide-react";

interface StarButtonProps {
  liked: boolean;
  onClick: () => void;
}

export function StarButton({ liked, onClick }: StarButtonProps) {
  return (
    <button
      onClick={onClick}
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
