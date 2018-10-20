import React from "react";
import "../Article.css";
import "../App.css";
import { Link } from "@reach/router";

const Logout = props => {
        
    return ( 
    <div id="logoutcontainer">
    <h1>Logged in as {props.user.username}</h1>
    
    { <button id="logoutbutton" onClick={() => props.signout() } > Sign out </button> }

    <Link to="/" className="nav">
    {" "}
    <h1>Go to News Topics</h1>
    </Link>

    </div>
    )
}

export default Logout