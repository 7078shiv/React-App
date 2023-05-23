// page 1 page 2 sort search
// image
// name
// emailid

import React from "react";
import "../App.css"
import { useEffect, useState } from "react"
interface idata{
    id:number,
    email:string,
    first_name:string,
    last_name:string,
    avatar:string
}
export default function UseEffectThree(){
    const [page,setpage]=useState<number>(1);
    const[users,setusers]=useState<idata[]>([]);
    const[search,setsearch]=useState<string>("");
    useEffect(()=>{
        async function Api(){
            const response=await fetch(`https://reqres.in/api/users?page=${page}`)
            const json:{data:idata[]}=await response.json();
            setusers(json.data);
        }
        Api();
    },[page])

    function renderuser(user:idata){
        return(
            <div className="container" key={user.id}>
            <img src={user.avatar} alt={user.first_name}></img>
            <label>{`${user.first_name} ${user.last_name}}`}</label>
            <label>{user.email}</label>
            </div>
        )
    }
    function sortUsers(){
        let clone=[...users];
        clone=clone.sort((x,y)=>x.first_name.localeCompare(y.first_name))
        setusers(clone);
    }

    return(
        <>
        <button className="btn" onClick={()=>setpage(1)}>Page 1</button>
        <button className="btn" onClick={()=>setpage(2)}>Page 2</button>
        <button className="btn" onClick={sortUsers}>Sort by firstname</button>
        <input type="text" onChange={(e)=>setsearch(e.target.value)}></input>
        {users.filter((x)=>x.first_name.toLowerCase().includes(search) || x.last_name.toLowerCase().includes(search)).map(renderuser)}
        </>
    )
}