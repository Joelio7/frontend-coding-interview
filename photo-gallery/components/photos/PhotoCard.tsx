import Image from "next/image";
import { LinkIcon, StarButton } from "@/components/ui";
import type { PexelsPhoto } from "@/types";

interface PhotoCardProps {
  photo: PexelsPhoto;
}

export function PhotoCard({ photo }: PhotoCardProps) {
  return (
    <article className="flex gap-3 items-start">
      <div className="flex-shrink-0">
        <StarButton photoId={photo.id} />
      </div>

      <div className="flex-shrink-0">
        <Image
          src={photo.src.medium}
          alt={photo.alt || `Photo by ${photo.photographer}`}
          width={100}
          height={100}
          className="rounded-lg object-cover w-[100px] h-[100px]"
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-4 mb-1">
          <h3 className="text-body-bold text-gray-900">{photo.photographer}</h3>

          <a
            href={photo.photographer_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-brand-blue text-body hover:underline whitespace-nowrap"
          >
            <LinkIcon size={14} />
            Portfolio
          </a>
        </div>

        <p className="text-body text-gray-600 line-clamp-2 mb-1">
          {photo.alt || "Untitled photo"}
        </p>

        <div className="flex items-center gap-2">
          <span className="text-small text-gray-500">{photo.avg_color}</span>
          <span
            className="w-4 h-4 rounded border border-gray-200"
            style={{ backgroundColor: photo.avg_color }}
            aria-label={`Average color: ${photo.avg_color}`}
          />
        </div>
      </div>
    </article>
  );
}
