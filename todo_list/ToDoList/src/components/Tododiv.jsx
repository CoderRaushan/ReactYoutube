function Tododiv({name,date,todelete}) {
    return (
        <div className="row">
            <div  className="col-6">{name}</div>
            <div  className="col-4">{date}</div>
            <div className="col-2">
                <button className="btn btn-danger" onClick={()=>todelete(name)}>delete</button>
            </div>
        </div>
    )
}
export default Tododiv;