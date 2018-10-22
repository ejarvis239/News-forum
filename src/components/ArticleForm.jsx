import React, { Component } from "react";
import "../postarticle.css";
import * as api from "../api";
import { Link } from "@reach/router";
import PropTypes from "prop-types";

class ArticleForm extends Component {
  state = {
    title: "",
    belongs_to: "",
    body: "",
    ArticleAdded: false
  };
  render() {
    return this.state.ArticleAdded ? (
      <div>
      <h1>Your article has been added!</h1>
      <Link to="/" className="nav">
      {" "}
      <h1>Go to Articles</h1>
      </Link>
      </div>
    ) : (
      <div id="postArticleFormContainer">
        <form onSubmit={this.handleSubmit}>
        <div id="App">
              <input
                name="title"
                id="title"
                placeholder="Title"
                onChange={this.handleChange}
              />
          </div>
          <div id="App">
          <div id="App">
              <div >
                <select
                  value={this.state.belongs_to}
                  onChange={this.handleChange2}
                >
                  <option>Select a Topic</option>
                  <option value="coding">Coding</option>
                  <option value="football">Football</option>
                  <option value="cooking">Cooking</option>
                </select>
              </div>
            </div>
            <div id="App">
              <textarea
                rows="10"
                name="comment"
                id="comment"
                onChange={this.handleChange3}
                placeholder="Write your article..."
              />
            </div>
          </div>
          <br />
          <div id="App">
          <div id="App">
              <input type="submit" value="Submit" />
            </div>
          </div>
        </form>
      </div>
    );
  }
  handleChange = event => {
    const value = event.target.value;
    this.setState({
      title: value
    });
  };
  handleChange2 = event => {
    const value2 = event.target.value;
    this.setState({
      belongs_to: value2
    });
  };
  handleChange3 = event => {
    const value3 = event.target.value;
    this.setState({
      body: value3
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.addArticle(
      this.state.title,
      this.state.belongs_to,
      this.state.body,
      this.props.user
    );
    this.setState({
      ArticleAdded: true
    });
  };
  
  addArticle = (title, belongs_to, body, user) => {
    api.addArticle(title, belongs_to, body, user);
  };
}

ArticleForm.propTypes = {
  user: PropTypes.object.isRequired
  };

export default ArticleForm;