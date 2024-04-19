'use client';
import { React } from 'react';
import styles from './page.module.css';
import PageHeader from './components/PageHeader/page';
import TitleContainer from './components/TitleContainer/page';
import Carousel from './components/Carousel/page';
import PricingCard from './components/PricingCard/page';
import Credentials from './components/Credentials/page';
import Paths from './components/Paths/page';
import TwoColumns from './components/TwoColumns/page';
import data from './data/home.json';

export default function Home() {

  const pricingInfo = data?.pricing_info_variable ? data.pricing_info_variable.filter((card) => card.active) : [];

  return (
    <main className={styles.main}>
      <PageHeader data={data?.header} />

      <TitleContainer
        data={data.title_container[0]}
        classContainer="text-center m-auto gap-16 "
        classHeading="fs-36 fw-700 lh-36 fs-sm-30 fw-sm-700"
        classParagraph="fs-16 fw-400 lh-28 color-gray-v2"
      />

      <Carousel data={data?.carousel} />

      <TitleContainer
        data={data.title_container[1]}
        classContainer="text-center m-auto gap-16 "
        classHeading="fs-36 fw-700 lh-36 fs-sm-30 fw-sm-700"
        classParagraph="fs-16 fw-400 lh-28 color-gray-v2"
      />

      <div id="pricing-info" className="gap-24 m-auto column py-50 maxwidth-1366">
        {pricingInfo.map((card, index) => (
          <PricingCard key={`pricing-card-${index}`} data={card} />
        ))}
      </div>

      <Credentials />

      <TitleContainer
        data={data.title_container[2]}
        classContainer="text-center m-auto gap-16 "
        classHeading="fs-36 fw-700 lh-36 fs-sm-30 fw-sm-700"
        classParagraph="fs-16 fw-400 lh-28 color-gray-v2"
      />

      <Paths />

      <TwoColumns
        left={data?.two_columns?.left}
        right={data?.two_columns?.right}
      />
    </main>
  );
}
