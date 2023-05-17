import React from "react";
import "./Footer.scss";
import {
  GoogleCircleFilled,
  TwitterCircleFilled,
  GithubFilled
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>© {new Date().getFullYear()} Mi Proyecto. Todos los derechos reservados.</p>
        <div className="icons">
        <TwitterCircleFilled /> <GithubFilled /> <GoogleCircleFilled />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
