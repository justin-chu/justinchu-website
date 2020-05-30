import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Anime from "react-anime";
import Chart from "react-apexcharts";
import { chartData } from "./chartData";

class About extends Component {
  render() {
    return (
      <div>
        <Jumbotron
          style={this.props.darkMode ? { backgroundColor: "#343a40" } : {}}
          class="d-flex justify-content-between"
        >
          <div style={{ marginTop: -20 }}>
            <Anime
              opacity={[0, 1]}
              translateY={"1em"}
              delay={(e, i) => i * 1000}
            >
              <h1
                style={
                  this.props.darkMode ? { color: "white" } : { color: "black" }
                }
              >
                Hi! I'm Justin.
              </h1>
              <p
                style={
                  this.props.darkMode ? { color: "white" } : { color: "black" }
                }
              >
                I'm a first-year undergraduate student at the University of
                Toronto studying Computer Science.
              </p>
            </Anime>
          </div>
        </Jumbotron>

        {/* <h3 class="mb-3 text-center">My skills include:</h3> */}
        <div class="container">
          <div class="row">
            {Object.values(chartData.options).map((chart, index) => (
              <div class="col-sm">
                {/* width: ~992 before it becomes unresponsive I think */}
                <Chart
                  options={chart}
                  series={chartData.series[index]}
                  type="radialBar"
                  height={225}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default About;
