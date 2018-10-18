import React, { Component } from 'react';
import "../Article.css";
import "../App.css";
import * as api from '../api.js'

class CommentVoter extends Component {

state = {
  voteMod: 0,
  err: null
}

render () {
const {id, votes} = this.props
const {voteMod} = this.state
// if (err) return <p>Vote Failed</p>

return (<div id="articleVotes">
<p id="commentVotes">
Votes: {votes + this.state.voteMod}
</p>
<button onClick={() => this.vote("up") } disabled={voteMod===1}> <img src="http://icons-for-free.com/free-icons/png/512/2400509.png" alt="Vote Up" width="40"></img> </button>
<button onClick={() => this.vote("down") } disabled={voteMod===-1}> <img src="http://icons-for-free.com/free-icons/png/512/2400511.png" alt="Vote Down" width="40"></img> </button>
</div>)

}

vote = (direction) => {
api.commentVote(this.props.id, direction);
this.setState((state) => ({
  voteMod: direction === "up" ? state.voteMod +1 : state.voteMod -1
}))
}
}

export default CommentVoter;


