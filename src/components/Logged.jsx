import React from "react";
import "../Article.css";

const Logged = props => {
        
    return ( <div id="logged"><p id="logged">Logged in as {props.user.username}
    <br/> <br/> Choose a news topic! <br/> <br/>
    { <button onClick={() => props.signout() } > Sign out </button> }
    </p>

    </div>)
}

export default Logged