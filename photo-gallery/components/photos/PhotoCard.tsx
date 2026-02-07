import Image from "next/image";
import { LinkIcon } from "@/components/ui";
import type { PexelsPhoto } from "@/types";
import { StarButton } from "./StarButton";
import Link from "next/link";
import { truncateText } from "@/lib/utils";

interface PhotoCardProps {
  photo: PexelsPhoto;
}

export function PhotoCard({ photo }: PhotoCardProps) {
  const altText = photo.alt || "Untitled photo";
  const truncatedAlt = truncateText(altText, 30);

  return (
    <article className="flex gap-3 items-start">
      <div className="flex-shrink-0">
        <StarButton photoId={photo.id} />
      </div>

      <div className="flex-shrink-0">
        <Image
          src={photo.src.medium}
          alt={altText}
          width={75}
          height={75}
          className="rounded-lg object-cover w-[75px] h-[75px]"
        />
      </div>

      <div className="flex-1 min-w-0 space-y-1.5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-body-bold leading-none">{photo.photographer}</h3>

          <Link
            href={photo.photographer_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-brand-blue text-body hover:underline whitespace-nowrap leading-none"
            style={{ fontSize: "12px", fontWeight: 400 }}
          >
            <LinkIcon size={12} />
            Portfolio
          </Link>
        </div>

        <div className="relative group">
          <p className="text-body">{truncatedAlt}</p>

          {altText.length > 30 && (
            <span className="invisible group-hover:visible absolute left-0 top-full mt-1 z-10 max-w-sm px-2 py-1 bg-gray-800 text-white text-xs rounded shadow-md whitespace-normal leading-tight">
              {altText}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <span
            className="text-body leading-none"
            style={{ color: photo.avg_color }}
          >
            {photo.avg_color}
          </span>
          <span
            className="w-3 h-3 rounded border border-gray-200"
            style={{ backgroundColor: photo.avg_color }}
            aria-label={`Average color: ${photo.avg_color}`}
          />
        </div>
      </div>
    </article>
  );
}
