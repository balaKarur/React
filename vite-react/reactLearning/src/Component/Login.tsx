import {useState} from "react"
export const Login = () => {
    console.log("I am from Login")
    const loginForm = () => {
       // alert("userName "+ userName +"\n"+ "password "+ password);
       setCount((c) => c+1);
       if(userName =="Bala" && password == "123")
       {
            setIsLogin(true);
            setLoginMessage("MR."+userName +" you Logged In Successfully.");
       }else{
            setIsLogin(false);
            setLoginMessage("Login failed,Please check Username and password");
       }
    }
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");
    const [isLogin,setIsLogin] = useState(false);
    const [loginMessage,setLoginMessage] = useState("");
    const [count,setCount] =useState(0);
    return(
        <>
        <div className="title"> Login </div>
        <div>
            <div className="row">
                <label>UserName</label>
                <input value={userName} onChange={(event) => setUserName(event.target.value)}></input>
            </div>
            <div className="row">
                <label>Password</label>
                <input value={password} onChange={(event) => setPassword(event.target.value)} type="password"></input>
            </div>
            <div className="row">
                <button onClick={loginForm}>SignIn</button>
            </div>
            <div>No of time login btn clicked {count}</div>
            <div className="loginMessage"> {loginMessage}
            </div>
        </div>
        </>
    )
}