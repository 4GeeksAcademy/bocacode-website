'use client';
import { React, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../../../page.module.css';
import PageHeader from '@/app/components/PageHeader/page';
import UpcomingDates from '@/app/components/UpcomingDates/page';
import Link from 'next/link';
import data from '../../../data/software-engineering.json';
import TwoColumns from '@/app/components/TwoColumns/page';
import Icon from '@/app/components/Icon/pages';
import Testimonials from '@/app/components/Testimonials/page';
import TitleContainer from '@/app/components/TitleContainer/page';
import Card from '@/app/components/Card/page';

const SoftwareEngineering = () => {
  return (
    <main className={styles.main}>
      <PageHeader data={data?.header} />

      <UpcomingDates data={data?.upcoming_dates} />

      {/* <div className="bg-darkblue py-50 ">
        <div className='row justify-beetwen maxwidth-1366 m-auto'>

          <div className='column '>
            <p className='fs-14 fw-500 lh-20 color-lightgray-v2'>{data?.band?.paragraph}</p>
            <h2 className='fs-24 fw-700 lh-32 color-almost-white'>{data?.band?.heading}</h2>
          </div>

          <Link href={data?.band?.button.button_link} className=''>
            <div
              className='button fw-600 color-almost-white '
              style={{
                background: `${data?.band?.button.button_color}`,
                color: `${data?.band?.button.button_textcolor}`,
                fontSize: `${data?.band?.button.button_fontsize}`,
              }}

            >{data?.band?.button.button_text}</div>
          </Link>
        </div>
      </div> */}

      <TwoColumns
        left={data?.two_columns?.left}
        right={data?.two_columns?.right}
      />

      <div className=" p-sm-20 container">
        <div className="w-70 w-100-tablet maxwidth-1366 bg-lila rounded-8 p-32 row gap-45 m-auto column-tablet">
          <div className="w-fit-content w-100-tablet">
            <Image
              className="rounded-8 w-100-tablet h-fit-content"
              src={data?.message?.image}
              width={272}
              height={272}
              alt={data?.message?.name}
            />
          </div>
          <div className="column justify-center">
            <p className="fs-24 fw-500 lh-32">
              <Icon icon="quote-open" />
              {' ' + data?.message?.paragraph + ' '}
              <Icon icon="quote-close" />
            </p>
            <div className="row pt-32 fs-14 lh-20">
              <p className="fw-700">{'  - ' + data?.message?.name}</p>
              <p>{', ' + data?.message?.job}</p>
            </div>
          </div>
        </div>

        <div className="py-50 maxwidth-1366 m-auto">
          <div className="text-center py-30 w-100 m-auto column gap-8">
            <h4 className="fs-16 fw-600 lh-24 color-royalblue">
              {data?.what_learn?.sub_title}
            </h4>
            <h2 className="fs-30 fw-800 lh-36 fs-sm-24">
              {data?.what_learn?.title}
            </h2>
            <p className="fs-18 fw-400 lh-24 color-gray">
              {data?.what_learn?.text}
            </p>
          </div>
          <div className="grid container grid-col-3 w-100 w-100-tablet gap-24 grid-col-sm-1 grid-col-tablet-2">
            {data?.what_learn?.items.map((item, index) => (
              <div className="row gap-8 color-gray" key={index}>
                <div>
                  <Icon icon={data?.what_learn?.icon} width="20px" />
                </div>
                <p className="fs-16 fw-500 lh-24">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <TwoColumns
        left={data?.two_columns_2?.left}
        right={data?.two_columns_2?.right}
      />

      <Testimonials />

      <TitleContainer
        data={data?.title_container_3}
        classContainer="text-center py-30 w-50 m-auto"
        classHeading="fs-30 fw-700 lh-36 "
        classParagraph="fs-24 fw-300 lh-32 color-lightgray"
      />

      {data?.qualities && (
        <div className="container row gap-45 wrap py-30 maxwidth-1366 m-auto justify-beetwen justify-center-sm ">
          {data?.qualities?.map((qualitie, index) => {
            return (
              <Card
                key={index}
                data={qualitie}
                link_text={data?.link_text}
                course
              />
            );
          })}
        </div>
      )}

      <TwoColumns
        left={data?.two_columns_3?.left}
        right={data?.two_columns_3?.right}
      />
      <TwoColumns
        left={data?.two_columns_4?.left}
        right={data?.two_columns_4?.right}
      />
      <TwoColumns
        left={data?.two_columns_5?.left}
        right={data?.two_columns_5?.right}
      />
    </main>
  );
};

export default SoftwareEngineering;
