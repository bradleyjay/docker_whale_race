import { keys } from '@amcharts/amcharts4/.internal/core/utils/Object';
import React, { Component } from 'react';
import victory_image from '../victory_image.png';


export class CompletedLeftPanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const whaledata = this.props.whaledata;
    const winner_index = keys(whaledata).reduce(function (a, b) { return whaledata[a] >= whaledata[b] ? a : b });
    console.log(winner_index)
    const winner_name = this.props.list_of_words[winner_index]
    console.log(`Winner Index: ${winner_index}`)
    console.log(`Winner Index: ${winner_name}`)
    return (
      <div>
        <img src={victory_image} style={{width:"100%"}}/>
        <h1>

          A Whale Won!!!
          Congrats, "{winner_name}"!


        </h1>
        <button><a href="/"> play again </a></button>
      </div>
    );
  }
}

export default CompletedLeftPanel
