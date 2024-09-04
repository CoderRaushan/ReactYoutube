function Tododiv2() {
    let name="Go to college";
    let date="8/02/2024";
    return (
        <div className="row">
            <div className="col-6">{name}</div>
            <div className="col-4">{date}</div>
            <div className="col-2"><button className="btn btn-primary">Add</button></div>
        </div>
    )
}
export default Tododiv2;