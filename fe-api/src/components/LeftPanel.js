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
    const isGameState = this.props.race_completed ? 2 : this.props.gameState
    console.log(`RACE COMPLETED IN LEFT PANEL: ${this.props.race_completed}`)

    if (isGameState === 0) {
      return (
        <div>
          <FormLeftPanel
            handleChange={this.props.handleChange}
            handleSubmit={this.props.handleSubmit}
            list_of_words={this.props.list_of_words}
            duration={this.props.duration} />
        </div>
      )
    } else if (isGameState === 1) {
      return (
        <div>
          <InProgressLeftPanel
            duration={this.props.duration}

          />
        </div>
      )
    } else {
      return (
        <div>
          <CompletedLeftPanel
            whaledata={this.props.whaledata}
            list_of_words={this.props.list_of_words}
          />
        </div>
      )
    }
  }
}

export default LeftPanel
