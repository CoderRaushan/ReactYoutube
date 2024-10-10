// 1st importing createContext
import {createContext,useState} from "react";
// 2nd creating createcontext by initializing null and exporing it 
export const CounterContext=createContext(null);

// 3rd make provinder for wrapping app.js
export const CounterPovider=(probs)=>
{
    // 4th creating state for components to make them in use in Counter.jsx 
    const [count,setcount]=useState(0);
    return(
        <CounterContext.Provider value={{count,setcount,name:"Raushan",age:21}}>
            {probs.children}
        </CounterContext.Provider>
    )
}
