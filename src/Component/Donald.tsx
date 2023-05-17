import { useNavigate } from "react-router-dom";

 export default function Donald(){
    const navigate=useNavigate();
    return (
        <>
        <h1> This is Donald Page</h1>
        <button onClick={()=>navigate('/Obama')}>Obama Page</button>
        </>
    )
 }