import { keys } from '@amcharts/amcharts4/.internal/core/utils/Object';
import React, { Component } from 'react';


export class CompletedLeftPanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const whaledata = this.props.whaledata;
    const winner_index = keys(whaledata).reduce(function (a, b) { return whaledata[a] > whaledata[b] ? a : b });
    const winner_name = this.props.list_of_words[winner_index]
    console.log(`Winner Index: ${winner_index}`)
    console.log(`Winner Index: ${winner_name}`)
    return (
      <div>
        <h1>

          A Whale Won!!!
          Congrats, "{winner_name}"!


        </h1>
      </div>
    );
  }
}

export default CompletedLeftPanel
