import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid ">
          <Link className="navbar-brand text-primary" to="/">
            Money manager
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
