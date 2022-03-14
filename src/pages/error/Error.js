import React from "react";
import errorImg from "../../assets/error-img.jpg";
import "./Error.scss";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error">
      <img src={errorImg} alt="" />

      <Link className="error__btn" to="/">
        Back
      </Link>
    </div>
  );
}

export default Error;
