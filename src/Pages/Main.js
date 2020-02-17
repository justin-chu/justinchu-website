import React, { Component } from "react";
import { Route, NavLink, HashRouter, Redirect } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
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
              <Nav.Link as={NavLink} to="/projects">Projects</Nav.Link>
              <Nav.Link as={NavLink} to="/resume">Resume</Nav.Link>
            </Nav>
            <GoMail style={{marginRight: 15, color: ''}} size="2em" />
            <IoLogoGithub style={{marginRight: 15}} size="1.7em" />
            <IoLogoLinkedin size="2em" />
          </Navbar.Collapse>
        </Navbar>
        <div className="content">
          <Route exact path="/about" component={About}/>
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/resume" component={Resume}/>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;