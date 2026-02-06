import { env } from "@/env";
import type { PexelsSearchResponse } from "@/types";

const PEXELS_BASE_URL = "https://api.pexels.com/v1";

interface FetchPhotosOptions {
  query?: string;
  perPage?: number;
}

export async function fetchPhotos(
  options: FetchPhotosOptions = {},
): Promise<PexelsSearchResponse> {
  const { query = "nature", perPage = 10 } = options;

  const url = new URL(`${PEXELS_BASE_URL}/search`);
  url.searchParams.set("query", query);
  url.searchParams.set("per_page", perPage.toString());

  const response = await fetch(url.toString(), {
    headers: {
      Authorization: env.PEXELS_API_KEY,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(
      `Pexels API error: ${response.status} ${response.statusText}`,
    );
  }

  return response.json();
}
