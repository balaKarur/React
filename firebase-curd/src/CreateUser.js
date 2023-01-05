import React,{useState} from 'react'
import {userCollectionRef} from "./App";
import { addDoc } from 'firebase/firestore';
export default function CreateUser({getUsers}) {
    const [name,setUserName] = useState('');
    const [age,setAge] = useState('');
    const saveData = async () => {
        await addDoc(userCollectionRef, { name , age });
        getUsers();
       }
    return (
        <>
            <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text"  onBlur={(event) => setUserName(event.target.value)} class="form-control"  placeholder="Enter name"/>
             </div>
                    <div class="mb-3">
                    <label for="age" class="form-label">Age</label>
                    <input type="text" onBlur={(event) => setAge(event.target.value)} class="form-control"  placeholder="Enter Age"/>
                    </div>
                    <button onClick={saveData} >Add user to Firebase</button>
        </>
    )
}


