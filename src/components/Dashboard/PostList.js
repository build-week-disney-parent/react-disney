import React from "react";
import Post from "./Post";

export default class PostLists extends React.Component {
  constructor(props) {
    super(props);
  }

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
