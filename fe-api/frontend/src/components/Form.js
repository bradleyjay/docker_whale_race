import React, {Component} from 'react';

export class Form extends Component {
    constructor() {
      super();
      this.state = {
        word1: '',
        word2: '',
        word3: '',
        duration: 0
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
        this.setState({
            word1: '',
            word2: '',
            word3: '',
            duration: 0
        });    
    };
  
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <label htmlFor="words">
                Words:
                <br/>
                <input
                name="word1"
                type="text"
                value={this.state.word1}
                onChange={this.handleChange}
                />
                <br/>
                <input
                name="word2"
                type="text"
                value={this.state.word2}
                onChange={this.handleChange}
                />
                <br/>
                <input
                name="word3"
                type="text"
                value={this.state.word3}
                onChange={this.handleChange}
                />
            </label>
            <br />
            <br />
            <label htmlFor="duration">
                Duration:
                <br/>
                <input
                name="duration"
                type="number"
                value={this.state.duration}
                onChange={this.handleChange}
                />
            </label>
            <br />
            <input type="submit" value="Start" />
            </form>
      );
    }
  }

  export default Form
