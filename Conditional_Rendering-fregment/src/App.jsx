import './App.css'

import Container from "./Container";
function App() {
  let fooditems=["daal","apple","sabji","milk","salad","papar","burger","dahi","ghee"];
//  let  fooditems=[];

  // 1st way using if else 
  // if(fooditems.length==0)
  // {
  //   return(
  //     <h4>fooditems1 is empty.</h4>
  //   )
  // }
// 3rd way
let condition=fooditems.length==0 ? <h3>fooditems empty hai using ternary operator</h3>:null;
const clickedbuybutton=(item)=>
  {
    console.log(`${item} is clicked!`)
  }
  return (
    //children probs
    <Container>  
      <h1>Healhy Food</h1>
        {/*2nd way using ternary operator */}
       {condition}
       {/* 4th way using & operator */}
       {fooditems.length===0 && <h3>fooditems empty hai using & operator </h3>}
      <ul className="list-group">
        {
          fooditems.map((item)=>
          (
            <li key={item} className="list-group-item">{item}
              <button className='btn btn-info' 
              onClick={()=>clickedbuybutton(item)}
              >Buy</button>
            </li>
          ))
        }
      </ul>
    </Container>  //children probs
  )
}

export default App
