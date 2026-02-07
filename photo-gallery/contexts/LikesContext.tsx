"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { getStorageItem, setStorageItem } from "@/lib/storage";

const STORAGE_KEY = "ci-photos-likes";

interface LikesContextValue {
  likedPhotos: Set<number>;
  isLiked: (photoId: number) => boolean;
  toggleLike: (photoId: number) => void;
  clearLikes: () => void;
  likesCount: number;
}

const LikesContext = createContext<LikesContextValue | null>(null);

export function LikesProvider({ children }: { children: ReactNode }) {
  const [likedPhotos, setLikedPhotos] = useState<Set<number>>(new Set());
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const stored = getStorageItem<number[]>(STORAGE_KEY, []);
    setLikedPhotos(new Set(stored));
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      setStorageItem(STORAGE_KEY, Array.from(likedPhotos));
    }
  }, [likedPhotos, isHydrated]);

  const isLiked = useCallback(
    (photoId: number) => likedPhotos.has(photoId),
    [likedPhotos],
  );

  const toggleLike = useCallback((photoId: number) => {
    setLikedPhotos((prev) => {
      const next = new Set(prev);
      if (next.has(photoId)) {
        next.delete(photoId);
      } else {
        next.add(photoId);
      }
      return next;
    });
  }, []);

  const clearLikes = useCallback(() => {
    setLikedPhotos(new Set());
  }, []);

  return (
    <LikesContext.Provider
      value={{
        likedPhotos,
        isLiked,
        toggleLike,
        clearLikes,
        likesCount: likedPhotos.size,
      }}
    >
      {children}
    </LikesContext.Provider>
  );
}

export function useLikes(): LikesContextValue {
  const context = useContext(LikesContext);
  if (!context) {
    throw new Error("useLikes must be used within a LikesProvider");
  }
  return context;
}
