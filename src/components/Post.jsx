import React from "react";

class Post extends React.Component{

  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      totalLikes: 0,

    };
    this.increaseThumbsUp = this.increaseThumbsUp.bind(this);
    this.decreaseThumbsUp = this.decreaseThumbsUp.bind(this);
  }
increaseThumbsUp(){
  let newLikesNumber = this.state.totalLikes
  newLikesNumber += 1
  this.setState({totalLikes: newLikesNumber})
}

decreaseThumbsUp(){
    let newLikesNumber = this.state.totalLikes
    newLikesNumber -= 1
    this.setState({totalLikes: newLikesNumber})
  }

render(){
  
  return(
    <div>
    <h4> {this.props.title}</h4>
    <h4> {this.props.content}</h4>
    <div>
    <p>{this.state.totalLikes}</p>
    <p onClick={this.increaseThumbsUp}> 👍</p> 
    <p onClick={this.decreaseThumbsUp}> 👎 </p> 
    </div>
    </div>

  );
}
}
export default Post;