import React, { useEffect } from "react";
import Carousel from "../components/Carousel";
import { useGetCountryDetailsQuery } from "../Services/countryApi";
import Loader from "../components/Loader";
import { Col, Row } from "react-bootstrap";
import CarosuelCard from "../components/CarosuelCard";
import CardList from "../components/CardList";
import { useDispatch, useSelector } from "react-redux";
import { setCountries } from "../Slice/countrySlice";
import { resetCarousel } from "../Slice/carouselSlice";

const EuropeCountries = () => {
  const { data, error, isLoading } = useGetCountryDetailsQuery();
  const { europeCountries } = useSelector((state) => state.country);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setCountries(data));
    }
  }, [data, dispatch]);

  useEffect(() => {
  if (europeCountries.length > 0) {
    dispatch(resetCarousel(europeCountries.length));
  }
}, [europeCountries.length, dispatch]);

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
          <h2 className="dashbord-head">EUROPE</h2>
          <div className="title-divider-2">
            <div className="line" />
          </div>
        </div>
      </div>
      <Row>
        <Col xs={12} md={8}>
          <Carousel data={europeCountries || []} />
        </Col>
        <Col xs={12} md={4}>
          <CarosuelCard data={europeCountries || []} />
        </Col>
      </Row>
      <CardList data={europeCountries || []}/>
    </div>
  );
};

export default EuropeCountries;
