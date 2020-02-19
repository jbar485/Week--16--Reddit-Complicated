import React from "react";
import Post from "./Post";

function PostControl(props){

  return(
    <div>

      {props.postList.map((post) =>
      <Post title={post.title}
            content={post.content}
            likes={post.likes}
            position={post.position}
            onUpvote ={props.onUpvote}
            onDownvote = {props.onDownvote}
            key={post.id}/>
            )}

    </div>
  );
}


export default PostControl;
