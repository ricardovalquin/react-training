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
      },
      inputVal: ''
    };
    this.inputToShow1 = {value: ''};
    this.inputToShow2 = {value: ''};
    this.onLike = this.onLike.bind(this);
    this.formatName = this.formatName.bind(this);
  }

  onLike (event) {
    this.setState((oldState, props) => {
      Object.assign(oldState.user, {firstName: 'Papaya'});
      return oldState;
    });
  }

  handleInputChange (event, inputName) {
    console.log(event)
    this.setState({[inputName]: event.target.value});
  }

  formatName (user) {
    return `${user.firstName} ${user.lastName}`;
  }

  render() {
    return (
      <div className={ `camilo test ${this.state.user.firstName}`} id="asdfa">
        <button type="button" onClick={(e) => this.onLike(e)} ></button>
        <h1>
          Hello, {this.formatName(this.state.user)}!
        </h1>
        <div>
          {this.state.inputVal}
          <input type="text" value={this.state.inputVal} onChange={(e)=>this.handleInputChange(e, 'inputVal')}/>
        </div>
        <div>
          {`${this.inputToShow1.value} ${this.inputToShow2.value}`}
          {/*<input type="text" ref={(valueChanged) => this.inputToShow = valueChanged} />*/}
          <input type="text" ref={(input) => this.inputToShow1 = input} />
          <input type="text" ref={(input) => this.inputToShow2 = input} />
        </div>
        <button onClick={(e) => this.onLike(e)} ></button>
      </div>
    );
  }

}

export default AwesomeComponent;