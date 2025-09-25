import React from "react";
import "./CarosuelCard.css";
import { useSelector } from "react-redux";

const CarosuelCard = ({ data }) => {
  const activeIndex = useSelector((state) => state.carousel.activeIndex);
  const country = data[activeIndex];
  
  if (!data.length || !country) {
    return null;
  }
  
  return (
    <div className="card-carosuel">
      <img
        src={country.flag}
        alt={country.name}
        style={{ height: "120px", width: "120px" }}
      />
      <p className="country-name">{country.name}</p>
      <p className="country-region">{country.region}</p>
    </div>
  );
};

export default CarosuelCard;