import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = ({ type = "border", size = "3rem", color = "primary" }) => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 my-3">
      {type === "border" ? (
        <Spinner
          animation="border"
          role="status"
          style={{ width: size, height: size, color }}
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <Spinner
          animation="grow"
          role="status"
          style={{ width: size, height: size, color }}
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </div>
  );
};

export default Loader;
