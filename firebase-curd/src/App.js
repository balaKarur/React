import { collection, getDocs } from 'firebase/firestore';
import React, {useEffect, useState} from 'react';
import {db} from "./firebase";
import CreateUser from "./CreateUser";
export const userCollectionRef = collection(db,"users");
function App() {
  
  const [users,setUsers] = useState([]);
  
  const getUsers= async () => {
    const data = await getDocs(userCollectionRef);
    console.log(data);
    const userList = data._snapshot.docs.sortedSet.root.key.data.value.mapValue.fields;
    console.log(JSON.stringify(userList));
    setUsers(data.docs.map(doc => ({
      ...doc.data(),id:doc.id
    })))
   
  }

  //Component did mount methos is useEffect
  useEffect(() => {
    getUsers();
  },[]);
  return (
    <div>
      Hello All,<br/>
      Welcome to My Rect with FireBase  Training
      { 
        users.map(user => {
        return ( <div key={user.id}> <span>{user.name}</span> | <span>{user.age}</span> </div> )
      })
      } 
      <br/>
      <CreateUser getUsers={getUsers}></CreateUser>
     
    </div>
  )
}

export default App
