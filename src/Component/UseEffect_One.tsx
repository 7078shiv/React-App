import { useEffect, useState } from "react";
interface  Iuser{
    username:string
}
export default function UseEffect_One(){
    const [username,setusername]=useState<string[]>([]);
    useEffect(()=>{
        async function Api(){
            const response=await fetch("http://jsonplaceholder.typicode.com/users");
            const json:Iuser[]= await response.json();
            setusername(json.map(x => x.username));
        }
        Api();
    },[]);
    return(
        <>
        {username.map((x,i)=><div key={i}>{x}</div>)}
        </>
    )
}
