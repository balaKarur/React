import { useState } from "react";
export const LoggedIn = () =>{
    const handleLogin = () => {
        setisLoggedIn(true);
    };
    const handleLogout =() =>{
        setisLoggedIn(false);
    };
    const [isLoggedIn, setisLoggedIn] = useState(false);
return(
    <div>
        <button onClick={handleLogin}></button>
        <button onClick={handleLogout}></button>
        <div>User is {isLoggedIn ? 'Logged In' : 'Logged Out'} </div>
    </div>
)

}