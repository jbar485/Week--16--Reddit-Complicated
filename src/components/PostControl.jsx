import React from "react";

import Post from "./Post"
class PostControl extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      masterPosts: [{
          title: 'test title',
          content: 'test content'
      },
      {
        title: 'test2 title',
        content: 'test2 content'
    },
    ]
    };
    this.addNewPostToList = this.addNewPostToList.bind(this);
  }
    addNewPostToList(post){
      var newMasterPosts = this.state.masterPosts.slice();
          newMasterPosts.push(post);
          this.setState({masterPosts: newMasterPosts});
  }


render(){

  return(
    <div>
      {this.state.masterPosts.map((post, index) =>
      <Post title={post.title}
            content={post.content}
              key={index}/>
            )}
    </div>
  );
}
}

export default PostControl;