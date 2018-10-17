import React, { Component } from 'react';
import './App.css';
import { Router } from "@reach/router";
import Nav from "./components/Nav.jsx";
import Topics from "./components/Topics";
import Articles from "./components/Articles";
import Article from "./components/Article";
import Login from "./components/Login";
import * as api from './api';

class App extends Component {
  state = {
    user: {}
  }

  render() {
    return (
      <div className="App">
            <Nav />
<Login login={this.login} user={this.state.user}>
      <Router>
       <Topics path="/" heading="topics" />
       <Articles path="/articles" heading="articles" />
       <Articles path="/articles/:topic" heading="articles" />
       <Article path="/article/:article_id" heading="article" user={this.state.user} />
      </Router>
</Login>
      </div>
    );
  }

  login = (username) => {
    console.log(username)
    api.getUser(username)
    .then(user => {
      this.setState ({
        user
      })
    })
  }
}

export default App;


/*

  <button onClick={() => this.showLove(id)}>UP</button>
  <div/>

  showLove = (id) => {
  api.vote(id, "up");
    .catch(err => {
      this.setState()
    })

  this.setState((state) => ({
    articles: state.articles.map(article => {
      if (article._id === id) {
        return { ...article, votes: article.votes +1}
      } return article })}})}



componentDidMount() {
  this.fetchArticles()
}

componentDidUpdate(prevProps) {
  if (prevProps.topic !== this.props.topic) {
    this.fetchArticles()
  }
}

fetchArticles = () => {
api.getArticles(this.props.topic).then(articles => {
  this.setState({
    articles })})

    delete request - 

  }

  */