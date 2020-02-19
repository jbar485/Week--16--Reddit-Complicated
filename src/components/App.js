import React from 'react';
import Header from './Header'
import SideBar from './SideBar'
import PostControl from './PostControl'
import NewPostForm from './NewPostForm'
import { Switch, Route } from 'react-router-dom';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterPostList: []
    };
    this.handleAddNewPostToList = this.handleAddNewPostToList.bind(this);
    this.handleIncreaseThumbsUp = this.handleIncreaseThumbsUp.bind(this);
    this.handleDecreaseThumbsUp = this.handleDecreaseThumbsUp.bind(this);
  }
    handleAddNewPostToList(post){
      var newMasterPosts = this.state.masterPostList.slice();
          newMasterPosts.push(post);
          this.setState({masterPostList: newMasterPosts}, function () {
              console.log(this.state.masterPostList);
          });
          console.log(newMasterPosts);
          // console.log(this.state.masterPostList);
  }
  handleIncreaseThumbsUp(position){
   let post = this.state.masterPostList
     post[position].likes += 1
     this.setState({masterPostList: post})
  }

  handleDecreaseThumbsUp(position){
    let post = this.state.masterPostList
    if (post[position].likes == 0) {
      post = post
    } else {
    post[position].likes -= 1
    this.setState({masterPostList: post})
  }
    }


  render(){



  let page = {
    width: '100%',
    height: '100%',
  }
  return (
    <div style={page}>
      <Header/>
      <SideBar/>
      <Switch>
        <Route exact path='/' render={()=><PostControl postList={this.state.masterPostList} onUpvote={this.handleIncreaseThumbsUp} onDownvote={this.handleDecreaseThumbsUp} />} />
        <Route path='/newpost' render={()=><NewPostForm onNewPostCreation={this.handleAddNewPostToList} postList={this.state.masterPostList}/>}/>
      </Switch>
    </div>
  );
}
}
export default App;
