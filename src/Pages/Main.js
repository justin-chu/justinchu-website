import React, { Component } from "react";
import { Route, NavLink, HashRouter, Redirect } from "react-router-dom";
import About from "./About";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import { GoMail } from 'react-icons/go';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Main extends Component {
  render() {
    return (
      <HashRouter className="wrapper">
        <Redirect to="/about" />
        <Navbar bg="light" expand="lg">
          <Navbar.Brand className="name" as={NavLink} to="/about">Justin Chu</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={NavLink} to="/about">About</Nav.Link>
              <Nav.Link as={NavLink} to="/portfolio">Portfolio</Nav.Link>
              <Nav.Link as={NavLink} to="/resume">Resume</Nav.Link>
            </Nav>
            <a href="mailto: justinj.chu@mail.utoronto.ca" style={{color: 'black'}}><GoMail style={{marginRight: 15, color: ''}} size="2em" /></a>
            <a href="https://github.com/justin-chu" style={{color: 'black'}}><IoLogoGithub style={{marginRight: 15}} size="1.7em" /></a>
            <a href="https://www.linkedin.com/in/justinchu252/" style={{color: 'black'}}><IoLogoLinkedin size="2em" /></a>
          </Navbar.Collapse>
        </Navbar>
        <div className="content">
          <Route exact path="/about" component={About}/>
          <Route exact path="/portfolio" component={Portfolio}/>
          <Route exact path="/resume" component={Resume}/>
        </div>
        {/* <div class="footer-container">
          <div class="footer">
            <p>(c) Justin Chu 2020</p>
          </div>
        </div> */}
      </HashRouter>
    );
  }
}
 
export default Main;