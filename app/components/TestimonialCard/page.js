'use client';
import React from 'react';
import Icon from '../Icon/pages';
import Image from 'next/image';
import '../../styles/testimonials.css';

const TestimonialCard = ({ data }) => {
  return (
    <div className="testimonial-card block bg-white p-48">
      <div className="row">
        <Icon icon="star" />
        <Icon icon="star" />
        <Icon icon="star" />
        <Icon icon="star" />
        <Icon icon="star" />
      </div>
      <h3>{data?.title}</h3>
      <div className="row">
        <div>
          <Image
            alt={data?.name}
            src={data?.image_profile}
            width={64}
            height={64}
            className="rounded-total"
          />
        </div>
        <h4>{data?.name}</h4>
      </div>
    </div>
  );
};

export default TestimonialCard;
