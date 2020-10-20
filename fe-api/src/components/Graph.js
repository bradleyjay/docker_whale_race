import React from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

// Create the chart from amChart library
let chart = am4core.create("chartdiv", am4charts.XYChart);

// Creates categories/qualitative on Y-axis
let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "word";
categoryAxis.title.text = "Word";

// Creates values/quantitative on X-axis
let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.dataFields.value = "cumsum";
valueAxis.title.text = "Count";

// Associates the categorical/quantitative data to datafields
let series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.categoryY = "word";
series.dataFields.valueX = "cumsum";





class Graph extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

    this.chart = chart;
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    // Actual data
    chart.data = [{
      "word": this.props.list_of_words[0],
      "cumsum": this.props.count1
    }, {
      "word": this.props.list_of_words[1],
      "cumsum": this.props.count2
    }, {
      "word": this.props.list_of_words[2],
      "cumsum": this.props.count3
    }
    ];
    return (
      <div id="chartdiv" style={{ width: "100%", height: "500px", visibility: this.props.graph_visibility }}></div>
    );
  }
}

export default Graph;
