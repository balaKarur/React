import React,{ useState } from 'react'
import './App.css'
import {Login} from "./Component/Login";
import {Registration} from "./Component/Registration"
import MemoComp  from './Component/MemoComp';
import {Counter}  from './Component/Counter';
import HookCompObject  from './Component/HookCompObject';
import HookCompArray  from './Component/HookCompArray';
import UseEffectHook  from './Component/useEffectHook';
import UseEffectHookMouseMove  from './Component/UseEffectHookMouseMOve';
import UseEffectHookMouseContainer  from './Component/UseEffectHookMouseContainer';
import UseEffectHookSetInterval  from './Component/UseEffectHookSetInterval';
import DataFetching  from './Component/DataFetching';
import CounterUseReducer  from './Component/CounterUseReducer';

import CompA  from './Component/ContextHook/CompA';
export const UserContext = React.createContext();
export const CompanyContext = React.createContext();
function App() {
  const [name,setName] = useState("bala");
  // const interval = () => {
  //     setInterval(() => {
  //       console.log("*****interval");
  //       setName("bala1");
  //     },500)
  // }
  // interval();
  //Creating context


  return (
    <>
      <h2>Hooks UseState</h2>
      <Counter></Counter>
       <hr></hr>
       <HookCompObject></HookCompObject>
       <hr></hr>
       <HookCompArray></HookCompArray>
       <hr></hr>
       <UseEffectHook></UseEffectHook>
       <hr></hr>
       <UseEffectHookMouseMove></UseEffectHookMouseMove>
       <hr></hr>
       {/* <UseEffectHookMouseContainer></UseEffectHookMouseContainer> */}
       <hr></hr>
       <UseEffectHookSetInterval></UseEffectHookSetInterval>
       <hr></hr>

       {/* <DataFetching></DataFetching> */}
       <UserContext.Provider value={"bala in app"}>
        <CompanyContext.Provider value={"ESI"}>
            <CompA></CompA>
        </CompanyContext.Provider>
       </UserContext.Provider>
       
       <hr></hr>
       <CounterUseReducer></CounterUseReducer>
       <hr></hr>
      <MemoComp name={name}></MemoComp>
      <Login ></Login>
      <Registration ></Registration>
    </>
  )
}

export default App
