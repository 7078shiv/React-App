import { useNavigate } from "react-router-dom";

export default function Obama(){
    const navigate=useNavigate();
    return (
        <>
         <h1>This is obama page</h1>
        
        <button onClick={()=>navigate(-1)}>Back Page</button>
        </>
       
    )
}