import React, { Component } from "react";
import axios from "axios";
import form from "./dashboard.css";

export default class CreatePost extends Component {
  state = {
    posts: {
      // title: '',
      // attraction: '',
      // children: '',
      // time: ''
    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const posts = {
      title: this.state.posts.title
    };

    axios
      .post(`https://disneyparent-backend.herokuapp.com/auth/parents/login`, {
        posts
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });

    const id = (document.getElementById("createPostForm").style.display =
      "none");
    const idRollout = (document.getElementById("rollout").style.display =
      "block");
  };

  toggleCreatePostForm = () => {
    const id = document.getElementById("createPostForm");
    const idRollout = document.getElementById("rollout");
    if (id.style.display === "none") {
      id.style.display = "block";
      idRollout.style.display = "none";
    } else {
      id.style.display = "none";
      idRollout.style.display = "block";
    }
  };

  render() {
    return (
      <div>
        <div
          className="create-post-rollout"
          onClick={this.toggleCreatePostForm}
          id="rollout"
        >
          create a new post
        </div>
        <div id="createPostForm">
          <form onSubmit={this.handleSubmit} className="create-post">
            <label>Title</label>
            <input
              type="text"
              className="input"
              name="title"
              onChange={this.handleChange}
              placeholder="Title of your post?"
            />
            <label>Attraction</label>
            <input
              type="text"
              className="input"
              name="attraction"
              onChange={this.handleChange}
              placeholder="Which attraction do you need help at?"
            />
            <label>Children</label>
            <input
              type="text"
              className="input"
              name="children"
              onChange={this.handleChange}
              placeholder="How many children?"
            />
            <label>Time</label>
            <input
              type="text"
              className="input"
              name="time"
              onChange={this.handleChange}
              placeholder="What time do you need help?"
            />
            <button type="submit">create post</button>
          </form>
        </div>
      </div>
    );
  }
}
