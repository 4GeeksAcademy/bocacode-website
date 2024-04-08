'use client';
import { React, useEffect, useState } from 'react';
import styles from '../page.module.css';
import TitleContainer from '../components/TitleContainer/page';
import Carousel from '../components/Carousel/page';
import Card from '../components/Card/page';
import data from '../data/alumni.json';

const Alumni = () => {
  return (
    <main className={styles.main}>
      <TitleContainer
        data={data?.title_container}
        classContainer="text-center py-30 m-auto"
        classHeading="fs-36 fw-700 lh-40 p-16"
        classParagraph="fs-16 fw-400 lh-24 color-gray-v2"
      />

      <Carousel data={data?.carousel} />

      <TitleContainer
        data={data?.title_container_1}
        classContainer="text-center py-30 m-auto"
        classHeading="fs-30 fw-700 lh-36 "
        classParagraph="fs-20 fw-400 lh-28"
      />

      {data?.alumni && (
        <div className="row gap-80 wrap p-30-20 justify-center maxwidth-1366 m-auto ">
          {data?.alumni?.map((card, index) => {
            return (
              <Card key={index} data={card} link_text={card?.link} alumni />
            );
          })}
        </div>
      )}
    </main>
  );
};

export default Alumni;
