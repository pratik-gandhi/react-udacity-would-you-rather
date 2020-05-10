import React from "react";
import { Link } from "react-router-dom";

const notFound = () => {
  return (
    <div>
      <h1>Not found (404)</h1>
      <p>Oops, the resource you requested was not found!</p>
      <p>
        Click <Link to="/">here</Link> to go back to home page!
      </p>
    </div>
  );
};

export default notFound;
