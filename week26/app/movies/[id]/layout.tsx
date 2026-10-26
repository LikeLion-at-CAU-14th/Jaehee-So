import { Oswald } from 'next/font/google';

// 상세 페이지에만 다른 폰트 적용
const oswald = Oswald({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function MovieDetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={oswald.className}>{children}</div>;
}
