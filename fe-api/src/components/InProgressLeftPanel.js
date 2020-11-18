import React, { Component } from 'react';
import Timer from './Timer';


export class InProgressLeftPanel extends Component {


  constructor(props) {
    super(props);
  }



  render() {
    console.log('InProgLeft')
    console.log(this.props.duration)
    return (
      <div>
        <div>
          <h1>Game in Progress</h1>
        </div>
        <div>
          <Timer
            duration={this.props.duration}
          />
        </div>
      </div>


    );
  }
}

export default InProgressLeftPanel
