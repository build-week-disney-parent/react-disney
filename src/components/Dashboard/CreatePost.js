import React, { Component } from "react";
import axios from "axios";
import "./dashboard.css";

export default class CreatePost extends Component {
  state = {
    title: "",
    attraction: "",
    children: "",
    time: "",
    parent_id: 10
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    // const posts = {
    //   title: this.state.posts.title
    // };

    axios
      .post(`https://disneyparent-backend.herokuapp.com/posts`, this.state)
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
    // const [title, attraction, children, time] = this.state.posts;
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
              value={this.state.title}
              onChange={this.handleChange}
              placeholder="Title of your post?"
              required
            />
            <label>Attraction</label>
            <input
              type="text"
              className="input"
              name="attraction"
              value={this.state.attraction}
              onChange={this.handleChange}
              placeholder="Which attraction do you need help at?"
              required
            />
            <label>Children</label>
            <input
              type="text"
              className="input"
              name="children"
              value={this.state.children}
              onChange={this.handleChange}
              placeholder="How many children?"
              required
            />
            <label>Time</label>
            <input
              type="datetime-local"
              className="input"
              name="time"
              value={this.state.time}
              onChange={this.handleChange}
              placeholder="What is the date and time you need help?"
              required
            />
            <button type="submit">create post</button>
          </form>
        </div>
      </div>
    );
  }
}
