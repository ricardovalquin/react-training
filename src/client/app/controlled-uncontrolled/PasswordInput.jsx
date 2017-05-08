import React from 'react';

class PasswordInput extends React.Component {

  constructor(props){
    super(props);
    this.props = props;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onPasswordChange({password: e.target.value});
  }

  render() {
    return (
      <input type="password" value={this.props.password} onChange={this.handleChange}/>
    );
  }

}

export default PasswordInput;