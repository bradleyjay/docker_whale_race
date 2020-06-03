import React from 'react';
import './graph.css';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import {BarChart} from './Barchart'

am4core.useTheme(am4themes_animated);

// class Graph extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state= {
//             array_of_words: [],
//             array_of_whales: [],
//             start_time: 0,
//             duration: 0
//         }
//     }

//     // handleChange = (e) => {
//     //     const {array_of_words, value} = e.target;
//     //     this.setState(prevState => ({
//     //         ...prevState,
//     //         [array_of_words]: target
//     //     }))
//     // }

//     render() {
//         return (
//            <h1>graph</h1>
//         )
//     }

// }

// export default Graph

let data = [
    {
      groupName: "today's lunch items",
      data: [{
        label: "apples",
        value: 1
      },
      {
        label: "nuts",
        value: 50
      },
      {
        label: "cups of coffee",
        value: 99
      }
    ]},
  ];

class Graph extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
          <div className="chart">
            <header className="chart-container">
              <BarChart chartId="chart" data={data} categoryLabel="item" valueLabel="count"/>
            </header>
          </div>
        )
    }
}

  export default Graph