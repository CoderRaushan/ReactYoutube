function Tododiv({name,date}) {
    return (
        <div className="row">
            <div  className="col-6">{name}</div>
            <div  className="col-4">{date}</div>
            <div className="col-2"><button className="btn btn-danger">delete</button></div>
        </div>
    )
}
export default Tododiv;