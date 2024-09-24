import "./App.css";
import Todocontainers from "./components/Todocontainer";
import AddToDo from "./components/AddToDo";
import { useState } from "react";
import Addtododiv from "./components/Addtododiv";

function App() {
  const [tododata, settododata] = useState([]);
  const onchange = (todo, date) => {
    const newdata = [
      ...tododata,  
      {
        name: todo,
        date: date,
      }
    ];
    settododata(newdata); 
  };
  const todelete=(data)=>
  {
    const newdata=tododata.filter((item)=>item.name!==data);
    settododata(newdata);
  };

  return (
    <center>
      <AddToDo />
      <Addtododiv onchange={onchange} />
      {tododata.length > 0 ? (
        <Todocontainers todolists={tododata} todelete={todelete}/>
      ) : (
        "Enjoy your day!"
      )}
    </center>
  );
}

export default App;
