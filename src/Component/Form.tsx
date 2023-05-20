import Button from "./Button";
import "../App.css"
import { useState } from "react";

export default function Form(){
    const[first,setfirst]=useState<number>(0);
    const[second,setsecond]=useState<number>(0);
    const [result,setresult]=useState<number>(0);
    return (
        <>
        <h1>Form</h1>
        <input type="number" placeholder="type first no" value={first} onChange={(e)=>{
            setfirst(parseInt(e.target.value))
        }}></input>
        <input type="number" placeholder="type second no" value={second} onChange={(e)=>{
            setsecond(parseInt(e.target.value))
        }}></input>
        <Button text="add" className="addbutton" Onclick={()=>setresult(first+second)}/>
        <Button text="minus" className="minusbutton" Onclick={()=>setresult(first-second)}/>
        <Button text="multiply" className="addbutton" Onclick={()=>setresult(first*second)}></Button>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;==</span>
        <button className="btn">{result}</button>
        </>
    )
}