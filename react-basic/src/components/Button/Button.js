
function Button(props){
    //props.name = "test"-> props should not be modified
    return (
        <div>
            <button>{props.name} </button>
        </div>
    )
}
export default Button;