import "../App.css"
interface IButtonProps{
    text:string;
    className:string;
    Onclick():void;
}
export default function Button(props:IButtonProps){
   
    return (
        <button className={props.className} onClick={props.Onclick}>{props.text}</button>
    )
}