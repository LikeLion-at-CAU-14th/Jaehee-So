import {BASE_URL} from "./publicAxios";
import { getAccessToken } from "../auth/tokenStorage";
import { publicAxios } from "./publicAxios";
import axios from "axios";

export const privateAxios=publicAxios.create({
    baseURL:BASE_URL,
})

privateAxios.interceptors.request.use((config)=>{
    const accessToken=getAccessToken();
    if(accessToken){
        config.headers.Authorization=`Bearer ${accessToken}`;
    }
    return config;
});

privateAxios.interceptors.response.use(
    (response)=>response.data,
    async (error)=>{
        return Promise.reject(error);
    },
);

