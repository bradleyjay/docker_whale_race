import React, { Component } from 'react';
import Graph from './Graph'
import LeftPanel from './LeftPanel'
// import $ from 'jquery'

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list_of_words: ['word1', 'word2', 'word3'], // real one, later
      // word1: 'word1',
      // word2: 'word2',
      // word3: 'word3',
      // duration: 0, // may be in app.js
      start_time: 0, //modified default!
      duration: 30,
      gameState: 0, // Form = 0, InProgress = 1, Completed = 2
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    // console.log("CHANGE")
    // console.log(event.target.name)
    let cur_list_of_words = this.state.list_of_words
    let cur_duration = this.state.duration
    let word = event.target.name

    if (event.target.name.includes('word')) {
      let word_id = word.split('word')[1] - 1
      cur_list_of_words[word_id] = event.target.value
      // console.log('WORD')
      // console.log(cur_list_of_words)
    } else if (event.target.name === 'duration') {
      cur_duration = event.target.value
    }
    this.setState({
      list_of_words: cur_list_of_words,
      duration: cur_duration,
    });
  };

  handleSubmit = event => {
    console.log("setting start time")
    const current_time = Date.now() / 1000

    async function postData(url = '', data = {}) {
      console.log('SENDING')
      console.log('GameState is:')
      // console.log(this.state.gameState)
      console.log(data.gameState) // this was hard. I'm keeping it. Pls.
      console.log(data);
      const response = await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      return 'form sent';
    }



    this.setState({
      start_time: current_time, // python conversions?
      // start_time: ((Date.now() + 5000) / 1000), // 5 second delay!
      gameState: 1
    }, () => {

      postData('http://localhost:8080/race_settings', this.state);
    })

    console.log(`after setState:${this.state.start_time}`)
    // looks like both postData and setState are async. the reassignment for setState needs more time before going into postData
    // we're submitting the old state rather than the updating one on lines 47-51. likely need to rewrite handleSubmit for two async functions. 
    // async/await on setState? 

    event.preventDefault(event);
  };

  render() {
    console.log(`start_time: ${this.state.start_time}`)
    console.log(`gameState at panelRender: ${this.state.gameState}`)
    return (
      <div className="flex-row">
        <LeftPanel
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          list_of_words={this.state.list_of_words}
          duration={this.state.duration}
          gameState={this.state.gameState}
        />
        {this.state.gameState == 1 | 2 ? // #FIXME
          // {this.state.gameState === true ?  // only show graph if game running
          < Graph
            // pass down object instead of separate count props
            count1={this.props.whaledata['0']}
            count2={this.props.whaledata['1']}
            count3={this.props.whaledata['2']}
            list_of_words={this.state.list_of_words}
          />
          : <h1> </h1>
        }
      </div>
    )
  }
}

export default Main
