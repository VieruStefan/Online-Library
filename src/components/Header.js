import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>Our Header</h1>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/cars"> Cars</Link>
      </div>
    </div>
  );
};

export default Header;
