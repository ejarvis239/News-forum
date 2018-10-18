import React from "react";
import { Link } from "@reach/router";
import "../App.css";
import Topics from "./Topics"

const Nav = () => {
  return (
    <div>
      <br/>
      <br/>
        <Topics path="/" heading="topics" />
    </div>
  );
};

export default Nav;
