import React from "react";
import "./CardList.css";
import { Col, Row } from "react-bootstrap";
import CustomButton from "./CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { loadMore } from "../Slice/carouselSlice";

const CardList = ({data=[]}) => {

  const showList =useSelector((state)=>state.carousel.loadData);
  const dispatch= useDispatch();

  const handleClick = () => {
    dispatch(loadMore());
  };

  return (
    <div className="card-list">
      <Row>
        {data.slice(0,showList).map((country, index) => (
          <Col key={index} xs={12} md={6}>
            <div className="custom-card">
              <img src={country.flag} alt={country.name} className="flag-img" />
              <div className="card-text">
                <p className="country-name">{country.name}</p>
                <p className="country-region">{country.region}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <div className="load-btn">
      <CustomButton label="Load More" onClick={handleClick} size="sm" variant="primary" />
      </div>
    </div>
  );
};

export default CardList;
