import React, { Component } from 'react';
import ChildComponent from './Child'

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ws: null
        };
    }

    // instance of websocket connection as a class property
    ws = new WebSocket('ws://localhost:3000/ws')

    componentDidMount() {
        this.ws.onopen = () => {
            // on connecting, do nothing but log it to the console
            console.log('connected')
        }

        this.ws.onmessage = evt => {
            // listen to data sent from the websocket server
            const message = JSON.parse(evt.data)
            this.setState({ dataFromServer: message })
            console.log(message)
        }

        this.ws.onclose = () => {
            console.log('disconnected')
            // automatically try to reconnect on connection loss

        }

    }

    render() {
        <ChildComponent websocket={this.ws} />
    }
}