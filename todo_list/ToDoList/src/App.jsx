import AddToDo from "./components/AddToDo"
import Addtododiv from "./components/Addtododiv"
import Tododiv from "./components/Tododiv"
import Tododiv2 from "./components/Tododiv2"
import  "./App.css";
function App() {


  return (
     <center>
       <AddToDo/>
       <div className="container text-center">
            <Addtododiv/>
            <Tododiv/>
            <Tododiv2/>
       </div>
     </center>
  )
}

export default App
