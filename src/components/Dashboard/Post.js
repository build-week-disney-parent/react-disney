import React from "react";

export default function Post(props) {
  return (
    <article className="post-badge">
      <h2>{props.post.title}</h2>
      <p>Where: {props.post.attraction}</p>
      <p>Chilren: {props.post.children} </p>
      <p>When: {props.post.time}</p>
    </article>
  );
}
