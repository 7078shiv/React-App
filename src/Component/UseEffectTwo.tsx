import { useEffect, useState } from "react"
interface iphoto{
    url:string
}
export default function useEffectTwo(){
    const [count,setcount]=useState<number>(1)
    const [url,seturl]=useState<string>("");
    useEffect(()=>{
        async function Api(){
            const response= await fetch("https://jsonplaceholder.typicode.com/photos/"+count);
            const json:iphoto=await response.json(); 
            seturl(json.url);
        }
        Api();
    }
    ,[count]);
    return(
        <>
       {url && <img src={url} alt="carousel"></img>}
        <button className="btn" disabled={count===1?true:false} onClick={()=>setcount(count-1)}>left</button>
        <button className="btn" disabled={count===5000?true:false} onClick={()=>setcount(count+1)}>right</button>
        </>
    )
}