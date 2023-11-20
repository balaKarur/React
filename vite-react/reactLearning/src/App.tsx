import React,{ useReducer, useState } from 'react'
import './App.css'
import ParentCom from "./Component/useCallback/ParentCom"
import CounterUseMemo from "./Component/useMemo/CounterUseMemo"
import FocusInput from "./Component/useRef/focusInput"
import HookTimer from "./Component/useRef/hookTimer"
import DocTitleOne from "./Component/CustomHook/DocTitleOne"
import DocTitleTwo from "./Component/CustomHook/DocTitleTwo"
import Form from "./Component/CustomHook/Form"
//End UseReducer
function App() {

  return (
    <>
    <ParentCom></ParentCom>
    <hr></hr>
    <CounterUseMemo></CounterUseMemo>
    <hr></hr>
    <FocusInput></FocusInput>
    <hr></hr>
    <HookTimer></HookTimer>
    <hr></hr>
    <DocTitleOne></DocTitleOne>
    <hr></hr>
    <DocTitleTwo></DocTitleTwo>
    <hr></hr>
    <Form></Form>
   </>
  )
}

export default App
