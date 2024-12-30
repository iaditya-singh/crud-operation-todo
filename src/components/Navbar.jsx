import React from "react";

const Navbar = ({appName = 'Default'}) => {
  return (
    <>
      <nav className="navbar bg-dark ">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 text-light">
          {appName}
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
