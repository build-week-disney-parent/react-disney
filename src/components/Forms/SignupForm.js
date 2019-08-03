import React, { Component } from "react";
import "./forms.css";
import "../../index.css";
import axios from "axios";
import ls from "local-storage";

export default class SignupForm extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    accountType: "parent"
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    axios
      .post(
        `https://disneyparent-backend.herokuapp.com/auth/parents/register`,
        this.state
      )
      .then(res => {
        console.log(res);
        console.log(res.data);
        if (res.data === 201) {
          console.log("Thank you, please log in");
        }
      });
  };

  render() {
    return (
      <div className="sign-up-form">
        <h2>Register for Disney Parent</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Username</label>
          <input
            className="input"
            name="username"
            value={this.state.username}
            type="text"
            placeholder="Username"
            onChange={this.handleChange}
            required
          />
          <label>Email</label>
          <input
            className="input"
            name="email"
            type="email"
            placeholder="Email"
            onChange={this.handleChange}
            required
          />
          <label>Password</label>
          <input
            className="input"
            name="password"
            value={this.state.password}
            type="password"
            placeholder="Password"
            onChange={this.handleChange}
            required
          />
          <button>Register</button>
        </form>
      </div>
    );
  }
}
