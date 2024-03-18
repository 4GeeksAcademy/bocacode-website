'use client';
import Image from 'next/image';
import Link from 'next/link';
import { React, useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import VideoModal from '../VideoModal/page.js';
import '../../styles/card.css';

const Card = ({ data, carousel, link_text, profile, alumni, course }) => {
  // const { video, image, profileImage, title, content, link } = data;

  const [play, setPlay] = useState(false);

  return (
    <>
      <div
        className={
          profile
            ? 'card-profile-body box-shadow-v1 rounded-16 column relative'
            : alumni
            ? 'card-alumni-body column align-center'
            : course
            ? 'card-course-body'
            : 'card-container'
        }
      >
        {data?.image && !data?.video && (
          <div
            className=""
            style={{
              boxShadow: `${
                carousel && 'box-shadow: 0px 10px 25px -12px rgba(0,0,0,0.67)'
              }`,
            }}
          >
            <Image
              src={data?.image}
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
              alt={data?.title}
            />
          </div>
        )}
        {data?.video && (
          <div
            className=""
            style={{
              boxShadow: `${
                carousel && 'box-shadow: 0px 10px 25px -12px rgba(0,0,0,0.67)'
              }`,
            }}
          >
            {play ? (
              <>
                <VideoModal videoLink={data?.video} play />
                <div
                  className="relative"
                  onClick={() => {
                    setPlay(true);
                  }}
                >
                  <Image
                    src={data?.image}
                    className=""
                    width={profile ? 284 : 384}
                    height={profile ? 112 : 224}
                    style={{
                      width: '100%',
                    }}
                    alt={data?.title}
                  />
                  <Image
                    src={'/images/play-button.png'}
                    className="absolute right-0"
                    width={profile ? 284 : 384}
                    height={profile ? 112 : 224}
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
                  src={data?.image}
                  className=""
                  width={profile ? 284 : 384}
                  height={profile ? 112 : 224}
                  style={{
                    width: '100%',
                  }}
                  alt={data?.title}
                />
                <Image
                  src={'/images/play-button.png'}
                  className="absolute right-0"
                  width={profile ? 284 : 384}
                  height={profile ? 112 : 224}
                  style={{
                    width: '100%',
                  }}
                  alt="play button"
                />
              </div>
            )}
          </div>
        )}
        {data?.profileImage && (
          <div
            className={
              profile ? 'absolute centerer' : 'flex justify-content-center'
            }
          >
            <Link href={`/alumni/${data?.slug}`} className="">
              <Image
                src={data?.profileImage}
                className="border-royalblue round"
                width={profile ? 108 : 80}
                height={profile ? 108 : 80}
                alt="profile"
              />
            </Link>
          </div>
        )}
        {(data?.title || data?.content) && (
          <div
            className={
              profile
                ? 'card-profile-content height-100 justify-beetwen column align-items-center text-center'
                : alumni
                ? 'text-center pt-8'
                : course
                ? 'p-16 bg-white rounded-8 box-shadow-v3'
                : 'p-16 column'
            }
          >
            <div className="column gap-8">
              {data?.title && (
                <h3
                  className={
                    profile
                      ? 'fs-20 fw-500 lh-28'
                      : alumni
                      ? 'fs-18 fw-500 lh-28'
                      : course
                      ? 'fs-20 fw-500 lh-28'
                      : 'fs-18 fw-500 lh-28'
                  }
                >
                  {data?.title}
                </h3>
              )}
              {data?.content && (
                <div>
                  <p
                    className={
                      carousel
                        ? 'fs-14 fw-400 lh-24 color-gray'
                        : course
                        ? 'fs-16 fw-300 lh-24 color-lightgray'
                        : 'fs-12 fw-400 color-lightgray'
                    }
                  >
                    {data?.content}
                  </p>
                </div>
              )}
            </div>
            <div className="">
              {data?.slug && data?.profileImage && (
                <Link href={`/alumni/${data?.slug}`} className="">
                  <h4 className="fs-16 fw-600 color-royalblue py-8">
                    {link_text}
                  </h4>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Card;
