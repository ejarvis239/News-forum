import React from "react";
import "../Article.css";

const Comments = props => {
    return (
        <div>
            {props.comments.map((comment)=>{
    
               return <div>
                   <div id="singleCommentContainer">
                    <p id="commentItems">
                    <strong>username: {comment.created_by.username}</strong>
                    <br/>created: {comment.created_at}
                    </p>
                    <p id="commentBody">
                    {comment.body}
                    </p>
                    </div>
                    <div id="singleCommentContainer">
                    <p id="commentVotes">
                    Votes: {comment.votes}
                    </p>
                    </div>
                </div>
            })}
        </div>
    )
}

export default Comments