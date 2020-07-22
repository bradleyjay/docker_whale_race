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
      response: 0,
      endpoint: "http://127.0.0.1:4001"
      // endpoint: ""
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
    socket.on("incoming data", data => this.setState({ response: data }));
    console.log("End DidMount.")
  }

  render() {
    console.log("Mid-render.")
    console.log(this.state.response)
    const { response } = this.state
    return (
      <div className="App">
        <Main
        // response={this.response}
        />
      </div>
    )
  }
}

export default App;
