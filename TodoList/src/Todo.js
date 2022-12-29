/*const onChangeTodo = (id) => {
    console.log("aa");
    toggleTodoItem(id);
}*/
function Todo({todo,toggleTodoItem}){
    return ( <div>
        <label>
            <input type="checkbox" checked={todo.complete} onChange={
                    () => {toggleTodoItem(todo.id)}}></input>{todo.id} {todo.description}   
        </label> 
        
         </div>)
}
export default Todo;