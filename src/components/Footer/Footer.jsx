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
        <p>Mi Proyecto 100% serio, real no fake {new Date().getFullYear()}©. </p>
        <div className="icons">
        <TwitterCircleFilled /> <GithubFilled /> <GoogleCircleFilled />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
