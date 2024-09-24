import styles from "./Display.module.css";
const Display=({displayval})=>
{
   return <input type="text" name="display" className={styles.display} value={displayval} readOnly/>
}

export default Display;