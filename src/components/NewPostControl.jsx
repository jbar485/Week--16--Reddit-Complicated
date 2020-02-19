import React from 'react';
import NewPostForm from './NewPostForm';
import PropTypes from 'prop-types';

class NewPostControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: true
    };

    }

  render()  {

    return (
      <div>
        <NewPostForm onNewPostCreation={this.props.onNewPostCreation}/>;

      </div>
    );
  }
}
NewPostControl.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default NewPostControl;