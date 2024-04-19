'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import TitleContainer from '../TitleContainer/page';
import LoaderSpinner from '../LoaderSpinner';
import styles from '../../page.module.css';
import { formatDate } from '../../utils'
import data from '../../data/upcoming-dates.json';

const UpcomingDates = ({ heading }) => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCourses = async () => {
    try {
      //production host hardcoded so it can work on dev and the previews
      const host = 'https://breathecode.herokuapp.com';
      const resp = await fetch(
        `${host}/v1/admissions/cohort/all?location=downtown-miami&upcoming=true&never_ends=false&sort=kickoff_date&limit=100`
      );
      const { results } = await resp.json();
      setCourses(results);

      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) return <LoaderSpinner />

  return (
    <>
      <div className="p-sm-20">
        <TitleContainer
          data={{
            heading: data.heading || heading,
          }}
          classContainer="text-center w-50  m-auto gap-16"
          classHeading="fs-30 fw-700 lh-36"
          classParagraph="fs-16 fw-400 lh-28"
        />

        <div className="py-50 overflow-x-auto">
          <table className="maxwidth-1366 m-auto box-shadow-v2 rounded-8 ">
            <thead className="border-v2">
              <th className="text-center p-16 fs-14 fw-400 lh-20">COURSE</th>
              <th className={`text-center p-16 fs-14 fw-400 lh-20 ${styles.hiddenOnMobile}`}>{'  '}</th>
              <th className="text-center p-16 fs-14 fw-400 lh-20">
                START DATE
              </th>
              <th
                className={`text-center p-16 fs-14 fw-400 lh-20 ${styles.hiddenOnMobile}`}
              >
                GRADUATION
              </th>
              <th className="text-center p-16 fs-14 fw-400 lh-20">APPLY</th>
            </thead>
            <tbody>
              {courses.map((course, index) => {
                return (
                  <tr key={index}>
                    <td className="p-12 row column-tablet" style={{ maxWidth: '270px' }}>
                      <div className="p-12 fs-14 fw-600 lh-20">
                        {course.syllabus_version.name}
                      </div>
                      <div className={`p-12 ${styles.hiddenOnDesktop}`}>
                        <span className="bg-light-gray rounded-16 p-4-12 fs-12 fw-600 lh-16 color-lightgray">
                          {course.remote_available ? 'online' : 'in-person'}
                        </span>
                      </div>
                    </td>
                    <td className={`p-12 ${styles.hiddenOnMobile}`}>
                      <span className="bg-light-gray rounded-16 p-4-12 fs-12 fw-600 lh-16 color-lightgray">
                        {course.remote_available ? 'online' : 'in-person'}
                      </span>
                    </td>
                    <td className="p-12 fs-14 fw-400 lh-20 text-center color-lightgray">
                      {formatDate(course.kickoff_date)}
                    </td>
                    <td
                      className={`p-12 fs-14 fw-400 lh-20 text-center color-lightgray ${styles.hiddenOnMobile}`}
                    >
                      {formatDate(course.ending_date)}
                    </td>
                    <td className="p-12 text-center">
                      <Link
                        href="/contact#top"
                        className="fs-14 fw-700 lh-20 color-royalblue"
                      >
                        Apply
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UpcomingDates;
