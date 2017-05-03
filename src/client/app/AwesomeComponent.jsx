import React from 'react';

class AwesomeComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      likesCount : 0,
      variable: 'hola',
      user: {
        firstName: props.name,
        lastName: 'Perez'
      }
    };
    this.onLike = this.onLike.bind(this);
    this.formatName = this.formatName.bind(this);
  }

  onLike () {
    // let newLikesCount = this.state.likesCount + 1;
    // Promise.reject('cualquier pendejada').then(
    //   (x) => this.setState({variable: x}),
    //   (error) => this.setState({variable: 'NO'})
    // );
    // this.setState({likesCount: newLikesCount});
    this.setState((oldState, props) => {
      Object.assign(oldState.user, {firstName: 'Papaya'});
      return oldState;
    });
  }

  formatName (user) {
    return `${user.firstName} ${user.lastName}`;
  }

  render() {
    return (
      <div className={ `camilo test ${this.state.user.firstName}`} id="asdfa">
        <h1>
          Hello, {this.formatName(this.state.user)}!
        </h1>
        <button onClick={this.onLike}></button>
      </div>
    );
  }

}

export default AwesomeComponent;