import React from 'react';

class Clock extends React.Component {

  constructor(props){
    super(props);
    this.props = props;
    this.state = {
      currentTime: new Date()
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({currentTime: new Date()});
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div>
        <h2>It is {this.state.currentTime.toLocaleTimeString(this.props.locale, { timeZone: this.props.timeZone})}.</h2>
      </div>
    );
  }

}

export default Clock;