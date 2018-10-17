import React, { Component } from 'react';
import "../App.css";
import "../Article.css";
import SingleArticle from "./SingleArticle";
import * as api from '../api.js'

class Article extends Component {
    state = {
      article: null,
      comments: null,
    }
  
    render() {
      return (
        <div>
          {this.state.article && this.state.comments && <SingleArticle
          article={this.state.article} comments={this.state.comments} user={this.props.user}
          />}
        </div>

      )
    }

    componentDidMount = () => {
      this.fetchArticle();
      this.fetchComments();
    };

    fetchArticle = () => {
      api.getArticle(this.props.article_id).then(article => {
        this.setState({
          article })})
        }
      
    fetchComments = () => {
      api.getComments(this.props.article_id).then(comments => {
        this.setState({
          comments })}) 
        }
 }


export default Article;