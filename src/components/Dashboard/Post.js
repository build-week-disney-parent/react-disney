import React from "react";

export default function Post(props) {
  return (
    <article className="post-badge">
      <h2>{props.post.title}</h2>
      <p>{props.post.attraction}</p>
    </article>
  );
}
