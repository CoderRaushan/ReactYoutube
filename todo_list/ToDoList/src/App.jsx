import "./App.css";
import Todocontainers from "./components/Todocontainer";
import AddToDo from "./components/AddToDo";
import { useState, useEffect } from "react";
import Addtododiv from "./components/Addtododiv";

function App() 
{
  const [tododata, settododata] = useState([]);
  // Load data from localStorage when the app loads
  useEffect(() => 
  {
    const savedData = localStorage.getItem("tododata");
    if (savedData) 
    {
      settododata(JSON.parse(savedData));  // Parse the JSON string back to an array
    }
  }, []);

  // Function to handle adding a new todo
  const onchange = (todo, date) => 
  {
    const newdata = [
      ...tododata,
      {
        name: todo,
        date: date,
      },
    ];
    settododata(newdata);
    localStorage.setItem("tododata", JSON.stringify(newdata));  // Save to localStorage
  };

  // Function to handle deleting a todo
  const todelete = (data) => {
    const newdata = tododata.filter((item) => item.name !== data);
    settododata(newdata);
    localStorage.setItem("tododata", JSON.stringify(newdata));  // Save updated list to localStorage
  };

  return (
    <center>
      <AddToDo />
      <Addtododiv onchange={onchange} />
      {tododata.length > 0 ? (
        <Todocontainers todolists={tododata} todelete={todelete} />
      ) : (
        "Enjoy your day!"
      )}
    </center>
  );
}

export default App;
