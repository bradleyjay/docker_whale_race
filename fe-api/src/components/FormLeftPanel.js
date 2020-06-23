import React, {Component} from 'react';

export class FormLeftPanel extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
              <label htmlFor="words">
                  Words:
                  <br/>
                  <input
                  name="word1"
                  type="text"
                  value={this.props.word1}
                  onChange={this.props.handleChange}
                  />
                  <br/>
                  <input
                  name="word2"
                  type="text"
                  value={this.props.word2}
                  onChange={this.props.handleChange}
                  />
                  <br/>
                  <input
                  name="word3"
                  type="text"
                  value={this.props.word3}
                  onChange={this.props.handleChange}
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
                  value={this.props.duration}
                  onChange={this.props.handleChange}
                  />
              </label>
              <br />
              <input type="submit" value="Start" />
            </form>
      );
    }
  }

  export default FormLeftPanel
