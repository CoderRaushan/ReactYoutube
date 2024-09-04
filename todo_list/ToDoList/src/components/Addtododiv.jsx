function Addtododiv()
{
    return(
        <div className="row">
                <div className="col-6"><input type="text" name="inptodo" id="inptodo"  placeholder="Enter ToDo Here "/></div>
                <div className="col-4"><input type="date" name="date" id="date" /></div>
                <div className="col-2"><button className="btn btn-success">Add</button></div>
            </div>
    )
}
export default Addtododiv;