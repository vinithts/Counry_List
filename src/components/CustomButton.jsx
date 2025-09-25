import React from "react";
import { Button } from "react-bootstrap";
import './CustomButton.css';

const CustomButton = ({
  label,
  onClick,
  type = "button",
  disabled = false,
  variant = "primary",
  size = "lg",
}) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      size={size}
      className="custom-btn"
    >
      {label}
    </Button>
  );
};

export default CustomButton;
