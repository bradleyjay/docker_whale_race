import React, {Component} from 'react';

export class FormLeftPanel extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
          <div>
            <form onSubmit={this.props.handleSubmit}>
              <label htmlFor="words">
                  Words:
                  <br/>
                  <input
                  name="word1"
                  type="text"
                  value={this.props.list_of_words[0]}
                  onChange={this.props.handleChange}
                  />
                  <br/>
                  <input
                  name="word2"
                  type="text"
                  value={this.props.list_of_words[1]}
                  onChange={this.props.handleChange}
                  />
                  <br/>
                  <input
                  name="word3"
                  type="text"
                  value={this.props.list_of_words[2]}
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
                  form_field_type="duration"
                  type="number"
                  value={this.props.duration}
                  onChange={this.props.handleChange}
                  />
              </label>
              <br />
              <input type="submit" value="Start" />
            </form>
          </div>
      );
    }
  }

  export default FormLeftPanel
