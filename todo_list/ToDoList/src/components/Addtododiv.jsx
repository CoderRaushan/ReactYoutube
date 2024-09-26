import { useState } from "react";
import { MdAdd } from 'react-icons/md';
import "./Addtododiv.css";

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
        <div className="row align-items-center offset-md-2">
        <div className="col-6 col-md-6">
          <input
            type="text"
            name="inptodo"
            id="inptodo"
            className="form-control"
            placeholder="Enter ToDo Here"
            value={item}
            onChange={onchangeitem}
          />
        </div>
        <div className="col-3 col-md-3">
          <input
            type="date"
            name="date"
            id="date"
            className="form-control"
            value={date}
            onChange={onchangedate}
          />
        </div>
        <div className="col-3 col-md-2">
          <button id="add_button" onClick={onsubmitbtn}>
            <MdAdd  className="icon"/>
          </button>
        </div>
      </div>
    )
}
export default Addtododiv;