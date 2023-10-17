type ButtonProps = {
    handelClick:(event:React.MouseEvent<HTMLButtonElement>,id:number) => void;
}
function Button(props:ButtonProps){
    return(
        <button onClick={(event) =>props.handelClick(event,1)}>Event props</button>
    )
}
export default Button;