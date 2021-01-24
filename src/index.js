import React from "react";
import ReactDOM from "react-dom";
import Main from "./Pages/Main";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import Favicon from "react-favicon";
import icon from "./assets/images/favicon.ico";

ReactDOM.render(
  <div>
    <Favicon url={icon} />{" "}
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </div>,
  document.getElementById("root")
);
