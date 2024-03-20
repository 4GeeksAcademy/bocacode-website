'use client';
import Image from 'next/image';
import Link from 'next/link';
import { React, useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import VideoModal from '../VideoModal/page.js';
import '../../styles/card.css';

const Card = ({ data, carousel, link_text, profile, alumni, course }) => {
  const { video, image, profileImage, title, slug, content, link } = data;

  const [play, setPlay] = useState(false);

  const cardClass = profile
    ? 'card-profile-body box-shadow-v1 rounded-16 column relative'
    : alumni
    ? 'card-alumni-body column align-center'
    : course
    ? 'card-course-body'
    : 'card-container';

  const cardBodyClass = profile
    ? 'card-profile-content height-100 justify-beetwen column align-items-center text-center'
    : alumni
    ? 'text-center pt-8'
    : course
    ? 'p-16 bg-white rounded-8 box-shadow-v3'
    : 'p-16 column';

  const cardTitleClass = profile
    ? 'fs-20 fw-500 lh-28'
    : alumni
    ? 'fs-18 fw-500 lh-28'
    : course
    ? 'fs-20 fw-500 lh-28'
    : 'fs-18 fw-500 lh-28';

  const cardContentClass = carousel
    ? 'fs-14 fw-400 lh-24 color-gray'
    : course
    ? 'fs-16 fw-300 lh-24 color-lightgray'
    : 'fs-12 fw-400 color-lightgray';
  const boxShadowStyle =
    carousel && 'box-shadow: 0px 10px 25px -12px rgba(0,0,0,0.67)';

  const videoImageWith = profile ? 284 : 384;
  const videoImageHeight = profile ? 112 : 224;

  return data ? (
    <div className={cardClass}>
      {image && !video && (
        <div
          className=""
          style={{
            boxShadow: `${boxShadowStyle}`,
          }}
        >
          <Image
            src={image}
            className={carousel ? 'image-brightness' : ''}
            width={profile ? 284 : course ? 320 : 384}
            height={profile ? 112 : course ? 160 : 224}
            style={{
              objectFit: 'cover',
              borderRadius: `${
                profile ? '16px 16px 0 0' : course ? '8px 8px 0 0' : '12px'
              }`,
              width: '100%',
            }}
            alt={title}
          />
        </div>
      )}
      {video && (
        <div
          className=""
          style={{
            boxShadow: `${boxShadowStyle}`,
          }}
        >
          {play ? (
            <>
              <VideoModal videoLink={video} play />
              <div
                className="relative"
                onClick={() => {
                  setPlay(true);
                }}
              >
                <Image
                  src={image}
                  className=""
                  width={videoImageWith}
                  height={videoImageHeight}
                  style={{
                    width: '100%',
                  }}
                  alt={title}
                />
                <Image
                  src={'/images/play-button.png'}
                  className="absolute right-0"
                  width={videoImageWith}
                  height={videoImageHeight}
                  style={{
                    width: '100%',
                  }}
                  alt="play button"
                />
              </div>
            </>
          ) : (
            <div
              className="relative image-grayscale"
              onClick={() => {
                setPlay(true);
              }}
            >
              <Image
                src={image}
                className=""
                width={videoImageWith}
                height={videoImageHeight}
                style={{
                  width: '100%',
                }}
                alt={title}
              />
              <Image
                src={'/images/play-button.png'}
                className="absolute right-0"
                width={videoImageWith}
                height={videoImageHeight}
                style={{
                  width: '100%',
                }}
                alt="play button"
              />
            </div>
          )}
        </div>
      )}
      {profileImage && (
        <div
          className={
            profile ? 'absolute centerer' : 'flex justify-content-center'
          }
        >
          <Link href={`/alumni/${slug}`} className="">
            <Image
              src={profileImage}
              className="border-royalblue round"
              width={profile ? 108 : 80}
              height={profile ? 108 : 80}
              alt="profile"
            />
          </Link>
        </div>
      )}
      {(title || content) && (
        <div className={cardBodyClass}>
          <div className="column gap-8">
            {title && <h3 className={cardTitleClass}>{title}</h3>}
            {content && (
              <div>
                <p className={cardContentClass}>{content}</p>
              </div>
            )}
          </div>
          <div className="">
            {slug && profileImage && (
              <Link href={`/alumni/${slug}`} className="">
                <h4 className="fs-16 fw-600 color-royalblue py-8">
                  {link_text}
                </h4>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  ) : (
    <></>
  );
};
export default Card;
