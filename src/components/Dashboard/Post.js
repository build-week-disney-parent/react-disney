import React from "react";

export default function Post(props) {
  return (
    <article className="post-badge">
      <h2>{props.post.title}</h2>
      <p>Where: {props.post.attraction}</p>
      <p>Children: {props.post.children} </p>
      <p>Date and Time: {props.post.time}</p>
      <p className="post-control">
        <span className="post-control-span">
          <i className="fas fa-reply" style={replyStyle} />
          reply
        </span>
        <span className="post-control-span">
          <i className="fas fa-edit" style={editStyle} />
          edit
        </span>
        <span className="post-control-span">
          <i className="fas fa-trash" style={deleteStyle} />
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
