import ErrorMsg from '../componenets/ErrorMsg';
import Fooditems from '../componenets/Fodditems';
import Input from '../componenets/Input';
import Container from '../componenets/Container';
import './App.css'
import { useState } from 'react';
function App() {
  // let fooditems=["daal","apple","sabji","milk","salad","papar","burger","dahi","ghee"];
  let [fooditems,setfooditems]=useState([
    "daal","apple","sabji",
  ])
  const handleOnchage=(event)=>
    {
      if(event.key==="Enter")
      {
        console.log(event.target.value);
        const text=event.target.value;
        let newfooditems=[...fooditems,text];
        setfooditems(newfooditems);
        event.target.value="";
      }
      
    }

  return (
    <Container>  
    <h1>Healhy Food</h1>
    <Input handleOnchage={handleOnchage}/>
    <ErrorMsg fooditems={fooditems} />
    <Fooditems fooditems={fooditems} />
    </Container>
  )
}

export default App
