import React, { Component } from "react";

class PageNotFound extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: 160,
            marginTop: "15vh",
            color: this.props.darkMode ? "white" : "black",
            lineHeight: "80%",
          }}
        >
          404
        </p>
        <p
          style={{
            fontSize: 38,
            color: this.props.darkMode ? "white" : "black",
          }}
        >
          Page not found
        </p>
      </div>
    );
  }
}
export default PageNotFound;
