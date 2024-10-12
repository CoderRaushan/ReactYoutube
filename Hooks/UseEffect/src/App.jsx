
import "./App.css";
import {useEffect, useState } from "react";
import Joke from "./components/Joke";
function App() 
{

  const [count, setcount] = useState(0);
//case 1: rendering only one time 
 useEffect(()=>
{
 alert("rendering on []");
},[]);

//example 
// useEffect(() => {
//   const timer = setInterval(() => {
//     console.log("Timer running");
//   }, 1000);
//   return () => {
//     clearInterval(timer);
//     console.log("Timer cleaned up");
//   };
// }, []);

//case 2: rendering only when state or counter changes
useEffect(()=>
  {
   alert("rendering on changing in count [count]");
  },[count]);
  return (
    <>
      <div>
        <h3>Count is:{count}</h3>
        <button onClick={() => setcount(count+1)}>+</button>
      </div>
      <div>
            <Joke/>
      </div>
    </>
  );
}

export default App;
