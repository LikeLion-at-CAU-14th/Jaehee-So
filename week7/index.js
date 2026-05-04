const baseURL="http://apis.data.go.kr/B551011/PhotoGalleryService1";

//API에 데이터를 요청할 때 필요한 세부 조건들을 모아둔 객체
const option = {
  serviceKey: // 인증키
    "XWHumuSUjBYTqWZzg2t7yNjWAj33ZU4Z%2FBP%2BEyqXX7r82sumgMF%2BTeKJQbS3I3I4H0yiOD1ZyJ0Phjw2TZhd0Q%3D%3D",
  numofRows: 6, // 한 번에 불러올 사진 개수
  MobileApp: "test", // 어플리케이션 이름
  MobileOS: "ETC", // OS 구분
  arrange: "A", // 정렬 기준(A=제목순)
  _type: "json", // 응답 데이터 타입
  pageNo:1
};

//html에서 id="container"인 요소를 찾아 변수에 저장
//->앞으로 불러오는 사진들이 이 공간에 채워짐
const container = document.getElementById("container");


//사진의 순번을 매기기 위해 사용하는 숫자 변수
let photoIndex=1;
//비동기 함수 -> API 서버에서 데이터들을 가져오는 시간이 걸리는 작업들을 순차적으로 처리
async function getData(){
    //let count =1;
    option.pageNo = Math.floor(Math.random() * 100) + 1;
    //baeURL과 option 객체들의 값을 조합하여 최종적으로 데이터를 요청할 주소를 만듦
    const url = `${baseURL}/galleryList1?numOfRows=${option.numofRows}&MobileApp=${option.MobileApp}&MobileOS=${option.MobileOS}&arrange=${option.arrange}&_type=${option._type}&pageNo=${option.pageNo}&serviceKey=${option.serviceKey}`;

    const fetchData=await fetch(url); //해당 URL로 네트워크 요청을 보내 데이터를 가져옴
    const toJson = await fetchData.json();
    const datas=await toJson.response.body.items.item; // JSON구조에서 실제로 우리가 필요한 사진정보

    datas.forEach((data,i) => {
        const list = document.createElement("div");
        list.id="list"; //위에서 만든 <div>에 id="list"라는 이름표를 붙이게 됨

        const image = document.createElement("img");
        //자바스크립트가 imgae 라는 변수로 만든 <img>태그의 주소(src) 값으로 API에서 가져온 진짜 이미지 URL을 연결
        image.src=data.galWebImageUrl;

        const info=document.createElement("span");
        info.innerText = `
        📸${photoIndex++}번째 사진
        🔸제목 : ${data.galTitle}
        📍장소 : ${data.galPhotographyLocation}`;
        
        const moreBtn=document.createElement("button");
        moreBtn.innerText='더보기';
        moreBtn.addEventListener('click',()=>{
          location.href=`detail.html?title=${data.galTitle}&photo=${data.galWebImageUrl}&author=${data.galPhotographer}&date=${data.galCreatedtime}&keyword=${data.galSearchKeyword}`;
        });

        list.appendChild(image);
        list.appendChild(info);
        list.appendChild(moreBtn);
        container.appendChild(list);
        

    });

}

// 더보기는 detail.html detail.js detail.css 까지 만들어서 
// 날짜 형식 지켜서 하기