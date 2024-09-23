import styles from "./Container.module.css"
const Container=(probs)=>
{
    //children probs
   return(
    <div className={styles.conborder}>
        {probs.children}
    </div>
   )
}
export default Container; 