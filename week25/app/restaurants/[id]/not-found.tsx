import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-4 rounded-2xl bg-white p-12 text-center shadow-sm">
      <span className="text-7xl">❓</span>
      <h1 className="text-4xl font-bold text-orange-500">404</h1>
      <p className="text-xl font-bold"> 그런 맛집은 도감에 없어요!</p>
      <p className="text-gray-500">
        번호를 잘못 입력했어요
      </p>
      <Link
        href="/restaurants"
        className="mt-2 rounded-full bg-orange-500 px-6 py-3 font-bold text-white hover:bg-orange-600"
      >
        맛집 목록 보러 가기
      </Link>
    </div>
  );
}
