// data/restaurants.ts
export type Restaurant = {
  id: number;
  name: string;
  category: string;
  emoji: string;
  menu: string;
  price: number;
  comment: string;
};

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "타츠진 우동",
    category: "일식",
    emoji: "🍜",
    menu: "붓카케 우동",
    price: 12000,
    comment: "쫄깃한 우동!",
  },
  {
    id: 2,
    name: "떡반집",
    category: "분식",
    emoji: "🍲",
    menu: "떡반",
    price: 4400,
    comment: "슴슴한 국물 떡볶이",
  },
  {
    id: 3,
    name: "5.5닭갈비",
    category: "한식",
    emoji: "🍗",
    menu: "닭갈비",
    price: 15000,
    comment: "볶음밥 필수",
  },
  {
    id: 4,
    name: "누오보나폴리",
    category: "양식",
    emoji: "🍕",
    menu: "마르게리타",
    price: 22000,
    comment: "화덕피자 맛집",
  },
  {
    id: 5,
    name: "얼큰이손칼국수",
    category: "한식",
    emoji: "🍜",
    menu: "얼큰이칼국수",
    price: 8000,
    comment: "쌀쌀할 때 추천",
  },
  {
    id: 6,
    name: "숯불돈까스",
    category: "일식",
    emoji: "🍖",
    menu: "안심카츠",
    price: 15000,
    comment: "숯불향 돈까스",
  },
];