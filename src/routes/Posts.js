import React, { Component } from 'react'
import {Route, Link } from 'react-router-dom'

const Post = ({match}) => {
  return (
    <h2>
      {match.params.title}
    </h2>
  )
}

export default class Posts extends Component {
  render() {
    return (
      <div>
        <h1>포스트</h1>
        <Link to="/posts/react">react</Link>
        <Link to="/posts/redux">redux</Link>
        <Link to="/posts/relay">relay</Link>
        <Route path = "/posts/:title" component={Post} />
      </div>
    )
  }
}
