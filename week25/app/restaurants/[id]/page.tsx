import LikeButton from "@/app/LikeButton";
import { restaurants } from "@/data/restaurants";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function RestautantsDetailPage({
    params,
}: {
    params:Promise<{id:string}>;
}) {
    const {id} = await params;
    const restaurant = restaurants.find((item)=>item.id===Number(id));
    if(!restaurant){
        notFound();
    }
    return (
        <div className="flex flex-col gap-4 rounded-2xl bg-white p-8 shadow-sm">
      <span className="text-6xl">{restaurant.emoji}</span>
      <h1 className="text-3xl font-bold">{restaurant.name}</h1>
      <p className="text-gray-500">{restaurant.category}</p>
      <p>
        추천 메뉴: {restaurant.menu} ({restaurant.price.toLocaleString()}원)
      </p>
      <p className="rounded-xl bg-orange-50 p-4">“{restaurant.comment}”</p>
      <LikeButton/>
      <Link href="/restaurants" className="text-orange-500 underline">
        목록으로 돌아가기
      </Link>
    </div>
    )
}