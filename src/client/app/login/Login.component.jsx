import React from 'react';
import {render} from 'react-dom';

import './login.scss';

class Login extends React.Component {
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

  handlePasswordChange(val) {
    this.setState({password: val.target ? val.target.value : ''});
  }

  handleSubmit(e) {
    this.setState({email: this.email.value}, () => {
      this.loginUser(this.state);
    });
    e.preventDefault();
  }

  loginUser(user) {
    if(user.email == 'mateo@mateo.com' && user.password == 'test4echo'){
      console.log('logged in');
    } else {
      console.log('information error');
    }
  }

  render() {
    return (
      <div className="row text-center">
        <div className="col-12">
          <img src={require("./resources/coffee-time.png")}/>
        </div>
        <form className="col-12" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>
              email
            </label>
            <input className="form-control" type="email" ref={(input) => this.email = input} />
          </div>
          <div className="form-group">
            <label>
              password
            </label>
            <input className="form-control" type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
          </div>
          <input className="btn btn-primary" type="submit" value="Submit" />
        </form>
      </div>
    );
  }

}

export default Login;
