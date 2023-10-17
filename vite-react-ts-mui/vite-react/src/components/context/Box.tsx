import {useContext} from "react";
import { ThemeContext } from "./ThemeContext";
import {User} from "./user";
import {UserContext} from "./userContext";
export const Box = () => {
  const userData = useContext(UserContext);
  const theme = useContext(ThemeContext);
  
   return (
     <div style={{background:theme.primary.main,color:theme.primary.text}}>
     Theme Context
     <h2>{userData?.user?.name}</h2>
     <User></User>
     </div>
   )
}