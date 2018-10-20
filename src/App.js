import React, { Component } from 'react';
import './App.css';
import './header.css'
import { Router } from "@reach/router";
import Articles from "./components/Articles";
import Article from "./components/Article";
import Login from "./components/Login";
import * as api from './api';
import NotFound from './components/NotFound';
import Logout from './components/Logout';
import ArticlePoster from './components/ArticlePoster';
import Home from './components/Home'
import Users from './components/Users'
import UserPage from './components/UserPage'

class App extends Component {
  state = {
    user: {}
  }

render() {
  return (
    <div id="bottom">
  <div id="App">
    <div className="header">
      <a href="/" class="logo">The E Word</a>
      <div class="header-right">
      <a class="active" href="/">Home</a>
      <a href="/users">User Profiles</a>
      <a href="/logout">Sign Out</a>
    </div>
  </div>
  
      <Login login={this.login} user={this.state.user} >
      <Router>
      <Home path="/" user={this.state.user}/>
       <ArticlePoster path="/articleposter" user={this.state.user} />
       <Articles path="/articles" heading="articles" />
       <Articles path="/articles/:topic" heading="articles" />
       <Logout path="/logout" user={this.state.user} signout={this.signOut} />
       <Article path="/article/:article_id" heading="article" user={this.state.user} />
       <Users path="/users" />
       <UserPage path="/users/:username" />
       <NotFound path="/error"/>
       <NotFound default />
      </Router>
</Login>

</div>

<footer id="footer">
<div id="row">
  <p id='footertext'>Posted by: Emma Jarvis as a Northcoders project</p>
  <br/>
				<a id='social' href="https://www.linkedin.com/in/emma-l-jarvis-mba-35090153/"><img src="https://mbtskoudsalg.com/images/linkedin-transparent-symbol-5.png" alt="linkedin" width="40px"/> </a>
</div>
</footer>
      </div>
      
    );

  }

  componentDidMount() {
    const user = sessionStorage.getItem('username')
    if (user) {
      this.setState({user: JSON.parse(user)})
    }
  }

  login = (username) => {
    api.getUser(username)
    .then(user => {
      sessionStorage.setItem("username", JSON.stringify(user))
      this.setState ({
        user
      })
    })
  }

  signOut = () => {
    this.setState({
      user: {}
    })
  }
}

export default App;


