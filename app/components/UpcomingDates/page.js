'use client';
import Link from 'next/link';
import TitleContainer from '../TitleContainer/page';
import { Fragment } from 'react';
import styles from '../../page.module.css';

const UpcomingDates = ({ data }) => {
  return (
    <>
      <div className="py-50 p-sm-20">
        <TitleContainer
          data={data?.title_container}
          classContainer="text-center w-50  m-auto gap-16"
          classHeading="fs-30 fw-700 lh-36"
          classParagraph="fs-16 fw-400 lh-28"
        />

        <div className="py-50 overflow-x-auto">
          <table className="maxwidth-1366 m-auto box-shadow-v2 rounded-8 ">
            <thead className="border-v2">
              {data?.fields &&
                data?.fields.map((field, index) => (
                  <th
                    key={index}
                    className={`text-center p-16 fs-14 fw-400 lh-20 ${
                      index === 2 ? styles.hiddenOnMobile : ''
                    }`}
                  >
                    {field}
                  </th>
                ))}
            </thead>

            <tbody>
              <tr>
                {data?.date_info &&
                  data?.date_info.map((info, index) => {
                    return (
                      <Fragment key={index}>
                        <td className="p-12 row column-tablet ">
                          <div className="p-12 fs-14 fw-600 lh-20">
                            {' '}
                            {info.course.title}
                          </div>
                          <div className="p-12">
                            <span className="bg-light-gray rounded-16 p-4-12 fs-12 fw-600 lh-16 color-lightgray">
                              {info.course.modality}
                            </span>
                          </div>
                        </td>
                        <td className="p-12 fs-14 fw-400 lh-20 text-center color-lightgray">
                          {info.start_date.date}
                        </td>
                        <td
                          className={`p-12 fs-14 fw-400 lh-20 text-center color-lightgray ${styles.hiddenOnMobile}`}
                        >
                          {info.graduation.date}
                        </td>
                        <td className="p-12 text-center">
                          <Link
                            href={info.apply.link}
                            className="fs-14 fw-700 lh-20 color-royalblue"
                          >
                            {info.apply.text}
                          </Link>
                        </td>
                      </Fragment>
                    );
                  })}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UpcomingDates;
