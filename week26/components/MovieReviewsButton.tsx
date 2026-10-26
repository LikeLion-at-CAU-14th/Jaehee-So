'use client';
import { useState } from "react";
import dynamic from "next/dynamic";


const MovieReviews = dynamic(() => import("./MovieReviews"), {
  loading: () => <p>관람평 불러오는 중...</p>,
});

export default function MovieReviewsButton() {
  const [showReviews, setShowReviews] = useState(false);

  return (
    <div>
      <button className="movie-reviews-button" onClick={() => setShowReviews(true)}>
        관람평 보기
      </button>

      {showReviews && <MovieReviews />}
    </div>
  );
}
