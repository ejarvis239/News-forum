import React from "react";
import "../Article.css";
import "../App.css";

const Logged = props => {
        
    return ( <div id="logged"><p id="loggedIn">Logged in as {props.user.username}
    <br/> <br/> Choose a news topic! <br/> <br/>
    { <button onClick={() => props.signout() } > Sign out </button> }
    </p>

    </div>)
}

export default Logged