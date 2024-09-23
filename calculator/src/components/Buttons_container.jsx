
import styles from "./Buttons_container.module.css";
const ButtonContainer = () => {
    const button_array=["AC","()","%","/","7","8","9","X","4","5","6","-","1","2","3","+","0",".","DL","="];
    return<div className={styles.button_container}>
        {button_array.map((button)=><button className={styles.button}>{button}</button>)}
        </div>
}
export default ButtonContainer;