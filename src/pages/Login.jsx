import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import LoginImage from "../assets/loginImage.png";
import "./Login.css";
import { useNavigate } from "react-router";
import SocialMedia from "../components/SocialMedia";
import { emailRegex, passwordRegex, usernameRegex } from "../components/Common";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    userName: "",
    password: "",
  });
  const [allData, setAllData] = useState([]);
  const [error, setError] = useState("");

  const isValidate = () => {
    let err = {};
    if (form.userName.trim() === "") {
      err.userName = "Username or Email is required";
    } else if (
      !emailRegex.test(form.userName) &&
      !usernameRegex.test(form.userName)
    ) {
      err.userName = "Enter a valid Username or Email";
    }
    if (form.password.trim() === "") {
      err.password = "Password is Required";
    } else if (!passwordRegex.test(form.password)) {
      err.password =
        "Password must be min 8 chars with 1 capital, 1 number, 1 symbol";
    }
    setError(err);
    return Object.keys(err).length === 0;
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm((prev) => ({ ...prev, [name]: value.trim() }));
    setError((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValidate()) {
      navigate("/home/all-countries");
      setAllData((prev) => [...prev, form]);
      setForm({ userName: "", password: "" });
    }
  };

  return (
    <div className="container-md min-vh-100 d-flex align-items-center justify-content-center">
      <Row className="w-100 m-0 justify-content-center">
        <Col
          xs={12}
          md={6}
          className="d-flex align-items-center justify-content-center p-4"
        >
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <h2 className="HeadLine">Sign In</h2>
            <p className="newuser">
              New user?&nbsp;
              <a href="/signup" className="signup-link">
                Create an account
              </a>
            </p>
            <Form>
              <CustomInput
                type="text"
                name="userName"
                value={form.userName}
                placeholder={"Username or email"}
                onChange={handleChange}
                error={error.userName}
              />
              <CustomInput
                type="password"
                name={"password"}
                value={form.password}
                placeholder={"Password"}
                onChange={handleChange}
                error={error.password}
              />
              <Form.Check
                type="checkbox"
                id="keep-signed-in"
                label="Keep me signed in"
                className="custom-checkbox"
                disabled={!form.userName || !form.password}
              />
              <br />
              <CustomButton
                label="Sign In"
                onClick={handleSubmit}
                variant="primary"
              />
            </Form>
            <div className="sub-div">
              <Row className="align-items-center my-3">
                <Col>
                  <hr className="horizontal" />
                </Col>
                <Col>
                  <p className="sign_with">{"Or Sign In With"}</p>
                </Col>
                <Col>
                  <hr className="horizontal" />
                </Col>
              </Row>
            </div>
            <SocialMedia />
          </div>
        </Col>
        <Col
          md={6}
          className="d-none d-md-flex align-items-center justify-content-center p-0"
        >
          <img
            src={LoginImage}
            alt="Login Illustration"
            style={{ height: "100%", objectFit: "cover" }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Login;
