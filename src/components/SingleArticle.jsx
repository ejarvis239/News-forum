import React from "react";
import "../Article.css";
import Comments from './Comments'

const SingleArticle = props => {
    const imageLinks = {
        coding: 'https://i.pinimg.com/564x/be/dd/ef/beddef99d59666201ae293bcc362ec97.jpg',
        football: 'https://i.pinimg.com/564x/9a/07/ab/9a07ab814238e792d99daba3a093b005.jpg',
        cooking: 'https://i.pinimg.com/564x/c2/eb/eb/c2ebeb96f22ff99135eef8e4c24bb730.jpg'
    }
    
    return (
            <div id="ArticleContainer">
                <p id="articleTitle">{props.article.title}</p>               
                <p id="topicItems">
                Topic: {props.article.belongs_to}
                <br/>
                <br/>
                <img id="articleImage" src={imageLinks[props.article.belongs_to]} alt="{article.belongs_to}" width="100" height="100" />
                </p>
                <p id="articleBody" >{props.article.body}</p>
                <p id="articleVotes">
                Votes: {props.article.votes}
                </p>
                <p id="createdBy">
                <img id="userImage" src="https://miro.medium.com/fit/c/240/240/0*nGIlOdrq0yUfDUJf.png" alt="jessjelly" width="100" height="100" />
                <br/>
                Author: {props.article.created_by.username}
                <br/>Created: {props.article.created_at}
                </p>
                <div id="postCommentContainer">
                <p id="postComment">
                <br/>
                Post a comment....
                <br/>
                <br/>
                </p>
                </div>
        
                <p id="Responses"><strong>Responses</strong></p>

                <div id="commentContainer">
                <p id="commentCount">
                Comments: {props.article.comments}
                </p>

                <div id="singleCommentContainer">
                {<Comments comments={props.comments} />}
                </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>         
            </div>
    )}

  export default SingleArticle;