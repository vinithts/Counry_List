import React from "react";
import { Form } from "react-bootstrap";
import "./CustomInput.css";

const CustomInput = ({
  type,
  value,
  name,
  onChange,
  placeholder,
  disabled = false,
  error,
}) => {
 
  return (
  <Form.Group className="mb-3 position-relative">
  <Form.Control
    type={type}
    value={value}
    name={name}
    onChange={onChange}
    placeholder={placeholder}
    disabled={disabled}
    isInvalid={!!error}
    className="custom-input"
  />
  {error && (
    <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
  )}
</Form.Group>

  );
};

export default CustomInput;
