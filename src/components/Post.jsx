import React from "react";

class Post extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      totalLikes: this.props.likes

    };
}


render(){

  return(
    <div>
    <h4> {this.props.title}</h4>
    <h4> {this.props.content}</h4>
    <div>
    <p> {this.props.likes}</p>
    <p onClick={() => this.props.onUpvote(this.props.position)}> 👍</p>
    <p onClick={() =>this.props.onDownvote(this.props.position)}> 👎 </p> 
    </div>
    </div>

  );
}


}
export default Post;
