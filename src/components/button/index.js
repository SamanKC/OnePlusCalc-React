import React from "react";
import { MdOutlineBackspace } from "react-icons/md";

const Button = ({ name, click, button }) => {
  return (
    <div className={name} onClick={click}>
      {button === "<MdOutlineBackspace />" ? (
        <span>
          <MdOutlineBackspace />
        </span>
      ) : (
        button
      )}{" "}
    </div>
  );
};

export default Button;
