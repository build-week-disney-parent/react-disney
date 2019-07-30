import React, { Component } from "react";

export default class Seach extends Component {
  render() {
    return (
      <div className="search-container">
        <div className="time-search">
          <input
            type="text"
            className="search-input"
            placeholder="Time Search"
          />
        </div>
        <div className="location-search">
          <input
            type="text"
            className="search-input"
            placeholder="Location Search"
          />
        </div>
        <div className="general-search">
          <input type="text" className="search-input" placeholder="Search" />
        </div>
      </div>
    );
  }
}
