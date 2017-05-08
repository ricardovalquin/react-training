import React from 'react';
import ControlledPassword from './ControlledPassword.jsx';

class LoginForm extends React.Component {

  constructor(props){
    super(props);
    this.props = props;
    this.state = {
      email: '',
      password: ''
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePasswordChange(value) {
    this.setState(value);
  }

  handleSubmit(e) {
    this.setState({email: this.email});
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          email
          <input type="email" ref={(input) => this.email = input} />
        </label>
        <ControlledPassword password={this.state.password} minimum="7" onPasswordChange={this.handlePasswordChange}/>
        <input type="submit" value="Submit" />
      </form>
    );
  }

}

export default LoginForm;