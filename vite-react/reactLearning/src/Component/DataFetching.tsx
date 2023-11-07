import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetching() {
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({});
    const [id, setId] = useState("1");
    const [idFromBtnClick, setIdFromBtnClick] = useState("1");
    useEffect(() => {
        console.log("call posts data _____________________ ");
        
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
            setPosts(res.data);
        }).catch((err) => {
            console.log("Error in fetch call :"+ err);
        })
    },[])
    useEffect(() => {
        console.log("call post data _____________________ ");
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromBtnClick}`).then((res) => {
            setPost(res.data);
        }).catch((err) => {
            console.log("Error in fetch call :"+ err);
        })
    },[idFromBtnClick])
  return (
    <>
    <div>DataFetching Record by given Id</div>
    <input type="text" value={id} onChange={(event) => setId(id => event.target.value)} />
    <button onClick={() => setIdFromBtnClick(id)}>Get Data</button>
    <span>{post.title}</span>
     <hr></hr>
    <div>DataFetching 100 Record</div>
    <ul>
        { posts.map(post => {
            return (<li key={post.id}>{post.title}</li>)
        })}
    </ul>
   
    </>
    
  )
}

export default DataFetching