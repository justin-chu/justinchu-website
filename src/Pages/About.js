import React, { Component } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Anime from 'react-anime';
import Chart from "react-apexcharts";
import { chartData } from './chartData';

class About extends Component {
  render() {
    return (
      <div>
        <Jumbotron class="d-flex justify-content-between">
          <div style={{marginTop: -20}}>
            <Anime opacity={[0, 1]} translateY={'1em'} delay={(e, i) => i * 1000}>
              <h1>Hi! I'm Justin.</h1>
              <p>
                I'm a first-year undergraduate student at the University of Toronto studying Computer Science.
              </p>
            </Anime>
          </div>
        </Jumbotron>
        <div class="container">
          <div class="row">
          {Object.values(chartData.options).map((chart, index) => (
            <div class="col-sm">
              <Chart options={chart} series={chartData.series[index]} type="radialBar" height={210} />
            </div>
          ))}
          </div>
        </div>
      </div>
    );
  }
}
 
export default About;