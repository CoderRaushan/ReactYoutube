import styles from "../componenets/Item.module.css";// file.module.css
const Item=(probs)=>
{
   return <li className={`${styles['ul_color_cl']} list-group-item`}>{probs.item}</li>;
}
export default Item;

// another method array destructuring 

// const Item = ({ item }) => {
//     return <li className="list-group-item">{item}</li>;
// }
// export default Item; 