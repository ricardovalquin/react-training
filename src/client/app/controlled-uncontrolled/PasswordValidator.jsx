import React from 'react';

class PasswordValidator extends React.Component {

  constructor(props){
    super(props);
    this.props = props;
    this.showPasswordError = this.showPasswordError.bind(this);
    if(!this.props.minimum){
      this.props.minimum = 0;
    }
  }

  showPasswordError() {
    if(this.props.password.length < this.props.minimum){
      return (
        <small>
          the minimum number of characters for the password is {this.props.minimum}
        </small>
      );
    }else {
      return null;
    }
  }

  render() {
    return this.showPasswordError();
  }

}

export default PasswordValidator;