import { RiDeleteBin6Line } from "react-icons/ri";
import "./Tododiv.css";
function Tododiv({ name, date, todelete }) {
    return (
        <div className="row">
            <div className="col-12 main_content_container">
                <a class="list-group-item list-group-item-action list-group-item-primary">
                    <div className="controls">
                        <div className="content">
                            {name} 
                            <div className="date">
                                {date}
                            </div>
                        </div>
                        <button id="delete_button" onClick={() => todelete(name)}><RiDeleteBin6Line /></button>
                    </div>
                </a>
            </div>
        </div>
    )
}
export default Tododiv;