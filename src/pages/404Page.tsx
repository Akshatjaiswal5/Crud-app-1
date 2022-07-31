import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="level-item">
      <Link className="mr-5" to="/">
        Home
      </Link>
      <h1 className=" is-size-3 has-text-weight-semibold">
        404- Page not found
      </h1>
    </div>
  );
};

export default PageNotFound;
