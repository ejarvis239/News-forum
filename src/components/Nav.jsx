import React from "react";
import { Link } from "@reach/router";
import "../App.css";

const Nav = () => {
  return (
    <div>
      <br/>
      <br/>
        <h1>The E Word</h1>
        <Link to="/" className="nav">
        | Home |
      </Link>
      <Link to="/articles" className="nav">
        | Articles |
      </Link>
    </div>
  );
};

export default Nav;
