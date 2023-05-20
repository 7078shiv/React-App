import { useNavigate } from "react-router-dom";
export default function Home(){
const navigate=useNavigate();
return(
    <>
    <h1> This is Home Page</h1>
    <button onClick={()=>navigate('/Obama')}>Obama Page</button>
    <button onClick={()=>navigate('/AddParams')}>AddParams Page</button>
    <button onClick={()=>navigate('/Carousel')}>Carousel Page</button>
    <button onClick={()=>navigate('/Donald')}>Donald Page</button>
    <button onClick={()=>navigate('/Form')}>Form Page</button>
    <button onClick={()=>navigate('/NoteTaking')}>NoteTaking</button>
    <button onClick={()=>navigate('/Sachin')}>Sachin Page</button>
    </>
)
} 