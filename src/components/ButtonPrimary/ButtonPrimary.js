import React from "react";
import "./ButtonPrimary.scss";

function ButtonPrimary({ text, bType, disabled = false }) {
  return (
    <button
      className="ButtonPrimary"
      type={bType ? bType : "button"}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default ButtonPrimary;
