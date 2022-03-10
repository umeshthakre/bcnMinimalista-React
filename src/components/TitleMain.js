import React, { Component } from "react";
import Jumbo from "./ui/JumbotronComponent";
import Footer from "./ui/FooterComponent";
import Title from "./content/TitleComponent";

import { Switch, Route, Redirect } from "react-router-dom";

const TitleMain = () => {
  return (
    <div>
      <Jumbo />
      <p>Example TitleMain text</p>
      <Footer/>
    </div>
  );
};

export default TitleMain;
