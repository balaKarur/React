import React ,{useEffect, useState} from 'react'
import {REST_API} from "../Constants/URL"
import {Form, Button, Checkbox} from "semantic-ui-react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";
export default function Create() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [checked,setChecked] = useState(false);
    const [userId,setUserId]= useState("");
    const navigate = useNavigate();
    const  addUser = async () => {
        console.log(firstName +  lastName  + checked);
        let body = {firstName ,  lastName  , checked};
        if(firstName  != "" && lastName !== "")
        {
            if(userId !== "")
            {
                await axios.put(REST_API+"/"+userId,body);
            }else{
                await axios.post(REST_API,body); 
            }
            navigate("/read");
        }else{
            alert("firstName or lastName can not be empty...")
        }
        
    }
    const backpage  = () =>
    {
        navigate("/read");
    }
    useEffect(() => {
        let userStr = localStorage.getItem("updateUser");
        if(userStr !== undefined && userStr !== "")
        {
            localStorage.setItem("updateUser","");
            let userObj = JSON.parse(userStr);
            setFirstName(userObj.firstName);
            setLastName(userObj.lastName);
            setChecked(userObj.checked);
            setUserId(userObj.id);
        }
        
    },[])

    return (
        <Form >
             <div> Create Operation</div>
            <Form.Field>
                <label>First Name</label>
                <input value={firstName} 
                onChange= {event => setFirstName(event.target.value)} placeholder="Enter First Name"/>
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input value={lastName} 
                onChange= {event => setLastName(event.target.value)}
                placeholder="Enter First Name"/>
            </Form.Field>
            <Form.Field>
                <Checkbox checked={checked} onChange={event => setChecked(!checked)} label="Agree the terms & conditions"/>
            </Form.Field>
            <span className="footer">
            <Button className="back" onClick={backpage}>Back</Button>
            <Button className="submit" onClick={addUser}>Submit</Button>
            </span>
           
        </Form>
    )
}
