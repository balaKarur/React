import { Component } from "react"
import SinglePost from "../SinglePost/SinglePost";
class Post extends Component{
    state = {
            postTitle:"Post List",
            posts:[
                  {id:1,title:"Post1", description:"Description1"},
                  {id:2,title:"Post2", description:"Description2"}
                ],
                showPost : false,
                mystate: {name:"my state"},
                showCount:true
            }
    
    updatePostTitle()
    {
            //const tempState = state ;
           // tempState.postTitle ="Post List Updated trhu btn";
            this.setState({
                postTitle:"Post List Updated by btn"
                    });
    }
    updateTitle = (title) => {
        this.setState({
            postTitle:title
                }); 
    }
    updateTitleNoParam = () =>{
        this.setState({
            postTitle:"Post List Updated by default"
                });
    }
    updateMyState =() =>{
        this.setState({ mystate:{
            name:"my updated state"
        }
        });
    }
    showPostData = () => {
        this.setState({
            showPost : !this.state.showPost
            });
    }
     getPostUi()
       {
        if(this.state.showPost === false) return null;
        else {
            return (
                <div><SinglePost title="Conditionally Post1" description="Description1"> </SinglePost>
                <hr></hr></div>
            )
        }
       
        
       }
       getPostList ()
       {
           var posts = [];
           //loop thru for loop
          /* for(let post of this.state.posts){
            posts.push(<SinglePost key={post.id} title={post.title} description={post.description}> </SinglePost>);
           }
           return <div>{posts}</div>*/
           //loop thru for map
       return (
            this.state.posts.map(post => (<SinglePost key={post.id} title={post.title} description={post.description}> </SinglePost>))
        )
       }
   render(){
       console.log("render");
    //    setTimeout(() => {
    //       const tempState = {...this.state}  ;
    //       tempState.posts[0].description = "Updated description1";
    //       tempState.postTitle ="Post List Updated";
    //       this.setState(tempState);
    //    }
    //    ,1000);
       let post = null;
       if(this.state.showPost === true)
       {
        post = <div><SinglePost title="Conditionally Post1" description="Description1"> </SinglePost>
        <hr></hr></div>
       }
       
       return(
           <>
            <h2>{this.state.postTitle}</h2>
            <button onClick={this.updatePostTitle.bind(this)}>Update Title fn</button>
           {/* onClick={this.updatePostTitle} no need .bind(this)*/}
           <button onClick={this.updateTitle.bind(this,"Post List Updated by property")}>Update Title property</button>
           <button onClick={this.updateTitleNoParam}>Update Title default</button>
           <hr></hr>
           {/*<SinglePost title="Post1" description="Description1"> </SinglePost>
           <SinglePost title="Post2" description="Description2"> </SinglePost>
       */} <button onClick={this.showPostData}>
           {this.state.showPost ? "Hide Post" :"Show post"} </button>
           {
            //  post  
            }
            {this.getPostUi()}
            <hr></hr>
            <div>{this.state.mystate.name}</div><button onClick={this.updateMyState}>Update Mystate</button>
            <hr></hr>
           <div >
           {/* {this.state.posts.map(post => (<SinglePost key={post.id} title={post.title} description={post.description}> </SinglePost>))} */}
           {this.getPostList()}
           </div>
           <hr></hr>
           <div>Conditionaly Render ex</div>
           {this.state.showCount && (<div>Show count</div>)}
           </>
       )
   }
}
export default Post;