import { useState } from "react";
type AuthUser = {
    name:string;
    email:string
}
export const UserLoggedIn = () =>{
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const [user,setUser] = useState<AuthUser | null>(null)
    const handleLogin = () => {
        setisLoggedIn(true);
        setUser({
            name:"Bala",
            email:"bve"
        })
    };
    const handleLogout =() =>{
        setisLoggedIn(false);
        setUser(null)
    };
    

return(
    <div> <h2>User UseState userDetailsUnionType</h2>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>User is {isLoggedIn ? 'Logged In' : 'Logged Out'} </div>
        <div> User Name is {user?.name}</div>
        <div> User Name is {user?.email}</div>
    </div>
)

}