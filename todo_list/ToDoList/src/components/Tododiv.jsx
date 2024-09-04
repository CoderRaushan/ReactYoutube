function Tododiv() {
    let name="Buy Milk";
    let date="4/10/2023";
    return (
        <div className="row">
            <div className="col-6">{name}</div>
            <div className="col-4">{date}</div>
            <div className="col-2"><button className="btn btn-danger">Add</button></div>
        </div>
    )
}
export default Tododiv;