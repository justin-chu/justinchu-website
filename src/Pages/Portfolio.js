import React, { Component } from "react";
import { projectObjects } from "./projectObjects";
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button';
import Anime from 'react-anime';

class Portfolio extends Component {
  renderIcons = icons => {
    const iconList = icons.map(icon => {
      return <img alt={icon} style={{width:20, height:20, marginRight: 5}} src={require(`../assets/images/${icon}`)} />
    })
    return iconList
  }

  renderCards = () => {
    return(
      <div style={{paddingBottom: 70}}>
      <CardColumns style={{marginTop: -16}}>
        <Anime opacity={[0, 1]} translateY={'1em'} delay={(e, i) => i * 100}>
          {Object.values(projectObjects).map(project => (
                <Card style={{ height: 220, flex: 1 }}>
                  <Card.Header as="p">{this.renderIcons(project.langs)}</Card.Header>
                  <Card.Body style={{flex: 1}}>
                    <Card.Title style={{flex: 1}}>{project.title}</Card.Title>
                    <Card.Text style={{flex: 1}}>{project.description}</Card.Text>
                    <Button variant="primary" style={{marginBottom: 10, marginRight: 10, bottom: 0, position: 'absolute', right: 0}} href={project.link} target="_blank">Check it out!</Button>
                  </Card.Body>
                </Card>
          ))}
        </Anime>
      </CardColumns>
      </div>
    )
  }

  render() {
    return (
      this.renderCards()
    );
  }
}
 
export default Portfolio;