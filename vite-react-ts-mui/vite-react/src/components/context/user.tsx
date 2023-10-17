import {useContext} from 'react';
import {UserContext} from "./userContext";
export const User = () => {
    const userData = useContext(UserContext);
    const handleLogin = () => {
        userData.setUser({name:"bala"});
    }
    const handleLogout = () => {
        userData.setUser(null);
    }
    return(
        <div>
            <button onClick={() => {handleLogin()}}>Login</button>
            <button onClick={() => {handleLogout()}}>Logout</button>
            <div>Login User Name is {userData.user?.name} </div>
        </div>
    )
}