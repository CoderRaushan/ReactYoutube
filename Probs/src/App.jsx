import ErrorMsg from '../componenets/ErrorMsg';
import Fooditems from '../componenets/Fodditems';
import './App.css'
function App() {
  let fooditems=["daal","apple","sabji","milk","salad","papar","burger","dahi","ghee"];
  return (
    <>
    <h1>Healhy Food</h1>
       <ErrorMsg fooditems={fooditems} />
       <Fooditems fooditems={fooditems} />
    </>
  )
}

export default App
