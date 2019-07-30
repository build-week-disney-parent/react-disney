import React from "react";
import axios from "axios";
import PostLists from "./components/Dashboard/PostList";

export default class Dashboard extends React.Component {
  state = {
    parents: [],
    posts: [],
    comments: [],
    signedIn: false,
    loading: true
  };

  componentDidMount() {
    axios.get(`https://disneyparent-backend.herokuapp.com/posts`).then(res => {
      this.setState({ posts: res.data });
    });

    axios
      .get(`https://disneyparent-backend.herokuapp.com/comments`)
      .then(res => {
        this.setState({ comments: res.data });
      });

    axios
      .get(`https://disneyparent-backend.herokuapp.com/parents`)
      .then(res => {
        this.setState({ parents: res.data });
      });

    this.setState({ loading: false });
  }

  render() {
    const loading = this.state.loading;
    return (
      <div>
        <h2>Dashboard</h2>
        <div className="loader">
          {loading ? <h2>Loading ... </h2> : <h2>Most Recent Comments:</h2>}
        </div>

        <PostLists posts={this.state.posts} />

        {/* {this.state.comments.map(comment => (
          <li>{comment.comment}</li>
        ))}

        {this.state.parents.map(parent => (
          <li>{parent.username}</li>
        ))} */}
        <h3>end</h3>
      </div>
    );
  }
}
