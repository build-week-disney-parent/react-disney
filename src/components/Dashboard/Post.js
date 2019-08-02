import React from "react";

function dateFix(dateProp) {
  // let dt = new Date(dateProp);
  // let new_dt = dt.toUTCString();

  const isoDate = new Date(dateProp);
  // const isoDate = new Date("2019-08-01T19:15");

  let day = isoDate.getDay();
  const date = isoDate.getDate();
  let month = isoDate.getMonth();
  const year = isoDate.getFullYear();
  const hour = isoDate.getHours();
  const min = isoDate.getMinutes();
  // let time = ''

  switch (isoDate.getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      return "Error";
  }

  switch (isoDate.getMonth()) {
    case 0:
      month = "Jan";
      break;
    case 1:
      month = "Feb";
      break;
    case 2:
      month = "Mar";
      break;
    case 3:
      month = "Apr";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "Jun";
      break;
    case 6:
      month = "Jul";
      break;
    case 7:
      month = "Aug";
      break;
    case 8:
      month = "Sep";
      break;
    case 9:
      month = "Oct";
      break;
    case 10:
      month = "Nov";
      break;
    case 11:
      month = "Dec";
      break;
    default:
      return "Error";
  }

  const min_test = min < 10 ? `0${min}` : `${min}`;

  let timeDate =
    isoDate.getHours() > 12
      ? `${hour - 12}:${min_test} PM`
      : `${hour}:${min_test} AM`;
  const new_dt = `${day} ${month} ${date}, ${year} at ${timeDate}`;

  return new_dt;
}

export default function Post(props) {
  return (
    <article className="post-badge">
      <h2>{props.post.title}</h2>
      <p>Where: {props.post.attraction}</p>
      <p>Children: {props.post.children} </p>
      {/* <p>Date and Time: {props.post.time}</p> */}
      <p>Date and Time: {dateFix(props.post.time)}</p>
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
