'use client';
import React from 'react';
import Icon from '../Icon/pages';
import Image from 'next/image';
import '../../globals.css';
import Link from 'next/link';

const AlumniDescription = ({ data }) => {
  return (
    <section className="mt-90 align-items-center gap-45 maxwidth-1366 m-auto row px-40 p-sm-20 column-tablet">
      <div className="text-center-sm w-80 w-sm-100">
        <h1 className="fs-30 fw-700 lh-36">{data?.title}</h1>
        <p className="mt-16 fs-16 fw-400 lh-24 color-gray">
          {data?.description}
        </p>
        <div className="row mt-32 justify-center-sm">
          {data?.links_in_description?.map((data, index) => {
            return (
              data?.link && (
                <Link
                  key={index}
                  href={data?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-8 rounded-total bg-darkblue p-12 fw-50 color-white-v2 box:hover size-48"
                >
                  <Icon icon={data?.icone} />
                </Link>
              )
            );
          })}
        </div>
      </div>
      <div className="flex justify-end">
        <div>
          <Image
            loading="lazy"
            src={data?.profileImage}
            width={1000}
            height={1000}
            alt={data?.title}
            style={{ color: 'transparent', width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </section>
  );
};

export default AlumniDescription;
