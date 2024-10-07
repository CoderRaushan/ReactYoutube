import styles from "../componenets/Item.module.css";// file.module.css

const Item=({item,bought,clickedbuybutton})=>
{
   return <li className={`${styles['ul_color_cl']} list-group-item ${bought && 'active'}`}>{item}
    <button className={`${styles['but_btn']} btn btn-info`}
              onClick={clickedbuybutton}
              >Buy</button>
   </li>
}
export default Item;

// another method array destructuring 
// const Item = ({ item }) => {
//     return <li className="list-group-item">{item}</li>;
// }
// export default Item; 