import React, { Component } from 'react';
import Main from './components/Main'
import './App.css';
import socketIOClient from 'socket.io-client';

// https://dev.to/captainpandaz/a-socket-io-tutorial-that-isn-t-a-chat-app-with-react-js-58jh
// This socket.io is needed to pass data from express server to react itself
class App extends Component {
  constructor() {
    super();
    this.state = {
      // response: { val1: 17, val2: 38 },
      // race_duration: 302,
      // race_start: 0,
      race_completed: false,
      whaledata: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0 },
      endpoint: "http://127.0.0.1:4001"
    };
  }
  componentDidMount() {
    console.log('Start DidMount')
    const { endpoint } = this.state;
    // connect to the socket
    const socket = socketIOClient(endpoint);
    // listen for outgoing data and supply a callback
    // updates the state var when receiving a callback
    // socket.on("outgoing data", data => this.setState({ response: data.num }));
    socket.on("incoming data", data => {
      console.log("This is the incoming data:")
      console.log(data);

      //unpack yo stuff
      const index_key = data["whalenumber"]
      const count = data["cum_instances_found"]
      const race_completed = data["race_completed"]

      // update state, reassign state
      !this.state.race_completed ?   // conditional prevents us from counting data AFTER race ends
        this.setState({
          whaledata: {
            ...this.state.whaledata,
            [index_key]: count
          },
          race_completed: race_completed
        }) : this.setState({});  // this is a dumb placeholder. Need a function here.
    });
    console.log("End DidMount.")
  }

  /* Object from WHALES
    results = {
      "word": input_word,
      "cum_instances_found": 0,
      "new_instances_found": 0,
      "race_completed": False,
      "whalenumber": whalenumber,
  }
  */


  render() {
    console.log("Mid-render.")
    // console.log(this.state.response)
    console.log(this.state)
    // const { response } = this.state
    return (
      <div className="App">
        <Main
          whaledata={this.state.whaledata}
          race_completed={this.state.race_completed}
        />
      </div>
    )
  }
}

export default App;
