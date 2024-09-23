import styles from "../componenets/Input.module.css"
const Input=(probs)=>
{
  return <input className={styles.input} type="text" name="Input" id="Input" placeholder="Enter item here!" onKeyDown={probs.handleOnchage} />
}
export default Input;