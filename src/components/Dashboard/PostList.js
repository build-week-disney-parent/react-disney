import React, { Component } from "react";
import Post from "./Post";

export default class PostLists extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        {this.props.posts.reverse().map(post => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    );
  }
}
