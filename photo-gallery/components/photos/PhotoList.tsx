import { PhotoCard } from "./PhotoCard";
import type { PexelsPhoto } from "@/types";

interface PhotoListProps {
  photos: PexelsPhoto[];
}

export function PhotoList({ photos }: PhotoListProps) {
  if (photos.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-body text-gray-500">No photos found.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
}
