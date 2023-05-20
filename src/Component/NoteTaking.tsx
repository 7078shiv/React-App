import { useState } from "react"
import "../App.css"

// CRUD operation

export default function NoteTaking(){
    const[list,setlist]=useState<string[]>([]);
    const[value,setvalue]=useState<string>("");
    const [updateIndex,setUpdateIndex]=useState<number|undefined>();
    const[updateText,setUpdateText]=useState<string>("");
    const[searchtext,setsearchtext]=useState<string>("");

    function Ondeleteclick(index:number){
        // string is immutable so modification is done in the new 
        // address
        const newlist=[...list];
        // Delete Operation
        newlist.splice(index,1);
        setlist(newlist);
    }
    function renderlistitem(listitem:string,index:number){
        // Read opearation
        return(
        <div key={index}>
        <div className="listitems"><div className="items">{listitem}</div>
        <button className="btn" onClick={()=>Ondeleteclick(index)}>Delete</button>
        <button className="btn" onClick={()=>{
        setUpdateText(listitem);
            setUpdateIndex(index)}}>Update</button>
        </div>
       
        </div>
        )
    }

    function Onupdate(index:number){
        const newlist=[...list]
        newlist[index]=updateText;
        setlist(newlist);
        setUpdateIndex(undefined);
        setUpdateText("");
    }

    function renderupdateItem(index:number){
        return(
            <div key={index}>
                {/* Update operation */}
                <input className="todo-input" type="text" value={updateText} 
                onChange={(e)=>setUpdateText(e.target.value)}></input>
                <button className="btn" onClick={()=>Onupdate(index)}>done</button>
            </div>
            )
    }
    function renderedfilteredlistitem(listitem:string,index:number):React.ReactNode{
        if(listitem.toLowerCase().includes(searchtext.toLowerCase())){
            return(
                updateIndex===index?renderupdateItem(index):
                renderlistitem(listitem,index)
            )
        }
        return;
    }
    return(
        <>
        <div className="app-title">To Do List</div>
        {/* Create Opearation */}
        <input className="todo-input" type="text" placeholder="add text here" value={value} onChange={(e)=>setvalue(e.target.value)}></input>
        <button className="btn" onClick={()=>{setlist([...list,value]);
        setvalue("")
        }}>Add</button>
        <input className="todo-input" placeholder="search Item Here" type="text" value={searchtext} onChange={(e)=>setsearchtext(e.target.value)}></input>
        {list.map(renderedfilteredlistitem)}
        </>
    )
}