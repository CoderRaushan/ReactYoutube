function AddToDo({onchange})
{
    let date= new Date();
    return (
    <h1>
    ToDoList Date: {date.toLocaleDateString()} Time: {date.toLocaleTimeString()}
    </h1>
    )
}
export default AddToDo;