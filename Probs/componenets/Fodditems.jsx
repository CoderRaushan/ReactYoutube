import Item from "./Item";
const clickedbuybutton=(fooditems)=>
    {
    
    }
function Fooditems({fooditems}) {
   
    return (
        <ul className="list-group" >
            {
                fooditems.map((item) =>
                (
                   <Item key={item} item={item}  clickedbuybutton={()=>console.log(`${item} is clicked!`)}/>
                ))
            }
        </ul>
    ) 
};
export default Fooditems;