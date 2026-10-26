export interface Movie {
  id: number;
  title: string;
  year: number;
  genre: string;
  director: string;
  description: string;
  image: string;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: '이터널 선샤인',
    year: 2004,
    genre: '로맨스, SF',
    director: '미셸 공드리',
    description:
      '헤어진 연인의 기억을 지우기로 한 남녀의 이야기입니다.\n기억을 지우는 과정에서 서로를 사랑했던 순간들을 다시 마주하게 됩니다.',
    image: '/posters/eternal sunshine.jpg',
  },
  {
    id: 2,
    title: '해리포터',
    year: 2001,
    genre: '판타지',
    director: '크리스 콜럼버스',
    description:
      '친척들로부터 갖은 구박을 받으며 힘든 나날을 보내며 살던 \n11세가 된 해리에게로 마법 학교인 호그와트의 입학 통지서가 오게 되며 시작되는 이야기입니다.',
    image: '/posters/harrypotter.jpeg',
  },
  {
    id: 3,
    title: '마녀배달부 키키',
    year: 2007,
    genre: '애니메이션',
    director: '미야자키 하야오',
    description:
      '마녀의 전통에 따라 검은 고양이 지지와 함께 낯선 바닷가 마을로 떠난 초보 마녀 키키 이야기입니다.',
    image: '/posters/kiki.jpeg',
  },
  {
    id: 4,
    title: '나홀로집에',
    year: 1991,
    genre: '코미디',
    director: '크리스 콜럼버스',
    description:
      '크리스마스에 집에 홀로 남겨진 막내 케빈과 그 집을 노리는 도둑 2인조 사이에서 벌어지는 이야기입니다.',
    image: '/posters/homealone.jpeg',
  },
  {
    id: 5,
    title: '컨택트',
    year: 2017,
    genre: 'SF',
    director: '드니 빌뇌브',
    description:
      '12개의 외계 비행 물체가 세계 각지 상공에 등장하였고, \n언어학 전문가와 과학자가 이들과 접촉을 시도하는 이야기입니다.',
    image: '/posters/contact.jpeg',
  },
  {
    id: 6,
    title: '엘리멘탈',
    year: 2023,
    genre: '애니메이션',
    director: '피터 손',
    description:
      '불, 물, 공기, 흙 4개의 원소들이 함께 하는 ‘엘리멘트 시티’에 살고 있는 \n불 ‘앰버’와 물 ‘웨이드’가 만나서 생기는 이야기입니다.  .',
    image: '/posters/elemental.jpeg',
  },
];