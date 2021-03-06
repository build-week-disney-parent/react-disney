import React, { Component } from "react";
import "./forms.css";
import "../../index.css";
import axios from "axios";
import ls from "local-storage";

export default class SigninForm extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    accountType: "parent",
    resData: []
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    axios
      .post(
        `https://disneyparent-backend.herokuapp.com/auth/parents/login`,
        this.state
      )
      .then(res => {
        console.log("response", res);
        console.log(res.data);
        // console.log(res.data.message);
        // console.log(res.status);
        // console.log(res.data.token);
        if (res.status === 200) {
          console.log("yes status 200");
          ls.set("token", res.data.token);
          ls.set("message", res.data.message);
          window.location = "./dashboard";
        } else {
          alert("Invalid user information entered. Please try again.");
        }

        // if (res.status === 400) {
        //   alert("Invalid information entered. Try again");
        // }
      })
      .catch(err => {
        console.log("error", err);
      });
  };

  render() {
    return (
      <div className="sign-up-form">
        <h2>Sign In for Disney Parent</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Username </label>
          <input
            className="input"
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
            placeholder="Username"
          />
          <label>Email</label>
          <input
            className="input"
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Email"
          />
          <label>Password</label>
          <input
            className="input"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="Password"
          />
          <button>Sign In </button>
        </form>
      </div>
    );
  }
}
