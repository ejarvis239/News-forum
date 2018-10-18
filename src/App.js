import React, { Component } from 'react';
import './App.css';
import './header.css'
import { Router } from "@reach/router";
import Nav from "./components/Nav.jsx";
import Topics from "./components/Topics";
import Articles from "./components/Articles";
import Article from "./components/Article";
import Login from "./components/Login";
import * as api from './api';
import NotFound from './components/NotFound';
// import Logged from './components/Logged'

class App extends Component {
  state = {
    user: {}
  }

render() {
  return (
  <div className="App">
    <div className="header">
      <a href="/" class="logo">The E Word</a>
      <div class="header-right">
      <a class="active" href="/">Home</a>
      <a href="/">Contact</a>
      <a href="/">About</a>
    </div>
  </div>
      <Nav />
      <Login login={this.login} user={this.state.user}>
      <Router>
       {/* <Logged path="/" user={this.state.user} /> */}
       <Articles path="/articles" heading="articles" />
       <Articles path="/articles/:topic" heading="articles" />
       <Article path="/article/:article_id" heading="article" user={this.state.user} />
       <NotFound path="/error"/>
       <NotFound default />
      </Router>
</Login>

<footer id="footer">
<div id="row">
  <p id='footertext'>Posted by: Emma Jarvis as a Northcoders project</p>
  <br/>
				<a id='social' href="https://www.linkedin.com/in/emma-l-jarvis-mba-35090153/"><img src="https://mbtskoudsalg.com/images/linkedin-transparent-symbol-5.png" width="40px"/> </a>
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
    console.log(username)
    api.getUser(username)
    .then(user => {
      sessionStorage.setItem("username", JSON.stringify(user))
      this.setState ({
        user
      })
    })
  }

  // signOut = () => {
  //   this.setState({
  //     user: null
  //   })
  // }
}

export default App;


