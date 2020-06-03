import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themesAnimated from '@amcharts/amcharts4/themes/animated';
import _ from 'lodash';

// CODE TAKEN FROM
// https://medium.com/@aamine/data-visualization-with-react-amcharts-11a2dddbde06

let theme = {
    name: 'dark',
    gridColor: '#FFFFFF',
    gridWidth: 1,
    gridOpacity: 0.75,
    labelsColor: '#FFFFFF',
    seriesOpacity: 1,
    colors: [
        '#FF7E6B',
        '#028090',
        '#FFE74C',
        '#FF5964',
        '#93E1D8',
        '#E15554',
        '#33CA7F',
        '#878787',
    ]
}


export class BarChart extends Component {
      static propTypes = {
        chartId: PropTypes.string.isRequired,
        categoryLabel: PropTypes.string.isRequired,
        valueLabel: PropTypes.string.isRequired,
        data: PropTypes.arrayOf(
          PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.number.isRequired,
          }).isRequired,
        ).isRequired,
        rtl: PropTypes.bool,
      };

      static defaultProps = {
        rtl: false
      };

      componentDidMount() {
        this.initChart();
      }

      componentDidUpdate(prevProps) {
        //Handle refreshing the chart when the dataset changes
        if(!_.isEqual(prevProps.data, this.props.data)) {
          if(this.chart._super) {
            this.chart.dispose();
          }
          this.initChart();
        }
      }

      componentWillUnmount() {
        if(this.chart._super) {
        this.chart.dispose();
        }
      }

      initChart() {
        const { chartId, data, categoryLabel, valueLabel, rtl } = this.props;
        am4core.useTheme(am4themesAnimated);
        this.chart = am4core.create(chartId, am4charts.XYChart);
    
        this.chart.colors.list = theme.colors.map(color => am4core.color(color));
    
        //construct category axis
        const categoryAxis = this.chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = categoryLabel;
    
        //style category axis grid
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.grid.template.stroke = am4core.color(theme.gridColor);
        categoryAxis.renderer.grid.template.strokeOpacity =theme.gridOpacity;
    
        //style category axis labels
        categoryAxis.renderer.labels.template.fill = am4core.color(theme.labelsColor);
        categoryAxis.renderer.labels.template.location = 0.5 ;
        categoryAxis.renderer.labels.template.wrap = false;
        categoryAxis.renderer.labels.template.truncate = false;
    
        categoryAxis.renderer.minGridDistance = 30;
        categoryAxis.layout = "horizontal";
    
        //construct value axis
        const valueAxis = this.chart.yAxes.push(new am4charts.ValueAxis());
    
        //flip value access for rtl languages
        valueAxis.renderer.opposite = rtl
    
        //style value axis grid
        valueAxis.renderer.grid.template.stroke = am4core.color(theme.gridColor);
        valueAxis.renderer.grid.template.strokeOpacity =theme.gridOpacity;
        valueAxis.renderer.grid.template.strokeWidth = theme.gridWidth;
        valueAxis.renderer.grid.template.gridCount = 349742083402
    
        valueAxis.renderer.labels.template.fill = am4core.color(theme.labelsColor);
        valueAxis.min = 0;
    
        //format data
        let formattedData = [];
    
        data.forEach(lineSeries => {
            const name = lineSeries.groupName || valueLabel;
            lineSeries.data.forEach(dataRow => {
                const result = {};
                result[categoryLabel] = dataRow.label;
                result[name] = dataRow.value;
    
                formattedData.push(result);
            });
            formattedData = _.orderBy(formattedData, ['year'], ['asc']);
            this.chart.data = rtl ? formattedData.reverse() : formattedData;
    
            // Create data series
            const series = this.chart.series.push(new am4charts.ColumnSeries());
    
            series.dataFields.categoryX =  categoryLabel;
            series.dataFields.valueY = name;
            series.name = name;
            series.strokeWidth = 3;
    
            const columnTemplate = series.columns.template;
            columnTemplate.strokeWidth = 2;
            columnTemplate.strokeOpacity = 1;
            columnTemplate.fillOpacity = theme.seriesOpacity;
            })
    }

    render() {
        return <div id={this.props.chartId} className="graph" />;
      }
}