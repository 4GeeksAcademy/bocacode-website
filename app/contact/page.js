'use client'
import React from 'react';
import styles from '../page.module.css';
import data from '../data/contact.json';
import { useSession } from '../context/session';
import '../styles/contact.css';

const Contact = () => {
  const { session } = useSession();
  console.log('session');
  console.log(session);
  const {
    sub_heading,
    heading,
    paragraph,
    address,
    email_info,
    courses_info,
    talent,
    form,
  } = data;

  return (
    <main className="contact-container">
      <div className="maxwidth-1366 container my-32 flex gap-24 column-tablet">
        <div className="w-50 w-100-tablet gap-16 column">
          <div className="column">
            <h2 className="fs-18 fw-700 lh-28 color-royalblue">
              {sub_heading}
            </h2>
            <h1 className="fs-30 fw-700 lh-36 ">{heading}</h1>
          </div>

          <p
            className="fs-16 fw-400 lh-24 color-gray"
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
          <p
            className="fs-18 fw-600 lh-24 color-gray"
            dangerouslySetInnerHTML={{ __html: address }}
          />
          <p
            className="fs-16 fw-700 lh-24 color-royalblue"
            dangerouslySetInnerHTML={{ __html: email_info }}
          />
          <h2 className="fs-20 fw-700 lh-24">{courses_info.title}</h2>
          <p
            className="fs-16 fw-400 lh-24 color-gray"
            dangerouslySetInnerHTML={{ __html: courses_info.content }}
          />
          <h2 className="fs-20 fw-700 lh-24">{talent.title}</h2>
          <p
            className="fs-16 fw-400 lh-24 color-gray"
            dangerouslySetInnerHTML={{ __html: talent.content }}
          />
        </div>

        <div className="w-50 w-100-tablet border-v4 rounded-16 p-32 ">
          <p className="fs-16 lh-24 fw-400 color-darkblue pb-16">
            {form.motivation}
          </p>
          <form className="column gap-16">
            <div className="flex gap-16 column-sm">
              <div className="w-100">
                <input
                  className="p-12 rounded-8 bg-white fs-14 fw-400 lh-20 w-100 form-input color-gray-v2"
                  placeholder="First Name"
                  type="text"
                  required=""
                  name="firstName"
                />
              </div>
              <div className="w-100">
                <input
                  className="p-12 rounded-8 bg-white fs-14 fw-400 lh-20 w-100 form-input color-gray-v2"
                  placeholder="Last Name"
                  type="text"
                  required=""
                  name="lastName"
                />
              </div>
            </div>

            <div className="flex gap-16 column-sm">
              <div className="w-100">
                <input
                  className="p-12 rounded-8 bg-white fs-14 fw-400 lh-20 w-100 form-input color-gray-v2"
                  placeholder="Email address"
                  type="email"
                  id="email"
                  pattern=".+@example\.com"
                  required
                  name="email"
                />
              </div>
              <div className="w-100">
                <input
                  className="p-12 rounded-8 bg-white fs-14 fw-400 lh-20 w-100 form-input color-gray-v2"
                  placeholder="Phone Number"
                  type="tel"
                  id="phone"
                  name="phone"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  required
                />
              </div>
            </div>

            <div className="flex ">
              <select
                name="contact_method"
                id="contact_method"
                className="flex form-input w-100 p-12 rounded-8 bg-white fs-14 fw-400 lh-20 color-gray-v2"
              >
                <option disabled="">{form['preferred-contact-method'].label}</option>
                {form['preferred-contact-method'].options.map(({ value, label }) => (
                  <option key={value} value={value}>{label}</option>
                ))}
              </select>
            </div>

            <div>
              <input
                className="button-red w-100 justify-center fw-500 fs-16 lh-24"
                type="submit"
                value={form.button.text}
              />
            </div>

            <p className="fs-14 fw-400 lh-20 color-gray">{form.conditions}</p>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
