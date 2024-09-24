import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/Buttons_container";
import { useState } from "react";
function App() {
  let [calval, setcalval] = useState("");
  const onclickbtn = (button) => {
    if (button === "AC") {
      setcalval("");
    }
    else if (button == "=") {
      const modifiedCalval = calval.replace(/sqrt\(([^)]+)\)/g, 'Math.sqrt($1)')
      .replace(/π/g, 'Math.PI');
      try {
          const res = eval(modifiedCalval);
          setcalval(res);
      } catch (error) {
          setcalval("Error"); 
      }
    }
    else if (button === "DL") {
      setcalval(calval.slice(0, -1));
    } 
    else if (button === "sqrt") 
    {
      setcalval(calval + "sqrt("); 
    }

    else if (button === "()") 
      {
      if (calval.includes("(")) {
        let newcalval = calval + ")";
        setcalval(newcalval);
      }
      else {
        setcalval(calval + "(");
      }
    }
    else {
      let newcalval = calval + button;
      setcalval(newcalval);
    }
  }
  return (
    <div className={styles.calculator}>
      <Display displayval={calval} />
      <ButtonContainer onclickbtn={onclickbtn} />
    </div>
  )
}

export default App
