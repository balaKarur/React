type ContainerProps = {
    styles:React.CSSProperties;
    myClass?:React.CSSProperties
}
export const Container = (props:ContainerProps) => {
    return (
/*{ <div style={{border:'1px solid black',padding:'1rem'}}>Text Contnet</div> }
<div style={props.styles} className={myClass}>Text Contnet</div>*/
<div style={props.styles} >Text Contnet</div>
    )
}