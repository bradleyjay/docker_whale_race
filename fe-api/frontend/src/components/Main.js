import React, {Component} from 'react';
import Graph from './Graph'
import Form from './Form'

export class Main extends Component {
    constructor() {
      super();
      this.state = {
        word1: 'word1',
        word2: 'word2',
        word3: 'word3',
        count1: 10,
        count2: 20,
        count3: 30,
        duration: 0,
        formNeeded: true
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
        return (
            <div className="flex-row">
              <Form 
                handleChange = {this.handleChange}
                handleSubmit = {this.handleSubmit}
                word1={this.state.word1}
                word2={this.state.word2}
                word3={this.state.word3}
                duration={this.state.duration}
              />
              <Graph
                count1={this.state.count1}
                count2={this.state.count2}
                count3={this.state.count3}
                word1={this.state.word1}
                word2={this.state.word2}
                word3={this.state.word3}
              />
            </div>
        )
    }
}

export default Main
