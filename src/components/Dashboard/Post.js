import React from "react";
import { genericTypeAnnotation } from "@babel/types";

export default function Post(props) {
  return (
    <article className="post-badge">
      <h2>{props.post.title}</h2>
      <p>Where: {props.post.attraction}</p>
      <p>Chilren: {props.post.children} </p>
      <p>When: {props.post.time}</p>
      <p className="post-control">
        <span className="post-control-span">
          <i class="fas fa-reply" style={replyStyle} />
          reply
        </span>
        <span className="post-control-span">
          <i class="fas fa-edit" style={editStyle} />
          edit
        </span>
        <span className="post-control-span">
          <i class="fas fa-trash" style={deleteStyle} />
          delete
        </span>
      </p>
    </article>
  );
}

const replyStyle = {
  color: "green"
};

const editStyle = {
  color: "blue"
};

const deleteStyle = {
  color: "red"
};
