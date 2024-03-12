'use client';
import React from 'react';
import Icon from '../Icon/pages';
import Image from 'next/image';
import '../../globals.css';
import Link from 'next/link';

const AlumniProject = ({ data }) => {
  return (
    <section className="bg-lila py-30 ">
      <div className="flex align-items-center gap-45 maxwidth-1366 m-auto row px-40 p-sm-20 column-tablet">
        <div className="flex justify-start">
          <div>
            <Image
              className="object-cover aspect-square rounded-8"
              loading="lazy"
              src={data?.final_project_image}
              width={1000}
              height={1000}
              alt={data?.final_project_tittle}
              style={{ color: 'transparent', width: '100%', height: '100%' }}
            />
          </div>
        </div>
        <div className="text-center-sm w-80 w-sm-100">
          <h2 className="fs-36 lh-36">
            <span className="block fw-600">Final Project</span>
            <span className="block fw-800 color-darkblue">
              {data?.final_project_tittle}
            </span>
          </h2>
          <p className="mt-16 fs-16 fw-400 lh-24 color-gray">
            {data?.final_project_description}
          </p>
          <div className="row mt-32 justify-center-sm">
            {data?.links_in_final_project?.map((data, index) => {
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
      </div>
    </section>
  );
};

export default AlumniProject;
