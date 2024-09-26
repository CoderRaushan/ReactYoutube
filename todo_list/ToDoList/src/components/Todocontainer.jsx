
import Tododiv from "../components/Tododiv"
const Todocontainers = ({todolists,todelete}) => {
   return <div className="container text-center">
        {
            todolists.map((item)=>
            (
                <Tododiv key={item.name} name={item.name} date={item.date}  todelete={todelete}/>
            ))
        }
    </div>
};
export default Todocontainers;