import React from 'react'
import {useSelector} from "react-redux";
function Counter() {
    const counter = useSelector((store) => store.counter);
  return (
    <>
    <h2>Counter:{counter}</h2>
    </>
  )
}

export default Counter;