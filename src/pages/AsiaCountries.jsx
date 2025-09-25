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

const AsiaCountries = () => {
  const { data, error, isLoading } = useGetCountryDetailsQuery();
  const { asiaCountries } = useSelector((state) => state.country);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setCountries(data));
    }
  }, [data, dispatch]);

  useEffect(() => {
  if (asiaCountries.length > 0) {
    dispatch(resetCarousel(asiaCountries.length));
  }
}, [asiaCountries.length, dispatch]);

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
          <h2 className="dashbord-head">ASIA</h2>
          <div className="title-divider-2">
            <div className="line" />
          </div>
        </div>
      </div>
      <Row>
        <Col xs={12} md={8}>
          <Carousel data={asiaCountries || []} />
        </Col>
        <Col xs={12} md={4}>
          <CarosuelCard data={asiaCountries || []} />
        </Col>
      </Row>
      <CardList data={asiaCountries || []}/>
    </div>
  );
};

export default AsiaCountries;
