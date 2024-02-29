'use client';
import Icon from '../Icon/set/check';
import '../../styles/pricingcard.css';
import Link from 'next/link';

const data_static = {
  about: 'ABOUT THE CLASS',
  icon: 'check',
  just: 'Just',
  price: '$500 down',
  button: {
    button_text: 'Learn More',
    button_link: '/',
    button_color: '#312E81',
    button_textcolor: '#e5e7eb',
  },
};

const PricingCard = ({ data }) => {
  let button_link = data.button_link;
  return (
    <>
      <div className="rounded-8 box-shadow-v2 m-auto flex border-v1 w-100 pricing-card">
        <div className="pricingcard-right-side column">
          <div className="gap-24 column">
            <h3 className="">{data?.heading}</h3>
            <p className="">{data?.paragraph}</p>
          </div>
          <div className="row middle">
            <h4 className="fs-14 lh-20 fw-600">{data_static?.about}</h4>
            <div className="border-v2 w-80" />
          </div>
          <div>
            <ul className="list-style-none columns-2">
              {data?.bullets.map((bullet, index) => {
                return (
                  <li key={index} className="row fs-14 fw-400">
                    <Icon
                      icon={data_static?.icon}
                      width="24"
                      style={{ margin: '0 15px 0 0' }}
                    />
                    {bullet}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="pricingcard-left-side column">
          <span className="fs-18 fw-700 lh-24">{data_static?.just}</span>
          <h1 className="fs-48 fw-800 lh-48">{data_static?.price}</h1>
          <p className="fs-14 fs-500 lh-24">{data?.finance_msg}</p>
          <Link
            href={button_link ? button_link : data_static.button.button_link}
          >
            <div className="button fs-16 fw-600 lh-24 rounded-4">
              {data_static?.button.button_text}
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PricingCard;
