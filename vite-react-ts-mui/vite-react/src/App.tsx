
import { useState  } from "react";
import Post from "./components/Post";
import Users from "./components/Users";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Button from "./components/EventProps/Button";
import Input from "./components/EventProps/Input";
import {Container} from "./components/styleprops/container";
import {UserLoggedIn} from "./components/state/userDetailsUnionType";
import { UserDetailsTypeAssertion } from "./components/state/UserDetailsTypeAssertion";
import { Counter } from "./components/state/Counter";
import  InputUseReducer  from "./components/state/InputUseReducer";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import {Box} from "./components/context/Box";
import {UserContextProvider} from "./components/context/userContext";
import {DomRef} from "./components/ref/DomRef";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import { List } from "./components/generics/List";

function App(){
  const [count, setCount] = useState(10);
  const [isLogin, setLogin] = useState(false);
  const userDetails = [{name:"Bala"},{name:"Ram"}];
  let status ="loading";
   status ="success";
   status ="error"; 
  const [inputText, setInputText] = useState('asd');
  const items = ["Bala","Ram"];
  const itemsObj = [{"name":"bala"},{"name":"Ram"}]
  const onListItemClick = (item:string) => {
      alert("Selected Item "+item);
  }
  return(
    <>
    <Post title="you have message" count={2} isLoggedIn={isLogin}></Post>
    <button onClick={() => setLogin((isLogin) => !isLogin)}>{isLogin ? 'Logout' : 'Login'}</button>
    <Users basicDetails={userDetails}></Users>
    <div>-----------------------------------</div>
    <h2>Post With count</h2>
    <div>-----------------------------------</div>
    <h2>Post With out count</h2>
    <Post title="you have message"  isLoggedIn={isLogin}></Post>
    <div>-----------------------------------</div>
    <button onClick={() => setCount((count) => count+1 )}>Count is { count }</button>
    {/* <Status status={status}></Status> */}
    <Status status="loading"></Status>
    <Heading>This is Heading</Heading>
    <Oscar> <Heading>This is Heading</Heading></Oscar>
    {/*Event props*/}
    <Button handelClick={(event,id) => { alert("Button clicked"+event+"ID : "+id) }}></Button>
    <Input value={inputText} handleOnChange={
      (event:React.ChangeEvent<HTMLInputElement>,text:string) => 
        {console.log(event,"Text : "+text);
        if(text.length > 0 )
        {
          if(text.length > 5)
          {
            setInputText("");
          }else{
            setInputText(text);
          }
          
        }
       
      }}></Input>
    <div> {inputText }</div>
   <UserDetailsTypeAssertion></UserDetailsTypeAssertion>
   <UserLoggedIn></UserLoggedIn>
   <Counter></Counter>
   <Container styles={{border:'1px solid black',padding:'1rem'}}></Container>
   <InputUseReducer value="data" handleOnChange={() => { }}></InputUseReducer>
    <h2>UseCOntext</h2>
    <ThemeContextProvider>
      <UserContextProvider>
        <Box></Box>
      </UserContextProvider>
      
    </ThemeContextProvider>
    <h2>UseRef</h2>
    <DomRef></DomRef>
    <h2>passing props as component</h2>
    <Private  isLoggedIn ={false} component={Profile} ></Private>
    <List items={items} onClick={onListItemClick} ></List>
    <List items={[1,2,3]} onClick={onListItemClick} ></List>
    <List items={[{id:1,name:"bala"},{id:2,name:"Ram"}]} onClick={onListItemClick} ></List>
    </>

  )
  
}
export default App;
