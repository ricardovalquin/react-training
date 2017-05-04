import React from 'react';

class BoilingVeredic extends React.Component {

  constructor(props){
    super(props);
    this.props = props;
    this.state = {};
  }

  render() {
    if (this.props.celsius >= 100) {
      return (
        <p>The water would boil.</p>
      );
    }else{
      return (
        <p>The water would not boil.</p>
      );
    }
  }

}

export default BoilingVeredic;