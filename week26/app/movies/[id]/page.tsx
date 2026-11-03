import { movies } from '@/data/movies';
import Image from 'next/image';
import MovieReviewsButton from '@/components/MovieReviewsButton';

interface MovieDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function MovieDetailPage({
  params,
}: MovieDetailPageProps) {
  const { id } = await params;

  const movie = movies.find(
    (movie) => movie.id === Number(id)
  );

  if (!movie) {
    return <p>영화를 찾을 수 없습니다.</p>;
  }

  return (
    <main>
      <h1>{movie.title}</h1>
      
      <Image
        src={movie.image}
        alt={movie.title}
        width={400}
        height={576}
        preload
      />

      <p>
        {movie.year} · {movie.genre} · {movie.director}
      </p>

      <p style={{ whiteSpace: 'pre-line' }}>{movie.description}</p>

      <MovieReviewsButton />

    </main>
  );
}