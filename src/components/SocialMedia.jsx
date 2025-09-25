import React from "react";
import { Col, Row } from "react-bootstrap";
import { SlSocialGoogle } from "react-icons/sl";
import { TbBrandFacebook } from "react-icons/tb";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiTwitter } from "react-icons/fi";

const SocialMedia = () => {
  return (
    <div>
      <div className="sub-div">
        <Row className="align-items-center my-2">
          <Col className="outer-circle">
            <SlSocialGoogle className="custom-icons" />
          </Col>
          <Col className="outer-circle">
            <TbBrandFacebook className="custom-icons" />
          </Col>
          <Col className="outer-circle">
            <SlSocialLinkedin className="custom-icons" />
          </Col>
          <Col className="outer-circle">
            <FiTwitter className="custom-icons"/>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SocialMedia;
