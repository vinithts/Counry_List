import React from "react";
import SocialMedia from "./SocialMedia";
import { Container } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container d-flex flex-column align-items-center">
      <Container className="d-flex flex-column align-items-center">
        <SocialMedia />
        <p className="footer-mail mt-3">example@gmail.com</p>
        <p className="copyright mt-2">
          Copyright © 2020 Name. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
