import { useParams } from "react-router-dom";

export default function AddParams(){
    const {x,operator,y}=useParams<{x:string,operator:string,y:string}>();
    let result=0;
    if(x && y){
    switch(operator){
        case "+":
            result=parseInt(x)+parseInt(y);
            break
        case "-":
            result=parseInt(x)-parseInt(y);
            break
        case "*":
            result=parseInt(x)*parseInt(y);
            break
        case "**":
            result=parseInt(x)**parseInt(y);
            break
        case "<<":
            result=parseInt(x)<<parseInt(y);
            break
        default:
            result=parseInt(x)/parseInt(y);
            break
    }
    return (
        <div>{`${x} ${ operator??"/" } ${y} = ${result}`}</div>
    )

    }
    return(
        <div>`not a valid input`</div>
    )
}