

const ACCESS_KEY="access";
const REFRESH_KEY="refresh"; //상수선언을 하면 수정이 간편

export const getAccessToken=()=>localStorage.getItem(ACCESS_KEY);
export const getRefreshToken=()=>localStorage.getItem(REFRESH_KEY);

export const setTokens=({accessToken,refreshToken})=>{
    localStorage.setItem(ACCESS_KEY,accessToken);
    localStorage.setItem(REFRESH_KEY,refreshToken);
}; // 서버에서 주는 아이템을 localStorage에 저장하는 함수

export const clearTokens =()=>{
    localStorage.removeItem(ACCESS_KEY);
    localStorage.removeItem(REFRESH_KEY);
}; // 로그아웃되거나 세션만료됐을 때 지우는 함수




