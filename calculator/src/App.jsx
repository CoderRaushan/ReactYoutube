import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/Buttons_container";
function App() {
 
  return (
    <div className={styles.calculator}>
          <Display/>
          <ButtonContainer/>
    </div>
  )
}

export default App
