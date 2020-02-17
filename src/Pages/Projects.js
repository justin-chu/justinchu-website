import React, { Component } from "react";
import { projectObjects } from "./projectObjects";
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button';


class Projects extends Component {
  renderIcons = icons => {
    const iconList = icons.map(icon => {
      return <img alt={icon} style={{width:20, height:20, marginRight: 3}} src={require(`../assets/images/${icon}`)} />
    })
    return iconList
  }

  renderCards = () => {
    return(
      <CardColumns>
        {Object.values(projectObjects).map(project => (
            <Card style={{ height: 220, flex: 1 }}>
              <Card.Header as="p">{this.renderIcons(project.langs)}</Card.Header>
              <Card.Body style={{flex: 1}}>
                <Card.Title style={{flex: 1}}>{project.title}</Card.Title>
                <Card.Text style={{flex: 1}}>{project.description}</Card.Text>
                <Button variant="primary" style={{alignSelf: 'flex-end'}} href={project.link}>Check it out!</Button>
              </Card.Body>
              {/* <Card.Footer as="p">{this.renderIcons(project.langs)}</Card.Footer> */}
            </Card>
        ))}
      </CardColumns>
    )
  }

  render() {
    return (
      this.renderCards()
    );
  }
}
 
export default Projects;