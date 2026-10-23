import { restaurants } from "@/data/restaurants";
import Link from "next/link";


export default function RestautantsPage(){
    console.log("맛집 목록 페이지가 렌더링됐어요!");
    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold">맛집 목록</h1>
            <ul className="grid grid-cols-2 gap-4">
                {restaurants.map((restaurants)=>(
                    <li key={restaurants.id}>
                        <Link
                            href={ `/restaurants/${restaurants.id}`}
                            className="flex flex-col gap-2 rounded-2xl bg-white p-6 shadow-sm hover:shadow-md">
                            <span className="text-4xl">{restaurants.emoji}</span>
                            <span className="text-lg font-bold">{restaurants.name}</span>
                            <span className="text-sm text-gray-500">{restaurants.category} {restaurants.menu}</span>
                            </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}