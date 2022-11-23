import React from "react";
import { Link } from "react-router-dom";
import "./ButtonLink.scss";

function ButtonLink({ text, toPage }) {
  return (
    <Link to={toPage} className="ButtonLink">
      {text}
    </Link>
  );
}

export default ButtonLink;
