import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewPostForm(props){
  let _title = null;
  let _content = null;


  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({title: _title.value, content: _content.value, id: v4()});
    _title.value = '';
    _content.value = '';
  }

  return (
    <div>
     <form onSubmit={handleNewPostFormSubmission}>
      <input
        type='text'
        id='title'
        placeholder='title'
        ref={(input) => {_title = input;}}/>
      <input
        type='text'
        id='content'
        placeholder='content'
        ref={(input) => {_content = input;}}/>

      <button type='submit'>Create</button>
    </form>
  </div>
);
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default NewPostForm;