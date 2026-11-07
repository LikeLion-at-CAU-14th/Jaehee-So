import type { MetadataRoute } from "next";
import { albums } from "@/data/albums";

const BASE_URL = "http://localhost:3000"; 

export default function sitemap(): MetadataRoute.Sitemap {
  const albumPages = albums.map((album) => ({
    url: `${BASE_URL}/albums/${album.id}`,
    lastModified: new Date(),
  }));

  return [
    { url: BASE_URL, lastModified: new Date() },
    ...albumPages,
  ];
}
