import { useNavigate } from "react-router-dom";

export default function Sachin(){
    const navigate=useNavigate();
    return(
        <>
        <div>Sachin Tendulkar</div>
        <i>ok</i>
        <img width={200} src="https://images.news18.com/ibnlive/uploads/2021/08/sachin-tendulkar-52-16287387964x3.jpg" alt="sachin image"></img>
        <div>
        <button onClick={()=>navigate('/Donald')}>Donald Page</button>
        
        </div>
        <>
        <button onClick={()=>navigate('/Obama')}>Obama Page</button>
        </>
        </>
    )
}
