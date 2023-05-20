
// first images,left will be disalbled
// lastimage right should be disabled
// other images both will be enabled
// on left curr=curr-1;
// on righ curr=curr+1;

import { useState } from "react";
import "../App.css"
export default function Carousel(){
    const[count,setcount]=useState<number>(0);
    const images=["https://cdn.pixabay.com/photo/2023/05/04/02/24/bali-7969001_1280.jpg",
   " https://cdn.pixabay.com/photo/2023/05/03/12/45/bird-7967577_640.jpg",
   "https://cdn.pixabay.com/photo/2023/05/08/13/24/laptop-7978588_1280.jpg"
];

 return(
    <div className="slideshow-container">
    <img  src= {images[count]} alt="images"></img>
    <button className="Cbtn"  disabled={count===0?true:false} onClick={()=>setcount(count-1)}>left</button>
    <button className="Cbtn" disabled={count===images.length-1?true:false} onClick={()=>setcount(count+1)}>right</button>
    </div>
 )
}