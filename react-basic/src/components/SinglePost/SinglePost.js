import { Component } from "react";

class SinglePost extends Component{
    render(){
        return(
            <>
            <div>{this.props.title}</div>
            <div>{this.props.description}</div>
            </>
        )
    }
}
export default SinglePost;