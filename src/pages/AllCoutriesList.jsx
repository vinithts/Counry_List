import React, { useEffect } from "react";
import "./AllCountries.css";
import Carousel from "../components/Carousel";
import { useGetCountryDetailsQuery } from "../Services/countryApi";
import Loader from "../components/Loader";
import { Col, Row } from "react-bootstrap";
import CarosuelCard from "../components/CarosuelCard";
import CardList from "../components/CardList";
import { useDispatch, useSelector } from "react-redux";
import { setCountries } from "../Slice/countrySlice";
import { resetCarousel } from "../Slice/carouselSlice";

const AllCoutriesList = () => {
  const { data, error, isLoading } = useGetCountryDetailsQuery();
  const { allCountries } = useSelector((state) => state.country);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setCountries(data));
      dispatch(resetCarousel(data.length));
    }
  }, [data, dispatch]);

  if (isLoading)
    return (
      <div>
        <Loader />
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="fluid container-md">
      <div className="parent-head">
        <div className="title-divider">
          <div className="title-divider-1">
            <div className="line" />
          </div>
          <h2 className="dashbord-head">WELCOME</h2>
          <div className="title-divider-2">
            <div className="line" />
          </div>
        </div>
      </div>
      <Row>
        <Col xs={12} md={8}>
          <Carousel data={allCountries || []} />
        </Col>
        <Col xs={12} md={4}>
          <CarosuelCard data={allCountries || []} />
        </Col>
      </Row>
      <CardList data={allCountries || []}/>
    </div>
  );
};

export default AllCoutriesList;
