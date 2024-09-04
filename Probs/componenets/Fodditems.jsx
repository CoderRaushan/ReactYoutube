import Item from "./Item";

function Fooditems({fooditems}) {
    return (
        <ul className="list-group" >
            {
                fooditems.map((item) =>
                (
                   <Item key={item} item={item} />
                ))
            }
        </ul>
    ) 
};
export default Fooditems;