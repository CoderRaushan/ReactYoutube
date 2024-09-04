import "./App.css";
import Todocontainers from "./components/Todocontainer";
import AddToDo from "./components/AddToDo";
function App() 
{

  let name = "Go to college";
  let date = "8/02/2024";

  const todolists=[
    {
      name:"Go To College",
      date:"8/02/2024",
    },
    {
      name:"BreakFast",
      date:"8:00 am",
    },
    {
      name:"Lunch",
      date:"1:00 pm",
    },
    {
      name:"Dinner",
      date:"8:00 pm",
    },
    {
      name:"Movie",
      date:"12:00 pm",
    }
  ]
  return (
    <center>
      <AddToDo />
      <Todocontainers  todolists={todolists} />
    </center>
  )
};

export default App
