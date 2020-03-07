import React from "react";
import ReactDOM from "react-dom";
import Main from "./Pages/Main";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Favicon from 'react-favicon';
import icon from './assets/images/favicon.ico';

<form name="contact" method="POST" data-netlify="true" netlify>
       
       <div class="col">
     <input type="text" name="name" class="form-control" placeholder="Name">
     </input></div>
     <div class="col">
     <input type="email" name="email" class="form-control" placeholder="Email">
     </input>
     </div>
     <input type="text" name="subject" class="form-control" placeholder="Subject"></input>
         <textarea name="message"></textarea>
         <button type="submit">Send</button>
     
       </form>
       
ReactDOM.render(
  <div>
    <Favicon url={icon} />
    <Main/>
  </div>, 
  document.getElementById("root")
);