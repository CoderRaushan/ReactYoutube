// 5th import useContext and import actual context (CounterContext)
import { useContext } from "react";
import { CounterContext } from "../stores/CounterContext";

const Counter=()=>
{
    const countusestate=useContext(CounterContext);
    console.log(countusestate); 
 return(
    <div>
        <h1>The Counter page {countusestate.name} and age is:{countusestate.age}</h1>
        <h4>Count is:{countusestate.count}</h4>
        <button onClick={()=>countusestate.setcount(countusestate.count+1)}>+1</button>
        <button onClick={()=>countusestate.setcount(countusestate.count-1)}>-1</button>
    </div>
 )
}
export default Counter;