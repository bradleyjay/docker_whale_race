import React, { Component } from 'react';
import Graph from './Graph'
import FormLeftPanel from './FormLeftPanel'
import CompletedLeftPanel from './CompletedLeftPanel'
import InProgressLeftPanel from './InProgressLeftPanel'
import $ from 'jquery'

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list_of_words: ['word1', 'word2', 'word3'], // real one, later
      // word1: 'word1',
      // word2: 'word2',
      // word3: 'word3',
      // duration: 0, // may be in app.js
      start_time: '',
      duration: 30,

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

    if (event.target.name.includes('word')){
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
    this.setState({
      start_time: Math.floor(Date.now() / 1000)
    })
    console.log(this.state)
    $.ajax({
      headers: { 'Access-Control-Allow-Origin': '*' },
      type: "POST",
      // crossDomain: true,
      contentType: "application/json;charset=utf-8",
      url: "http://localhost:8080/race_settings",
      traditional: "true",
      data: JSON.stringify(this.state),
      dataType: "json",
      error: function(data){
  	   console.log("POST FAILED")
  	  }
    })
    // async function postData(url = '', data = {}) {
    //   console.log('SENDING')
    //   console.log(data);
    //   const response = await fetch(url, {
    //     method: 'POST',
    //     mode: 'no-cors',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data)
    //   });
    //   return 'form sent';
    // }
    //
    // postData('http://localhost:8080/race_settings', this.state);

    event.preventDefault(event);
  };

  render() {
    // console.log("It's a whale of a taaaaaale")
    // console.log(this.props.whaledata)
    // console.log(this.state.duration)
    // console.log(this.state)
    return (
      <div className="flex-row">
        <FormLeftPanel
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          list_of_words={this.state.list_of_words}
          duration={this.state.duration}
        />
        <InProgressLeftPanel />
        <CompletedLeftPanel />
        <Graph
          // pass down object instead of separate count props
          count1={this.props.whaledata['0']}
          count2={this.props.whaledata['1']}
          count3={this.props.whaledata['2']}
          list_of_words={this.state.list_of_words}
        />
      </div>
    )
  }
}

export default Main
