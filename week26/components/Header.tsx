import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <h1>
        <Link href="/">🎬영화 아카이브</Link>
      </h1>

      <nav>
        <Link href="/">홈</Link>
        <Link href="/movies">영화 목록</Link>
      </nav>
    </header>
  );
}
