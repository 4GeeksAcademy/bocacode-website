'use client';
import { React, useEffect, useState } from 'react';
import Image from 'next/image';
import '../../styles/path.css';
import data from '../../data/paths.json';

const Paths = (props) => {
  const { title, paths } = data;
  return (
    <>
      <div className="maxwidth-1366 w-100 m-auto column container">
        <h2 className="flex justify-center fs-24 fw-700 py-30">{title}</h2>
        <div className="column gap-45">
          {Array.isArray(paths) &&
            paths?.map((path, index) => {
              return (
                <div key={index}>
                  <div className="gap-16 row path">
                    <div>
                      <span className="span fs-24 fw-700 lh-36 justify-center align-center">{`${
                        index + 1
                      }`}</span>
                    </div>
                    <div className="flex direction">
                      <div className="path-left gap-4 column">
                        <h2 className="fs-24 fw-700 lh-36">
                          {path?.heading_left}
                        </h2>
                        <p
                          className="fs-14 fw-400 lh-20"
                          dangerouslySetInnerHTML={{
                            __html: path?.paragraph_left,
                          }}
                        />
                      </div>
                      <div className="path-right gap-4 column">
                        <h2 className="fs-24 fw-700 lh-36">
                          {path?.heading_right}
                        </h2>
                        <ul className="list-style-none ">
                          {path?.careers.map((career, index) => {
                            return (
                              <li className="fs-14 fw-400 lh-24" key={index}>
                                {career}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Image
                      src={path.image}
                      className="path-image"
                      alt={path.heading_left}
                      width={1024}
                      height={420}
                      style={{ width: '100%', height: '100%' }}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Paths;
