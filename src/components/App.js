import React from 'react';
import Header from './Header'
import SideBar from './SideBar'
import PostControl from './PostControl'
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  let page = {
    width: '100%',
    height: '100%',
  }
  return (
    <div style={page}>
      <Header/>
      <SideBar/>
      <PostControl/>
    </div>
  );
}

export default App;
