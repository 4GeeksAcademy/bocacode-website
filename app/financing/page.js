'use client';
import React, { useEffect, useState } from 'react';
import styles from '../page.module.css';
import Link from 'next/link';
import TwoColumns from '../components/TwoColumns/page';
import Credentials from '../components/Credentials/page';
import data from '../data/financing.json';

const Financing = () => {
  return (
    <main className={styles.main}>
      <TwoColumns
        left={data?.two_columns?.left}
        right={data?.two_columns?.right}
      />
      <Credentials />
      <TwoColumns
        left={data?.two_columns_1?.left}
        right={data?.two_columns_1?.right}
      />
      <TwoColumns
        left={data?.two_columns_2?.left}
        right={data?.two_columns_2?.right}
      />

      <div className="align-items-center column py-50 bg-zinc gap-45">
        <div className="column text-center px-20">
          <h1 className="fs-36 fw-800 lh-40 fs-sm-30 ">
            {data?.info?.heading}
          </h1>
          <h1 className="fs-36 fw-800 lh-40 fs-sm-30 color-blueberry">
            {data?.info?.call_msg}
          </h1>
        </div>
        <Link href="/contact" className="">
          <div className="w-fit-content rounded-6 align-items-center  button-twocolumn fs-14 fw-500 flex">
            {'Schedule a Call'}
          </div>
        </Link>
      </div>
    </main>
  );
};

export default Financing;
