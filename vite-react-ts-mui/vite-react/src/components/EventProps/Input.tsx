type InputProps ={
    value:string;
    handleOnChange:(event:React.ChangeEvent<HTMLInputElement>,text:string)=>void
}
// function Input(props:InputProps){
    // handling event inside props
//     const handelEventInComponenet = (event:React.ChangeEvent<HTMLInputElement>,text:string) => {
//         console.log(event,"Text : "+text)
//     }
//     return(
            //callback function to parent
//         // <input type="text" onChange={(event) =>props.handleOnChange(event,event.target.value!)}></input>
//          <input type="text" value={props.value} onChange={(event) =>handelEventInComponenet(event,event.target.value!)}></input>
//         )
// }
//destructuring props:
// function Input({value,handleOnChange}:InputProps){
//     return(
//         // <input type="text" onChange={(event) =>props.handleOnChange(event,event.target.value!)}></input>
//          <input type="text" value={value} onChange={(event) =>handleOnChange(event,event.target.value!)}></input>
//         )
// }
function Input({value,handleOnChange}:InputProps){
        return(
            // <input type="text" onChange={(event) =>props.handleOnChange(event,event.target.value!)}></input>
             <input type="text" value={value} onChange={(event) =>handleOnChange(event,event.target.value!)}></input>
            )
    }
export default Input;