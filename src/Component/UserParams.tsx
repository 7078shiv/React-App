import { useParams } from "react-router-dom";

export default function UserParams(){
     const userparams=useParams<{userid:string}>();
     return (
        <div>{"userparams: "+userparams.userid}</div>
     )
}