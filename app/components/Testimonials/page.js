'use client';
import Link from 'next/link';
import React, { useState, useRef } from 'react';
import TitleContainer from '../TitleContainer/page';
import Slider from 'react-slick';
import data from '../../data/testimonials.json';
import TestimonialCard from '../TestimonialCard/page';
import '../../styles/testimonials.css';
import Icon from '../Icon/pages';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
  const sliderRef = useRef();

  const CustomNextArrow = () => {
    return (
      <div>
        <button
          className="next-button transparent flex border-rose p-12 rounded-total"
          onClick={() => sliderRef?.current?.slickNext()}
        >
          <Icon iconClass="arrow" icon="arrow" />
        </button>
      </div>
    );
  };
  const CustomPrevArrow = () => {
    return (
      <div>
        <button
          className="prev-button rotate-180 flex transparent border-rose p-12 rounded-total"
          onClick={() => sliderRef?.current?.slickPrev()}
        >
          <Icon iconClass="arrow" icon="arrow" />
        </button>
      </div>
    );
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    className: 'testimonial-container',
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <>
      <div className="bg-gray py-50 block">
        <div className="maxwidth-1366 m-auto container row column-sm  gap-16-sm justify-beetwen align-center align-start-sm">
          <h2 className="fs-48 fw-700 lh-48 fs-sm-36 w-60 w-sm-100">
            {data?.heading}
          </h2>
          <div className="row gap-16">
            <CustomPrevArrow /> <CustomNextArrow />
          </div>
        </div>
        <Slider {...settings} ref={sliderRef}>
          {data?.testimonials.map((testimonial) => (
            <div className="testimonial-card bg-white p-48 gap-16" key={testimonial?.name}>
              <div className="row ">
                <Icon icon="star" />
                <Icon icon="star" />
                <Icon icon="star" />
                <Icon icon="star" />
                <Icon icon="star" />
              </div>
              <h3 className="fs-30 fw-700 lh-36 color-grisnoble mt-16 ">
                {testimonial?.title}
              </h3>
              <div className="row mt-32 flex align-center gap-8">
                <div>
                  <Image
                    alt={testimonial?.name}
                    src={testimonial?.image_profile}
                    width={64}
                    height={64}
                    className="rounded-total"
                  />
                </div>
                <h4 className="fs-16 fw-400 lh-24 color-rose">
                  {testimonial?.name}
                </h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Testimonials;
