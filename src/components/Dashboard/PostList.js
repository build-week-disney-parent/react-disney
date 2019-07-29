import React from "react";
import Post from "./Post";

export default class PostLists extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>PostList</h2>
        {this.props.posts.map(post => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    );
  }
}
