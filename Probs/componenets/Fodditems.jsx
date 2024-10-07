import { useState } from "react";
import Item from "./Item";
const clickedbuybutton = (fooditems) => {

}
function Fooditems({ fooditems }) {
    let [activeitems, setactiveitems] = useState([]);
    const onbuybutton = (item) => {
        let newitmes = [...activeitems, item];
        setactiveitems(newitmes);
    }
    return (
        <ul className="list-group" >
            {
                fooditems.map((item) =>
                (
                    <Item key={item} item={item}
                        bought={activeitems.includes(item)}
                        clickedbuybutton={() => onbuybutton(item)} />
                ))
            }
        </ul>
    )
};
export default Fooditems;