import React, { Component } from 'react';
import "../App.css";
import "../Article.css";
import List from "./List";
import * as api from '../api.js'

class Articles extends Component {
    state = {
      articles: [],
    }
  
    render() {
      return (
        <div>
          <List
          articleList={this.state.articles}
          />
        </div>

      )
    }

    componentDidMount = () => {
      this.fetchArticles();
    };

    fetchArticles = () => {
      api.getArticles(this.props.topic).then(articles => {
        console.log(articles)
        this.setState({
          articles })})
      

    // getArticles = () => {
    //   axios
    //     .get(`https://nc-news-emma.herokuapp.com/api/articles`)
    //     .then(({ data }) => {
    //       console.log(data)
    //       this.setState({
    //         articles: data.articles
    //       });
    //     })
    //     .catch(err => {
    //       this.setState({ err });
    //     });
    };
    }

export default Articles;