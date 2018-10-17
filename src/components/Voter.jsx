import React, { Component } from 'react';
import "../Article.css";
import * as api from '../api.js'

class Voter extends Component {

state = {
  voteMod: 0,
  err: null
}

render () {
const {votes} = this.props
const {voteMod} = this.state
// if (err) return <p>Vote Failed</p>

return (<div>
<button onClick={() => this.vote("up") } disabled={voteMod===1}> UP </button>
<p> {votes + this.state.voteMod}</p>
<button onClick={() => this.vote("down") } disabled={voteMod===-1}> DOWN </button>
</div>)

}

vote = (direction) => {
api.vote(this.props.id, direction);
this.setState((state) => ({
  voteMod: direction === "up" ? state.voteMod +1 : state.voteMod -1
}))
}
}

export default Voter;