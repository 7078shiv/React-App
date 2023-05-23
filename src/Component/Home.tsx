import { useNavigate } from "react-router-dom";
export default function Home(){
const navigate=useNavigate();
return(
    <>
    <h1> This is Home Page</h1>
    <button className="btn" onClick={()=>navigate('/Obama')}>Obama Page</button>
    <button className="btn" onClick={()=>navigate('/AddParams')}>AddParams Page</button>
    <button className="btn" onClick={()=>navigate('/Carousel')}>Carousel Page</button>
    <button className="btn" onClick={()=>navigate('/Donald')}>Donald Page</button>
    <button className="btn" onClick={()=>navigate('/Form')}>Form Page</button>
    <button className="btn" onClick={()=>navigate('/NoteTaking')}>NoteTaking</button>
    <button className="btn" onClick={()=>navigate('/Sachin')}>Sachin Page</button>
    <button className="btn" onClick={()=>navigate("/UseEffectTwo")}>Async Corosal</button>
    <button className="btn" onClick={()=>navigate("/userEffect_Three")}>UseEffectThree</button>
    </>
)
} 