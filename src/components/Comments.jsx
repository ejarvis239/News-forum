import React from "react";
import "../App.css"
import "../Article.css";
import CommentVoter from './CommentVoter'

const Comments = props => {
    return (
        <div>
            {props.comments.map((comment)=>{
    
               return <div>
                   <div id="singleCommentContainer">
                    <p id="commentItems">
                    <strong>username: {comment.created_by.username}</strong>
                    <br/><img src={comment.created_by.avatar_url} alt={comment.created_by.name} height="42" ></img>
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
                    {<CommentVoter id={comment._id} votes={comment.votes}/>}
                    </div>
                </div>
            })}
        </div>
    )
}

export default Comments