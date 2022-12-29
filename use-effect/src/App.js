import {useState, useEffect , useRef  } from "react";
const getCount = () => {
    console.log("Initialize useState ....");
    return 4;
}
function App()
{
  const [state,setState] = useState([]);
  const [posts,setPosts] = useState([]);
  const [users,setUsers] = useState([]);
  const [items,setItems] = useState([]);
  const [comments,setComments] = useState([]);
  //const [count,setCount] = useState([1]);
  //useState initialization Will be called only once at time of page load, if we defined function defination 
  //we can update the state many time with the use of setCount function
  
  /*const [count,setCount] = useState(() => {
      console.log("Initialize useState ....");
      return 4;
  });*/
  //If need to initialization useState one time then call as function
  const [count,setCount] = useState(() => getCount());
  //If need to initialization useState many time then call as outside function
  //const [count,setCount] = useState(getCount());

  //useEffect will be invoked when ever state is changed.
  useEffect(() => {
       console.log("useEffect called with " + state);
  },[state])
  const updateState = (data) => {
    console.log("Data : "+data);
      // fetch(`https://jsonplaceholder.typicode.com/${data}`)
      //   .then(response => response.json())
      //   .then(json => console.log(json))
      var tempItems = "";
      fetch(`https://jsonplaceholder.typicode.com/${data}`)
      .then(response => response.json())
      .then(json => {
        setItems(json)
        if(data === "posts")
        {
          setPosts(json);
        }
        if(data === "users")
        {
          setUsers(json);
        }
        if(data === "comments")
        {
          setComments(json);
        }
      }
        
        )
      {
        
      }
      
    setState(data);
  }
  const decreamentCount = () => {
    setCount(ps => ps-1 );//To store previos vale  of the state variable
  }
  
  return (
    <div>
        <button onClick={() => updateState('posts')}> {posts.length} Posts</button>
        <button onClick={() =>updateState('users')}>{users.length} Users</button>
        <button onClick={() =>updateState('comments')}>{comments.length} Comments</button>
        <div>{state}</div>
        <div>{items.map(ele => <pre>{JSON.stringify(ele)}</pre>)}</div>
        <button onClick={decreamentCount}>- </button>
        <span>{count}</span>
        <button onClick={() =>setCount(parseInt(count)+1)}>+</button>
        
        
    </div>
  )
}
export default App;