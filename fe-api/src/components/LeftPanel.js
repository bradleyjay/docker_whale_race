import React, { Component } from 'react';
import FormLeftPanel from './FormLeftPanel'
import CompletedLeftPanel from './CompletedLeftPanel'
import InProgressLeftPanel from './InProgressLeftPanel'

export class LeftPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {}; // delete line?
  }

  render() {
    const isGameState = this.props.gameState
    if (isGameState === 0) {
        return (
            <div>
                <FormLeftPanel
                handleChange={this.props.handleChange}
                handleSubmit={this.props.handleSubmit}
                list_of_words={this.props.list_of_words}
                duration={this.props.duration}/>
            </div>
        )
      } else if (isGameState === 1) {
        return (
            <div>
                <InProgressLeftPanel />
            </div>
        )
      } else {
        return (
            <div>
                <CompletedLeftPanel />
            </div>
        )      
    }
  }
}

export default LeftPanel
