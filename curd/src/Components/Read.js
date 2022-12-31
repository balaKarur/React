import axios from 'axios';
import React,{useState, useEffect} from 'react'
import { REST_API } from '../Constants/URL';
import {Table , Button} from "semantic-ui-react";
import {useNavigate} from "react-router-dom";

export default function Create() {
    const [users,setUsers] = useState([]);
    const navigate = useNavigate();
    const getUsers = async () => {
        let userList = await axios.get(REST_API);
        setUsers(userList.data);
    }
    useEffect(() => {
        getUsers();
    },[])
   /* useEffect( async () => {
        let userList = useMemo (() =>{
           usr =  await getUsers();
        } ,);
         setUsers(userList.data);
     })*/
    const backToCreate = (user) => {
            navigate("/create");
     }
     const deleteUser = async (id) => {
         const res = await axios.delete(REST_API+"/"+id);
         console.log("res : "+res);
         const tempUsers =[...users]; 
          const userIndex =  tempUsers.findIndex(usr => {
                                if(usr !== undefined && usr.id === id)
                                {
                                    return true;
                                }
                                return false;
                            });
          tempUsers.splice(userIndex, 1); 
          setUsers(tempUsers);
     }
     const updateUser = (user) => {
        localStorage.setItem("updateUser",JSON.stringify(user));
        navigate("/create");
     }
    return (
        <div>
            Read Operation
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Terms Approved</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {users.map((user) => (
                        <Table.Row key={user.id}>
                        <Table.Cell>{user.firstName}</Table.Cell>
                        <Table.Cell>{user.lastName}</Table.Cell>
                        <Table.Cell>{user.checked ? "checked" : "unchecked"}</Table.Cell>
                        <Table.Cell><Button onClick={() => { deleteUser(user.id)}}>Delete</Button></Table.Cell>
                        <Table.Cell><Button onClick={() => { updateUser(user)}}>Update</Button></Table.Cell>
                    </Table.Row>
                    ))}
                    
                </Table.Body>
                <Button onClick={backToCreate}>Back</Button>
            </Table>
        </div>
        
    )
}
