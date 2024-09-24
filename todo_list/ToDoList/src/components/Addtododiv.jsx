import { useState } from "react";

function Addtododiv({onchange}) 
{
    const [item,setitem]=useState();
    const [date,setdate]=useState();
    const onchangeitem=(event)=>
    {
        setitem(event.target.value);
    }
    const onchangedate=(event)=>
    {
        setdate(event.target.value);
    }
   const onsubmitbtn=()=>
   {
    onchange(item,date);
    setitem("");
    setdate("");
   }
    return (
        <div className="row">
            <div className="col-5">
                <input type="text" name="inptodo" id="inptodo" placeholder="Enter ToDo Here" onChange={onchangeitem}/>
            </div>
            <div className="col-5">
                <input type="date" name="date" id="date" onChange={onchangedate}/>
            </div> 
            <div className="col-2">
                <button className="btn btn-success" onClick={onsubmitbtn}>Add</button>
            </div>
        </div>
    )
}
export default Addtododiv;