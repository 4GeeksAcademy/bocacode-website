'use client';
import React from 'react';
import Icon from '../Icon/pages';
import Image from 'next/image';
import '../../globals.css';
import Link from 'next/link';

const AlumniDescription = ({ data }) => {
  return (
    <div className="maxwidth-1366 flex align-items-center m-auto row column-tablet">
      <div className="p-48 text-center-sm">
        <h1>{data?.title}</h1>
        <p className="mt-16">{data?.description}</p>
        <div className="row mt-32 justify-center-sm">
          <Link
            href={data?.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-8 rounded-total bg-darkblue p-12 fw-50 color-white-v2 box:hover size-48"
          >
            <Icon icon="github" />
          </Link>
          <Link
            href={data?.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-8 rounded-total bg-darkblue p-12 fw-50 color-white-v2 box:hover size-48"
          >
            <Icon icon="linkedin" />
          </Link>
          <Link
            href={data?.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-8 rounded-total bg-darkblue p-12 fw-50 color-white-v2 box:hover size-48"
          >
            <Icon icon="pdf" />
          </Link>
        </div>
      </div>
      <Image
        src={data?.profileImage}
        width={450}
        height={450}
        alt={data?.title}
      />
    </div>
  );
};

export default AlumniDescription;
