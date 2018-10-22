import React, { Component } from 'react';
import * as api from '../api';
import "../userpage.css";
import PropTypes from "prop-types";

class UserPage extends Component {
  state = {
    user: {},
  };
  render() {
    return (
      <div id="userpageprofile">
      <h1>User Profile Page</h1>
          <img 
            src={this.state.user.avatar_url}
            alt="user avatar"
            width="200"
          />
          <h2>
            User Name: {this.state.user.username}
          </h2>
          <h3>Name: {this.state.user.name}</h3>
        </div>
    );
  }

  componentDidMount() {
    this.getUser(this.state.user.username);
  }

  getUser(props) {
    const { username } = this.props;
    api
      .getUser(username)
      .then(user => {
        this.setState({
          user
        });
      })
  }
}

UserPage.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserPage;