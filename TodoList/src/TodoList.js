import Todo from "./Todo";

export default function TodoList({todoList,toggleTodoItem}) {
    return (
        <div>TodoList --   
            <div>
                { todoList.map(todo => ( <Todo key={todo.id} todo={todo} toggleTodoItem={toggleTodoItem}/>) )
                }
            </div>
        </div>
    )
}