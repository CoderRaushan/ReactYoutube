import React, { useEffect, useState } from 'react'
import "../App.css";
export const Time = () => {
    const [time,settime]=useState(new Date());
    useEffect(()=>
    {
    const IntervalId=setInterval(() => {
        settime(new Date());
    }, 1000);

    return ()=>
    {
        clearInterval(IntervalId);
        // console.log("clearing interval:");
    }
    
    },[]);

  return (
    <div className='main_container'>
        <p>Indian Date:{time.toLocaleDateString()}</p>
        <p>Indian Time:{time.toLocaleTimeString()}</p>
    </div>
  )
}
