import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Carousel.css";
import { useDispatch, useSelector } from "react-redux";
import { nextIndex, prevIndex, setActiveIndex } from "../Slice/carouselSlice";

const Carousel = ({ data = [] }) => {
  const dispatch = useDispatch();

  const activeFlag = useSelector((state) => state.carousel.activeIndex);
  const visibleDotsRange = useSelector(
    (state) => state.carousel.visibleDotsRange
  );

  const handlePrev = () => {
    dispatch(prevIndex(data.length));
  };

  const handleNext = () => {
    dispatch(nextIndex(data.length));
  };
useEffect(() => {
  if (data.length > 0 && activeFlag >= data.length) {
    dispatch(setActiveIndex(0));
  }
}, [data, activeFlag, dispatch]);

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide custom-carosule"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {data[activeFlag] && (
          <div className="carousel-item active">
            <img
              src={data[activeFlag].flag}
              alt={data[activeFlag].name}
              style={{ height: "120px", width: "120px" }}
            />
          </div>
        )}
      </div>

      <div className="carousel-indicators m-6">
        <div className="btn-carosuel" onClick={handlePrev}>
          <FaArrowLeft />
        </div>
        <div>
          {Array.from(
            { length: visibleDotsRange.end - visibleDotsRange.start + 1 },
            (_, i) => visibleDotsRange.start + i
          )
            .filter((index) => index < data.length)
            .map((index) => (
              <button
                key={index}
                type="button"
                onClick={() => dispatch(setActiveIndex(index))}
                className={`dot ${index === activeFlag ? "active-dot" : ""}`}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
        </div>
        <div className="btn-carosuel-1" onClick={handleNext}>
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
