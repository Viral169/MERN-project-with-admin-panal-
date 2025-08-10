import React from "react";
import {NavLink} from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <section className="flex items-center h-screen dark:bg-gray-700">
        <div className="container flex flex-col items-center ">
          <div className="flex flex-col gap-6 max-w-md text-center">
            <h2 className="font-extrabold text-9xl text-gray-600 dark:text-gray-100">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl md:text-3xl dark:text-gray-300">
              Sorry, we couldn't find this page.
            </p>
            <NavLink
              to="/"
              className="h-10 text-xl font-semi rounded bg-white text-black hover:text-white hover:bg-gray-800 "
            >
              Back to home
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
