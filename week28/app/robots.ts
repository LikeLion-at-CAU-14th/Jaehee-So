import type { MetadataRoute } from "next";

const BASE_URL = "http://localhost:3000";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*", // 모든 크롤러
      allow: "/",     // 전체 수집 허용
    },
    sitemap: `${BASE_URL}/sitemap.xml`, // 위치 알려주기
  };
}
