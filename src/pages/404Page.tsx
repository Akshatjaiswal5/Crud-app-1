import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="h-screen p-10">
      <Link className="text-blue-900 text-xl ml-20" to="/">
        Home
      </Link>
      <h1 className=" block m-auto text-center font-bold text-2xl">
        404- Page not found
      </h1>
    </div>
  );
};

export default PageNotFound;
