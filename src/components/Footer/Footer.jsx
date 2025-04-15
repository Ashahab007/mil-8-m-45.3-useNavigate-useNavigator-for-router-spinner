import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="text-center flex gap-4 justify-center">
      <Link to="/">Facebook</Link>
      <Link to="/">LinkedIn</Link>
    </div>
  );
};

export default Footer;
