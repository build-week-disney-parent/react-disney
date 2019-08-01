import React, { Component } from "react";
import axios from "axios";
import PostLists from "./components/Dashboard/PostList";
import Search from "./components/Dashboard/Seach";
import CreatePost from "./components/Dashboard/CreatePost";

export default class Dashboard extends Component {
  state = {
    parents: [],
    posts: [],
    comments: [],
    signedIn: false,
    loading: true
  };

  componentDidMount() {
    // Get posts from API
    axios.get(`https://disneyparent-backend.herokuapp.com/posts`).then(res => {
      this.setState({ posts: res.data });
    });

    // Get comments from API
    axios
      .get(`https://disneyparent-backend.herokuapp.com/comments`)
      .then(res => {
        this.setState({ comments: res.data });
      });

    // Get parents from API
    axios
      .get(`https://disneyparent-backend.herokuapp.com/parents`)
      .then(res => {
        this.setState({ parents: res.data });
      });

    // setTimeout is only to allow for visual of loader and testing
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  }

  componentDidUpdate() {
    axios.get(`https://disneyparent-backend.herokuapp.com/posts`).then(res => {
      this.setState({ posts: res.data });
    });
  }

  render() {
    const loading = this.state.loading;

    if (loading === true) {
      return <div id="loader" />;
    } else {
      return (
        <div>
          <h2>Welcome NAME to your dashboard:</h2>
          <Search />
          <CreatePost />
          <PostLists posts={this.state.posts} />
          <h3>end</h3>
        </div>
      );
    }
  }
}

// EXTRA CODE ATTEMPTED AND UPDATED

//  {/* <div className="loader">
//             {loading ? <h2>Loading ... </h2> : <h2>Most Recent Comments:</h2>}
//           </div> */}

//  {/* {this.state.comments.map(comment => (
//           <li>{comment.comment}</li>
//         ))}

//         {this.state.parents.map(parent => (
//           <li>{parent.username}</li>
//         ))} */}
