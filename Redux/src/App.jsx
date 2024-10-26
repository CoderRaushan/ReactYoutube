import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Counter from "./component/Counter";
import Privacy from "./component/Privacy";
import { useRef } from "react";

function App() {
  const privacy = useSelector((store) => store.privacy);
  console.log(privacy);
  const usedispatch = useDispatch();
  const handleIncrement = () => {
    usedispatch({ type: "Increment" });
  };
  const handledecrement = () => {
    usedispatch({ type: "Decrement" });
  };

  const input_val=useRef();
  const handleAdd=()=>
  {
    const value=Number(input_val.current.value);
    console.log(value);
    usedispatch({ type: "ADD",payload: value });
    input_val.current.value='';
  };
  const handleSub=()=>
  {
    const value=Number(input_val.current.value);
    usedispatch({ type: "SUB",payload: value });
    input_val.current.value='';
  };
  const privacyHandle=()=>
  {
    usedispatch({ type: "Privacy"});
  }

  return (
    <>
      <div className="main_container">
          {privacy ? <Privacy/>: <Counter/>}
        <div className="button_con">
          <button onClick={handledecrement} className="btn btn-success">
            -1
          </button>
          <button onClick={handleIncrement} className="btn btn-warning">
            +1
          </button>
          <button className="btn btn-primary" onClick={privacyHandle}>{privacy?"Hide":"Privacy"}</button>
        </div>
      </div>
      <div className="search_btn">
            <input type="number" ref={input_val} id="inp"/> <br />
            <button className="btn btn-primary" onClick={handleAdd}>+</button>
            <button className="btn btn-success" onClick={handleSub}>-</button>
      </div>
    </>
  );
}

export default App;
