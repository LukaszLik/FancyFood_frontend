import { Link } from "react-router-dom";
import React from "react";
import "./Error.css";

const NotFound = () => (
  <div className="error-wrapper">
    <div className="error-wrapper-center">
      <span>
        <h1 className="error-title">Nie znaleziono strony!</h1>
        <Link to="/" className="error-link">
          STRONA GŁÓWNA
        </Link>
      </span>
    </div>
  </div>
);

export default NotFound;
