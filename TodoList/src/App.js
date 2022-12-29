import { useState, useRef, useEffect } from 'react';
import  TodoList from "./TodoList";

function App(){
  //Define teh state
  const [todoList,setTodoList] = useState([]);
  const inputRef = useRef();
  useEffect(()=>{
    let todoListTemp = JSON.parse(localStorage.getItem('TODOList'));
    let aa = todoListTemp.length > 0 ? setTodoList(todoListTemp) : "";
  },[])
  //This useEffect will call when ever todoList updated
  useEffect(()=>{
    localStorage.setItem('TODOList',JSON.stringify(todoList))
  },[todoList])
  const addToDoList = () => {
    let todo = inputRef.current.value;
    let todoListTemp = [...todoList];
    todoListTemp.push({id:todoListTemp.length , description : todo , complete : false});

    setTodoList(todoListTemp);

    inputRef.current.value = "";
    //toggleTodo(0);
  }
  const clearTodoList = () =>{
    let todoListTemp = [...todoList];
    var seletedTodo = todoListTemp.filter(todo => !todo.complete );
    console.log("seletedTodo : "+ JSON.stringify(seletedTodo));
    setTodoList(seletedTodo);
  }
  const toggleTodoItem = (id) => {
    //var data = _.find(todoList,id);
    let todoListTemp = [...todoList];
    console.log("toggleTodoItem : "+ id);
    var seletedTodo = todoListTemp.find(todo => todo.id === id);
    if(seletedTodo != undefined)
    {
      seletedTodo.complete = !seletedTodo.complete;
    }
    setTodoList(todoListTemp);
  }
  //Jsx
  return(
    <div>Welcome to React App
    <TodoList todoList={todoList} toggleTodoItem={toggleTodoItem}/>
    <input ref={inputRef}/>
    <button onClick={addToDoList}>Add to TodoList</button>
    <button onClick={clearTodoList}>Clear complete TodoList</button>
    <p>{todoList.filter(todo => !todo.complete ).length} Left in Todo List </p>
    </div>
  )
}
export default App;




























/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/