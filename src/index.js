import React from "react";
import ReactDOM from "react-dom";
import Main from "./Pages/Main";
import "./index.css";

import Favicon from "react-favicon";
import icon from "./assets/images/favicon.ico";

ReactDOM.render(
  <div>
    <Favicon url={icon} />
    <Main />
  </div>,
  document.getElementById("root")
);
