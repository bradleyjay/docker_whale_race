import React, { Component } from 'react';
import Graph from './Graph'
import FormLeftPanel from './FormLeftPanel'
import CompletedLeftPanel from './CompletedLeftPanel'
import InProgressLeftPanel from './InProgressLeftPanel'

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list_of_words: [], // real one, later
      word1: 'word1',
      word2: 'word2',
      word3: 'word3',
      // duration: 0, // may be in app.js
      gameState: 0 // Form = 0, InProgress = 1, Completed = 2

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    console.log(this.state)
    event.preventDefault(event);
    // this.setState({
    //     word1: '',
    //     word2: '',
    //     word3: '',
    //     duration: 0
    // });
  };

  render() {
    console.log("It's a whale of a taaaaaale")
    console.log(this.props.whaledata)
    console.log(this.props.duration)
    console.log(this.state)
    return (
      <div className="flex-row">
        <FormLeftPanel
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          word1={this.state.word1}
          word2={this.state.word2}
          word3={this.state.word3}
          duration={this.props.duration}
        />
        <InProgressLeftPanel />
        <CompletedLeftPanel />
        <Graph
          count1={this.props.whaledata['0']}
          count2={this.props.whaledata['1']}
          count3={this.props.whaledata['2']}
          word1={this.state.word1}
          word2={this.state.word2}
          word3={this.state.word3}
        />
      </div>
    )
  }
}

export default Main
