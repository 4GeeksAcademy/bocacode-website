'use client';
import React from 'react';
import '../../globals.css';

const QuestionAndAnswers = ({ data }) => {
  return (
    <section className="px-30 py-60">
      <div className="row column-md maxwidth-1366 m-auto gap-45">
        <h2 className="w-30 w-100-md text-right text-center-md fs-30">
          Q&amp;A
        </h2>
        <dl className="w-70 w-100-md">
          {data?.qa?.map((data, index) => {
            return (
              data?.answer && (
                <div key={index}>
                  <dt className="pb-16">
                    <h3 className="fs-20 fw-600">{data?.title}</h3>
                  </dt>
                  <dd className="pb-64">
                    <p>{data?.answer}</p>
                  </dd>
                </div>
              )
            );
          })}
        </dl>
      </div>
    </section>
  );
};

export default QuestionAndAnswers;
