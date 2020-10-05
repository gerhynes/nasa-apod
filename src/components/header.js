import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import "./header.css";

const Header = ({ siteTitle }) => (
  <header className="Header">
    <h1>
      <Link className="Header__title" to="/">
        {siteTitle}
      </Link>
    </h1>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
