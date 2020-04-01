import React, { Component } from "react";
import { Route, NavLink, HashRouter, Redirect } from "react-router-dom";

import About from "./About";
import Portfolio from "./Portfolio";
// import Resume from "./Resume";
import Contact from "./Contact";

import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import { GoMail } from 'react-icons/go';
import { FiSun, FiMoon } from 'react-icons/fi';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      darkMode: false
    };
  }

  componentDidMount() {
    const darkModeCache = localStorage.getItem('darkModeCache');
    console.log(darkModeCache == true ? 'true' : 'false')
    this.setState({
      darkMode: darkModeCache == true ? true : false
    })
  }

  toggleDark() {
    this.setState({ darkMode: !this.state.darkMode });
    localStorage.setItem('darkModeCache', !this.state.darkMode)
  }

  render() {
    return (
      <HashRouter>
        <Redirect to="/about" />
        <Navbar variant={this.state.darkMode ? "dark" : "light"} bg={this.state.darkMode ? "dark" : "light"} expand="lg">
          <Navbar.Brand className="name" style={this.state.darkMode ? {color: 'white'}: {color: 'black'}} as={NavLink} to="/about">Justin Chu</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" style={{marginTop: 3.2}}>
              <Nav.Link as={NavLink} to="/about" style={this.state.darkMode ? {color: 'white'}: {color: 'black'}}>About</Nav.Link>
              <Nav.Link as={NavLink} to="/portfolio" style={this.state.darkMode ? {color: 'white'}: {color: 'black'}}>Portfolio</Nav.Link>
              {/*<Nav.Link as={NavLink} to="/resume">Resume</Nav.Link>*/}
              <Nav.Link as={NavLink} to="/contact" style={this.state.darkMode ? {color: 'white'}: {color: 'black'}}>Contact</Nav.Link>
              <Nav.Link onClick={this.toggleDark.bind(this)}>
                {this.state.darkMode ? 
                <FiSun style={{marginBottom: 3, color: 'white'}} size="1.4em" /> :
                <FiMoon style={{marginBottom: 3, color: 'black'}} size="1.4em" />
                }
              </Nav.Link>
            </Nav>

            <a href="mailto: justinj.chu@mail.utoronto.ca" style={this.state.darkMode ? {color: 'white'}: {color: 'black'}} target="_blank" rel="noopener noreferrer">
              <GoMail style={{marginRight: 15, color: ''}} size="2em" />
            </a>
            <a href="https://devpost.com/justin-chu" target="_blank" rel="noopener noreferrer">
              <img style={{width:32, height:32, marginRight: 12, marginLeft: -2}} src={this.state.darkMode ? require(`../assets/images/devpost_white.svg`) : require(`../assets/images/devpost.svg`)} alt="" />
            </a>
            <a href="https://github.com/justin-chu" style={this.state.darkMode ? {color: 'white'}: {color: 'black'}} target="_blank" rel="noopener noreferrer">
              <IoLogoGithub style={{marginRight: 15}} size="1.7em" />
            </a>
            <a href="https://www.linkedin.com/in/justinchu252/" style={this.state.darkMode ? {color: 'white'}: {color: 'black'}} target="_blank" rel="noopener noreferrer">
              <IoLogoLinkedin size="2em" />
            </a>
          </Navbar.Collapse>
        </Navbar>
        <div className="content" style={this.state.darkMode ? {backgroundColor: '#212529'} : {backgroundColor: 'white'}}>
          <Route exact path="/about" render={props=><About darkMode={this.state.darkMode} />}/>
          <Route exact path="/portfolio" render={props=><Portfolio darkMode={this.state.darkMode} />}/>
          {/* <Route exact path="/resume" component={Resume}/> */}
          <Route exact path="/contact" render={props=><Contact darkMode={this.state.darkMode} />}/>
        </div>

        <div style={this.state.darkMode ? {backgroundColor: '#343a40'}: {backgroundColor: '#f8f9fa'}} class="footer"> {/*style={this.state.height/this.state.width > 1 ? {top: this.state.height/4} : {bottom: -9}}>*/}
          <p style={this.state.darkMode ? {color: 'white', margin: 'auto'}: {color: 'black', margin: 'auto'}}>© Justin Chu 2020</p>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;