import { useState } from "react";
type AuthUser = {
    name:string;
    email:string
}
export const UserDetailsTypeAssertion = () =>{
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const [user,setUser] = useState<AuthUser>({} as AuthUser)
    const handleLogin = () => {
        setisLoggedIn(true);
        setUser({
            name:"Bala",
            email:"bve"
        })
    };
    const handleLogout =() =>{
        setisLoggedIn(false);
    }
//}
//export const UserDetailsTypeAssertion = () =>{
   return(
    <div> <h2>User UseState userDetailsTypeEmpty Assertion</h2>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>User is {isLoggedIn ? 'Logged In' : 'Logged Out'} </div>
        <div> User Name is {user.name}</div>
        <div> User Name is {user.email}</div>
    </div>
)
}