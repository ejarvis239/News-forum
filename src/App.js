import React, { Component } from 'react';
import './App.css';
import { Router } from "@reach/router";
import Nav from "./components/Nav.jsx";
import Topics from "./components/Topics";
import Articles from "./components/Articles";
import Article from "./components/Article";

class App extends Component {
  
  render() {
    return (
      <div className="App">
            <Nav />

      <Router>
       <Topics path="/" heading="topics" />
       <Articles path="/articles" heading="articles" />
       <Articles path="/articles/:topic" heading="articles" />
       <Article path="/article/:article_id" heading="article" />
      </Router>
       
      </div>
    );
  }
}

export default App;


/*

this.props.topic
this.props.article_id

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



  <Voter id={_id} votes = {votes}



  Voter.jsx component

  class voter extends Component

  state = {
    voteMod = 0,
    err: null
  }
  render
    const {id, votes} = this.props
    const {voteMod} = this.state
    if (err) return <p>Vote Failed</p>

  return
  <div>
  <button onClick={() => this.vote("up") disabled={voteMod===1}}>UP</button>
  <p> {votes + this.state.voteMod}</p>
  <button onClick={() => this.vote("down") disabled={voteMod===-1}}>DOWN</button>
  <div/>

  vote = (direction) => {
  api.vote(this.props.id, direction);
    .catch(err => {
      this.setState({
        err
      }
    })

  this.setState((state) => ({
    voteMod: direction === "up" ? state.voteMod +1 : state.voteMod -1

    delete request - 

  }

  */