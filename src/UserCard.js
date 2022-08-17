import React from "react";
import "./card.css";
const UserCard = (props) => {
  return (
    <div className="card">
      <div className="container">
        <h3>
          <b> Name : {props.name}</b>
        </h3>
        <p>
          <b>username :</b> {props.username}
        </p>
        <p>
          <b>email :</b> {props.email}
        </p>
        <p>
          <b>phone :</b> {props.phone}
        </p>
        <p>
          <b>website : </b> {props.website}
        </p>
      </div>
    </div>
  );
};
export default UserCard;
