import Addtododiv from "../components/Addtododiv"   // ../components/Addtododiv
import Tododiv from "../components/Tododiv"
const Todocontainers = ({todolists}) => {
    console.log(todolists.date);
   return <div className="container text-center">
        <Addtododiv />
        {
            todolists.map((item)=>
            (
                <Tododiv key={item.name} name={item.name} date={item.date} />
            ))
        };
    </div>
};
export default Todocontainers;