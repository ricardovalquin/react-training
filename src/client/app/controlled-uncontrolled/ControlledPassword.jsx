import React from 'react';
import PasswordInput from './PasswordInput.jsx';
import PasswordValidator from './PasswordValidator.jsx';

class ControlledPassword extends React.Component {

  constructor(props){
    super(props);
    this.props = props;
  }

  render() {
    return (
      <label>
        password
        <PasswordInput password={this.props.password} onPasswordChange={this.props.onPasswordChange}/>
        <PasswordValidator password={this.props.password} minimum={this.props.minimum}/>
      </label>
    );
  }

}

export default ControlledPassword;