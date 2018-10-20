import React from "react";
import "../Article.css";
import Comments from './Comments';
import CommentPoster from './CommentPoster';
import Voter from './Voter'
import { Link } from "@reach/router";

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
                
                {<Voter id={props.article._id} votes={props.article.votes}/>}
                      
                <p id="createdBy">
                <img id="userImage" src={props.article.created_by.avatar_url} alt="jessjelly" width="100" />
                <br/>
                
                Author: <Link to={`/users/${props.article.created_by.username}`}>
                {props.article.created_by.username}              
                </Link>             
                
                <br/>Created: {props.article.created_at}
                </p>
                <div id="postCommentContainer">
                {<CommentPoster articleId={props.article._id} user={props.user} addComment={props.addComment}/>}
                </div>

        
                <p id="Responses"><strong>Responses</strong></p>
                <div id="commentContainer">
                <p id="commentCount">
                Comments: {props.article.comments}
                </p>

                <div id="singleCommentContainer">
                {<Comments comments={props.comments} user={props.user} deleteComment={props.deleteComment} />}
                </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>       
                <br/>
                <br/>
                <br/>
                <br/>  
                <br/>
                <br/>
                <br/>
                <br/>      
            </div>
    )}

  export default SingleArticle;