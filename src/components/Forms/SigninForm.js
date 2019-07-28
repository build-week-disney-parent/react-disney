import React, { Component } from "react";
import "./forms.css";
import "../../index.css";

export default class SigninForm extends Component {
  render() {
    return (
      <div className="sign-up-form">
        <h2>Sign In for Disney Parent</h2>
        <form>
          <label>Username </label>
          <input
            className="input"
            name="name"
            type="text"
            placeholder="Username"
          />
          <label>Email</label>
          <input
            className="input"
            name="email"
            type="email"
            placeholder="Email"
          />
          <label>Password</label>
          <input
            className="input"
            name="pwd"
            type="password"
            placeholder="Password"
          />
          <button>Sign In </button>
        </form>
      </div>
    );
  }
}
