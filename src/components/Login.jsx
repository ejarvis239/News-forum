import React, { Component } from 'react';
import "../Article.css";
import "../App.css";

class Login extends Component {
    state = {
      username: "tickle122"
    }

  render() {
    if (this.props.user.username) return this.props.children;
    else {
    return ( <form onSubmit={this.handleSubmit}>
      <label htmlFor="username">Username: </label>
      <input type="text" name="username" 
      onChange={this.handleChange} value={this.state.username}/>
        <button>Log in </button>
      </form>
    )
    }
}
  
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.login(this.state.username)
  }
  
  
  handleChange = (event) => {
    this.setState({
      username: event.target.value
    })
  
  }
}

export default Login;