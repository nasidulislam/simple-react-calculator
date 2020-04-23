import React from "react";
import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <li>
      <Link to={props.path}>{props.name}</Link>
    </li>
  );
}
