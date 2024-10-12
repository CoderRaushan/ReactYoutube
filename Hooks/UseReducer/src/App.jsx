import "./App.css";
import { useReducer } from "react";

function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "Increment":
        return { count: state.count + 1 };
      case "Decrement":
        return { count: state.count - 1 };
      case "Increment by 2":
        return { count: state.count + 2 };
      case "Decrement by 2":
        return { count: state.count - 2 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <div>
        <h3>Count is:{state.count}</h3>
        <button onClick={() => dispatch({ type: "Increment" })}>+</button>{" "}
        <br /> <br />
        <button onClick={() => dispatch({ type: "Increment by 2" })}>
          +2
        </button>{" "}
        <br /> <br />
        <button onClick={() => dispatch({ type: "Decrement" })}>-</button>{" "}
        <br /> <br />
        <button onClick={() => dispatch({ type: "Decrement by 2" })}>
          -2
        </button>{" "}
        <br /> <br />
      </div>
    </>
  );
}

export default App;
