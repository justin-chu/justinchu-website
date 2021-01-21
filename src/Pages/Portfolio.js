import React, { Component } from "react";
import { projectObjects } from "./projectObjects";

class Portfolio extends Component {
  renderIcons = (icons) => {
    const iconList = icons.map((icon) => {
      return (
        <img
          alt={icon}
          style={{ width: 20, height: 20, marginRight: 5 }}
          src={require(`../assets/images/${icon}`)}
        />
      );
    });
    return iconList;
  };

  renderCards = () => {
    return (
      <div></div>
      // <div style={{marginBottom: 0}}>
      // <CardColumns style={{ marginTop: -16 }}>
      //   <Anime opacity={[0, 1]} translateY={"1em"} delay={(e, i) => i * 100}>
      //     {Object.values(projectObjects).map((project) => (
      //       <div>
      //         <a
      //           className="portfolio-card"
      //           href={project.link}
      //           target="_blank"
      //           rel="noopener noreferrer"
      //         >
      //           <Card
      //             bg={this.props.darkMode ? "dark" : ""}
      //             style={{ height: 220, flex: 1 }}
      //           >
      //             <Card.Header
      //               style={
      //                 this.props.darkMode ? { backgroundColor: "#dee2e6" } : {}
      //               }
      //               as="p"
      //             >
      //               {this.renderIcons(project.langs)}
      //             </Card.Header>
      //             <Card.Body style={{ flex: 1 }}>
      //               <Card.Title
      //                 style={
      //                   this.props.darkMode
      //                     ? { color: "white" }
      //                     : { color: "black" }
      //                 }
      //               >
      //                 {project.title}
      //               </Card.Title>
      //               <Card.Text
      //                 style={
      //                   this.props.darkMode
      //                     ? { color: "white" }
      //                     : { color: "black" }
      //                 }
      //               >
      //                 {project.description}
      //               </Card.Text>
      //               {/* <Button variant="primary" style={{marginBottom: 10, marginRight: 10, bottom: 0, position: 'absolute', right: 0}} href={project.link} target="_blank">Check it out!</Button> */}
      //             </Card.Body>
      //           </Card>
      //         </a>
      //       </div>
      //     ))}
      //   </Anime>
      // </CardColumns>
      // </div>
    );
  };

  render() {
    return this.renderCards();
  }
}

export default Portfolio;
