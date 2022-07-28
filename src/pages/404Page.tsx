import React from "react";
import "./404Page.css";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <Link className="home" to="/">
        Home
      </Link>
      <h1 className="warning">404- Page not found</h1>
    </>
  );
};

export default PageNotFound;
