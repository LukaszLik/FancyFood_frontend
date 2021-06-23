import { Link } from "react-router-dom";
import React from "react";
import "./Error.css";

const Unauthorized = () => (
  <div className="error-wrapper un-error">
    <div className="error-wrapper-center">
      <span>
        <h1 className="error-title">Brak dostępu!</h1>
        <Link to="/" className="error-link">
          STRONA GŁÓWNA
        </Link>
      </span>
    </div>
  </div>
);

export default Unauthorized;
