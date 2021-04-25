import React from "react";
import PropTypes from "prop-types";
import "./header.css";

const Header = ({ siteTitle }) => (
  <header className="Header">
    <h1 className="Header__title">{siteTitle}</h1>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
