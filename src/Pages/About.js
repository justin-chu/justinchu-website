import React, { Component } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Anime from 'react-anime';

class About extends Component {
  constructor(props){
    super(props)
    this.state={index: 0, direction: null}
  }

  handleSelect = (selectedIndex, e) => {
    this.setState({index: selectedIndex});
    this.setState({direction: e.direction});
  };

  render() {
    return (
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
    );
  }
}
 
export default About;