import ReactDOM from "react-dom";
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import "./index.css";
import App from "./App";
import {
  Navbar,
  NavbarBrand,
  Jumbotron,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
} from "reactstrap";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
