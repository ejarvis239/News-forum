import React from "react";
import "../users.css";
import { Link } from "@reach/router";

function UserList(props) {
    
    return (
        <div id="userpage">
        <h1>USER PROFILES</h1>
        <div id="users">    
       {props.users.map(user => {
            return <div key={user._id} id="userList">
             <Link to={`/users/${user.username}`}>
             <img src={user.avatar_url} alt="Avatar" width="200"></img>
                </Link>    
            <p>{user.username}</p>
            <p>{user.name}</p>
     </div>
    })
}
     </div>
     </div>
     
    )
}


export default UserList;