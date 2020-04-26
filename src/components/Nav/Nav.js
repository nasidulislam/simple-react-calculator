import React from "react";
import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <li>
      <Link to={props.path} onClick={props.onClick}>{props.name}</Link>
    </li>
  );
}
