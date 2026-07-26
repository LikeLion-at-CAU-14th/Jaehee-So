import { useState } from "react"

export const useForm=()=>{
    const [value,setvalue]=useState("");
    const onChange=(e)=>{
        setvalue(e.target.value);
    };
    return [value,onChange];
};