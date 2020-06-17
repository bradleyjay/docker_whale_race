import React from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

// Create the chart from amChart library
let chart = am4core.create("chartdiv", am4charts.XYChart);

// Creates categories/qualitative on Y-axis
let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "word";
categoryAxis.title.text = "Whales Go here)";

// Creates values/quantitative on X-axis
let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.dataFields.value = "cumsum";
valueAxis.title.text = "Whale Times Here";

// Associates the categorical/quantitative data to datafields
let series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.categoryY = "word";
series.dataFields.valueX = "cumsum";

// Actual data
chart.data = [{
  "word": "Whale1",
  "cumsum": 501
}, {
  "word": "Whale2",
  "cumsum": 301
}, {
  "word": "Whale3",
  "cumsum": 201
}, {
  "word": "Whale4",
  "cumsum": 165
}
];



class Graph extends React.Component {
  componentDidMount() {
    let chart = am4core.create("chartdiv", am4charts.XYChart);

    this.chart = chart;
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
      <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
    );
  }
}

export default Graph;
