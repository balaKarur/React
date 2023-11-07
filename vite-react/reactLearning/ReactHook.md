## React Hooks

What is hook?

   hook is a function and it introduced in React 16.8 ,to use React features without having to write a class

ex: to manage state of the component

we can use useState hook.

**Note**: Hooks dont work inside class

**why hooks:**

1. 1)Need to Understand how **this** keyword works in js
2. Remember to bind event handlers in calss component.
3. Classes dont minify very well and make hot reloading very unreliable
4. 2)There is no particular way to reuse stateful component logic
5. HOC and render props patterns do address this problem.This makes code harder to follow
6. There is need a to share stateful logic in a better way
7. **Hooks allow us to reuse stateful logic without changing our component hierarchy**
8. 3)Create component for complex scenarios such as data fetching and subscribing to events
9. Related code is not organized in one place
10. Ex:
    Data Detching - in componentDidMOunt and componentDidUpdate
    Event listeners -In componentDidMount and componentWillUnMount
    Because of statefull logic - Cannot break components into smaller ones

**Hooks:**

**Rules:**

1. Only call hooks at the top level of the component
2. Dont call hooks inside loops, conditions, or nested functions
3. Only call hooks from React Functions
4. Call them from within React Function components and not just any Regular js function

1)useState

2)useState with Previous state with nested function

setCount(prevCount => prevCount+1)

3)useState object, useState hook doesnt mereg the new object in exist , we need to do with the use of spread operator

onChange={(event) => setName({...name,firstName:event.target.value})}

#### **Summary of useState**

1. useState hook , allow us to add state to function components
2. in class component state is always object
3. in Fun component state can be any data type(int ,string ,boolean object or array)
4. the useState hook return array of 2 element
5. the first Element is current value of the state , and the second element is a state setter function to update teh state value
6. If new state value depend on prevuious state ? we can pass a function to the setter function
7. When dealing with object or arrays , always make sure to spread the state variable and then call the setter function
8. **onChange={(event) => setName({...name,firstName:event.target.value})}**
9. **setItem(() => [...items,{id:items.length, value: Math.floor(Math.random() * 10)}] )**

#### **UseEffect**:

***UseEffect hooks help us to perform side effect in functional component.***

sideEffect mean update dom , fetch api call, set interval

in class component , same logic code will be in different life cycle method

Ex: **componentDidMount** -> setInterval and **ComponentWillUnmount** here we will do clearInterval

so to avoid  same logic code in 2 different place we have to use useEffect hook.

useEffect hook is replacement for **componentDidMount, componentDidUpdate and componentWillUnMount**

->UseEffect hook will be invoked once the component rerendered , state updated 

->UseEffect will be called **Conditionally** when ever state variable chages

by adding state variable in array as second param of the UseEffect

**UseEffect(() => {**

**},[count])**

->calling useEffect **only once at the time of initial mount,**

pass empty array as second arg

**UseEffect(() => {**

**},[])**

->**Clean up code** has to be added in the  function and return that function from useEffect

->Cleanup code can be cancelling subscription timer or event removing

Ex:

**useEffect(() => {**

 **window.addEventListener("mouseover",handleMouseMove);**

 **//clean up code for event listener**

 **return () => {**

 **console.log("Component unmounted");**

 **window.removeEventListener("mouseover",handleMouseMove);**

 **}**

 **},[])**

in one component can have **multipel useEffect** as per state variable .

#### UseContext:

Context provides a way to pass data through the component tree , without passing as props manually at each level

1. **Create Context from React and export** 

    export const UserContext = React.createContext();

 **2.Define provider with value for parent component** 

 <UserContext.Provider value="Bala">

    `<CompA></CompA>`

    </UserContext.Provider>

**3.Import the UserContext in grant child component** 

import UserContext from "./app"

**without useContext ->its very hard , if multiple context we have** 

<UserContext.Consumer>

{ 

    user =>{

    return`<div>{user}</div>`

    }

}

</UserContext.Consumer>

**witho useContext ->its very Easy, if multiple context we have**

import React,{useContext} from'react'

onst userC = useContext(UserContext)

const companyC = useContext(CompanyContext)

`<div1>`{userC} - {companyC}`</div>`

#### UseReducer:

    useReducer is a hook that is used for state management

    It is an alternative to useState and useState is build using useReducer

**Reduce in js:**

    reduce method execute reducer function on every array element and produce single output value

->array.reduce(reducerfn,2/*Initial value*/)

->const reducer= (result,current) => result+current;

->As a result single value as output

**useReducer:**

->useReducer(reducerfn,*Initial state*)

->newState = reducer(currentState,action)

->useReducer returns a pair of values. [newState,dispatch]
