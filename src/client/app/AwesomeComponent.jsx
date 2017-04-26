import React from 'react';

class AwesomeComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {likesCount : 0,
    variable: 'Hello from react'};
    this.onLike = this.onLike.bind(this);
  }

  onLike () {
    let newLikesCount = this.state.likesCount + 1;
    Promise.resolve('resolving a promise').then(
      (x) => this.setState({variable: x}),
      (error) => this.setState({variable: 'NO'})
    );
    this.setState({likesCount: newLikesCount});
  }

  render() {
    return (
      <div>
        <span>{this.state.variable}</span> <br/>
        Likes : <span>{this.state.likesCount}</span>
        <div><button onClick={this.onLike}>Like Me</button></div>
      </div>
    );
  }

}

export default AwesomeComponent;