import { Login } from "./Login";
import {ProfilePros} from "./Profile";
type PrivateProps = {
    isLoggedIn:boolean,
    component:React.ComponentType<ProfilePros>
}

export const Private = ({isLoggedIn,component:Component}:PrivateProps) => {
    if(isLoggedIn)
    {
        return  <Component name='testing'/>
    }else{
        <Login></Login>
    }
    
}